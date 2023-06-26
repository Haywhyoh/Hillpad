import { Link } from 'react-router-dom';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';

import CourseCard from '../components/searchCourseCard';
import Footer from '../components/Footer';
import Header from '../components/header';
import { degrees } from "./degree";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
export default function DisciplineDetails() {
  const [show, setShow] = useState(false);
  const param = useParams();

  return (
    <>
      <Header />
    <div className='mx-4 max-w-full lg:mx-8 2xl:mx-12 3xl:mx-auto mt-32'>
      <div className='my-6'>
        <h1 className='text-2xl font-semibold'>{param.name}</h1>
        <div className='flex gap-x-4 my-4'>
          <div className='text-light_black border-e pe-4 border-light_black border-opacity-30 2xs:flex gap-x-2'>
            <div className='text-light_black font-semibold text-base'>1230</div>
            <div>Bachelors</div>

          </div>
          <div className='text-light_black border-e pe-4 border-light_black border-opacity-30 2xs:flex gap-x-2'>
            <div className='font-semibold text-base'>1230</div>
            <div>Masters</div>

          </div>
          <div className='text-light_black 2xs:flex gap-x-2'>
            <div className='font-semibold text-base'>1230</div>
            <div>Doctorates</div>
          </div>
        </div>

      </div>
      <div className='lg:flex gap-x-10'>
      <div className='lg:w-7/12'>
        <div className='text-orange font-semibold flex flex-col 2xs:flex-row gap-3 justify-between 2xs:justify-start 2xs:gap-x-8 lg:mt-10'>
          <div className='py-2 2xs:p-2 rounded-md flex gap-x-2 2xs:border border-light items-center'><div className='font-bold'><BsBoxArrowUpRight /></div><div className='text-xl'>Bachelors</div><div className='text-light_black text-sm'>(12345)</div></div>
          <div className='py-2 2xs:p-2 rounded-md flex gap-x-2 2xs:border border-light items-center'><div className='font-bold'><BsBoxArrowUpRight /></div><div className='text-xl'>Masters</div><div className='text-light_black text-sm'>(12345)</div></div>
          <div className='py-2 2xs:p-2 rounded-md flex gap-x-2 2xs:border border-light items-center'><div className='font-bold'><BsBoxArrowUpRight /></div><div className='text-xl'>Doctorate</div><div className='text-light_black text-sm'>(12345)</div></div>
        </div>
        <div className='my-6'><h2 className='text-2xl font-semibold '>About </h2></div>
        <p className='text-light_black text-lg my-6 lg:text-justify'>{` ${param.name} 'is a vital scientific field that focuses on studyig plants, animals, and the environments in which they thrive.
          You’ll learn about forest restoration, managing natural resources, food production, and preserving the natural beauty that surrounds us.
          Agriculture and Forestry also studies crop rotation and preserving the soil’s mineral qualities.
          They make sure that products follow industry standards and reach the markets.
          This is essential in the mass production of food, whose demand will grow as the human population increases.\r\n\r\nAgriculture & Forestry students can find themselves working in Horticulture, Animal Sciences, Aquaculture and Fisheries, and other subfields.
          \r\n\r\nYou can help businesses manage their ecological impact; establish and preserve wildlife, knowing exactly how animal husbandry and cultivating plants affects the environment; or you can create spectacular garden landscapes for everyone to admire. During courses, you will also learn how to properly manage forests. 
          Many people still depend on lumber, as alternative building materials and energy sources’ popularity is growing slowly. `} </p>
         
      </div>
          
      <div className='my-4 max-w-xl shadow-md px-2 py-10 lg:p-12'>
        <h2 className='text-2xl font-semibold max-w-sm'>Top Programmes for {param.name}</h2>
        <h3 className='text-light_black text-base my-2'>Times Higher education World Ranking</h3>
        <div className='text-orange font-semibold flex flex-col xs:flex-row justify-between 2xs:justify-start 2xs:gap-x-8 my-4'>
          <div className='py-2 2xs:p-2 rounded-md flex gap-x-2 2xs:border border-light items-center'><div className='font-bold'><FaGraduationCap /></div><div className='text-sm'>Bachelors</div></div>
          <div className='py-2 2xs:p-2 rounded-md flex gap-x-2 2xs:border border-light items-center'><div className='font-bold'><FaGraduationCap /></div><div className='text-sm'>Masters</div></div>
          <div className='py-2 2xs:p-2 rounded-md flex gap-x-2 2xs:border border-light items-center'><div className='font-bold'><FaGraduationCap /></div><div className='text-sm'>Doctorate</div></div>
        </div>
        <table className="table-auto text-left  rounded-lg mt-4 ">
            <thead className='border-b border-light_black border-opacity-40'>
              <tr>
                <th className='py-2 px-8'>No.</th>
                <th className='px-4'>Universities</th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td className='py-2 px-8'>1</td>
                <td className='lg:px-16 px-4'>University of Oxford</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>2</td>
                <td className='lg:px-16 px-4'>University of Oxford</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>3</td>
                <td className='lg:px-16 px-4'>University of Oxford</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>4</td>
                <td className='lg:px-16 px-4'>University of Oxford</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>5</td>
                <td className='lg:px-16 px-4'>University of Oxford</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>6</td>
                <td className='lg:px-16 px-4'>University of Oxford</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>7</td>
                <td className='lg:px-16 px-4'>University of Oxford</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>8</td>
                <td className='lg:px-16 px-4'>University of Oxford</td>
              </tr>
              <tr>
                <td className='py-2 px-8'>9</td>
                <td className='lg:px-16 px-4'>University of Oxford</td>
              </tr>
              <tr className='border-b border-light_black border-opacity-40'>
                <td className='py-2 px-8'>10</td>
                <td className='lg:px-16 px-4'>University of Oxford</td>
              </tr>
            </tbody>

        </table>
      </div>  
      </div>
      <div className='bg-orange text-white p-6 my-8 text-center max-w-4xl mx-auto lg:my-12'>
          <h3 className='text-2xl font-bold 2xs:text-3xl'>Get Free Consultation!</h3>
          <div className='text-lg py-2 2xs:py-4 2xs:text-xl'>Find out which programme is best for you by talking to one of our trained consultants</div>
          <div className='bg-white py-2 px-4 rounded-md w-fit text-orange text-center mx-auto font-bold'>Book a free consultation</div>
        </div>

      <div className='my-4 hidden lg:block'>
        <h2 className='text-2xl font-semibold text-center lg:text-3xl lg:my-6'>Recommended {param.name}</h2>
        <div className="my-6 flex justify-center mx-auto">
        <div className="flex justify-center w-full mx-auto">
                            <div className="flex gap-x-4 flex-wrap justify-center ld:justify-start w-full">
                                {degrees.filter((degree) => (degree.id < 4)).map((degree, index) => (<CourseCard key={index} prop={degree} />))}

                            </div>
                            </div>
          </div>
      </div>


    </div>
  <Footer />
    </>
    
  );
}