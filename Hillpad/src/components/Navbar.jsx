import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
const Navbar = () => {
    const depthLevel = 0;

  return (
    <nav className=''>
      <ul className="menus flex flex-col">
      {menuItems.map((menu, index) => {
    const depthLevel = 0;
    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
   })}
      </ul>
      <div className='flex flex-col gap-2  w-11/12 mx-4 '>
        <div className='border border-light_black rounded-lg mb-1 font-medium text-light_black border-opacity-10 p-3'>Sign In</div>
        <div className='border px-2 border-light_black rounded-lg mb-1 font-semibold text-white text-center border-opacity-10 py-3 bg-orange'>Explore</div>

      </div>
    </nav>
  );
};

export default Navbar;