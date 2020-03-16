import { call, put, race, delay, select } from 'redux-saga/effects';
// import { PermissionsAndroid, Platform } from 'react-native';
import { Creators as SplashActions, Types as SplashTypes, Selectors as SplashSelectors } from '../ducks/splash';
import { StackActions, NavigationActions, SwitchActions } from 'react-navigation'
// import { ErrorHandlerActions } from '../../loader';

import { mainNavigation } from "../../index";

export function* getSplashStart(action: Object) {
    try {


        var auth = SwitchActions.jumpTo({routeName: "Auth"})
        //cade os requests de apizera
       
        console.log("getSplashStart", mainNavigation)
        // delay(1000)
        yield call(mainNavigation.dispatch, auth)


    } catch (err) {
        console.log(err, "mas que erro")
        // yield put(ErrorHandlerActions.errorHandlerRequest({ err, action: HomenActions.homeHasErrorDefault, type: action ? action : null }))
    }
}