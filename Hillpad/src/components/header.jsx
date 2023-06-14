import logo from '../assets/images/hillpad-transparent.png';
import { FiMenu, FiLayers } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { LuUser } from 'react-icons/lu';
import { SiMinutemailer } from 'react-icons/si';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiWorld, BiBriefcase } from 'react-icons/bi';
import SearchBar from './search';

export default function Header() {
    function toggleHeader() {
        const base = document.querySelector('#headerNav')
        base.classList.toggle('hidden')
    }

    function toggleNav() {
        const nav = document.querySelector('#mobileNav')
        nav.classList.toggle('hidden')
    }


    return (
        <header className="w-screen py-4">
            <nav className="max-w-full text-sm font-bold mx-auto justify-between hidden lg:flex w-full px-2 items-center gap-x-4">
                <div>
                    <div className='w-20'>
                        <img src={logo} />
                    </div>
                </div>
                <div className='flex w-4/5 xl:w-7/12 gap-x-4 '>
                    <div className='flex gap-3 items-center' >
                        <div className='flex gap-3 items-center'>
                            <FiLayers />
                            <div>Browse</div>
                        </div>
                        <div className='text-2xl'><RiArrowDropDownLine /></div>

                    </div >

                    <SearchBar className=''/>
                </div>
                <div className='flex gap-x-4 w-60 justify-between'>
                    <div className='text-orange flex items-center gap-x-2'><div><LuUser /></div><div>Sign in</div></div>
                    <button className='bg-orange text-white px-4 py-2 rounded-full flex items-center gap-2'><div className='text-xl'><SiMinutemailer /></div> <div>Explore</div></button>
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

                    <button className='bg-orange text-white flex gap-1 items-center py-2 px-4 rounded-full w-full justify-center mx-auto' ><span>Explore</span><span><SiMinutemailer /></span></button>
                </div>
            </nav>


        </header>
    )
}