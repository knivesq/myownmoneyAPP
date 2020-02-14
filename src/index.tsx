import React from "react";
import { StatusBar, Platform } from 'react-native'

import Routes from "./routes";
import _ from 'lodash'
// import  from ''
// export var mainNavigation: any;

export var mainNavigation;


class AppContainer extends React.PureComponent {

  toRoute(parentStack: any, params = {}) {
    if (!__DEV__) return true;

    if (mainNavigation) {
      let navigation = mainNavigation._navigation;
      navigation.dispatch({
        type: "Navigation/NAVIGATE",
        routeName: parentStack,
        params
      });
    }
  }

  render() {

    return (
      <>

        <Routes ref={ref => mainNavigation =  ref} />
        <StatusBar backgroundColor='#55A8FD' barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"} />

      </>
    )

  }
}




export default AppContainer;
