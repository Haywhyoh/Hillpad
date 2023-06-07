import { menuItems } from '../menuItems';
import { FaTelegramPlane } from 'react-icons/fa';
import MenuItems from './MenuItems';
const Navbar = () => {
    const depthLevel = 0;

  return (
    <nav className='lg:flex lg:justify-between lg:w-11/12 lg:py-2'>
      <ul className="menus flex flex-col lg:flex-row lg:gap-x-1 lg:w-8/12">
      {menuItems.map((menu, index) => {
    const depthLevel = 0;
    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
   })}
      </ul>
      <div className='flex flex-col gap-2  w-11/12 mx-4 lg:w-fit lg:flex-row lg:items-center lg:justify-between'>
        <div className='border border-light_black rounded-lg mb-1 font-medium text-light_black border-opacity-10 p-3 lg:border-0'>Sign In</div>
        <div className='border px-2 border-light_black rounded-lg mb-1 font-semibold text-white text-center border-opacity-10 py-3 bg-orange lg:px-6 lg:border-0 lg:rounded-full lg:py-2 lg:flex lg:items-center lg:gap-x-2'><div>Explore</div> <FaTelegramPlane /></div>

      </div>
    </nav>
  );
};

export default Navbar;