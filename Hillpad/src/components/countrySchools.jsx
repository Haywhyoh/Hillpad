import { FiCheckCircle,  } from "react-icons/fi"
import {FaSort} from "react-icons/fa"
export default function CountrySchools(props) {
    const boom = [...Array(12).keys()]
    return (
        <div>
            <div className="flex w-full md:w-full items-center md:justify-between lg:mt-0 md:gap-x-0">
                    <div className='w-full md:w-48 xl:w-74'>
                        <form action="" className='flex gap-x-2 items-center md:text-sm md:w-48 lg:w-72'>
                            <div><FaSort /></div>
                            <label htmlFor='' className="pe-3">Sort by:</label>
                            <select className=" p-2 w-48 2xs:w-50 md:w-24 xl:w-44 rounded-md border border-light_black bg-white text-sm border-opacity-60">
                                <option value="Name">Name</option>
                                <option value="programme_count">No. of Programmes</option>

                            </select>
                        </form>
                    </div>
                    <div className="mx-8 md:mx-0 w-72 lg:w-74 xl:w-80 hidden md:block">
                        <hr className=" md:block xl:w-full mb-2  text-light_black opacity-20"></hr>
                    </div>
                    <div className='hidden md:flex items-center gap-x-2 text-light_black opacity-80 w-2/12 md:w-80 lg:w-40 font-medium'>
                        <div><FiCheckCircle /></div>
                        <div>51 countries</div>
                    </div>
                </div>
                <div className="my-6 flex flex-wrap gap-4 justify-start lg:justify-between">
                    { boom.map((it, index) => 
                        <div className="p-4 border  w-full sm:w-44 md:w-50 lg:w-50 xl:w-64 2xl:w-65 text-sm flex flex-col gap-y-2 card shadow-2">
                            <div>54 Bachelors</div>
                            <div>{it} Masters</div>
                            <div>17 Doctorares</div>
                            <div className="text-orange text-base my-2">Algoma University</div>
                        </div>
                       ) }
                </div>
        </div>
    )
}