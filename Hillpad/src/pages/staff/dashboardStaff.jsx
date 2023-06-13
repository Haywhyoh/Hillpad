import { LuGraduationCap, LuSchool, LuMails } from 'react-icons/lu';
import { GrCertificate } from 'react-icons/gr';
import { FaUserGraduate } from 'react-icons/fa';
import { BsBuilding, BsBook , BsGlobe2, BsBell} from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import {RiArchiveDrawerLine, RiHome8Line} from "react-icons/ri";
import { TbMessageCircle, TbHeadset } from 'react-icons/tb';
import hillpad from '../../assets/images/hillpad-transparent.png';
import man from '../../assets/images/man-with-laptop-light.png';
export default function DashboardStaff() {
    return (
        <div className="bg-grey bg-opacity-10  w-screen lg:h-screen">
            <div className=" flex p-y pb-0 max-w-9xl mx-auto">
                <div className='hidden xl:flex flex-col gap-10 text-light_black w-2/12 xl:max-h-screen bg-white me-4 py-2 px-6 xl:h-screen'>
                    <div className='w-40 mt-4'>
                        <img src={hillpad} />
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        < RiHome8Line />
                        <div>Dashboard</div>
                    </div>
                    <div>
                        <div><div className='my-4'>ENTRIES</div></div>
                        <ul className='flex flex-col  gap-4'>
                            <a href='http://localhost:5173/staff' className=''> <li className='flex gap-x-2 items-center'><BsBook /><div className='px-3'>Courses</div></li>
                                </a>
                            <li className='flex gap-x-2 items-center'><LuSchool /><div className='px-3'>Schools</div></li>
                            <li className='flex gap-x-2 items-center'><RiArchiveDrawerLine /> <div className='px-3'>Disciplines</div></li>
                            <li className='flex gap-x-2 items-center'><LuGraduationCap /><div className='px-3'>Degree Types</div></li>
                            <li className='flex gap-x-2 items-center'><BsGlobe2 /> <div className='px-3'>Countries</div></li>
                        </ul>
                    </div>
                    <div>
                        <div><div className='my-4'>ACCOUNT</div></div>
                        <ul className='flex flex-col  gap-4'>
                            <li className='flex gap-x-2 items-center'><BsBell /> <div className='px-3'>Notification</div></li>
                            <li className='flex gap-x-2 items-center'>< TbMessageCircle /><div className='px-3'>Chat</div></li>
                        </ul>
                    </div>
                    <div>
                        <div><div className='my-4'>MISC</div></div>
                        <ul className='flex flex-col  gap-4'>
                            <li className='flex gap-x-2 items-center'>< TbHeadset /><div className='px-3'>Support</div></li>
                            <li className='flex gap-x-2 items-center'>Privacy Policy</li>
                            
                        </ul>
                    </div>
                </div>
                
            

                <div className=" flex flex-col justify-center lg:mx-4">
                   <div className='hidden xl:block bg-white mb-4 p-4 rounded-lg w-full'>
                    <div>BAr</div>
                   </div>

                    <div className='lg:flex justify-between w-full'>
                        <div className="">
                            <div className="">
                                <div className="bg-white m-4 shadow rounded-md lg:flex gap-x-4 lg:w-11/12 items-center">
                                    <div className="lg:w-3/5">
                                        <div className=" p-8 xl:p-4">
                                            <h5 className="text-xl text-orange font-semibold py-4">
                                                Welcome John!
                                            </h5>
                                            <p className="mb-4 text-grey ">
                                                You have
                                                <span className="font-bold px-2">4</span>
                                                unread notifications. Check
                                                your notifications for important information.
                                            </p>

                                            <button className="my-4 xl:my-2">
                                                <a href="" className="border border-light py-2 px-4 rounded-md text-orange font-bold text-sm">
                                                    View Notifications
                                                </a>
                                            </button>

                                        </div>
                                    </div>
                                    <div className="lg:w-fit me-20">
                                        <div className="w-40 flex justify-center">
                                            <img src={man}
                                                alt="View Badge User"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="m-4 bg-white p-4 lg:w-4/12">
                            <div className="">
                                <div className="">
                                    <div
                                        className="">
                                        <div
                                            className="flex justify-between">
                                            <div className="">
                                                <h5 className="text-xl text-light_black my-2">
                                                    Profile Report
                                                </h5>
                                                <span className="bg-deep_blue bg-opacity-10 p-1 rounded-full">
                                                    Year 2023
                                                </span>
                                            </div>
                                            <div className="my-2">
                                                <small className="text-green font-semibold">
                                                    Courses Added</small>
                                                <h3 className="text-xl font-bold text-light">
                                                    62
                                                </h3>
                                            </div>
                                        </div>
                                        <div id="profileReportChart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex justify-center'>
                        <div className="lg:w-8/12">
                            <div className="flex flex-wrap flex-col justify-center 2xs:flex-row lg:justify-between">
                                <div className="bg-white m-4 p-4 2xs:w-64 sm:w-72 rounded-md lg:w-64 xl:w-84">
                                    <div className="">
                                        <div className="">
                                            <a href="" className="flex flex-col gap-2">
                                                <div className="">
                                                    <div className="text-4xl">
                                                        <LuGraduationCap />
                                                    </div>

                                                </div>
                                                <div className="">
                                                    <h5 className="text-2xl text-light_black">
                                                        Bachelors
                                                    </h5>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <span className="text-green">Published</span>
                                                        <h3 className="text-2xl text-light_black">
                                                            89
                                                        </h3>
                                                    </div>
                                                    <div>
                                                        <span className="text-orange">Under Review</span>
                                                        <h3 className="text-2xl text-light_black">
                                                            21
                                                        </h3>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white m-4 p-4 2xs:w-64 sm:w-72 rounded-md lg:w-64 xl:w-84">
                                    <div className="">
                                        <div className="">
                                            <a href="" className="flex flex-col gap-2">
                                                <div className="">
                                                    <div className="text-4xl">
                                                        <GrCertificate />
                                                    </div>

                                                </div>
                                                <div className="">
                                                    <h5 className="text-2xl text-light_black">
                                                        Masters
                                                    </h5>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <span className="text-green">Published</span>
                                                        <h3 className="text-2xl text-light_black">
                                                            9
                                                        </h3>
                                                    </div>
                                                    <div>
                                                        <span className="text-orange">Under Review</span>
                                                        <h3 className="text-2xl text-light_black">
                                                            1
                                                        </h3>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white m-4 p-4 2xs:w-64 sm:w-72 rounded-md lg:w-64 xl:w-84">
                                    <div className="">
                                        <div className="">
                                            <a href="" className="flex flex-col gap-2">
                                                <div className="">
                                                    <div className="text-4xl text-deep_blue text-opacity-50">
                                                        <FaUserGraduate />
                                                    </div>

                                                </div>
                                                <div className="">
                                                    <h5 className="text-2xl text-light_black">
                                                        Doctorates
                                                    </h5>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <span className="text-green">Published</span>
                                                        <h3 className="text-2xl text-light_black">
                                                            8
                                                        </h3>
                                                    </div>
                                                    <div>
                                                        <span className="text-orange">Under Review</span>
                                                        <h3 className="text-2xl text-light_black">
                                                            2
                                                        </h3>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white m-4 p-4 2xs:w-64 sm:w-72 rounded-md lg:w-80 xl:w-84">
                                    <div className="">
                                        <div className="">
                                            <a href="" className="flex flex-col gap-2">
                                                <div className="">
                                                    <div className="text-4xl">
                                                        <LuSchool />
                                                    </div>

                                                </div>
                                                <div className="">
                                                    <h5 className="text-2xl text-light_black">
                                                        Schools
                                                    </h5>
                                                </div>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <span className="text-green">Published</span>
                                                        <h3 className="text-2xl text-light_black">
                                                            17
                                                        </h3>
                                                    </div>
                                                    <div>
                                                        <span className="text-orange">Under Review</span>
                                                        <h3 className="text-2xl text-light_black">
                                                            13
                                                        </h3>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 m-4 lg:w-4/12">
                            <div className="">
                                <div className="flex my-4 ">
                                    <h5 className="text-2xl text-light_black">
                                        Notifications
                                    </h5>
                                    <div className="dropdown">
                                        <button className="btn p-0" type="button" id="transactionID"
                                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="transactionID">
                                            <a className="dropdown-item" href="">View all</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=" flex flex-col gap-4">
                                        <a href="" className="flex gap-4">
                                            <div className="text-3xl text-deep_blue text-opacity-70">
                                                <BsBuilding />
                                            </div>
                                            <div
                                                className="">
                                                <div className="">
                                                    <small className="text-sm text-light_black">1 hour ago</small>
                                                    <h6 className="text-light_black font-bold text-base">
                                                        Toronto Metropolitan University
                                                    </h6>
                                                </div>
                                                <div className="">
                                                    <span className="text-light_black opacity-70">Approval</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="" className="flex gap-4">
                                            <div className="text-3xl text-orange text-opacity-70">
                                                <LuGraduationCap />
                                            </div>
                                            <div
                                                className="">
                                                <div className="">
                                                    <small className="text-sm text-light_black">22 hours ago</small>
                                                    <h6 className="text-light_black font-bold text-base">
                                                        Electrical Engineering
                                                    </h6>
                                                </div>
                                                <div className="">
                                                    <span className="text-light_black opacity-70">Submission</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="" className="flex gap-4">
                                            <div className="text-3xl text-green text-opacity-70">
                                                <FiSettings />
                                            </div>
                                            <div
                                                className="">
                                                <div className="">
                                                    <small className="text-sm text-light_black">22 hours ago</small>
                                                    <h6 className="text-light_black font-semibold text-base">
                                                        Password Changed
                                                    </h6>
                                                </div>
                                                <div className="">
                                                    <span className="text-light_black opacity-70">Settings</span>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="" className="flex gap-4">
                                            <div className="text-3xl text-orange text-opacity-70">
                                                <LuMails />
                                            </div>
                                            <div
                                                className="">
                                                <div className="">
                                                    <small className="text-sm text-light_black">22 hours ago</small>
                                                    <h6 className="text-light_black font-bold text-base">
                                                        Message From Jane Doe
                                                    </h6>
                                                </div>
                                                <div className="">
                                                    <span className="text-light_black opacity-70">Submission</span>
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}
