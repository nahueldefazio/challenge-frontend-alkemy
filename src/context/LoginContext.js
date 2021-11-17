import {createContext} from 'react';
import {Redirect} from "react-router-dom";


export const LoginContext = createContext()
const {Provider} = LoginContext

export const ProviderLogin = ({children}) => {

    function isLoggedIn() {
        if (!localStorage.getItem("token")) {
            console.log("xdd")
            return (
                <Redirect to={'/login'}/>
            )
        }
    }

    const  valueContext = {
        isLoggedIn
    }

    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    );
}

export default LoginContext;
