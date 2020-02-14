import { combineReducers } from "redux";
import { reducer as network } from 'react-native-offline';

import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage'
import auth from './auth'
import splash from './splash'

export const authPersistConfig = {
    key: 'pushNotification___',
    storage: AsyncStorage,
    blacklist: ['cancel'],
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
    writeFailHandler: (err: any) => console.log(err, "erro"),
    // timeout: 10000,
};




export default combineReducers({
    network,
    splash,
    auth: persistReducer(authPersistConfig, auth)
});
