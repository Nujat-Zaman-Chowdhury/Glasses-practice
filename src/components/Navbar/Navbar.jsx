import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Navbar = () => {
    const {logOut,user}= useAuth();
    const navLinks = <>
    <li><Link to="/products">Products</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/">Contact</Link></li>
    <li><Link to="/">Blog</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">Glasses</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  flex items-center gap-3">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? 
      <div className="flex gap-4 items-center">
        <p>{user.email}</p>
        <img className="w-10 rounded-full" src={user?.photoURL || "https://i.ibb.co/FxhyW6c/blue-block-phone-computer-glasses-black-full-rim-round-john-jacobs-rich-acetate-jj-e10334-c1-john-ja.png"} alt="" />
        <Link onClick={logOut}><button className="btn">Sign out</button></Link>
        <p>{user?.displayName || 'no name'}</p>
        </div>
        :
       <Link  to="/login"><button className="btn">Login</button></Link>
      
    }
  </div>
</div>
    );
};

export default Navbar;