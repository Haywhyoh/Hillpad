import hillpad from '../assets/images/hillpad-transparent.png';
import { MdOutlineMail } from "react-icons/md";
export default function Footer() {
    return (
        <>
        <footer> 
            <div>
                <div>
                    <div><img src={hillpad}/></div>
                    <div>
                        <div>
                            <div><MdOutlineMail /></div>
                            <div>contact@hillpad.com</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Resources</div>
                    <ul>
                        <li>Bachelors</li>
                        <li>Masters</li>
                        <li>Doctorate</li>
                        <li>Browse by country</li>
                        <li>Browse by Discipline</li>
                    </ul>
                </div>
                <div>
                    <div>Quick Links</div>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>Careers</li>
                        <li>For Schools</li>
                    </ul>
                </div>
                <div></div>
            </div>
            <div>
                <div>Subscribe to our newsletter</div>
                <div>Don't miss any relevant tips and announcements!</div>
            </div>
        </footer>
        </>
    )
}