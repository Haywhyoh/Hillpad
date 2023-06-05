import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className="nav-area flex flex-col">
        <div><a href="/" className="logo"> HillPad</a></div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
