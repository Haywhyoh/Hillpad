import hillpad from '../assets/images/hillpad-transparent.png';
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoPhonePortraitSharp } from 'react-icons/io5'
import { useState } from 'react';
import axios from 'axios';
import Modal from './newsLetterModal';
export default function Footer() {
    const [showModal, setShowModal] = useState(false);
    const url = 'https://54.221.177.186/api/subscription/add'
    function handleSubscribe() {
        // Get the email input element
        const emailInput = document.getElementById('emailInput');
    
        // Get the value of the email input
        const email = emailInput.value;
    
        // Validate the email using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);
    
        // Display a message based on the email validation result
        if (isValidEmail) {
          axios.post(url, { email })
            .then(response => {
              if (response.status === 201) {
                console.log(response.status)
                setShowModal(true);
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          alert('Email is not valid!');
        }
       
      }
    
      
      const handleCloseModal = () => {
        setShowModal(false);
      };
    return (
        <div className='bg-navy_blue w-screen'>
            <div className='max-w-full w-full mx-auto'>
                <footer className=' text-white p-4 lg:px-4 max-w-8xl md:flex flex-col justify-center mx-auto'>
                    <div className='lg:flex  lg:justify-between'>
                        <div className='md:flex md:justify-between w-full'>
                            <div className='md:flex md:gap-x-48'>
                                <div>
                                    <div className='w-28 my-8'><img src={hillpad} /></div>
                                    <div className='w-40'>
                                        University Admission
                                    </div>
                                    <div className='w-44 py-2'>
                                        Register Your University
                                    </div>
                                    <div className='hidden my-8 lg:text-lg'>
                                        <div className='flex items-center gap-x-2'>
                                            <div className='text-light text-lg'><MdOutlineMail /></div>
                                            <div>contact@hillpad.com</div>
                                        </div>
                                        <div className='flex items-center gap-x-2 mt-2'>
                                            <div className='text-light text-lg'><IoPhonePortraitSharp /></div>
                                            <a href="tel:4065550120">(406) 555-0120</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='md:flex md:gap-x-24'>

                                    <div>
                                        <div className=' my-4 text-lg md:text-lg md:font-bold'>Resources</div>
                                        <ul className='text-white opacity-50 flex flex-col gap-2 text-sm'>
                                            <Link to='/bachelors'><li>Bachelors</li></Link>
                                            <Link to='/masters'><li>Masters</li></Link>
                                            <Link to='/doctorates'><li>Doctorate</li></Link>
                                            <Link to='/countries'><li>Browse by country</li></Link>
                                            <Link to='/discipline/'><li>Browse by discipline</li></Link>
                                        </ul>
                                    </div>
                                    <div className='xs:mt-8 md:mt-0'>
                                        <div className='font-medium my-4 text-base md:text-lg md:font-bold'>Quick Links</div>
                                        <ul className='text-white opacity-50 flex flex-col gap-2 text-sm'>
                                            <li>About Us</li>
                                            <li>Contact Us</li>
                                            <li>FAQs</li>
                                            <li>Careers</li>
                                            <li>For Schools</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className='lg:flex lg:flex-col lg:w-96 xl:w-100  '>
                            <div >
                                <div className='font-semibold text-xl my-4 md:text-4xl md:mt-8 lg:text-2xl'>Subscribe to our newsletter</div>
                                <div className='text-white opacity-50 flex flex-col gap-2'>Don't miss any relevant tips and announcements!</div>
                            </div>

                            <div className='flex items-center border border-white border-opacity-30 p-2 rounded-full my-4 justify-between' >
                                <div className='w-3/5 flex items-center'>
                                    <div className='text-light_black text-lg px-2'>
                                        <MdOutlineMail />
                                    </div>
                                    <input type='email' id="emailInput" className='bg-light_black bg-opacity-0 w-36 py-2 px-2 text-sm focus:outline-none ' placeholder='Your Email' />
                                </div>
                                <div>
                                    <button className='bg-orange py-2 px-4 rounded-full font-bold' onClick={handleSubscribe}>Subscribe</button>
                                    {showModal && <Modal  onClose={handleCloseModal} />}
                               </div>
                            </div>
                        </div>

                    </div>



                </footer>
            </div>

            <div className='border-t border-light_black border-opacity-70 w-full'>
                <div className='mt-2 pb-2  xl:flex items-center gap-x-4 w-full xl:gap-x-20 xl:justify-center '>


                    <div className='text-sm text-white opacity-50 flex my-6 md:justify-center md:gap-x-8 lg:text-sm'>
                        <div>Privacy Policy</div>
                        <div>Disclaimer</div>
                        <div>Term of Use</div>
                    </div>


                    <div className='flex gap-x-10 items-center'>

                        <div className='text-sm text-white opacity-50 flex md:justify-center'>
                            Copyright © 2023 <span className=' text-white opacity-100 px-4'> HillPad Limited</span>
                        </div>

                        <div className='flex gap-x-4 my-4 text-lg justify-center'>
                            <div className='rounded-full shadow bg-opacity-20 p-2 text-white bg-light_black' >< AiOutlineTwitter /></div>
                            <div className='rounded-full shadow bg-opacity-20 p-2 text-white bg-light_black' ><FaFacebookF /></div>
                            <div className='rounded-full shadow bg-opacity-20 p-2 text-white bg-light_black' ><FaLinkedinIn /></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}