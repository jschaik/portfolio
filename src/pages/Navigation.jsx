import { Link, Outlet } from 'react-router-dom';
const Navigation = () => {
  return (
    <>
      <nav className='nav'>
        <ul>
          <li>
            <Link to='/portfolio/home'>Home</Link>
          </li>
          <li>
            <Link to='/portfolio/about'>About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
