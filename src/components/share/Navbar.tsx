import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbar = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "px-5 py-2 border-b-2 rounded-xl hover:bg-transparent hover:border-b-cyan-500"
              : isPending
              ? "pending"
              : "hover:bg-transparent"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/product-management"
          className={({ isActive, isPending }) =>
            isActive
              ? "px-5 py-2 border-b-2 rounded-xl hover:bg-transparent hover:border-b-cyan-500"
              : isPending
              ? "pending"
              : "hover:bg-transparent"
          }
        >
          Product Management
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <nav className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navbar}
            </ul>
          </div>
          <a className="text-xl font-semibold font-serif">
            <span className="text-[#70E6D2] font-extrabold">Wilderness</span>
            Wonders
          </a>
        </div>

        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </nav>
      <nav className="navbar lg:flex lg:justify-center lg:items-center bg-base-100 hidden lg:visible">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{navbar}</ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;