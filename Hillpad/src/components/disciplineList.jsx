import { useEffect, useState } from "react";
import { BsCloudSunFill, BsHouseCheck } from "react-icons/bs";
import { FaTractor, FaThermometerQuarter, FaBriefcase, FaPaintBrush } from "react-icons/fa";
import { HiOutlineCalculator, HiOutlineDesktopComputer, HiUsers } from "react-icons/hi";
import { RiBook2Fill } from "react-icons/ri";
import { FiFilm, FiSettings } from "react-icons/fi";
import { useSelector } from 'react-redux/es/hooks/useSelector'

import { Link } from 'react-router-dom';
import axios from 'axios';

export default function DisciplinesList() {
    const [disciplines, setDisciplines] = useState([]);
    const [count, setCount] = useState(0);

  const [isHovDiscipline, setIsHovDiscipline] = useState(false);
  const [isHovDiscipline2, setIsHovDiscipline2] = useState(false);
  const [isHovDiscipline3, setIsHovDiscipline3] = useState(false);
  const [isHovDiscipline4, setIsHovDiscipline4] = useState(false);
  const [isHovDiscipline5, setIsHovDiscipline5] = useState(false);
  const [isHovDiscipline6, setIsHovDiscipline6] = useState(false);
  const [isHovDiscipline7, setIsHovDiscipline7] = useState(false);
  const [isHovDiscipline8, setIsHovDiscipline8] = useState(false);
  const [isHovDiscipline9, setIsHovDiscipline9] = useState(false);
  const [isHovDiscipline10, setIsHovDiscipline10] = useState(false);
  const [isHovDiscipline11, setIsHovDiscipline11] = useState(false);
  const [isHovDiscipline12, setIsHovDiscipline12] = useState(false);

    const disciplinesList = useSelector((state) => state.disciplines.disciplinesList);

    useEffect(() => {
        if (disciplinesList.length > 0) {
            setDisciplines(disciplinesList);
            setCount(disciplinesList.length);
            console.log('redux discipline called');
        } else {
            axios.get(`https://54.221.177.186/api/academics/discipline/list`)
                .then(res => {
                    const disciplineRes = res.data.results;
                    setDisciplines(disciplineRes);
                    setCount(res.data.count);
                })
                .catch(err => {
                    console.log(err)
                })
        };
    }, []);

    // return (
    //     <div className=" my-6 px-2 xl:px-4 2xl:px-0">
    //         <section className=" max-w-full lg:flex mx-auto flex-col justify-center">

    //             <div className='xl:mt-20'>
    //                 <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center xl:justify-between my-6 font-medium w-full mx-auto xl:gap-y-6">
    //                     {disciplines.map((discipline) => (
    //                         <Link to={`/discipline/${discipline.name}`} state={discipline} >
    //                             {isHovDiscipline ?
    //                                 <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg" onMouseLeave={() => setIsHovDiscipline(false)}>
    //                                     <div className=" p-2 w-32 lg:w-fit ">
    //                                         <div className={`bg-${discipline.icon_color} bg-opacity-100 p-2 w-fit rounded-full mx-auto`}>
    //                                             <div className={`text-3xl flex text-white justify-center p-1`}>
    //                                                 <i className={` fa fa-${discipline.icon}`}></i>
    //                                             </div>
    //                                         </div>

    //                                         <div className="font-semibold text-sm my-2">{discipline.name}</div>
    //                                     </div>
    //                                 </div>
    //                                 :
    //                                 <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg" onMouseOver={() => setIsHovDiscipline(true)} >
    //                                     <div className=" p-2 w-32 lg:w-fit ">
    //                                         <div className={` bg-${discipline.icon_color} p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
    //                                             <div className={`text-3xl  flex text-${discipline.icon_color} justify-center p-1`}>
    //                                                 <i className={` fa fa-${discipline.icon}`}></i>
    //                                             </div>
    //                                         </div>

    //                                         <div className="font-semibold text-sm my-2 text-center">{discipline.name}</div>
    //                                     </div>
    //                                 </div>
                            
    //                             }
    //                 </Link>
    //                     ))}

    //             </div>
    //              </div>
    //         </section >

           
    //     </div >
    // )

    return (
        <div>
             <section className="my-12 w-full lg:mx-0 xl:pe-8 2xl:mx-0  max-w-full">
         
          <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center xl:justify-between my-6 font-medium w-full mx-auto xl:gap-y-6">


            <Link to='/discipline/Agriculture & Forestry' onMouseOver={() => setIsHovDiscipline(true)} onMouseOut={() => setIsHovDiscipline(false)} className="">
              {isHovDiscipline ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36 2xs:w-44 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow border-border_white border-y-2 border-opacity-60 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-green p-2 w-fit rounded-full mx-auto bg-opacity-100`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <FaTractor />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2">Agriculture & Forestry</div>
                  </div>
                </div> :

                <div className="flex flejustify-center x-col items-center justify-center w-32 xs:w-36 2xs:w-44 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 border-border_white border-y-2 border-opacity-60 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-green p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-green justify-center p-1`}>
                        <FaTractor />
                      </div>
                    </div>
                    <div className="font-semibold text-sm my-2">Agriculture & Forestry</div>
                  </div>
                </div>
              }

            </Link>


            <Link to='/discipline/Applied Science & Profession' onMouseOver={() => setIsHovDiscipline2(true)} onMouseOut={() => setIsHovDiscipline2(false)}>
              {
                isHovDiscipline2 ?
                  <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44  border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg">
                    <div className=" p-2 w-32 lg:w-fit ">
                      <div className={` bg-orange p-2 w-fit rounded-full mx-auto `}>
                        <div className={`text-3xl  flex text-white justify-center p-1`}>
                          <FaThermometerQuarter />
                        </div>
                      </div>

                      <div className="font-semibold text-sm my-2 ">Applied Science & Profession</div>
                    </div>
                  </div> :
                  <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44  border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg">
                    <div className=" p-2 w-32 lg:w-fit ">
                      <div className={` bg-orange p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                        <div className={`text-3xl  flex text-orange justify-center p-1`}>
                          <FaThermometerQuarter />
                        </div>
                      </div>

                      <div className="font-semibold text-sm my-2 text-center ">Applied Science & Profession</div>
                    </div>
                  </div>
              }

            </Link>

            <Link to='/discipline/Art and Design' onMouseOver={() => setIsHovDiscipline3(true)} onMouseOut={() => setIsHovDiscipline3(false)}>
              {isHovDiscipline3 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-yellow p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <FaPaintBrush />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Art and Design</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36   2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-yellow p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-yellow justify-center p-1`}>
                        <FaPaintBrush />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Art and Design</div>
                  </div>
                </div>
              }
            </Link>


            <Link to='/discipline/Business Management' onMouseOver={() => setIsHovDiscipline4(true)} onMouseOut={() => setIsHovDiscipline4(false)}>
              {isHovDiscipline4 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-deep_blue p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <FaBriefcase />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Business Management</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-deep_blue p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-deep_blue justify-center p-1`}>
                        <FaBriefcase />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Business Management</div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Computer Science and IT' onMouseOver={() => setIsHovDiscipline5(true)} onMouseOut={() => setIsHovDiscipline5(false)}>
              {isHovDiscipline5 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto `}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <HiOutlineDesktopComputer />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Computer Science and IT</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-light justify-center p-1`}>
                        <HiOutlineDesktopComputer />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Computer Science and IT</div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Education and Training' onMouseOver={() => setIsHovDiscipline6(true)} onMouseOut={() => setIsHovDiscipline6(false)}>
              {isHovDiscipline6 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <RiBook2Fill />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Education and Training</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-light justify-center p-1`}>
                        <RiBook2Fill />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Education and Training</div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Engineering and Technology' onMouseOver={() => setIsHovDiscipline7(true)} onMouseOut={() => setIsHovDiscipline7(false)}>
              {isHovDiscipline7 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <FiSettings />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Engineering and Technology</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-light justify-center p-1`}>
                        <FiSettings />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Engineering and Technology</div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Natural Sciences & Mathematics' onMouseOver={() => setIsHovDiscipline8(true)} onMouseOut={() => setIsHovDiscipline8(false)}>
              {isHovDiscipline8 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <HiOutlineCalculator />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Natural Sciences & Mathematics</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-deep_blue justify-center p-1`}>
                        <HiOutlineCalculator />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Natural Sciences & Mathematics</div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Hospitality, Lesiure and Sport' onMouseOver={() => setIsHovDiscipline9(true)} onMouseOut={() => setIsHovDiscipline9(false)}>
              {isHovDiscipline9 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-green p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <BsHouseCheck />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Hospitality, Lesiure and Sport</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-green p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-green justify-center p-1`}>
                        <BsHouseCheck />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Hospitality, Lesiure and Sport</div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Humanities & Social Science' onMouseOver={() => setIsHovDiscipline10(true)} onMouseOut={() => setIsHovDiscipline10(false)}>
              {isHovDiscipline10 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <HiUsers />

                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Humanities & Social Science </div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-light p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-light justify-center p-1`}>
                        <HiUsers />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Humanities & Social Science </div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Journalism, Media & Communication ' onMouseOver={() => setIsHovDiscipline11(true)} onMouseOut={() => setIsHovDiscipline11(false)}>
              {isHovDiscipline11 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-yellow p-2 w-fit rounded-full mx-auto `}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <FiFilm />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Journalism, Media & Communication </div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-yellow p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-yellow justify-center p-1`}>
                        <FiFilm />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Journalism, Media & Communication </div>
                  </div>
                </div>
              }
            </Link>

            <Link to='/discipline/Environmental Sciences' onMouseOver={() => setIsHovDiscipline12(true)} onMouseOut={() => setIsHovDiscipline12(false)}>
              {isHovDiscipline12 ?
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-yellow p-2 w-fit rounded-full mx-auto`}>
                      <div className={`text-3xl  flex text-white justify-center p-1`}>
                        <BsCloudSunFill />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Environmental Sciences</div>
                  </div>
                </div>
                :
                <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg">
                  <div className=" p-2 w-32 lg:w-fit ">
                    <div className={` bg-yellow p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                      <div className={`text-3xl  flex text-deep_blue justify-center p-1`}>
                        <BsCloudSunFill />
                      </div>
                    </div>

                    <div className="font-semibold text-sm my-2 text-center">Environmental Sciences</div>
                  </div>
                </div>
              }
            </Link>



          </div>
        </section>
        </div>
    )
}
