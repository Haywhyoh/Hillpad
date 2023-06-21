import logo from '../assets/images/hillpad-transparent.png';
import { FiMenu, FiLayers } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { LuUser } from 'react-icons/lu';
import { SiMinutemailer } from 'react-icons/si';
import { RiArrowDropDownLine, RiArrowRightSLine } from 'react-icons/ri';
import { BiWorld, BiBriefcase } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchBar from './search';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Login from './login';

export default function Header() {
    const [modal, setModal] = useState(false);

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
        nav.classList.toggle('hidden')
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


    return (
        <header className="w-screen py-4 fixed top-0 bg-white z-40">
            <nav className="max-w-full text-sm font-bold mx-auto justify-between hidden lg:flex w-full px-2 items-center gap-x-4">
                <div>
                    <Link to='/'>
                        <div className='w-20'>
                            <img src={logo} />
                        </div>
                    </Link>
                </div>
                <div className='flex w-4/5 xl:w-8/12 gap-x-4 items-center '>
                    <div className='' onClick={togglesubMenu1}>
                        <div className='flex gap-3 items-center '>
                            <div className='flex gap-3 items-center relative'>
                                <FiLayers />
                                <div>Browse</div>
                                <div className='absolute top-8 left-0 shadow bg-white w-64  rounded-lg p-4 hidden' id='subMenu1'>
                                    <div className='flex gap-x-2 border-b border-opacity-10 border-b-light_black py-2'><BiWorld className='text-xl text-light_black text-opacity-60' /><div>Browse by country</div></div>
                                    <div className='flex gap-x-2 border-b border-opacity-10 border-b-light_black py-2 '><BiBriefcase className='text-xl text-light_black text-opacity-60 ' /><div className='mb-2'>Browse by discipline</div></div>
                                    <div className='flex gap-x-2 justify-between py-2'>
                                        <div className='flex gap-x-2 relative' onClick={togglesubMenu2}>
                                            <FaGraduationCap className='text-xl text-light_black text-opacity-60' />
                                            <div className='' >Programmes</div>
                                        </div>
                                        <div className='text-2xl'><RiArrowRightSLine /></div>
                                    </div>
                                    <div className='hidden absolute left-60 p-4 shadow top-28 rounded-md bg-white text-light_black' id='subMenu2'>
                                        <div className='p-1 w-32'>Bachelors</div>
                                        <div className='p-1 w-32'>Masters</div>
                                        <div className='p-1 w-32'>Doctorate</div>

                                    </div>
                                </div>
                            </div>
                            <div className='text-2xl'><RiArrowDropDownLine /></div>

                        </div >
                    </div>


                    <div className="w-72 mx-auto md:w-full md:rounded-full bg-white 2xl:w-9/12">
                        <form className="rounded-md md:flex justify-between md:px-2 md:rounded-full md:mx-8 md:items-center lg:mx-0 bg-white z-20 2xl:w-full border border-light_black border-opacity-60 ">
                            <fieldset className=" border-b border-light_black border-opacity-20 mx-2 px-2 py-2 md:border-0  ">
                                <div className="flex items-center gap-x-2">
                                    <AiOutlineSearch className="text-light_black" />
                                    <input
                                        type="text "
                                        className="focus:outline-none md:w-72 "
                                        placeholder="What do you want to study?"
                                    ></input>
                                </div>
                            </fieldset>
                            <fieldset className="my-2 border-s border-opacity-40 border-light_black">
                                <div></div>
                                <select className="text-left w-full p-2 text-light_black bg-white focus:outline-none lg:w-fit">
                                    <option className="text-light_black text-opacity-10" value={"China"}>
                                        Where ?
                                    </option>
                                    <option className="text-text_black" value={"Belgium"}>
                                        Belgium
                                    </option>
                                    <option className="text-text_black" value={"Canada"}>
                                        Canada
                                    </option>
                                </select>
                            </fieldset>
                            <button className="w-full text-white bg-orange py-3 px-3 text-lg font-bold rounded-3xl md:w-fit md:rounded-full">
                                <AiOutlineSearch className="text-white" />

                            </button>
                        </form>
                    </div>
                </div>
                <div className='flex gap-x-3 w-52 justify-between'>
                    <button className='text-orange flex items-center gap-x-2' onClick={toggleModal}><div><LuUser /></div><div>Sign in</div></button>
                    <Link to='/courses'><button className='bg-orange text-white px-4 py-2 rounded-full flex items-center gap-2'><div className='text-xl'><SiMinutemailer /></div> <div>Explore</div></button></Link>
                </div>

            </nav>

            <nav className='mx-auto px-3 lg:hidden'>
                <div className='flex justify-between '>
                    <div className='w-20'>
                        <img src={logo} />
                    </div>
                    <div className='text-2xl text-light_black font-bold' onClick={toggleHeader}><FiMenu /></div>
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
                            <div className='hidden ms-2' id='mobileNav'>
                                <div className='border-e border-opacity-30 border-light_black'></div>
                                <div className='font-normal px-4 w-full text-sm'>
                                    <div className='flex gap-x-2 border-b border-opacity-10 border-b-light_black py-2'><BiWorld className='text-xl text-light_black text-opacity-60' /><div>Browse by country</div></div>
                                    <div className='flex gap-x-2 border-b border-opacity-10 border-b-light_black py-2 '><BiBriefcase className='text-xl text-light_black text-opacity-60 ' /><div className='mb-2'>Browse by discipline</div></div>
                                    <div className='flex gap-x-2'><FaGraduationCap className='text-xl text-light_black text-opacity-60' /> <div className=''>Programmes</div></div>
                                    <div className='flex'>
                                        <div className='border-e border-opacity-30 border-light_black'></div>
                                        <div className='px-2'>
                                            <div className='pt-2 ps-2'>Bachelors</div>
                                            <div className='py-2 ps-2'>Masters</div>
                                            <div className='py-1 ps-2'>PhD & Doctorates</div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <Link to='/courses'></Link><button className='bg-orange text-white flex gap-1 items-center py-2 px-4 rounded-full w-full justify-center mx-auto' ><span>Explore</span><span><SiMinutemailer /></span></button>
                </div>
            </nav>

            {
                modal && (<div className="modal " > <div onClick={toggleModal}
                    className="overlay" ></div> <div className="modal-content xl:w-3/4 bg-white" >
                        <Login />
                        <button className="close-modal" onClick={toggleModal}> X </button> </div> </div>
                )

            }

        </header>
    )
}