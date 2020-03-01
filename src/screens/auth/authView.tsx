import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native'
import styles from './styles';

interface AuthProps {

    onSubmit: Function

}

const AuthView = (props: AuthProps) => {

    const [opacity, setOpacity] = useState(1);
    const [elevation, setElevation] = useState(3);
    const [shadowOffset, setShadowOffset] = useState({
        width: 0,
        height: 0
    });


    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Login</Text>
            </View>

            <View style={styles.titleContainer}>
                <TextInput placeholder={"Insira seu usuário"} style={styles.textInput} />
            </View>

            <View style={styles.titleContainer}>
                <TextInput placeholder={"Insira sua senha"} style={styles.textInput} />
            </View>
            <View onTouchStart={() => {
                setOpacity(0.7)
                setShadowOffset({height: 2, width: 2})
            }} onTouchEnd={() => {
                setOpacity(1)
                setShadowOffset({height: 0, width: 0})
            }} style={
                [styles.buttonContainer, {
                    opacity,
                    shadowColor: "black",
                    shadowOffset,
                    shadowOpacity: 0.5,
                    shadowRadius: 0.1,

                    elevation,
                }]}>
                <Button
                    title="Login"
                    color="white"

                    onPress={() => props.onSubmit()}
                />
            </View>


        </View>
    )
}

export default AuthView
