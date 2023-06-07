import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from "react";
const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();
    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);
       const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
       };
       
       const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
       };

       const closeDropdown = () => {
        dropdown && setDropdown(false);
      };
  return (
    <li className="menu-items border w-11/12 border-light_black rounded-lg mb-1 font-medium text-light_black border-opacity-10 lg:w-24 lg:border-0 " ref={ref} onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave} >
      {items.submenu ? (
        <>
          <button
      // ...
      aria-expanded={dropdown ? "true" : "false"}
      onClick={() => setDropdown((prev) => !prev)}
     >   { window.innerWidth < 960 && depthLevel === 0 ? ( items.title) : (
        <a href={items.url}>{items.title}</a>
      ) }{" "}
           {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}

          </button>
          <Dropdown submenus={items.submenu}  dropdown={dropdown} className="" />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
      }

export default MenuItems;