import React from "react";

import "./Services.css";
import AppLayout from "../common/layout";

class Services extends React.Component {
  render() {
    return (
      <AppLayout>
        <section
          class="services_page_section"
          style={{
            background: 'url("assets/image/contact.webp")',
          }}
        >
          <section class="services_section">
            <div class="custom_container">
              <h2>How do we stand out from others</h2>
              <p>
                Car search service with a convenient interface, which provides
                the possibility of specifying a difficult route, requirements
                for the car, miscalculation of the order value.
              </p>

              <div class="services_main">
                <div class="services">
                  <i class="fas fa-map-marker-alt"></i>
                  <h2>Address pickup</h2>
                  <p>
                    You don’t need to worry about late or early flight arrivals
                    as our team will monitor your flight so we know when to
                    expect you.
                  </p>
                  <a href="index.html">
                    <span>Book A Taxi</span>
                  </a>
                </div>

                <div class="services">
                  <i class="fas fa-plane-departure"></i>
                  <h2>Airport transfer</h2>
                  <p>
                    We will assist you with your luggage and take you to your
                    taxi. On arrival your destination driver will assist with
                    your luggage.
                  </p>
                  <a href="index.html">
                    <span>Book A Taxi</span>
                  </a>
                </div>

                <div class="services">
                  <i class="fas fa-route"></i>
                  <h2>Long distance</h2>
                  <p>
                    A meet and greet only costs USD 15 over our standard airport
                    taxi fixed price fares. Our service is subject to 24 hour
                    notice.
                  </p>
                  <a href="index.html">
                    <span>Book A Taxi</span>
                  </a>
                </div>
                <div class="services">
                  <i class="fas fa-suitcase-rolling"></i>
                  <h2>Taxi Tour</h2>
                  <p>
                    Whether travelling in style or luggage capacity is your main
                    priority our luxury SUV Limousines are the best way to get
                    to airport.
                  </p>
                  <a href="index.html">
                    <span>Book A Taxi</span>
                  </a>
                </div>
                <div class="services">
                  <i class="fas fa-headset"></i>
                  <h2>Customer support</h2>
                  <p>
                    For special requests and other questions about our Transfer
                    Services You can use the contact form bellow.
                  </p>
                  <a href="index.html">
                    <span>Book A Taxi</span>
                  </a>
                </div>
                <div class="services">
                  <i class="fas fa-file-signature"></i>
                  <h2>Company contract</h2>
                  <p>
                    Suitable for almost any occasion our fleet luxury SUVs are
                    classy, comfortable vehicles with plenty of luggage space.
                  </p>
                  <a href="index.html">
                    <span>Book A Taxi</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section
            class="counter_section"
            style={{
              background: 'url("assets/image/footer.webp")',
            }}
          >
            <div class="custom_container">
              <div class="counter_main">
                <div class="counter">
                  <h2>122</h2>
                  <h3>Skilled drivers</h3>
                </div>
                <div class="counter">
                  <h2>135</h2>
                  <h3>Cabs online</h3>
                </div>
                <div class="counter">
                  <h2>14</h2>
                  <h3>Years on roads</h3>
                </div>
                <div class="counter">
                  <h2>19</h2>
                  <h3>Locations</h3>
                </div>
              </div>
            </div>
          </section>

          <div class="container">
            <section id="testim" class="testim">
              <div class="testim-cover">
                <div class="wrap">
                  <span
                    id="right-arrow"
                    class="arrow right fa fa-chevron-right"
                  ></span>
                  <span
                    id="left-arrow"
                    class="arrow left fa fa-chevron-left "
                  ></span>
                  <ul id="testim-dots" class="dots">
                    <li class="dot active"></li>
                    {/* <!--
                                --> */}
                    <li class="dot"></li>
                    {/* <!--
                                --> */}
                    <li class="dot"></li>
                    {/* <!--
                                --> */}
                    <li class="dot"></li>
                    {/* <!--
                                --> */}
                    <li class="dot"></li>
                  </ul>
                  <div id="testim-content" class="cont">
                    <div class="active">
                      <div class="img">
                        <img
                          src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
                          alt=""
                        />
                      </div>
                      <h2>Lorem P. Ipsum</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.
                      </p>
                    </div>

                    <div>
                      <div class="img">
                        <img
                          src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
                          alt=""
                        />
                      </div>
                      <h2>Mr. Lorem Ipsum</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.
                      </p>
                    </div>

                    <div>
                      <div class="img">
                        <img
                          src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
                          alt=""
                        />
                      </div>
                      <h2>Lorem Ipsum</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.
                      </p>
                    </div>

                    <div>
                      <div class="img">
                        <img
                          src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
                          alt=""
                        />
                      </div>
                      <h2>Lorem De Ipsum</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.
                      </p>
                    </div>

                    <div>
                      <div class="img">
                        <img
                          src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
                          alt=""
                        />
                      </div>
                      <h2>Ms. Lorem R. Ipsum</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </AppLayout>
    );
  }
}
export default Services;
