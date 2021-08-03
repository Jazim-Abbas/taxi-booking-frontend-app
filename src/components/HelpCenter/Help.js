import React from "react";
import { Link } from "react-router-dom";

import "./Help.css";
import AppLayout from "../common/layout";

class Help extends React.Component {
  render() {
    return (
      <AppLayout>
        <section class="help_banner_section">
          <div class="custom_container">
            <div class="banner_fields">
              <div class="help_banner">
                <h3>Help Centre</h3>
                <p>
                  Have a question? Search our most frequently asked questions to
                  find the answer
                </p>
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

        <section class="questiobns_section">
          <div class="custom_container">
            <div class="booking_questions">
              <div class="questions">
                <h4>TOP QUESTIONS BEFORE YOU BOOK</h4>
                <div class="question_list">
                  <ul>
                    <li>
                      <Link to="Single_post_help_center">
                        I can’t select my address. What should I do?
                      </Link>
                    </li>
                    <li>
                      <Link to="Single_post_help_center">
                        My hotel is not listed, how can I specify the hotel that
                        I’m going to?
                      </Link>
                    </li>
                    <li>
                      <Link to="Single_post_help_center">
                        How can I cancel my booking?
                      </Link>
                    </li>
                    <li>
                      <Link to="Single_post_help_center">
                        What luggage entitlement will I have?
                      </Link>
                    </li>
                    <li>
                      <Link to="Single_post_help_center">
                        Are child seats available to book and from what age?
                      </Link>
                    </li>
                    <li>
                      <Link to="Single_post_help_center">
                        Will anyone else be travelling in the vehicle I book?
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="questions">
                <h4>TOP QUESTIONS BEFORE YOU TRAVEL</h4>
                <div class="question_list">
                  <ul>
                    <li>
                      <Link to="Single_post_help_center">
                        What happens if my flight, train or ship is delayed?
                      </Link>
                    </li>
                    <li>
                      <Link to="Single_post_help_center">
                        Where will I meet the driver when I arrive?
                      </Link>
                    </li>
                    <li>
                      <Link to="Single_post_help_center">
                        Where will I be dropped off?
                      </Link>
                    </li>
                    <li>
                      <Link to="Single_post_help_center">
                        How can I amend my booking?
                      </Link>
                    </li>
                    <li>
                      <Link to="Single_post_help_center">
                        How can I cancel my booking?
                      </Link>
                    </li>
                    <li>
                      <Link to="Single_post_help_center">
                        Do I need to confirm my booking with you after I get my
                        booking confirmation?
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="help_faqs_section">
          <div class="custom_container">
            <div class="help_faqs">
              <Link to="Frequent_question_page">
                <i class="fas fa-laptop-code"></i>
                <h4>Making a Booking</h4>
              </Link>
              <Link to="Frequent_question_page">
                <i class="fas fa-map-marker-alt"></i>
                <h4>Choosing your destination</h4>
              </Link>
              <Link to="Frequent_question_page">
                <i class="fas fa-suitcase-rolling"></i>
                <h4>Extras</h4>
              </Link>
              <Link to="Frequent_question_page">
                <i class="fas fa-suitcase-rolling"></i>
                <h4>Payments/Refunds</h4>
              </Link>
              <Link to="Frequent_question_page">
                <i class="fas fa-paste"></i>
                <h4>Amending or cancelling you booking</h4>
              </Link>
              <Link to="Frequent_question_page">
                <i class="fas fa-home"></i>
                <h4>Before you travel</h4>
              </Link>
              <Link to="Frequent_question_page">
                <i class="fas fa-car"></i>
                <h4>During travel</h4>
              </Link>
              <Link to="Frequent_question_page">
                <i class="fas fa-info-circle"></i>
                <h4>General FAQ</h4>
              </Link>
            </div>
          </div>
        </section>
      </AppLayout>
    );
  }
}
export default Help;
