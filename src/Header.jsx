import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coworkings">Coworkings</Link>
          </li>
          <li>
            <Link to ="/create-coworking">Create coworkings</Link>
          </li>
          <li>
          <Link to ="/coworkings/:id">Coworking</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;