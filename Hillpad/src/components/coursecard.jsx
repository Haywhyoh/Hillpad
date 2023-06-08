import school1 from '../assets/images/01-1.jpeg';
import { HiOutlineCash } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineCalendar} from "react-icons/ai";

export default function CourseCard() {
    return (
        <div className="my-6 w-72 flex justify-center">

            <div className="shadow rounded-b-2xl relative px-2">
              <div className="absolute w-12 bg-deep_blue text-white rounded-md p-1 text-sm top-4 left-4">
                New
              </div>
              <div className=" rounded-xl">
                <img
                  className=" rounded-t-2xl"
                  src={school1}
                  alt="bachelors_degree"
                />
              </div>
              <div className="text-left m-4">
                <div className="font-normal text-sm text-orange">B.Eng</div>
                <div className="font-medium pb-2">Electrical Engineering</div>
                <div className="text-light_black text-sm italic opacity-70">
                  Toronto Metropolitan University
                </div>
                <div className="text-light_black text-sm italic opacity-70">
                  Toronto, Canada
                </div>
                <div className="flex gap-x-6 items-center opacity-70 text-light_black my-2">
                  <div className="text-2xl">
                    <HiOutlineCash />
                  </div>
                  <div>$27,000/ year</div>
                </div>
              </div>

              <div className="flex gap-x-3 justify-center text-light_black text-sm border-t border-light_black border-opacity-30 py-4">
                <div className="flex items-center gap-x-1">
                  <div>
                    <AiOutlineCalendar />
                  </div>
                  <div></div>4 years
                </div>
                <div className="flex items-center gap-x-1">
                  <div>
                    <BiTimeFive />
                  </div>
                  <div>Full Time</div>{" "}
                </div>
                <div className="flex items-center gap-x-1">
                  <div>
                    <SlLocationPin />
                  </div>
                  <div>On Campus</div>{" "}
                </div>
              </div>
            </div>
            </div>
    )
}