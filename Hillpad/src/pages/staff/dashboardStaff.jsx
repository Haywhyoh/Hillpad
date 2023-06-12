import { LuGraduationCap, LuSchool, LuMails } from 'react-icons/lu';
import { GrCertificate } from 'react-icons/gr';
import { FaUserGraduate } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';

export default function DashboardStaff() {
    return (
        <div className="bg-grey bg-opacity-10">
            <div className=" flex p-y pb-0">
                <div className="">
                    <div className="col-lg-8 mb-4 order-0">
                        <div className="card">
                            <div className="bg-white m-4 shadow rounded-md">
                                <div className="">
                                    <div className=" p-8">
                                        <h5 className="text-xl text-orange font-semibold py-4">
                                            Welcome John!
                                        </h5>
                                        <p className="mb-4 text-grey ">
                                            You have
                                            <span className="font-bold px-2">4</span>
                                            unread notifications. Check
                                            your notifications for important information.
                                        </p>
                                        
                                        <button className="my-4">
                                        <a href="" className="border border-light py-2 px-4 rounded-md text-orange font-bold text-sm">
                                            View Notifications
                                        </a>
                                        </button>
                                       
                                    </div>
                                </div>
                                <div className="">
                                    <div className="">
                                        <img src=""
                                           alt="View Badge User"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="m-4 bg-white p-4">
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

                    <div className="">
                        <div className="">
                            <div className="bg-white m-4 p-4">
                                <div className="">
                                    <div className="">
                                        <a href="" className="s">
                                            <div className="">
                                                <div className="">
                                                    <LuGraduationCap />
                                                </div>

                                            </div>
                                            <div className="card-title">
                                                <h5 className="text-nowrap mb-2">
                                                    Bachelors
                                                </h5>
                                            </div>
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div>
                                                    <span className="d-block mb-1 text-success">Published</span>
                                                    <h3 className="card-title text-nowrap mb-2">
                                                        89
                                                    </h3>
                                                </div>
                                                <div>
                                                    <span className="d-block mb-1 text-warning">Under Review</span>
                                                    <h3 className="card-title text-nowrap mb-2">
                                                        21
                                                    </h3>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white m-4 p-4">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="">
                                            <div className="card-title d-flex align-items-start justify-content-between">
                                                <div className="avatar flex-shrink-0">
                                                    <GrCertificate />
                                                    </div>
                                            </div>
                                            <div className="card-title">
                                                <h5 className="text-nowrap mb-2">
                                                    Masters
                                                </h5>
                                            </div>
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div>
                                                    <span className="d-block mb-1 text-success">Published</span>
                                                    <h3 className="card-title text-nowrap mb-2">
                                                        65
                                                    </h3>
                                                </div>
                                                <div>
                                                    <span className="d-block mb-1 text-warning">Under Review</span>
                                                    <h3 className="card-title text-nowrap mb-2">
                                                        2
                                                    </h3>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white m-4 p-4">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="" className="stretched-link">
                                            <div className="card-title d-flex align-items-start justify-content-between">
                                                <div className="avatar flex-shrink-0">
                                                   <FaUserGraduate />
                                                </div>
                                            </div>
                                            <div className="card-title">
                                                <h5 className="text-nowrap mb-2">
                                                    Doctorates
                                                </h5>
                                            </div>
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div>
                                                    <span className="d-block mb-1 text-success">Published</span>
                                                    <h3 className="card-title text-nowrap mb-2">
                                                        27
                                                    </h3>
                                                </div>
                                                <div>
                                                    <span className="d-block mb-1 text-warning">Under Review</span>
                                                    <h3 className="card-title text-nowrap mb-2">
                                                        0
                                                    </h3>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white m-4 p-4">
                                <div className="card">
                                    <div className="card-body">
                                        <a href="" className="stretched-link">
                                            <div className="card-title d-flex align-items-start justify-content-between">
                                                <div className="avatar flex-shrink-0">
                                                    <LuSchool />
                                                </div>
                                            </div>
                                            <div className="card-title">
                                                <h5 className="text-nowrap mb-2">
                                                    Schools
                                                </h5>
                                            </div>
                                            <div className="d-flex align-items-start justify-content-between">
                                                <div>
                                                    <span className="d-block mb-1 text-success">Published</span>
                                                    <h3 className="card-title text-nowrap mb-2">
                                                        13
                                                    </h3>
                                                </div>
                                                <div>
                                                    <span className="d-block mb-1 text-warning">Under Review</span>
                                                    <h3 className="card-title text-nowrap mb-2">
                                                        1
                                                    </h3>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 m-4">
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
                                    <a href="" className="flex gap-4 justify-center">
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
    )
}
