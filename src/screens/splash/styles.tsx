import { StyleSheet, Dimensions} from 'react-native'

var {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        
    },
    logoContainer: {
        borderWidth: 1,
        height: 120,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    logo: {
      
    }
})

export default styles
