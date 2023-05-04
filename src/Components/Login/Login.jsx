import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { signIn, logInWithGoogle, logInWithGit, setUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    
    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError("")
        setSuccess("")

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess("Log in success")
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                setUser(createdUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }


    const handleGitLogIn = () => {
        logInWithGit()
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <p className='text-red-600'><small>{error}</small></p>
                            <p className='text-green-600'><small>{success}</small></p>
                        </label>
                        
                        <p>
                            <small>
                                New to Pasta Palace?
                                <Link to="/register">Register</Link>
                            </small>
                        </p>
                        <div className="form-control mt-6 space-y-4">
                            <button onClick={handleGoogleLogin} className="btn btn-primary">Google Sign-in</button>
                            <button onClick={handleGitLogIn} className="btn btn-primary">GitHub Sign-in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;