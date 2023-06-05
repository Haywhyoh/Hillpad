import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
const Navbar = () => {
    const depthLevel = 0;

  return (
    <nav style={ { display: 'flex'}}>
      <ul className="menus">
      {menuItems.map((menu, index) => {
    const depthLevel = 0;
    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
   })}
      </ul>
      <div style={ { display: 'flex', alignItems: 'center'}}>
        <div>Sign In</div>
        <div>Explore</div>

      </div>
    </nav>
  );
};

export default Navbar;