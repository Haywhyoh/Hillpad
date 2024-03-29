import logo from '../assets/images/hillpad-transparent.png';
import signlogo from '../assets/images/user.png';
import { FiMenu, FiLayers, FiUser, FiHeart, FiSettings, FiLogOut, FiChevronDown } from 'react-icons/fi';
import { FaGraduationCap, FaHeart, FaPaperPlane } from 'react-icons/fa';
import { LuUser } from 'react-icons/lu';
import { RiArrowDropDownLine, RiArrowRightSLine } from 'react-icons/ri';
import { BiWorld, BiBriefcase } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Login from './login';
import { IoCloseOutline } from 'react-icons/io5';
import axios from 'axios';
import { useSelector } from 'react-redux';
import '../components/modal.css'
import { BsViewList } from 'react-icons/bs';
export default function Header({ props }) {
    const [modal, setModal] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [hideCountryList, setCountryList] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('Where?');

    const countries = useSelector((state) => state.country.countryList);

    const dropdownRef = useRef(null);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu, then close the menu
            if (hideCountryList && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
              setCountryList(false);
            }
          }
        
          document.addEventListener("mousedown", checkIfClickedOutside)
        
          return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
          }
    }, [hideCountryList, searchValue, selectedCountry]);

    const handleMouseOver = () => {
        setIsHovering(true);

    };

    const handleMouseOut = () => {
        setIsHovering(false);

    };

    const handleMouseOver2 = () => {
        setIsHovering2(true);

    };

    const handleMouseOut2 = () => {
        setIsHovering2(false);

    };
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    }

    else {
        document.body.classList.remove('active-modal')
    }

    function toggleHeader() {
        const base = document.querySelector('#headerNav')
        base.classList.toggle('hidden')
    }

    function toggleNav() {
        const nav = document.querySelector('#mobileNav')
        nav.classList.toggle('hidden');
    }

    function togglesubMenu1() {
        const base = document.querySelector('#subMenu1')
        base.classList.toggle('hidden')
    }

    function togglesubMenu2() {
        const nav = document.querySelector('#subMenu2')
        const base = document.querySelector('#subMenu1')
        nav.classList.add('block')

        nav.classList.toggle('hidden')
    }

    function showUser() {
        let user = document.querySelector('#userCard');
        user.classList.toggle('hidden');
    }

    function hideUser() {
        let user = document.querySelector('#userCard');
        user.classList.add('hidden');
    }

    const handleSignOut = async () => {
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post('https://54.221.177.186/api/account/logout', {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.userInfo.token}`
                }
            });
            if (response.status === 200) {
                // Handle successful logout here
                console.log('Signed Out')
                window.location.reload(); // Refresh the app

            } else {
                // Handle logout failure here
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <header className={scrolled ? ' w-screen py-4 fixed top-0 bg-white z-40 shadow-md ' : ' w-screen py-4 fixed top-0 bg-white z-40'} >
            <nav className="max-w-full text-sm font-bold mx-auto justify-between hidden lg:flex px-2 xl:px-4 items-center gap-x-4">
                <div>
                    <Link to='/'>
                        <div className='w-20'>
                            <img src={logo} />
                        </div>
                    </Link>
                </div>

                <div className='flex w-4/5 lg:w-8/12 xl:w-8/12 gap-x-4 items-center ' >
                    <div className='' onMouseOver={handleMouseOver} >
                        <div className='flex gap-3 items-center '>
                            <div className='flex gap-3 items-center relative'>
                                <div className='flex gap-3 items-center hover:text-orange text-nav_black'>
                                    <FiLayers />
                                    <div className='hover:text-orange'>Browse</div>
                                    <div className='text-2xl'><RiArrowDropDownLine /></div>
                                </div>
                                {isHovering &&
                                    <div
                                        className='absolute top-8 left-0 deepShadow bg-white w-52 rounded-lg py-1 px-4 font-normal z-30'
                                        id='subMenu1'
                                        onMouseOut={handleMouseOut}
                                    >
                                        <Link to='/countries'>
                                            <div
                                                className='flex gap-x-2 border-b border-opacity-10 border-b-light_black py-2 hover:text-orange'
                                                onMouseOver={handleMouseOut2}
                                            >
                                                <BiWorld className='text-xl text-nav_black text-opacity-50' />
                                                <div>Browse by country</div>
                                            </div>
                                        </Link>
                                        <Link to='/discipline/'>
                                            <div
                                                className='flex gap-x-2 border-b border-opacity-10 border-b-light_black pt-2  hover:text-orange'
                                                onMouseOver={handleMouseOut2}
                                            >
                                                <BiBriefcase className='text-xl text-light_black text-opacity-60 ' />
                                                <div className='mb-2'>Browse by discipline</div>
                                            </div>
                                        </Link>
                                        <div 
                                            className='flex gap-x-2 justify-between py-2 hover:text-orange'
                                            onMouseOver={handleMouseOver2}
                                        >
                                            <div className='flex gap-x-2 relative'>
                                                <FaGraduationCap className='text-xl text-light_black text-opacity-60' />
                                                <div className=''>Programmes</div>
                                            </div>
                                            <div className='text-lg'><RiArrowRightSLine /></div>
                                        </div>
                                        {
                                            isHovering2 &&
                                            <div className='absolute  font-normal left-52 p-4 shadow top-28 rounded-md bg-white text-light_black' id='subMenu2' onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
                                                <Link to='/bachelors'><div className='p-1 w-32 hover:text-orange'>Bachelors</div></Link>
                                                <Link to='/masters'><div className='p-1 w-32 hover:text-orange'>Masters</div></Link>
                                                <Link to='/doctorates'><div className='p-1 w-32 hover:text-orange'>Doctorate</div></Link>

                                            </div>
                                        }

                                    </div>
                                }
                            </div>

                        </div >
                    </div>

                    <div className="w-72 mx-auto md:w-full md:rounded-full bg-white 2xl:w-9/12">
                        <form className="relative rounded-md md:flex justify-between md:px-2 md:rounded-full md:mx-8 md:items-center lg:mx-0 bg-white z-20 2xl:w-full border border-light_black border-opacity-60 ">
                            <fieldset className=" border-b border-light_black border-opacity-20 mx-2 px-2 py-2 md:border-0  ">
                                <div className="flex items-center gap-x-2">
                                    <AiOutlineSearch className="text-light_black" />
                                    <input
                                        type="text "
                                        className="focus:outline-none md:w-72 font-normal"
                                        placeholder="What do you want to study?"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                    />
                                </div>
                            </fieldset>
                            <div className="">
                                <div className='py-4'>
                                    <div
                                        className="ps-4 flex items-center gap-x-4 text-light_black border-s border-opacity-40 xl:w-44 border-light_black text-opacity-60"
                                        onClick={() => setCountryList(!hideCountryList)}
                                    >
                                        <div>
                                            <BsViewList />
                                        </div>
                                        <div className={`font-normal ${selectedCountry == "Where?" ? "" : "text-nav_black"}`}>
                                            {selectedCountry}
                                        </div> 
                                        <div>
                                            <FiChevronDown/>
                                        </div>
                                    </div>
                                </div>
                            
                                {hideCountryList &&
                                    <div ref={dropdownRef} className="text-left ms-4 left-100 top-10 shadow p-4 rounded-md  max-h-44 overflow-y-scroll  text-opacity-60 my-0 w-full px-2 text-light_black bg-white focus:outline-none lg:w-40 absolute">
                                        {
                                            countries.map((country) => (
                                                <div
                                                    className="text-light_black text-xs py-2"
                                                    value={country}
                                                    key={country.id}
                                                    onClick={() => {
                                                        setSelectedCountry(country.name);
                                                        setCountryList(false);
                                                    }}
                                                >
                                                    {country.name}
                                                </div>
                                            ))
                                        }
                                    </div>
                                }
                                
                            </div>
                            <Link to={`/coursefinder?name=${searchValue}&country=${selectedCountry}`}>
                                <button className="w-full text-white bg-orange py-3 px-3 text-lg font-bold rounded-3xl md:w-fit md:rounded-full">
                                    <AiOutlineSearch className="text-white" />
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>

                <div className='flex gap-x-3 w-52 justify-between'>
                    {props.isLoggedIn ?
                        <>
                            <button
                                className='text-orange flex items-center gap-x-2 relative'
                                onClick={showUser}
                                // onMouseEnter={showUser}
                            >
                                <div className='w-8'>
                                    <img src={signlogo} className='w-8' />
                                </div>
                                <div>
                                    {props.userInfo.firstName}
                                </div>
                            </button>
                            <div
                                className='hidden w-60 text-sm absolute top-20 right-1/5 deepShadow rounded-md py-2 px-6 bg-white font-normal text-light_black'
                                id='userCard'
                                // onMouseLeave={hideUser}
                            >
                                <div className='flex gap-x-4 items-center py-2'>
                                    <div className='w-8'><img src={signlogo} className='w-8' /></div>
                                    <div>
                                        <div className='font-bold'>
                                            <span>{props.userInfo.lastName}</span>
                                            <span>{props.userInfo.firstName}</span>
                                        </div>
                                        <div className='font-normal'>
                                            {props.userInfo.email}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-x-4 py-3 border-y-light_black border-opacity-20 border-y'>
                                    <div className='text-xl text-light_black'><FiHeart /> </div>
                                    <div>Wishlist</div>
                                </div>
                                <div className='flex gap-x-4 py-3 border-b-light_black border-opacity-20 border-b'>
                                    <div className='text-xl text-light_black'><FiSettings /> </div>
                                    <div>Account Settings</div>
                                </div>
                                <button className='flex gap-x-4 py-3' onClick={handleSignOut}>
                                    <div className='text-xl text-light_black'><FiLogOut/> </div>
                                    <div>Sign Out</div>
                                </button>
                            </div>
                        </>
                        :
                        <>
                            <button className='text-orange flex items-center gap-x-2' onClick={toggleModal}>
                                <div><LuUser /></div>
                                <div>Sign in</div>
                            </button>
                        </>
                    }
                    <Link to='/explore'>
                        <button className='bg-orange text-white px-4 py-2 rounded-full flex items-center gap-2'>
                            <div className='text-md'><FaPaperPlane /></div>
                            <div>Explore</div>
                        </button>
                    </Link>
                </div>
            </nav>
            <nav className='mx-auto px-3 lg:hidden'>
                <div className='flex justify-between '>
                    <Link to='/'>
                        <div className='w-20'>
                            <img src={logo} />
                        </div>
                    </Link>
                    <div className='flex gap-x-6'>
                        <div className='text-2xl text-light_black font-bold' onClick={toggleModal}><FiUser /></div>
                        <div className='text-2xl text-light_black font-bold' onClick={toggleHeader}><FiMenu /></div>
                    </div>
                </div>
                <div className='hidden justify-normal' id='headerNav'>
                    <div className='font-bold text-black text-opacity-80 flex flex-col gap-y-6 mt-12'>
                        <div className='border border-light_black border-opacity-20 px-2 py-4 rounded-md justify-between items-center mb-2' >
                            <div className='flex gap-3 items-center justify-between' onClick={toggleNav}>
                                <div className='flex gap-3 items-center'>
                                    <FiLayers />
                                    <div>Browse</div>

                                </div>
                                <div className='text-2xl'><RiArrowDropDownLine /></div>

                            </div >
                            <div className=' ms-2' id='mobileNav'>
                                <div className='border-e border-opacity-30 border-light_black'></div>
                                <div className='font-normal px-4 w-full text-sm'>
                                    <Link to='/countries'><div className='flex gap-x-2 border-b border-opacity-10 border-b-light_black py-2'><BiWorld className='text-xl text-light_black text-opacity-60' /><div>Browse by country</div></div></Link>
                                    <Link to='/discipline'><div className='flex gap-x-2 border-b border-opacity-10 border-b-light_black py-2 '><BiBriefcase className='text-xl text-light_black text-opacity-60 ' /><div className='mb-2'>Browse by discipline</div></div></Link>
                                    <div className='flex gap-x-2'><FaGraduationCap className='text-xl text-light_black text-opacity-60' /> <div className=''>Programmes</div></div>
                                    <div className='flex'>
                                        <div className='border-e border-opacity-30 border-light_black'></div>
                                        <div className='px-2'>
                                        <Link to='/bachelors'><div className='p-1 w-32 hover:text-orange'>Bachelors</div></Link>
                                        <Link to='/masters'><div className='p-1 w-32 hover:text-orange'>Masters</div></Link>
                                        <Link to='/coctorates'><div className='p-1 w-32 hover:text-orange'>Doctorate</div></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <Link to='/explore'><button className='bg-orange text-white flex gap-1 items-center py-2 px-4 rounded-full w-full justify-center mx-auto' ><span>Explore</span><span><FaPaperPlane /></span></button></Link>
                </div>
            </nav>

            {
                modal && (<div className="modal " > <div onClick={toggleModal}
                    className="overlay " ></div> <div className="modal-content mx-1 w-84 2xs:w-88 sm:w-screen lg:w-fit bg-white" >
                        <Login handleModal={() => { setModal(!modal) }} />
                        <button className="close-modal text-2xl" onClick={toggleModal}> <IoCloseOutline /> </button> </div> </div>
                )

            }

        </header>
    )
}