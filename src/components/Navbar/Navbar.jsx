import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg px-5">
      <div className="flex-1">
        <Link className="btn btn-ghost text-2xl font-semibold text-secondary gap-0">Byte<span className="text-primary">Blaze</span> </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-base font-medium">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
          <li>
            <a>Bookmarks</a>
          </li>
         
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
