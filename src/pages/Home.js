
import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Home extends React.Component{

    render(){
        return(
         <div> 
         
<section class="banner">
  <div class="custom_container">
    <div class="banner_data">
        <div class="banner_text">
            <h1>Fast and convenient</h1>
            <h2>Everywhere, anytime</h2>
            <h3>Enjoy comfortable trip, order taxi online</h3>
        </div>
        <div class="booking_detail">
            <form id="order_taxi_form">
                <div class="booking_info banner_booking_first_child">
                    <div class="interchange_arrow"><i class="fas fa-expand-arrows-alt"></i></div>
                 <div class="booking_fields departure_airport"> 
                    <i class="fas fa-map-marker-alt"></i>    
                <input type="location" placeholder="Departure Airport" />
                  </div>
                  <div class="booking_fields departure_airport"> 
                    <i class="fas fa-map-marker-alt"></i>
                <input type="location" placeholder="pickup Location" />
                  </div>
 

                  <div class="booking_fields Arival_airport"> 
                    <i class="fas fa-map-marker-alt"></i>    
                <input type="location" placeholder="Arival Airport" />
                  </div>
                  <div class="booking_fields Arival_airport"> 
                    <i class="fas fa-map-marker-alt"></i>
                <input type="location" placeholder="Going Location" />
                  </div>

                  </div>
                  <div class="change_banner_layout">

<div class="booking_fields flight_departure_date"> 
  <i class="far fa-calendar-minus" id="cancle"></i>
  <div class="time_date_input">
<input type="text" placeholder="Flight Departure" onfocus="(this.type='date')" onblur="(this.type='text')" />
<input id="time" type="text" placeholder="Time" onfocus="(this.type='time')" onblur="(this.type='text')" />
  </div>
</div>

<div class="booking_fields flight_Arival_date"> 
  <i class="far fa-calendar-minus" id="cancle"></i>
  <div class="time_date_input">
<input type="text" placeholder="Flight Arival" onfocus="(this.type='date')" onblur="(this.type='text')" />
<input id="time" type="text" placeholder="Time" onfocus="(this.type='time')" onblur="(this.type='text')" />
  </div>
</div>

<div class="booking_fields">
  <i class="far fa-calendar-minus" id="cancle"></i>
  <div class="time_date_input">
<input type="text" placeholder="Add A Return" onfocus="(this.type='date')" onblur="(this.type='text')" />
<input id="time" type="text" placeholder="Time" onfocus="(this.type='time')" onblur="(this.type='text')" />
  </div>
</div>
</div>

            <div class="booking_info">
                <div class="booking_fields"> 
                    <i class="fas fa-car quantites_icon"></i>
                    <div class="quantites">                       
                            <h5><span>2</span>Adult</h5>
                            <h5><span>0</span>children</h5>
                        </div>
                        <div class="quantites_box">
                            <div class="single_box">
                              <div class="children"><h3>Adults</h3><small>12+ year</small></div>  
                              <div class="icon_section">  
                            <i class="fas fa-minus-circle"></i>
                            <span>2</span>
                            <i class="fas fa-plus-circle"></i>
                            </div>
                            </div>

                            <div class="single_box">
                                <div class="children"><h3>children</h3><small>2-12 year</small></div>  
                                <div class="icon_section">  
                              <i class="fas fa-minus-circle"></i>
                              <span>2</span>
                              <i class="fas fa-plus-circle"></i>
                              </div>
                              </div>

                              <div class="single_box">
                                <div class="children"><h3>Infants</h3><small>under 2 year</small></div>  
                                <div class="icon_section">  
                              <i class="fas fa-minus-circle"></i>
                              <span>2</span>
                              <i class="fas fa-plus-circle"></i>
                              </div>
                              </div>
                            
                        </div>
                 </div>
                 <div class="booking_fields">
                 <Link to='/taxi_booking_page_one'>Order Taxi Now</Link>
                 </div>
                 
                </div>

            </form>
        </div>
    </div>
  </div>
</section>

<section class="google_review_section">
    <div class="custom_container">
        <div class="google_review">
            <figure><img src="assets/image/google.png" /></figure>
            <div class="review_start">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
    </div>
</section>

<section class="why_book_us">
    <div class="custom_container">
        <h2>Why book with us</h2>
     <div class="books_us_detali">
         <div class="book_us">
            <div class="book_us_specs_section_one">
                <span><i class="fas fa-thumbs-up"></i><small>Excellent reputation</small></span>
                <span><i class="fas fa-check-circle"></i><small>Free cancellation</small></span>
                <span><i class="far fa-clock"></i><small>Free waiting time</small></span>
                <span><i class="far fa-handshake"></i><small>free meet and greet with nameplate</small></span>
                <span><i class="fas fa-infinity"></i><small>tourism registered driver & vehicle</small></span>
                <span><i class="far fa-credit-card"></i><small>no credit card fees</small></span>
            </div>
         </div>
         <div class="book_us">
            <div class="book_us_specs_section_two">
                <span>
                    <i class="fas fa-handshake"></i>
                    <h3>Meet & greet</h3>
                    <p>Your driver will be waiting to meet you no matter what happens</p>
                </span>
                <span>
                    <i class="fas fa-hand-holding-heart"></i>
                    <h3>Value</h3>
                    <p>Enjoy a high-quality transfer experience at surprisingly low prices</p>
                </span>
                <span>
                    <i class="fas fa-clock"></i>
                    <h3>Speedy</h3>
                    <p>No queues, no delays - we’ll get you to your destination quickly</p>
                </span>
                <span>
                    <i class="fas fa-door-open"></i>
                    <h3>Door-to-Door</h3>
                    <p>For complete peace of mind we’ll take you directly to your hotel door</p>
                </span>
            </div>
        </div>
     </div>         
    </div>
</section>

<section class="our_fleet">
    <div class="custom_container">
        <h2>Our Fleets</h2>
        <div class="fleet_services">
           <div class="single_service">
               <figure><img src="assets/image/standard.png" /></figure>
                <h3>Standard</h3>
                <h4>4 pax & 4 bags</h4>
           </div> 
           <div class="single_service">
            <figure><img src="assets/image/standard.png" /></figure>
             <h3>VIP & Exec</h3>
             <h4>3 pax & 3 bags</h4>
        </div> 
        <div class="single_service">
            <figure><img src="assets/image/family.png" /></figure>
             <h3>Family</h3>
             <h4>5 pax & 6 bags</h4>
        </div> 
        <div class="single_service">
            <figure><img src="assets/image/minivan.png" /></figure>
             <h3>Minivan</h3>
             <h4>9 pax & 9 bags</h4>
        </div> 
        <div class="single_service">
            <figure><img src="assets/image/smallbus.png" /></figure>
             <h3>Small Bus</h3>
             <h4>15 pax & 15 bags</h4>
        </div> 
        <div class="single_service">
            <figure><img src="assets/image/coash.png" /></figure>
             <h3>Coach</h3>
             <h4>30 pax & 30 bags</h4>
        </div> 
        </div>
    </div>
</section>
<section class="our_services_section">
    <div class="custom_container">
        <h2>Our services</h2>
        <div class="our_services">
           <div class="offer_service">
            <i class="fas fa-map-marker-alt"></i>
                <h2>Address Pickup</h2>
           </div> 
           <div class="offer_service">
            <i class="fas fa-plane-departure"></i>
             <h2>Airport Transfer</h2>
        </div>
        <div class="offer_service">
            <i class="fas fa-route"></i>
             <h2>Long Distance</h2>
        </div> 
        <div class="offer_service">
            <i class="fas fa-tree"></i>
             <h2>Taxi Tours</h2>
        </div>
       
        </div>
    </div>
</section>

<section class="order_btn_section">
   
    <div class="custom_container">
        <div class="order_btn">
            
              <a href="#order_taxi_form">Order Taxi Now</a>
           
            </div>
        </div>
</section>


<section class="experience_section">
    <div class="custom_container">
        <h2>Book today and get the Jamrock Taxi experiences</h2>
        <div class="our_experience">
           <div class="experience">
            <i class="fas fa-wallet"></i>
                <h3>Best Prices</h3>
                <h4>We provide the latest models of vehicles for individuals, large groups, families and BMWs for our VIP guests at the best prices.</h4>
           </div> 
           <div class="experience">
            <i class="fas fa-clock"></i>
             <h3>Reliable & Flexible</h3>
             <h4>Our clients can expect the best quality and most reliable service every time. If your plan changes, you can count on us!</h4>
        </div> 
        <div class="experience">
            <i class="fas fa-taxi"></i>
             <h3>Registered Vehicles</h3>
             <h4>All our vehicles and drivers are are tourism industry registered, certified and tracked to ensure we deliver the best service.</h4>
        </div> 
        </div>
    </div>
</section>


        <div class="container">
            <section id="testim" class="testim">
                     <div class="testim-cover">
                        <div class="wrap">
            
                            <span id="right-arrow" class="arrow right fa fa-chevron-right"></span>
                            <span id="left-arrow" class="arrow left fa fa-chevron-left "></span>
                            <ul id="testim-dots" class="dots">
                                <li class="dot active"></li>{/* <!--
                                --> */}<li class="dot"></li>{/* <!--
                                --> */}<li class="dot"></li>{/* <!--
                                --> */}<li class="dot"></li>{/* <!--
                                --> */}<li class="dot"></li>
                            </ul>
                            <div id="testim-content" class="cont">
                                
                                <div class="active">
                                    <div class="img"><img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg" alt="" /></div>
                                    <h2>Lorem P. Ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                                </div>
            
                                <div>
                                    <div class="img"><img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg" alt="" /></div>
                                    <h2>Mr. Lorem Ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                                </div>
            
                                <div>
                                    <div class="img"><img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg" alt="" /></div>
                                    <h2>Lorem Ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                                </div>
            
                                <div>
                                    <div class="img"><img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg" alt="" /></div>
                                    <h2>Lorem De Ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                                </div>
            
                                <div>
                                    <div class="img"><img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg" alt="" /></div>
                                    <h2>Ms. Lorem R. Ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>                    
                                </div>
            
                            </div>
            
                        </div>
                     </div>
                </section>
            </div>


<section class="popular_airport_section">
    <div class="custom_container">
        <h2>Popular airports worldwide</h2>
        <div class="popular_airport">
        
            <div class="airport_list">
                <ul>
                    <li><a href="#">Alicante airport</a></li>
                   <li><a href="#">Amsterdam airport</a></li>
                    <li><a href="#">Antalya airport</a></li>
                        <li><a href="#">Bali Denpasar airport</a></li>
                            <li><a href="#">Barcelona airport</a></li>
                                <li><a href="#">Budapest airport</a></li>
                                    <li><a href="#">Cancún airport</a></li>         
                </ul>
            </div>
            <div class="airport_list">
                <ul>
                    <li><a href="#">Alicante airport</a></li>
                   <li><a href="#">Amsterdam airport</a></li>
                    <li><a href="#">Antalya airport</a></li>
                        <li><a href="#">Bali Denpasar airport</a></li>
                            <li><a href="#">Barcelona airport</a></li>
                                <li><a href="#">Budapest airport</a></li>
                                    <li><a href="#">Cancún airport</a></li>         
                </ul>
            </div>
           
           
            <div class="airport_list">
                <ul>
                    <li><a href="#">Alicante airport</a></li>
                   <li><a href="#">Amsterdam airport</a></li>
                    <li><a href="#">Antalya airport</a></li>
                        <li><a href="#">Bali Denpasar airport</a></li>
                            <li><a href="#">Barcelona airport</a></li>
                                <li><a href="#">Budapest airport</a></li>
                                    <li><a href="#">Cancún airport</a></li>         
                </ul>
            </div>
            <div class="airport_list">
                <ul>
                    <li><a href="#">Alicante airport</a></li>
                   <li><a href="#">Amsterdam airport</a></li>
                    <li><a href="#">Antalya airport</a></li>
                        <li><a href="#">Bali Denpasar airport</a></li>
                            <li><a href="#">Barcelona airport</a></li>
                                <li><a href="#">Budapest airport</a></li>
                                    <li><a href="#">Cancún airport</a></li>         
                </ul>
            </div>
           
        </div>
    </div>
</section>



         </div>
        )
    }
}
export default Home