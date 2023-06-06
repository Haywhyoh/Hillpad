import Navbar from './Navbar';
import { useState } from 'react';
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
      <div className=" mx-4 py-4 flex justify-between">
        <div><a href="/" className="logo text-orange font-bold"> hillPad</a></div>
        <div className='text-4xl' onClick={showNav}>{ showIcon ? <IoMdClose /> : <IoMdMenu />}</div>
       
      </div>
      <div className='hidden' id='nav'>
        <Navbar />
        </div>
    </header>
  );
};

export default Header;
