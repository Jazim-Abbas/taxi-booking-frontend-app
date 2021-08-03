import React from "react";

import "./Career.css";
import AppLayout from "../common/layout";

class Career extends React.Component {
  render() {
    return (
      <AppLayout>
        <section
          class="career_page_section"
          style={{
            background: 'url("assets/image/contact.webp")',
          }}
        >
          <section class="services_section">
            <div class="custom_container">
              <h2>Join our team and make a difference today</h2>
              <p>
                In cooperation with our Transfer Service Network we can provide
                all sorts of Transfers. Write to uor team on the email{" "}
                <a href="#">info@demolink.org</a> and you will be given a
                feedback.
              </p>

              <div class="services_main">
                <div class="services">
                  <i class="fas fa-wallet"></i>
                  <h2>Reliable earnings</h2>
                  <p>
                    Latest Model Vehicles for Groups, Families and Limousines
                    for our VIP guests.
                  </p>
                </div>

                <div class="services">
                  <i class="fas fa-clock"></i>
                  <h2>Flexibility</h2>
                  <p>
                    Feel free to contact us and we will provide a stress-free
                    Transfer to the location you want.
                  </p>
                </div>

                <div class="services">
                  <i class="fas fa-taxi"></i>
                  <h2>Driving safety</h2>
                  <p>
                    Over 15 years experience guarantee a perfect service, top
                    conditions and best prices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section class="become_driver">
            <div class="custom_container">
              <div class="driver_btn">
                <a href="#">Become A Driver</a>
              </div>
            </div>
          </section>

          <section class="driver_form_section">
            <div class="custom_container">
              <div class="driver_form">
                <div class="driver_form_data">
                  <h2>Start to benefit from your car</h2>
                  <h3>
                    Fill out the cooperation application Our employee will
                    contact you as soon as the application is processed.
                  </h3>
                  <span>For employment questions, please contact:</span>
                  <a href="#">+1 000 10 87 000</a>
                </div>

                <div class="driver_form_data">
                  <form>
                    <div class="driver_form_input">
                      <div class="driver_fields">
                        <input type="text" placeholder="Name:" />
                      </div>
                      <div class="driver_fields">
                        <input type="number" placeholder="Phone Number:" />
                      </div>
                      <div class="driver_fields">
                        <input type="email" placeholder="Email:" />
                      </div>
                      <div class="driver_fields">
                        <button>Submit Your Application</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section class="position_section">
            <div class="custom_container">
              <h2>Opening positions</h2>
              <div class="position_main">
                <div class="position">
                  <h2>Driver</h2>
                  <p>
                    Neat driver view, no odors in the ca, knowledge of the main
                    road junctions in the city
                  </p>
                  <div class="driver_properties">
                    <ul>
                      <li>Quick thinking</li>
                      <li>Communicative</li>
                      <li>tress resistant</li>
                    </ul>
                  </div>
                  <a href="#">
                    <span>Become A Driver</span>
                  </a>
                </div>

                <div class="position">
                  <h2>Sales manager</h2>
                  <p>
                    Communication with the client in case of being late to order
                    and warning the client
                  </p>
                  <div class="driver_properties">
                    <ul>
                      <li>Quick thinking</li>
                      <li>Communicative</li>
                      <li>tress resistant</li>
                    </ul>
                  </div>
                  <a href="#">
                    <span>Become A Driver</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </AppLayout>
    );
  }
}
export default Career;
