import React from 'react';
import background from '../../images/background.jpg';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-semibold">
                        Login
                    </h1>
                    <div className="divider">OR</div>
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                            <span className="text-4xl"><FcGoogle></FcGoogle></span>
                        </div>
                    </div>
                    {/* <div className='flex justify-center pt-4 text-4xl'>
                        <FcGoogle></FcGoogle>
                    </div> */}
                    <form>
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
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover text-white">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-active rounded-full">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className='pt-5'>Don't have an account? <Link to='/signup' className='btn-link text-warning hover:text-black'>Signup</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;