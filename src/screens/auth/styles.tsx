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
    title: {fontSize: 20, fontWeight: "bold"},
    titleContainer: {
        paddingVertical: 10
    },
    textInput: {
        borderWidth: 1,
        width: width * 0.7,
        height: 45,
        borderRadius: 4, 
        paddingHorizontal: 10 
    },
    buttonContainer: {
        borderWidth: 1,
        borderColor: "#222",
        width: width * 0.7,
        height: 45,
        borderRadius: 4,
        backgroundColor: "#222",
        marginVertical: 10
    }
})

export default styles
