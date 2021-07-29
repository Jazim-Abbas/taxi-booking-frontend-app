import React, {Component} from 'react';

import './taxi_booking_page_two.css';

import {Link} from 'react-router-dom';

class taxi_booking_page_two extends React.Component{

    render(){
        return(
<div>

<section class="taxi_booking_page_one_body">
<section class="page_one_vehical_selection">
    <div class="custom_container">
        <h2>Select Extra</h2>
    <div class="page_one_vehical">
      <div class="page_one_section">
     
         <div class="page_two_booking_complete_summary">
             <p>Transfer Details</p>
             <i class="fas fa-chevron-down"></i>
         </div>
         <div class="transfer_detail_box">
             <div class="pickup_detail_box">
                 <h4>Pickup</h4>
                 <div class="where_from">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="where_from_location">
                        <span>WHERE FROM</span>
                        <p>abc</p>
                    </div>
                 </div>

                 <div class="where_from">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="where_from_location">
                        <span>WHERE TO</span>
                        <p>abc</p>
                    </div>
                 </div>

                 <div class="where_from">
                    <i class="far fa-calendar-alt"></i>
                    <div class="where_from_location">
                        <span>TRAVEL DATE</span>
                        <p>30/7/2021 <small>[Friday 30,July]</small></p>
                    </div>
                 </div>

                 <div class="where_from">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="where_from_location">
                        <span>PICKUP TIME</span>
                        <p>12:00</p>
                    </div>
                 </div>

             </div>


             <div class="pickup_detail_box">
                <h4>Return</h4>
                <div class="where_from">
                   <i class="fas fa-map-marker-alt"></i>
                   <div class="where_from_location">
                       <span>WHERE FROM</span>
                       <p>abc</p>
                   </div>
                </div>

                <div class="where_from">
                   <i class="fas fa-map-marker-alt"></i>
                   <div class="where_from_location">
                       <span>WHERE TO</span>
                       <p>abc</p>
                   </div>
                </div>

                <div class="where_from">
                   <i class="far fa-calendar-alt"></i>
                   <div class="where_from_location">
                       <span>TRAVEL DATE</span>
                       <p>30/7/2021 <small>[Friday 30,July]</small></p>
                   </div>
                </div>

                <div class="where_from">
                   <i class="fas fa-map-marker-alt"></i>
                   <div class="where_from_location">
                       <span>PICKUP TIME</span>
                       <p>12:00</p>
                   </div>
                </div>

            </div>


            <div class="pickup_detail_box">
                <h4>Vehicle Category</h4>
                <div class="where_from">
                    <i class="fas fa-car quantites_icon"></i>
                   <div class="where_from_location">
                       <span>DESCRIPTION</span>
                       <p>Private Taxi With Capacity for <small> 2 </small> passengers <small> 2 </small>medium suitecases<small>2</small> 
                        small hand luggage items</p>
                   </div>
                </div>
            </div>

            <div class="pickup_detail_box">
                <h4>Passengers</h4>
                <div class="where_from">
                    <i class="fas fa-user"></i>
                   <div class="where_from_location">
                       <span>ADULT</span>
                       <p>2</p>
                   </div>
                </div>

                <div class="where_from">
                    <i class="fas fa-user"></i>
                   <div class="where_from_location">
                       <span>CHILDREN</span>
                       <p>0</p>
                   </div>
                </div>

                <div class="where_from">
                    <i class="fas fa-user"></i>
                   <div class="where_from_location">
                       <span>INFANTS</span>
                       <p>0</p>
                   </div>
                </div>
            </div>
            

            
            <div class="pickup_detail_box">
                <h4>Travel Distance & Time</h4>
                <div class="where_from">
                    <i class="fas fa-car quantites_icon"></i>
                   <div class="where_from_location">
                      
                       <p>40 km & <small> 65 Min</small></p>
                   </div>
                </div>
            </div>

         </div>

         <div class="booking_page_one_price_detail" id="laptop_booking_summary">
            <h2>Booking Summary</h2>
            <div class="booking_page_one_total_price">
                <h3>Selected Vehicle</h3>
                <span>$100</span> 
               </div>
               <div class="booking_page_one_total_price total_price_border">
                <h3>Selected Extra</h3>
                <span>$100</span> 
               </div>
               <div class="booking_page_one_total_price">
                   <h3>Total Price</h3>
                   <span>$100</span> 
                  </div>
        </div>
      </div>

      <div class="page_two_section_two">
        
        <form>
            <div class="page_two_extra_detail">
               <div class="page_two_extra">
                   <span><h2>Red Stripe Beer (4 pack) </h2><strong>$20 </strong></span>
                   <small>4 Red Stripe Beers served inside the vehicle </small>
               </div>
               <div class="page_two_extra_quantity">
                <span>
                    <i class="far fa-plus-square"></i>
                    <i class="far fa-minus-square"></i>
                 </span> 
                <strong>10</strong>
                 
              </div>
              <div class="extra_select_btn">
                  <button>Select</button>
              </div>
            </div>

            <div class="page_two_extra_detail">
                <div class="page_two_extra">
                    <span><h2>Champagne + 2 Flutes </h2><strong>$60</strong></span>
                    <small>Bottle of chilled Champagne + 2 flutes </small>
                </div>
                <div class="page_two_extra_quantity">
                 <span>
                     <i class="far fa-plus-square"></i>
                     <i class="far fa-minus-square"></i>
                  </span> 
                 <strong>10</strong>
                  
               </div>
               <div class="extra_select_btn">
                   <button>Select</button>
               </div>
             </div>

             <div class="page_two_extra_detail_parttwo">
                <div class="page_two_extra">
                    <span><h2>En-route Jerk Stop  </h2><strong>$30 </strong></span>
                    <small>30 minute stop en-route for any reason. </small>
                </div>
               <div class="extra_select_btn">
                   <button>Select</button>
               </div>
             </div>

             <div class="page_two_extra_detail_parttwo">
                <div class="page_two_extra">
                    <span><h2>Bouquet of Flowers  </h2><strong>$65 </strong></span>
                    <small>30 minute stop en-route for any reason.  </small>
                </div>
               <div class="extra_select_btn">
                   <button>Select</button>
               </div>
             </div>
        </form>

        <div class="booking_page_one_price_detail" id="mobile_booking_summary">
            <h2>Booking Summary</h2>
            <div class="booking_page_one_total_price">
                <h3>Selected Vehicle</h3>
                <span>$100</span> 
               </div>
               <div class="booking_page_one_total_price total_price_border">
                <h3>Selected Extra</h3>
                <span>$100</span> 
               </div>
               <div class="booking_page_one_total_price">
                   <h3>Total Price</h3>
                   <span>$100</span> 
                  </div>
        </div>

        <div class="continuous_btn">
            <div class="back"><Link to='/taxi_booking_page_one'>Back</Link></div>
            <div class="next"><Link to='/taxi_booking_page_three'>Next</Link></div>
        </div>

    </div>
  

    </div>

    </div>
</section>

</section>
</div>
        )
    }
}
export default taxi_booking_page_two