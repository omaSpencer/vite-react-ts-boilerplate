import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default memo(Navbar);
