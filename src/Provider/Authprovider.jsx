import { createContext } from "react";
import PropTypes from 'prop-types';
 
export const AuthContext = createContext(null);

const Authprovider = ({children}) => {

    const info = {

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

Authprovider.propTypes= {
    children: PropTypes.node.isRequired
}

export default Authprovider;