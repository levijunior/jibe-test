import React, {
  createContext, useReducer, useMemo, useContext,
} from 'react';

import reducer from './reducer';

const AppContext = createContext();

const initialState = {
  user: {
    username: '',
  },
  cart: [],
  sortUp: true,
};

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    useMemo(() => (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    ), [value])
  );
}

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context == null) {
    throw new Error('You need to use a Provider');
  }
  return context;
};

export {
  ContextProvider,
  useAppContext,
};
