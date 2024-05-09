import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="h-full mx-auto flex justify-between items-center gap-8 font-semibold bg-slate-400 py-3 px-10">
        <h1 className="flex-1">TODO APP</h1>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
