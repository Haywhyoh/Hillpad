import { FiChevronsRight } from 'react-icons/fi';
import hero from '../assets/images/Rectangle_3.png';
import {HiOutlineCash} from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs'
export default function CourseDetails () {
    return (
        <>
            <div className="w-screen my-20">
                <div className="w-full">
                    <section className='xl:flex mx-auto bg-no-repeat bg-cover bg-center text-white' style={{ width: '100vw' , height:'450px', background: `url(${hero})`}}>
                        <div className='max-w-full w-full mx-auto flex justify-start my-6'>
                            <div className="w-1/2">
                            <div className='text-white flex gap-x-4'>
                                <div className='flex items-center gap-x-2'> <span>Courses</span><span><FiChevronsRight /></span></div>
                                <div className='flex items-center gap-x-2'><span>Sciences</span><span><FiChevronsRight /></span></div>
                                <div><span>Chemistry</span><span></span></div>
                            </div>
                            <div className='my-4 text-2xl'>
                                <h2>University of BalaBlu</h2>
                            </div>
                            <div className='max-w-lg'>
                                <h1 className='text-5xl font-bold leading-tight'>
                                   (Hons) Chemistry and Applied Sciences
                                </h1>
                            </div>
                            <div className='my-3'>
                                <p>
                                The chemistry course explores the fascinating world of matter and its interactions. 
                                Through engaging experiments and discussions, you will uncover the building blocks of life, 
                                understand chemical reactions, and discover how chemistry impacts our daily lives. 
                                Get ready to unlock the secrets of atoms, molecules, and the wonders of the periodic table!
                                </p>
                            </div>
                            </div>
                            <div className="w-1/2 flex justify-between h-full">
                                <div></div>
                                <div className='w-72 bg-white p-4 h-32 rounded-lg text-orange flex flex-col justify-between'>
                                    <div className='flex items-baseline gap-x-2'>
                                        <span><HiOutlineCash /></span>
                                        <span>Tution: </span>
                                        <span className='font-semibold text-2xl px-2'>$10, 000</span>
                                    </div>
                                    <div>
                                        <button className='bg-orange px-4 py-2 rounded-md w-full text-white flex items-center gap-x-2 justify-center'>
                                            <span className='text-white font-semibold'>Visit University Website</span>
                                            <div><BsArrowRight className='font-bold text-lg'/></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </section>
                </div>

            </div>
        </>
    )
}