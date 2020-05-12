import React from 'react';
import { GoogleLogout } from 'react-google-login';

const Header = ({logoutFun, isLoggedin}) => {
    return (
        <div className="header-container">
            <h1>TO-DO App</h1>
            { isLoggedin && <GoogleLogout
                clientId="547364768749-gs5fjuhgv01g1rb26mae69067j5l6cqn.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logoutFun}
                />
            }
        </div>
    );
};
export default Header;