import React, {
  Component, createContext, Dispatch, useReducer, useContext,
} from 'react';

export type LoginUser = {
    isLogin: boolean;
    email: string;
    name: string;
    thumbnailUrl: string;
    originUrl: string;
};
type LoginUserState = LoginUser;
const LoginUserContext = createContext<LoginUserState | undefined>(undefined);

type Action =
| { type : 'SETUSER'; payload:LoginUserState }
| { type : 'UNSETUSER'; };

const initialState:LoginUserState = {
  isLogin: true,
  email: '',
  name: 'test',
  thumbnailUrl: '',
  originUrl: '',
};


type LoginUserDispatch = Dispatch<Action>;
const LoginUserDispatchContext = createContext<LoginUserDispatch | undefined>(undefined);

function LoginUserReducer(state:LoginUserState, action:Action):LoginUserState {
  switch (action.type) {
    case 'SETUSER':
      return { ...action.payload };
    case 'UNSETUSER':
      return { ...initialState };
    default:
      throw new Error('Un setted Action');
  }
}


export default function LoginUserContextProvider({ children }:{children: React.ReactNode}) {
  const [LoginUser, dispatch] = useReducer(LoginUserReducer, { ...initialState });
  return (
    <LoginUserDispatchContext.Provider value={dispatch}>
      <LoginUserContext.Provider value={LoginUser}>
        {children}
      </LoginUserContext.Provider>
    </LoginUserDispatchContext.Provider>
  );
}


export function useLoginUserState() {
  const state = useContext(LoginUserContext);
  if (!state) throw new Error('TodosProvider not found');
  return state;
}

export function useLoginUserDispatch() {
  const dispatch = useContext(LoginUserDispatchContext);
  if (!dispatch) throw new Error('dispatch not found');
  return dispatch;
}
