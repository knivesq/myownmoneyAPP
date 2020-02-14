import React from 'react';
import SplashView from './splashView'
import CustomView from '../../components/customView'
import { View } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux'
import { SplashActions } from '../../store/loader'

interface SplashScreenProps {
    navigation: Object,
    getSplashStart: Function,

}

class SplashScreen extends React.Component<SplashScreenProps> {


    onLayout = () => {
        this.props.getSplashStart()
    }

    render() {
        return (
            <View onLayout={this.onLayout} style={styles.root}>
                <SplashView />
            </View>
        )
    }
}


const mapDispatchToProps = {
    ...SplashActions
}

export default connect(null, mapDispatchToProps)(SplashScreen)

