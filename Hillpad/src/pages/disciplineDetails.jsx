import { Link } from 'react-router-dom';
import { BsBoxArrowUpRight } from 'react-icons/bs';

export default function DisciplineDetails () {
  return (
      <div className='mx-4'>
        <div className='my-6'>
          <h1 className='text-2xl font-semibold'>Agriculture & Forestry</h1>
          <div className='flex gap-x-4 my-4'>
          <div className='text-light_black border-e pe-4 border-light_black border-opacity-30'>
            <div className='text-light_black font-semibold text-base'>1230</div>
            <div>Bachelors</div>

          </div>
          <div className='text-light_black border-e pe-4 border-light_black border-opacity-30'>
            <div className='font-semibold text-base'>1230</div>
            <div>Masters</div>

          </div>
          <div className='text-light_black'>
            <div className='font-semibold text-base'>1230</div>
            <div>Doctorates</div>
          </div>
          </div>
          
        </div>
        <div className='text-orange font-semibold flex flex-col gap-2'>
          <div className='p-2 rounded-md w-32 flex gap-x-2 border border-light'><div className='font-bold text-xl'><BsBoxArrowUpRight /></div><div>Bachelors</div></div>
          <div className='p-2 rounded-md w-32 flex gap-x-2 border border-light'><div className='font-bold text-xl'><BsBoxArrowUpRight /></div><div>Masters</div></div>
          <div className='p-2 rounded-md w-32 flex gap-x-2 border border-light'><div className='font-bold text-xl'><BsBoxArrowUpRight /></div><div>Doctorate</div></div>
        </div>
        <div className='my-6'><h2  className='text-2xl font-semibold text-orange'>Learn About Agriculture and Forestry</h2></div>
        <p className='text-light_black text-lg my-6'>Agriculture and Forestry is a vital scientific field that focuses on studyig plants, animals, and the environments in which they thrive.
          You’ll learn about forest restoration, managing natural resources, food production, and preserving the natural beauty that surrounds us. 
          Agriculture and Forestry also studies crop rotation and preserving the soil’s mineral qualities. 
          They make sure that products follow industry standards and reach the markets.
           This is essential in the mass production of food, whose demand will grow as the human population increases.\r\n\r\nAgriculture & Forestry students can find themselves working in Horticulture, Animal Sciences, Aquaculture and Fisheries, and other subfields.
           \r\n\r\nYou can help businesses manage their ecological impact; establish and preserve wildlife, knowing exactly how animal husbandry and cultivating plants affects the environment; or you can create spectacular garden landscapes for everyone to admire. During courses, you will also learn how to properly manage forests. Many people still depend on lumber, as alternative building materials and energy sources’ popularity is growing slowly. You will be responsible for finding a balance that maintains the health of forests, while also providing for our needs.\r\n\r\nAgriculture & Forestry students can also focus on permaculture, a concept that fully embraces the idea of working with nature, rather than against it. Permaculture aims to create systems that produce no waste and are beneficial for us and the environment. Permaculture principles are applied in many fields, including regenerative agriculture and rewilding. The need for this type of approaches will keep growing in the next years.\r\n\r\nAgriculture & Forestry graduates find themselves in diverse careers, working as agricultural engineers, agronomists, forests rangers, conservationists, nutrient management specialists, landscapers, water management planners, and others. Here are other related fields you might be interested in environmental sustainability, food science, geology, ecology, animal husbandry.</p>
        <div className='bg-orange text-white p-6 text-center'>
          <h3 className='text-2xl font-bold'>Get Free Consultation!</h3>
          <div className='text-lg py-2'>Find out which programme is best for you</div>
          <div className='bg-white py-2 px-4 rounded-md w-fit text-orange text-center mx-auto font-bold'>Book a free consultation</div>
        </div>
        <div className='my-4'>
          <h2 className='text-2xl font-semibold'>Top Programmes for Agriculture and Forestry</h2>
        </div>
        <div className='my-4'>
          <h2 className='text-2xl font-semibold'>Best Universities for Agriculture and Forestry</h2>
        </div>

        <div className='my-4'>
          <h2  className='text-2xl font-semibold'>Recommended Programmes Will Love</h2>
        </div>
      </div>

  );
}