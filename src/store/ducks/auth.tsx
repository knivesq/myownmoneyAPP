import Immutable from 'seamless-immutable';

export const Selectors = {
    getHomeState: (state: any) => {
        return state.suggestions;
    },
};

export const Types = {
    GET_USER_AUTH: 'auth/GET_USER_AUTH',
  
};

const initialState = Immutable({
    authenticate: false,
    loading: false,
    error: false,
    errorMessage: '',
    cancel: false

});


export default function auth(state = initialState, action: any) {
    switch (action.type) {

        case Types.GET_USER_AUTH:
            return {
                ...state,
                
            };

        default:
            return state;
    }
}

export const Creators = {
    getUserAuth: () => ({
        type: Types.GET_USER_AUTH,
        payload: {},
    })
};
