function Login () {
    return (
        <div className="login-container">
            <div className="user-input">
                <form>
                    <label>
                        Username/Email: 
                        <input type="text" id="username" className="username" name="username" />
                        
                    </label>
                    
                    <label>
                        🔑Password:
                        <input type="password" id="password" className="password" name="passowrd"/>
                    </label>
                    <a> <p>Forgot Username or Password?</p></a>
                    
                </form>
                <div>
                    <p></p>
                    <button>Login</button>
                </div>
            </div>
            
        </div>
    )
}

export default Login;