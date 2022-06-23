export const initialState = {
  name: '',
  email: '',
  token: '',
  favorites: [],
  myRequest: [],
};

export const reducerConfig = (state = initialState, action) => {
  switch (action?.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload.name };

    case 'SET_EMAIL':
      return { ...state, email: action.payload.email };

    case 'SET_TOKEN':
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};
