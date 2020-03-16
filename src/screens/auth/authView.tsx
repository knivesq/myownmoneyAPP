import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native'
import styles from './styles';
import { images, metrics } from '../../services/resources'
// import {  } from 'react-native-vector-icons'
interface AuthProps {

    onSubmit: Function

}


const { width, height } = metrics

const AuthView = (props: AuthProps) => {

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [loginInput, setLoginInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");


    let loginRef: any = null;
    let passwordRef: any = null;

    useEffect(() => {
        console.log(loginInput, "what the input")
    }, [loginInput])




    const onSubmitEditingLoginInput = (e: any) => {
        if (passwordRef) {
            passwordRef.focus()
        }
        setLoginInput(e.nativeEvent.text)
    }

    const onSubmitPassword = (e: any) => {
        setPasswordInput(e.nativeEvent.text)
    }

    useEffect(() => {
        console.log(passwordInput, "what the passwordInput")
    }, [passwordInput])

    const onSubmit = () => {
        console.log(passwordRef, "cade o ref mermao")
    }

    return (
        <ImageBackground style={{ width, height, justifyContent: "center", alignItems: "center" }} source={images.splashScreen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Login</Text>
            </View>

            <View style={styles.titleContainer}>
                <TextInput
                    ref={ref => loginRef = ref}
                    onSubmitEditing={onSubmitEditingLoginInput}
                    placeholder={"Insira seu usuário"}
                    style={styles.textInput} />
            </View>

            <View style={styles.titleContainer}>
                <TextInput
                    onSubmitEditing={onSubmitPassword}
                    ref={ref => passwordRef = ref}
                    placeholder={"Insira sua senha"}
                    style={styles.textInput}
                    secureTextEntry={secureTextEntry}
                />
                <View>

                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    color="white"
                    onPress={() => onSubmit()}
                />
            </View>


        </ImageBackground>
    )
}

export default AuthView
