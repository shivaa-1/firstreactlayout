import React from "react";

const Footer=()=>{
    return(  
    <div className="footer bg-dark m-2 p-2">
        <div className="footer-header text-center text-light">
            <h1 className="heading"><i class="bi bi-film"></i>  My Movies App<span className="text-secondary"> &copy;</span><sub className="text-secondary">copyright from abc pvt ltd.</sub></h1>
        </div>
        <div className="body d-flex justify-content-between">
            <ul className="left-part-links">
                <li><a href="/">Home</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Phone No. : 91-218380480</a></li>
            </ul>
            <ul className="rigth-part-links">
                <li><a href="/">Follow Us</a></li>
                <li><a href="/">Learn More</a></li>
                <li><a href="/">Know More</a></li>
                <li><a href="/">FAQ</a></li>
            </ul>
        </div>
        <div className="social-links">
            <ul className="d-flex justify-content-center">
                <li><a className="text-info" href="/"><i class="bi bi-facebook"></i></a></li>
                <li><a className="text-info" href="/"><i class="bi bi-whatsapp"></i></a></li>
                <li><a className="text-info" href="/"><i class="bi bi-twitter"></i></a></li>
                <li><a className="text-info" href="/"><i class="bi bi-instagram"></i></a></li>
                <li><a className="text-info" href="/"><i class="bi bi-linkedin"></i></a></li>
            </ul>
        </div>
    </div>
   
    )
}

export default Footer;