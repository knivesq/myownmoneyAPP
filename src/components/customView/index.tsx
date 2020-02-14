import React from 'react';
import { View, SafeAreaView } from 'react-native'




const CustomView = (props: any) => {

    if (props.customView) {
        
        return (
            <SafeAreaView {...props}>
                {props.children}
            </SafeAreaView>
        )
    }
    
    return (

        <View {...props}>
            {props.children}
        </View>
    )
}

export default CustomView
