const User = require('../models/user.js')
const mongoose = require('mongoose');
const {
    signUpValid,
    signInValid,
} = require('../validations/UserValidation.js')
const bcrypyjs = require('bcryptjs')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const Mailgen = require('mailgen')
const Token = require('../models/token.js')
dotenv.config()
const nodemailer = require('nodemailer')
const { array } = require('joi')

const { SECRET_CODE, AUTH_MAIL, AUTH_PASS, EXPIRATION_TIME } = process.env
const mailConfirm = async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: AUTH_MAIL,
                pass: AUTH_PASS,
            },
        })

        let email = req.body.email
        let checkUser = await User.find({ email: email })
        if (checkUser.length > 0) {
            return res.json({
                status: 500,
                message: 'Email already in use!',
            })
        } else {
            let otp = Math.floor(1000 + Math.random() * 9000)
            const token = await Token.findOneAndUpdate(
                { email: email },
                { otp: otp },
                { upsert: true }
            )
            var mailGenerator = new Mailgen({
                theme: 'default',
                product: {
                    name: 'MUSICSTREAM',
                    link: `${req.get('host')}`,
                    logo: 'https://cattalk.id.vn/src/assets/logo_vertical.png?t=1705984018125',
                    logoHeight: '50px',
                },
            })

            var emailConfig = {
                body: {
                    name: 'Newbie',
                    intro: "Welcome to MUSICSTREAM! We're very excited to have you on board.",
                    action: {
                        instructions:
                            'To get started with MUSICSTREAM, please input this OTP at step three:',
                        button: {
                            color: '#22BC66', // Optional action button color
                            text: `${otp}`,
                            link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010',
                        },
                    },
                    outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
                },
            }

            // Generate an HTML email with the provided contents
            var mail = mailGenerator.generate(emailConfig)

            const mailOptions = {
                from: 'musicstreamvn@gmail.com',
                subject: 'Confirm your email address',
                to: email,
                html: mail,
            }

            transporter.sendMail(mailOptions, (error) => {
                if (error) {
                    res.json({
                        status: 500,
                        message: 'Error sending verification email.',
                    })
                } else {
                    res.json({
                        status: 200,
                        message: 'Verification email sent.',
                    })
                }
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error,
        })
    }
}

const authEmail = async (req, res) => {
    try {
        const { email, otp } = req.body

        const emailExists = await User.findOne({ email: email, otp: 1 })
        if (emailExists) {
            return res.json({
                status: 500,
                message: 'Email already used',
            })
        }
        const register = await Token.findOne({ email: email })
        if (!register) {
            return res.json({
                status: 500,
                message: 'Submit your mail to continute',
            })
        }

        if (otp == register.otp) {
            //  Creat jwt token
            const token = jwt.sign({ email: email }, SECRET_CODE, {
                expiresIn: '1d',
            })
            return res.json({
                status: 200,
                token: token,
            })
        } else {
            return res.json({
                status: 500,
                message: 'OTP code is invalid',
            })
        }
    } catch (e) {
        console.log(e)
        return res.json({
            status: 500,
            message: 'Opps, somthing went wrong!!!',
        })
    }
}

const signUp = async (req, res) => {
    try {
        // Validation
        const { userName, firstName, lastName, password, token } = req.body
        const decoded = jwt.verify(token, SECRET_CODE)
        const email = decoded.email
        const { error } = signUpValid.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((err) => err.message)
            return res.json({
                status: 400,
                message: errors,
            })
        }
        // Check email
        const emailExists = await User.findOne({ email: email, otp: 1 })
        if (emailExists) {
            return res.json({
                status: 500,
                message: 'Email already used',
            })
        }

        //check username
        const userNameExists = await User.findOne({ userName })
        if (userNameExists) {
            return res.json({
                status: 500,
                message: 'Username already used',
            })
        }

        // Hash password
        const hashedPassword = await bcrypyjs.hash(password, 10)

        const user = await User.create({
            userName,
            firstName,
            lastName,
            email,
            password: hashedPassword,
        })
        console.log(user)
        //  Get info for client
        user.password = undefined
        return res.json({
            status: 200,
            message: 'User created successfully',
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: 'Opps, somthing went wrong!!!',
        })
    }
}

const signIn = async (req, res) => {
    try {
        // Validation
        const { userName, password } = req.body
        const { error } = signInValid.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((err) => err.message)
            return res.json({
                status: 401,
                message: errors,
            })
        }
        // Check email
        const user = await User.findOne({ userName })
        console.log(user)
        if (!user) {
            return res.json({
                status: 400,
                message: 'User not found',
            })
        }

        const isMatch = await bcrypyjs.compare(password, user.password)
        if (!isMatch) {
            return res.json({
                status: 400,
                message: 'Invalid credentials',
            })
        }
        //  Creat jwt token
        const token = jwt.sign({ username: user.userName }, SECRET_CODE, {
            expiresIn: '1d',
        })
        //  Return result:
        user.password = undefined

        return res.json({
            status: 200,
            message: 'User logged in successfully',
            user: user,
            accessToken: token,
        })
    } catch (error) {
        return res.json({
            status: 500,
            message: 'Opps, somthing went wrong!!!',
        })
    }
}


const getUser = async (req, res) => {
    const { username } = req.query
    const user = await User.findOne({ userName: username })
    return res.json({
        status: 200,
        user: user,
    })
}

const getMyUser = async (req, res) => {
    try {
        const user = await User.findOne({ userName: username })

        if (user) {
            return res.json({
                status: 200,
                users: user,
            })
        } else {
            return res.json({
                status: 201,
                message: 'User not found!',
            })
        }
    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: 'Opps, somthing went wrong!!!',
        })
    }
}

const checkAuth = async (req, res) => {
    try {
        return res.json({
            status: 200,
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: 402,
            message: 'Opps, somthing went wrong!!!',
        })
    }
}

const changePassword = async (req, res) => {
    try {
        const { currentpass, newpass, repass } = req.body
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, SECRET_CODE)
        const username = decoded.username
        // Check email
        const user = await User.findOne({ userName: username })
        if (!user) {
            return res.json({
                status: 400,
                message: 'User not found',
            })
        }

        const isMatch = await bcrypyjs.compare(currentpass, user.password)
        if (!isMatch) {
            return res.json({
                status: 400,
                message: 'Invalid credentials',
            })
        }

        const hashedPassword = await bcrypyjs.hash(newpass, 10)
        if (newpass == repass) {
            const user = await User.findOneAndUpdate(
                { userName: username },
                { password: hashedPassword }
            )
        } else {
            return res.json({
                status: 500,
                message: 'Invalid Repeat password',
            })
        }

        return res.json({
            status: 200,
            message: 'Change passwords successfully',
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: 402,
            message: 'Opps, somthing went wrong!!!',
        })
    }
}

const changePrivateProfile = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, SECRET_CODE)
        const username = decoded.username

        const { private } = req.body;

        const user = await User.findOneAndUpdate(
            { userName: username },
            { private: Number(private) },
        )

        if (!user) {
            return res.json({
                status: 500,
                message: 'User does not exist!',
            })
        } 

        return res.json({
            private: private,
            status: 200,
            message: private == 1 ? 'Private profile updated' : 'Public profile updated'
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: 'Opps, somthing went wrong!!!',
        })
    }
}


module.exports = {
    signUp,
    mailConfirm,
    authEmail,
    signIn,
    getMyUser,
    checkAuth,
    changePassword,
    getUser,
    changePrivateProfile
}
