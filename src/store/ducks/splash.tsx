import Immutable from 'seamless-immutable';

export const Selectors = {
    getHomeState: (state: any) => {
        return state.suggestions;
    },
};

export const Types = {
    SPLASH_START: 'splash/SPLASH_START',
  
};

const initialState = Immutable({
    
    loading: false,
    error: false,
    errorMessage: '',
    cancel: false

});


export default function splash(state = initialState, action: any) {
    switch (action.type) {

        case Types.SPLASH_START:
            return {
                ...state,
                
            };

    

        default:
            return state;
    }
}

export const Creators = {
    getSplashStart: () => ({
        type: Types.SPLASH_START
    })
};
