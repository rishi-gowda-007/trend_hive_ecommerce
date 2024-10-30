import React, { useState, useRef } from 'react';
import './Login.css';

function Login({ login, setUN, un, setLogin }) {
    const [vis, setVis] = useState(true);
    const [lusn, setLusn] = useState('');//local user name changes when input box changes
    const inputRef = useRef(null);//to clear user name after refresh

    const handleLogin = () => {
        setUN(lusn);
        setVis(false);
    };//function for setting user name and displaying ne message

    const reset = () => {
        setUN('');
        setVis(true);
        setLusn('');
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };//function for logout ,setting user number '' and clear input field

    return (
        <div id="login_main" style={{ display: login ? 'flex' : 'none' }}>
            {vis ? (
                <div id="login_combo">
                    <label id="login_label">UserName</label>
                    <input
                        type="text"
                        id="login_id"
                        ref={inputRef}
                        onChange={(e) => setLusn(e.target.value)}
                    />
                    <button id="login_button" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            ) : (
                <>
                    <p id="login_p">Welcome {un}</p>
                    <button id="login_out" onClick={reset}>
                        Logout
                    </button>
                </>
            )}
            <button id="login_close" onClick={() => setLogin(false)}>
                Close
            </button>
        </div>
    );
}

export default Login;
