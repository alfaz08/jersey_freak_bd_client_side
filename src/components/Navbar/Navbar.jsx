import { Link, NavLink, useLocation } from "react-router-dom";


const Navbar = () => {

  const location = useLocation()
  console.log(location);
  const user = true
  const isAdmin= false
  const isVendor = false
  const navLinks = (
    <>
      
      {
        location.pathname ==="/"?
<li className="text-xl bg-amber-400 rounded-lg text-black font-bold">
        <Link to="/" ClassName="" >Home</Link>
      </li> :
      <li className="text-xl font-bold">
      <NavLink to="/" ClassName="" >Home</NavLink>
    </li>
      }
     {
      location.pathname ==='/contact' ?
      <li className="text-xl bg-amber-400 rounded-lg text-black font-bold">
      <Link to="/contact ">Contact</Link>
    </li>
    :
    <li className="text-xl font-bold">
    <NavLink to="/contact">Contact</NavLink>
  </li>
     }
      <li className="text-xl font-bold">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="text-xl font-bold">
        <NavLink to="/signUp">Sign Up</NavLink>
      </li>

</>
      )
  return (
    <div>
       <div>
      <div className="navbar  p-2  text-white container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-black menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <div>
            <img
              className=" w-20 h-20 rounded-xl"
              src="https://i.ibb.co/FY2Cn2y/277734165-2107078592792816-7369997220394083458-n.jpg"
              alt=""
            />
          </div>
         
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className=" w-16 rounded-full">
                  {user.photoURL ? (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  ) : (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://i.ibb.co/37dj5GJ/blank-profile-picture-973460-960-720.jpg"
                    />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[2] p-2 text-black shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  {user.displayName ? user.displayName : <div>Account</div>}
                </li>

                {isAdmin ? (
                  <Link to="/dashboard/adminHome">
                    <li>
                      <a className="hover:bg-green-200">Dashboard</a>
                    </li>
                  </Link>
                ) : isVendor ? (
                  <Link to="/dashboard/vendorHome">
                    <li>
                      <a className="hover:bg-green-200">Dashboard</a>
                    </li>
                  </Link>
                ) : (
                  <Link to="/dashboard/userHome">
                    <li>
                      <a className="hover:bg-green-200">Dashboard</a>
                    </li>
                  </Link>
                )}

                <li >
                  <a className="hover:bg-green-200">Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to="/login" className="text-2xl font-bold">
                Join Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;