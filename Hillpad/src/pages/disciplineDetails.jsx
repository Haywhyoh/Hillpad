import { Link } from 'react-router-dom';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import CourseCard from '../components/searchCourseCard';
import Footer from '../components/Footer';
import Header from '../components/header';
import { degrees } from "./degree";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import CoursesCarousel from '../components/coursesCarousel';
import Prefooter from '../components/preFooter';
import CountryCarousel from '../components/countryCarousel';
import { FiChevronRight, FiChevronsRight, FiChevronLeft } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';
export default function DisciplineDetails() {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const param = useParams();

  const scrollLeft = () => {
    document.getElementById("content2").scrollLeft -= 305;
  }
  const scrollRight = () => {
    document.getElementById("content2").scrollLeft += 305;
  }
  return (
    <>

    <div className='mx-4 max-w-full lg:mx-8 2xl:mx-12 3xl:mx-auto mt-28'>
    <div className="text-light_black flex gap-x-2 text-sm my-6"> 
             <Link to='/'><div className="flex gap-x-2 items-center"><span>Home</span><span><FiChevronsRight /> </span></div></Link>
             <Link to='/countries'><div className="flex gap-x-2 items-center"><span>Countries</span><span><FiChevronsRight /> </span></div> </Link>
             <Link to=''><span className="text-light">{param.name}</span></Link>
            </div>
      <div className='mt-16 mb-8'>
        <h1 className='text-4xl font-semibold'>{param.name}</h1>
        <div className='flex gap-x-4 my-4'>
          <div className='text-light_black border-e pe-4 border-light_black border-opacity-10 2xs:flex gap-x-2 items-center'>
            <div className='text-light_black font-semibold text-base'>1230</div>
            <div className='text-sm'>Bachelors</div>

          </div>
          <div className='text-light_black border-e pe-4 border-light_black border-opacity-10 2xs:flex gap-x-2 items-center'>
            <div className='font-semibold text-base'>1230</div>
            <div className='text-sm'>Masters</div>

          </div>
          <div className='text-light_black 2xs:flex gap-x-2 items-center'>
            <div className='font-semibold text-base'>1230</div>
            <div className='text-sm'>Doctorates</div>
          </div>
        </div>

      </div>
      <div className='lg:flex justify-between gap-x-6 max-w-full w-full'>
      <div className='lg:w-7/12'>
        <div className='text-orange flex flex-col 2xs:flex-row gap-3 justify-between 2xs:justify-start 2xs:gap-x-4 '>
          <div className='py-2 2xs:px-5 rounded-md flex gap-x-1 2xs:border border-light items-center font-bold hover:bg-light hover:text-white'><div ><BsBoxArrowUpRight className='font-bold'/></div><div className='text-normal'>Bachelors</div><div className='text-light_black text-xs opacity-60'>(12345)</div></div>
          <div className='py-2 2xs:px-5 rounded-md flex gap-x-1 2xs:border border-light items-center font-bold hover:bg-light hover:text-white '><div ><BsBoxArrowUpRight className='font-bold'/></div><div className='text-lg'>Masters</div><div className='text-light_black text-xs opacity-60'>(12345)</div></div>
          <div className='py-2 2xs:px-5 rounded-md flex gap-x-1 2xs:border border-light items-center font-bold hover:bg-light hover:text-white '><div ><BsBoxArrowUpRight className='font-bold'/></div><div className='text-lg'>Doctorate</div><div className='text-light_black text-xs opacity-60'>(12345)</div></div>
        </div>
        <div className='my-8'><h2 className='text-2xl font-semibold '>About </h2></div>
        <p className='text-light_black text-base my-6 lg:text-left'>{` ${param.name} 'is a vital scientific field that focuses on studyig plants, animals, and the environments in which they thrive.
          You’ll learn about forest restoration, managing natural resources, food production, and preserving the natural beauty that surrounds us.
          Agriculture and Forestry also studies crop rotation and preserving the soil’s mineral qualities.
          They make sure that products follow industry standards and reach the markets.
          This is essential in the mass production of food, whose demand will grow as the human population increases.\r\n\r\nAgriculture & Forestry students can find themselves working in Horticulture, Animal Sciences, Aquaculture and Fisheries, and other subfields.
          \r\n\r\nYou can help businesses manage their ecological impact; establish and preserve wildlife, knowing exactly how animal husbandry and cultivating plants affects the environment; or you can create spectacular garden landscapes for everyone to admire. During courses, you will also learn how to properly manage forests. 
          Many people still depend on lumber, as alternative building materials and energy sources’ popularity is growing slowly. `} </p>
         
      </div>
          
      <div className='my-4 lg:my-0 max-w-xl shadow-md px-2 py-10 lg:p-8 w-5/12 border-border_white border-2 rounded-lg sticky top-24'>
        <h2 className='text-2xl font-semibold max-w-sm'>Top Universities for {param.name}</h2>
        <h3 className='text-light_black text-base my-2 flex items-center gap-x-1'><BsBoxArrowUpRight className='font-extrabold ' /><div>Times Higher education World Ranking</div></h3>
        <div className='text-orange font-semibold flex flex-col xs:flex-row justify-between 2xs:justify-start 2xs:gap-x-2 my-4 w-full'>
          <div className='py-2 2xs:px-4 rounded-md flex gap-x-2 2xs:border border-light items-center hover:bg-light hover:text-white'><div className='font-bold'><FaGraduationCap /></div><div className='text-sm'>Bachelors</div></div>
          <div className='py-2 2xs:px-4 rounded-md flex gap-x-2 2xs:border border-light items-center hover:bg-light hover:text-white'><div className='font-bold'><FaGraduationCap /></div><div className='text-sm'>Masters</div></div>
          <div className='py-2 2xs:px-4 rounded-md flex gap-x-2 2xs:border border-light items-center hover:bg-light hover:text-white'><div className='font-bold'><FaGraduationCap /></div><div className='text-sm'>Doctorate</div></div>
        </div>
        <table className="table-auto text-left  rounded-lg mt-4 w-full">
            <thead className='border-b border-light_black border-opacity-40'>
              <tr>
                <th className='py-2 px-8'>No.</th>
                <th className='px-16'>Universities</th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td className='py-2 px-8'>1</td>
                <td className='lg:px-16 px-4 text-light'>University of Oxford</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>2</td>
                <td className='lg:px-16 px-4 text-light'>University of Lagos</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>3</td>
                <td className='lg:px-16 px-4 text-light'>University of Duke</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>4</td>
                <td className='lg:px-16 px-4 text-light'>University of Learning</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>5</td>
                <td className='lg:px-16 px-4 text-light'>University of HillPad</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>6</td>
                <td className='lg:px-16 px-4 text-light'>University of SnowFox</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>7</td>
                <td className='lg:px-16 px-4 text-light'>University of Hilton</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>8</td>
                <td className='lg:px-16 px-4 text-light'>University of Washington</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>9</td>
                <td className='lg:px-16 px-4 text-light'>University of BalaTubu</td>
              </tr>
              <tr className='border-b border-light_black border-opacity-40'>
                <td className='py-2 px-8'>10</td>
                <td className='lg:px-16 px-4 text-light'>University of Oxford</td>
              </tr>
            </tbody>

        </table>
      </div>  
      </div>
      <div className='bg-orange text-white p-6 my-8 text-center max-w-4xl mx-auto lg:my-12 rounded-lg'>
          <h3 className='text-2xl font-bold 2xs:text-3xl'>Get Free Consultation!</h3>
          <div className='text-lg py-2 2xs:py-4 2xs:text-xl'>Find out which programme is best for you by talking to one of our trained consultants</div>
          <div className='bg-white py-2 px-4 rounded-md w-fit text-orange text-center mx-auto font-bold'>Book a free consultation</div>
        </div>

        <section className="relative  mt-5">
          <div className="flex justify-between items-baseline">
          <div className="  text-left text-2xl font-bold my-8 md:text-3xl lg:text-5x md:my-2 lg:my-0 lg:text-3xl lg:font-semibold">
            Recommnded <span className="text-orange">Courses</span>
          </div>
          <Link to='/courses'>
              <div className="hidden xl:flex gap-x-2 items-center text-light_black text-sm hover:text-light">
                <div>View all</div>
                <div>
                  <BsArrowRight />
                </div>
              </div>
            </Link>
            </div>
          <button onClick={scrollLeft} className="hidden lg:block p-2 shadow rounded-full absolute -left-12 top-80"> <FiChevronLeft /></button>

          <div className="flex items-center gap-x-4">

            <div className="overflow-hidden ">
              <CoursesCarousel />
            </div>
           
          </div>
          <button onClick={scrollRight} className="hidden lg:block p-2 shadow rounded-full absolute -right-12 top-80"><FiChevronRight /></button>

        </section>
    </div>
    </>
    
  );
}