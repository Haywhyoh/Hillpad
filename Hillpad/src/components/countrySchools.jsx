import { FiCheckCircle } from "react-icons/fi"
export default function CountrySchools(props) {
    return (
        <div>
            <div className="flex w-full items-center mt-10 lg:mt-0">
                    <div className='w-4/12'>
                        <form action="">
                            <label htmlFor='' className="pe-3">Sort by:</label>
                            <select className=" p-2 xl:w-44 rounded-md border border-light_black bg-white text-sm border-opacity-60">
                                <option value="Name">Name</option>
                                <option value="programme_count">No. of Programmes</option>

                            </select>
                        </form>
                    </div>
                    <div className="mx-8 w-6/12">
                        <hr className="xl:w-full mb-2  text-light_black opacity-80"></hr>

                    </div>
                    <div className='flex items-center gap-x-2 text-light_black opacity-80 w-2/12'>
                        <div><FiCheckCircle /></div>
                        <div>51 countries</div>
                    </div>

                </div>
                <div className="my-6">
                    { () => { for( let c; c < 10; c++ ) {return (
                        <div className="p-4 border w-60 text-sm flex flex-col gap-y-2 card shadow-2">
                        <div>54 Bachelors</div>
                        <div>38 Masters</div>
                        <div>17 Doctorares</div>
                        <div className="text-orange text-base my-2">Algoma University</div>
                    </div>)}
                     } }
                    
                </div>
        </div>
    )
}