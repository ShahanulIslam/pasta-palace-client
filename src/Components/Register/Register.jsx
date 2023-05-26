import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { createUser, logInWithGoogle, logInWithGit, setUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const displayName = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password)
        setError("");
        setSuccess("");
        if (password.length < 6) {
            setError("The password is less than 6 characters");
            return;
        }
        createUser(email, password, displayName, photoUrl)
            .then((result) => {
                // User created successfully, update profile
                const loggedUser = result.user;
                return updateProfile(loggedUser, {
                    displayName: displayName,
                    photoURL: photoUrl,
                }).then(() => {
                    console.log("Profile updated successfully");
                    console.log(loggedUser);
                    // toast.success("User created successfully");
                    form.reset();
                });
               
            })
            .catch((error) => {
                console.error("Error creating user:", error.message);
                error(error.message);
              });
    }

    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then(result => {
                const createdUser = result.user;
                setUser(createdUser)
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
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label">
                            <p className='text-red-600'><small>{error}</small></p>
                            <p className='text-green-600'><small>{success}</small></p>
                        </label>
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