import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineSearch, AiFillStar , AiOutlineTwitter} from "react-icons/ai";
import { HiOutlineCash } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { FaTractor, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import bachelor from '../assets/images/bachelors.svg';
import school1 from '../assets/images/01-1.jpeg';
import hillpadBig from '../assets/images/hillpad-transparent.png';
import newyork from '../assets/images/new-york.jpeg';

export default function Home() {
    return (
        <>
        <section>
        <div>
            <div></div>

            <div>Discover Educational Opportunities</div>
            <div>We make it easy to find the perfect course for you, so you can focus on taking your education to the next level.</div>
            <div>
                <div>
                    <div><AiOutlineSearch /></div>
                    <div>What do you want to study?</div>
                </div>
                <div>
                    <div></div>
                    <div>Where?</div>
                    <div>Search</div>
                </div>
            </div>
            </div>
        </section>
        
        <section>
            <div>
                <div>Browse By Discipline</div>
                <div>
                    <div>View all</div>
                    <div><BsArrowRight /></div>
                </div>
            </div>
            <div>
                <div>
                    <div><FaTractor/></div>
                    <div>Argriculture and Forestry</div>

                </div>
                <div>
                <div><FaTractor/></div>
                    <div>Argriculture and Forestry</div>
                </div>
                <div>
                <div><FaTractor/></div>
                    <div>Argriculture and Forestry</div>
                </div>
            </div>
        </section>

        <section>
            <div>Browse By Programme</div>
            <div>
                <div>
                    <div>
                        <img src={bachelor} alt="bachelors_degree"/>
                    </div>
                    <div>Bachelor's Programme</div>
                    <div>Choose from more than 1000 Bachelor's programmes at universities, colleges, and school worldwide</div>
                    <div><button>Search Bachelors</button></div>
                </div>
                
            </div>
            <div>
                <div>
                    <div>
                        <img src={bachelor} alt="bachelors_degree"/>
                    </div>
                    <div>Bachelor's Programme</div>
                    <div>Choose from more than 1000 Bachelor's programmes at universities, colleges, and school worldwide</div>
                    <div><button>Search Bachelors</button></div>
                </div>
                
            </div>

            <div>
                <div>
                    <div>
                        <img src={bachelor} alt="bachelors_degree"/>
                    </div>
                    <div>Bachelor's Programme</div>
                    <div>Choose from more than 1000 Bachelor's programmes at universities, colleges, and school worldwide</div>
                    <div><button>Search Bachelors</button></div>
                </div>
                
            </div>
        </section>

        <section>
            <div>Featured Courses</div>
            <div>
                <div>
                    <div>
                        New
                    </div>
                    <div>
                        <img src={school1} alt="bachelors_degree"/>
                    </div>
                    <div>B.Eng</div>
                    <div>Electrical Engineering</div>
                    <div>Toronto Metropolitan University</div>
                    <div>Toronto, Canada</div>
                    <div>
                        <div><HiOutlineCash /></div>
                        <div>$27,000/ year</div>
                    </div>
                    <div>
                        <div><div><AiOutlineCalendar/></div><div></div>4 years</div>
                        <div><div><BiTimeFive/></div><div>Full Time</div> </div>
                        <div><div><SlLocationPin/></div><div>On Campus</div> </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div><img src={hillpadBig}/></div>
            <div>Let uS help you find your dream school</div>
            <div>
				We provide an online platform designed to make finding and applying
				for undergraduate and postgraduate courses easy and efficient.
				With HillPad, you can conveniently access the best courses from leading universities
				around the world and unlock the possibilities of your future!
			</div>
            <div>
                <button>About Us</button>
            </div>
        </section>

        <section>
            <div>Browse By Country</div>
            <div>
            <div>
                <div><img src={newyork}/></div>
                <div>NewYork</div>
            </div>
            </div>
            
        </section>
        <section>
            <div>Reviews Across The Globe</div>
            <div>
                <div>
                    <div></div>
                    <div>"The best platform to finding courses!"</div>
                    <div>
						HillPad has made it so easy for me to find the perfect course for my degree.
						I'm so happy to have found this amazing platform!
					</div>
                    <div>
                        <div>
                            <div>Floyd Miles</div>
                            <div>University of Cambridge</div>
                        </div>
                        <div>
                            <div><AiFillStar /></div>
                            <div> 43 reviews</div>
                        </div>
                    </div>
                    <div>
                        <div>< AiOutlineTwitter /></div>
                        <div><FaFacebookF /></div>
                        <div><FaLinkedinIn /></div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}