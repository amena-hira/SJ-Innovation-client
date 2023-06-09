import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/profile-avatar.jpg';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }

    const menu = <>
    <li><Link to='/' className='hover:btn-warning'>Home</Link></li>
    <li><Link to='/menu' className='hover:btn-warning'>Menu</Link></li>
    </>
    return (
        <div className='shadow-xl'>
            <div className='max-w-7xl mx-auto'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menu}
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-xl">SJ-INNOVATION</Link>
                    </div>
                    <div className="navbar-end">
                        <ul className="menu menu-horizontal px-1 hidden md:flex">
                            {menu}
                        </ul>
                        {
                            user?.email ?
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={profile} alt='Profile' />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li onClick={handleLogOut}><Link>Logout</Link></li>
                                    </ul>
                                </div>
                                :
                                <ul className="menu menu-horizontal px-1 hidden md:flex">
                                    <li><Link to='/login' className='hover:btn-warning'>Login</Link></li>
                                </ul>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;