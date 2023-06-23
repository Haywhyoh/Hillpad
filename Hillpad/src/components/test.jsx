import { AiOutlineSearch } from "react-icons/ai"
import { useSelector } from "react-redux"
export default function SearchBar() {
    const user = useSelector(state => state.user.userInfo)
    console.log(user)
    return (
          
        <div className="flex flex-wrap justify-center xl:gap-x-10 2xl:gap-x-0 2xl:justify-between max-w-full mx-auto " >
        <div className="w-72 xl:w-84  2xl:w-1/3  py-8 px-4 " onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
        {
          isHovering ? <div className="shadow-md rounded-lg   transition-all duration-700">
            <div className=" " >
              <div className="w-40 mx-auto">
                <img src={bachelor} alt="bachelors_degree" />
              </div>
              <div className="font-bold text-xl text-center mt-6 mx-8">Bachelor's Programme</div>
              <div className="text-sm text-light_black sm:p-2 lg:p-6 my-6">
                Choose from more than 1000 Bachelor's programmes at
                universities, colleges, and school worldwide
              </div>
              <div>
                <button className="border-orange border rounded-md font-bold text-base py-2 px-6 mb-8 bg-orange text-white">
                  Search Bachelors
                </button>
              </div>
            </div>

          </div> : <div className="   transition-all duration-700">
            <div className="">
              <div className="w-40 mx-auto">
                <img src={bachelor} alt="bachelors_degree" />
              </div>
              <div className="font-bold text-xl text-center mt-6 mx-8">Bachelor's Programme</div>
              <div className="text-sm text-light_black sm:p-2 lg:p-6 my-6">
                Choose from more than 1000 Bachelor's programmes at
                universities, colleges, and school worldwide
              </div>
              <div>
              <button className="border-orange border rounded-md font-bold text-base py-2 px-6 text-orange  hover:bg-orange mb-8 hover:text-white">                      Search Bachelors
                </button>
              </div>
            </div>

          </div>
        }
        </div>
        

        <div className="w-72 xl:w-84  2xl:w-1/3  py-8 px-4 "  onMouseOver={handleMouseOver2}
      onMouseOut={handleMouseOut2}>
        {
          isHovering2 ? <div className="shadow-md rounded-lg   transition-all duration-300"> <div className="">
          <div className="w-40 mx-auto">
            <img src={masters} alt="masters_degree" />
          </div>
          <div className="font-bold text-xl text-center mt-6 lg:mx-8">Master's Programme</div>
          <div className="text-sm text-light_black sm:p-2 lg:p-6 my-6">
            Choose from more than 1000 Master's programmes at
            universities, colleges, and school worldwide
          </div>
          <div>
          <button className="border-orange border rounded-md font-bold text-base py-2 px-6 mb-8 bg-orange text-white">
              Search Masters
            </button>
          </div>
        </div>
        </div>
           :  <div className="">
           <div className="w-40 mx-auto">
             <img src={masters} alt="masters_degree" />
           </div>
           <div className="font-bold text-xl text-center mt-6 lg:mx-8">Master's Programme</div>
           <div className="text-sm text-light_black sm:p-2 lg:p-6 my-6">
             Choose from more than 1000 Master's programmes at
             universities, colleges, and school worldwide
           </div>
           <div>
           <button className="border-orange border rounded-md font-bold text-base py-2 px-6 text-orange mb-8 "> 
               Search Masters
             </button>
           </div>
         </div>
        }
          
        </div>

        <div className="w-72 xl:w-84  2xl:w-1/3 py-8 px-2 " onMouseOver={handleMouseOver3}
      onMouseOut={handleMouseOut3}>
          {
          isHovering3 ? <div className="shadow-md rounded-lg   transition-all duration-700"> <div className="sm:w-full">
            <div className="w-40 mx-auto">
              <img src={doctorates} alt="doctorates_degree" />
            </div>
            <div className="font-bold text-xl text-center mt-6 mx-8">PhD & Doctorate Studies</div>
            <div className="text-sm text-light_black sm:p-2 lg:p-6 my-6">
              Choose from more than 1000 Bachelor's programmes at
              universities, colleges, and school worldwide
            </div>
            <div>
            <button className="border-orange border rounded-md font-bold text-base py-2 px-6 mb-8 bg-orange text-white">
                Search PhDs
              </button>
            </div>
          </div></div>
           : <div className="sm:w-full"><div className="w-40 mx-auto">
              <img src={doctorates} alt="doctorates_degree" />
            </div>
            <div className="font-bold text-xl text-center mt-6 mx-8">PhD & Doctorate Studies</div>
            <div className="text-sm text-light_black sm:p-2 lg:p-6 my-6">
              Choose from more than 1000 Bachelor's programmes at
              universities, colleges, and school worldwide
            </div>
            <div>
              <button className="border-orange border rounded-md font-bold text-base py-2 px-6 text-orange">
                Search PhDs
              </button>
            </div>
          </div>
          
      }
            
        </div>
      </div>
    )
}

