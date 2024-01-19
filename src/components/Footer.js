import React from 'react';
import '../App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';



const Footer = () => {
    return (
    <div className= "box">
        <footer className="copyright  bg-dark text-light mt-5">
            <div className="up" id="up">
                <i className="fas fa-chevron-up"></i>
            </div>
            <p>&copy; 2024</p>
            {/* uzing external library  material ui */}
            <FacebookIcon/>
            <InstagramIcon/>
            <PhoneIcon/>
            <TwitterIcon/>
        </footer>
    </div>
)
}

export default Footer





