function Login () {
    return (
        <div className="login-container">
            <div className="user-input">
                <form>
                    <label>
                        Username/Email: 
                        <input type="text" />
                        
                    </label>
                    
                    <label>
                        🔑Password:
                        <input type="password"/>
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