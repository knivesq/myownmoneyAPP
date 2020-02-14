import React from 'react';
import AuthView from './authView'
import CustomView from '../../components/customView'

class AuthScreen extends React.Component {
    render() {
        return (
            <CustomView>
                <AuthView/>
            </CustomView>
        )
    }
}

export default AuthScreen