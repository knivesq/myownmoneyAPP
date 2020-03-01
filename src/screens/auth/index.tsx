import React from 'react';
import AuthView from './authView'
import CustomView from '../../components/customView'
import styles from '../splash/styles';
import { Alert } from 'react-native';


interface AuthScreenProps {
    onSubmit: Function
    ref: Object
}

class AuthScreen extends React.Component<AuthScreenProps> {
    onSubmit = () => {
        console.log("react native worked")
    }
    render() {
        return (
            <CustomView customView style={styles.root}>
                <AuthView onSubmit={this.onSubmit}/>
            </CustomView>
        )
    }
}

export default AuthScreen