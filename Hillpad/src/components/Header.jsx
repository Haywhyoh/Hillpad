import Navbar from './Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io'
const Header = () => {
  const [showIcon, setShowIcon] = useState(false)

  function showNav() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('hidden');
    nav.classList.toggle('block')
    setShowIcon(!showIcon)
  }


  return (
    <header>
      <div className=" mx-4 py-4 flex justify-between lg:hidden lg:items-center ">
        <div><Link to="/" className="logo text-orange font-bold"> hillPad</Link></div>
        <div className='text-4xl' onClick={showNav}>{ showIcon ? <IoMdClose /> : <IoMdMenu />}</div>
       
      </div>
      <div className='hidden lg:flex lg:items-center max-w-8xl lg:mx-auto lg:w-full lg:justify-between' id='nav'>
        <div><Link to="/" className="logo text-orange font-bold lg:ml-4"> hillPad</Link></div>
        <Navbar />
        </div>
    </header>
  );
};

export default Header;
