import React from 'react';
import { View, Text } from 'react-native'
import styles from './styles'

export default class SplashView extends React.Component {

   

    render() {
        return (
            <View>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>insert logo</Text>
                </View>
            </View>
        )
    }
}
