import React, {Component} from 'react'; 

import './Contact.css';

class Contact extends React.Component{
    render(){
        return(
            <div>
                <section class="contact_us_section"  style={{ 
      background: 'url("assets/image/contact.webp")'
    }}>
    <div class="custom_container">
        <h2>Do you have a question?</h2>
           <h3> Feel free to contact us</h3>
           <p>Can’t find what you are looking for? Need to book for bigger groups, contact us and we will accommodate your wishes.</p>
         
           <div class="contact_us">
       
            <div class="contact">
                <i class="fas fa-envelope"></i>
                <h2>Email us</h2>
                <p>Email us for general queries and partnership opportunities </p>
                <a href="#">hello@jamrocktaxi.com</a>
             </div>
        
             <div class="contact">
                <i class="fab fa-whatsapp-square"></i>
                <h2>Whatsapp Us</h2>
                <p>Contact us on WhatsApp for an immediate response </p>
                <a href="#">WhatsApp Call Us </a>
                    <a href="#">  WhatsApp Message Us </a>
                   
             </div>
         
             <div class="contact">
                <i class="fas fa-mobile"></i>
                <h2>Call us</h2>
                <p> We are available 24h / 7 on a number local to you.</p>
                <a href="#">US: +1 217 636 4160</a>
                <a href="#">UK: +44 7985 190947</a>
                <a href="#">JA: +1 (876) 438-5432</a>
             </div>
          
             <div class="contact">
                <i class="fas fa-info-circle"></i>
                <h2>Our Help Centre</h2>
                <p>Get help, find answers and manage your bookings via our help center
                </p>
                <a href="help.html">Visit Our Help Centre </a>
               
             </div>
                   
             <div class="contact">
                <i class="fas fa-map-marker-alt"></i>
                <h2>Our Location</h2>
                <p> Montego Bay, St. James,Jamaica.</p>
            
            </div> 
          </div> 
            
    </div>
</section>
            </div>
        )
}
}
export default Contact