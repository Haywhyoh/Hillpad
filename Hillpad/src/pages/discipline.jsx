import disciplines from '../data/discipline.json';
import { FiChevronRight, FiChevronLeft, FiCheckCircle } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Prefooter from '../components/preFooter';
import axios from 'axios';
import { useSelector } from 'react-redux';
export default function Disciplines() {
    const [disciplines, setDisciplines] = useState([]);
    const [count, setCount] = useState(0);

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
            })};
    },[] );

    const [isHovDiscipline, setIsHovDiscipline] = useState(false);

    return (
        <div className=" my-6 px-2 xl:px-4 2xl:px-0">
            <section className=" max-w-full lg:flex mx-auto flex-col justify-center">
                <div>
                    <h1 className="lg:mt-24 font-bold lg:text-4xl mx-auto ">Disciplines</h1>

                </div>
                <div className="flex w-full items-center mt-10 justify-between">
                    <div className='w-full lg:w-76'>
                        <form action="">
                            <label htmlFor='' className="pe-3">Sort by:</label>
                            <select className=" p-2 w-60 2xs:w-78 sm:w-72 lg:w-52 xl:w-56 rounded-md border border-light_black bg-white text-sm border-opacity-60">
                                <option value="Name">Name</option>
                                <option value="programme_count">No. of Disciplines</option>

                            </select>
                        </form>
                    </div>
                    <div className=" sm:me-4 hidden w-8/12 lg:w-6/12 xl:w-7/12 sm:block">
                        <hr className="lg:w-full mb-2  text-light_black opacity-80"></hr>

                    </div>
                    <div className='md:flex items-center gap-x-2 text-light_black opacity-80 sm:w-4/12 lg:w-2/12 hidden '>
                        <div><FiCheckCircle /></div>
                        <div>{count} disciplines</div>
                    </div>

                </div>
                <div className='xl:mt-20'>
                <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center xl:justify-between my-6 font-medium w-full mx-auto xl:gap-y-6">
                        {disciplines.map((discipline) => (
                            <Link to={`/discipline/${discipline.name}`} state={discipline}>
                                {isHovDiscipline ?
                                    <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border-2 border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white deepShadow rounded-lg">
                                        <div className=" p-2 w-32 lg:w-fit ">
                                            <div className={`bg-${discipline.icon_color} p-2 w-fit rounded-full mx-auto`}>
                                                <div className={`text-3xl  flex  text-${discipline.icon_color} justify-center p-1`}>
                                                    <i className={` fa fa-${discipline.icon}`}></i>
                                                </div>
                                            </div>

                                            <div className="font-semibold text-sm my-2">{discipline.name}</div>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex flex-col items-center justify-center w-32 xs:w-36  2xs:w-44 border border-border_white border-opacity-50 md:w-52 lg:w-36 xl:w-48 h-36 bg-white shadow-2 rounded-lg">
                                        <div className=" p-2 w-32 lg:w-fit ">
                                            <div className={` bg-${discipline.icon_color} p-2 w-fit rounded-full mx-auto bg-opacity-10`}>
                                                <div className={`text-3xl  flex text-${discipline.icon_color} justify-center p-1`}>
                                                    <i className={` fa fa-${discipline.icon}`}></i>
                                                </div>
                                            </div>

                                            <div className="font-semibold text-sm my-2 text-center">{discipline.name}</div>
                                        </div>
                                    </div>
                                }
                            </Link>
                        ))}

                    </div>
                </div>
            </section>

            <div className='mx-auto mt-20  max-w-full lg:flex flex-col justify-center'>
                <Prefooter />
            </div>
        </div>
    )
}