import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import background from '../../images/background.jpg';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { FcHome } from "react-icons/fc";

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log("sign up: ", from);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result);
                navigate(from, { replace: true });
                toast.success('Sign up successfully!!!')
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <div className='flex justify-end'>
                        <Link to='/' className="text-5xl font-semibold tooltip" data-tip="Home">
                            <FcHome></FcHome>
                        </Link>
                    </div>
                    <h1 className="mb-5 text-5xl font-semibold">Sign Up
                    </h1>
                    <form onSubmit={handleSignUp}>
                        <div className="form-control md:w-96">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="Email" name='email' className="input input-bordered border-white rounded-full shadow text-white bg-transparent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered border-white rounded-full shadow text-white bg-transparent" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-active rounded-full">Signup</button>
                        </div>
                    </form>

                    <p className='pt-5'>Have an account? <Link to='/login' state={{ from: { pathname: from } }} className='btn-link text-warning hover:text-slate-900'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;