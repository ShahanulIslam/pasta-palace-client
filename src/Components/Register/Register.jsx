import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, logInWithGoogle, logInWithGit, setUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                setUser(createUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(result => {
                const createdUser = result.user
                setUser(createUser)
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGitLogIn = () => {
        logInWithGit()
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold my-5">Register Here</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo url" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' required placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p><small>Already have an account? <Link to="/login">Login</Link> </small></p>
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

export default Register;