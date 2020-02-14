import { call, put, race, delay, select } from 'redux-saga/effects';
import { PermissionsAndroid, Platform } from 'react-native';

import {
    Creators as AuthActions,
    Types as AuthTypes,
    Selectors as AuthSelectors
} from '../ducks/auth';

// import { ErrorHandlerActions } from '../../loader';



export function* getUserAuth(action: Object) {
    try {


        console.log("get user auth")
      

    } catch (err) {
        console.log(err, "mas que erro")
        // yield put(ErrorHandlerActions.errorHandlerRequest({ err, action: HomenActions.homeHasErrorDefault, type: action ? action : null }))
    }
}