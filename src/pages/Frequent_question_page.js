import React, {Component} from 'react'; 

class Frequent_question_page extends React.Component{
    render(){
        return(
            <div>
<section class="help_banner_section">
    <div class="custom_container">
        <div class="banner_fields">
         <div class="help_banner">
            <h3>Help Centre</h3>
         </div>
         <div class="help_banner">
           <form>
               <input type="search" placeholder="FAQ Keywords or topics" />
               <button>search</button>
           </form>
         </div>
        </div>
    </div>
</section>

<section class="ferquent_questions_section">
    <div class="custom_container">
        <h4>Choosing your destination</h4>
          <div class="ferquent_questions">
                  <ul>
                      <li><a href="single_post_help_center.html">I can’t select my address. What should I do?</a></li>
                      <li><a href="single_post_help_center.html">My hotel is not listed, how can I specify the hotel that I’m going to?</a></li>
                      <li><a href="single_post_help_center.html">How can I cancel my booking?</a></li>
                      <li><a href="single_post_help_center.html">What luggage entitlement will I have?</a></li>
                      <li><a href="single_post_help_center.html">Are child seats available to book and from what age?</a></li>
                      <li><a href="single_post_help_center.html">Will anyone else be travelling in the vehicle I book?</a></li>
                  </ul>
           </div>
    </div>
</section>

            </div>
        )
    }
}
export default Frequent_question_page