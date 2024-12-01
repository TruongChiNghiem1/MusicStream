import { Alert, TextInput } from "react-native"
const UIInput = (prop) => {
    var {placeholder, isPassword = false, width = 300,height = 30, mt = 5, typePlacehoder = 1, onChangeText} = prop
    var colorPlacehlder = '#DBDBDB';
    typePlacehoder === 1 ?  colorPlacehlder = '#DBDBDB' : colorPlacehlder = '#44C1C6'
    return (
        <TextInput
            onChangeText={onChangeText}
            secureTextEntry={isPassword}
            placeholder={placeholder}
            placeholderTextColor={colorPlacehlder}
            style={{
                marginTop: mt,
                width: width,
                height: 40,
                backgroundColor: '#D8FEFF',
                borderRadius: 20,
                borderColor: '#D8FEFF',
                borderWidth: 1,
                paddingHorizontal: 15,
                paddingTop: 15,
                color: '#44C1C6'
            }}
            />
    )
}

export default UIInput