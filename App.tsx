

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import AppContainer from './src';
import { PersistGate } from 'redux-persist/es/integration/react';
import { setJSExceptionHandler, getJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';


const errorHandler = (e: any, isFatal: any) => {
	if (isFatal) {
		console.log("error: ", isFatal, e)
	}
};

setJSExceptionHandler(errorHandler, true);

setNativeExceptionHandler((errorString) => {
	console.log("error: NativeException: ", errorString)
});




export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={false} persistor={persistor}>
					<AppContainer />
				</PersistGate>
			</Provider>
		);
	}
}
