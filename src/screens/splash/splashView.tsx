import React from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native'
import styles from './styles'
import { images, metrics } from '../../services/resources';
// var images = {splashScreen: tomate cru}

var { width, height } = metrics;
export default class SplashView extends React.Component {

    render() {

        return (
            <ImageBackground style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }} source={images.splashScreen}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>insert logo</Text>
                </View>
            </ImageBackground>
        )
    }
}
