import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { toast } from 'react-toastify';


const Login = () => {
    const { signIn, googleSignIn } = use(AuthContext)
    const [show, setShow] = useState(false);
    const emailRef = useRef(null)
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        // console.log({ email, password });
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast.success('Logged in successfully')
                navigate(`${location.state ? location.state : '/'}`)
                // setUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Google signIn successfully')
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage)
            });
    }


    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <div>
                            <label className="label">Email</label>
                            <input type="email"
                                name='email'
                                className="input"
                                placeholder="Email"
                                ref={emailRef}
                                required
                            />
                        </div>
                        {/* password */}
                        <div className='relative'>
                            <label className="label">Password</label>
                            <input type={show ? "text" : "password"}
                                name='password'
                                className="input"
                                placeholder="Password"
                                required
                            />
                            <span onClick={() => setShow(!show)} className="absolute right-7 top-8 cursor-pointer z-50">
                                {show ? <IoEyeOff className="h-4 w-4"></IoEyeOff> : <FaEye className="h-4 w-4"></FaEye>}
                            </span>
                        </div>

                        <button type='submit' className="btn  mt-4 bg-gradient-to-r from-green-600 to-green-800 text-white">Login</button>



                        {/* Divider */}
                        <div className="flex w-full flex-col">
                            <div className="divider">OR</div>
                        </div>



                        <div>
                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                className="flex items-center justify-center gap-3 bg-gray-100 text-gray-800 
                            px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-300 transition-colors cursor-pointer"
                            >
                                <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="google"
                                    className="w-5 h-5"
                                />
                                Continue with Google
                            </button>
                        </div>




                        <p className='font-semibold pt-3 text-center'>Dont’t Have An Account ?
                            <Link className='text-secondary' to='/signup'> Sign Up</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;