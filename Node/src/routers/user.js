const express = require('express')
const {
    signUp,
    mailConfirm,
    authEmail,
    signIn,
    getMyUser,
    checkAuth,
    changePassword,
    getUser,
    changePrivateProfile
} = require('../controllers/UserController')
const checkLogin = require('../middlewares/auth')
// const uploadImage = require('../middlewares/uploadImage')
const app = express()
const routerUser = express.Router()
const multer = require('multer')
const storage = multer.memoryStorage() // Lưu trữ tệp tin trong bộ nhớ
const upload = multer({ storage: storage })
//Sign up
routerUser.post('/mail-confirm', mailConfirm)
routerUser.post('/signup', signUp)
routerUser.post('/auth-mail', authEmail)

// Log in
routerUser.post('/login', signIn)
app.use(checkLogin)
routerUser.get('/check-auth', checkAuth)
routerUser.post(
    '/upload-background',
    upload.single('background'),
)
routerUser.post('/change-password', changePassword)

//Add friend
routerUser.get('/get-user', getUser)
routerUser.post('/user-find-one', getMyUser)
routerUser.post('/change-private-user', changePrivateProfile)

module.exports = routerUser
