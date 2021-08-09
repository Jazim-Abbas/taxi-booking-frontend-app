import AppLayout from "../components/common/layout";
import BookTaxiInitialForm from "../components/book-taxi";

export default function Home() {
  return (
    <AppLayout>
      <section className="banner">
        <div className="custom_container">
          <div className="banner_data">
            <div className="banner_text">
              <h1>Fast and convenient</h1>
              <h2>Everywhere, anytime</h2>
              <h3>Enjoy comfortable trip, order taxi online</h3>
            </div>
            <div className="booking_detail">
              <BookTaxiInitialForm />
            </div>
          </div>
        </div>
      </section>

      <section className="google_review_section">
        <div className="custom_container">
          <div className="google_review">
            <figure>
              <img src="assets/image/google.png" alt="" />
            </figure>
            <div className="review_start">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="why_book_us">
        <div className="custom_container">
          <h2>Why book with us</h2>
          <div className="books_us_detali">
            <div className="book_us">
              <div className="book_us_specs_section_one">
                <span>
                  <i className="fas fa-thumbs-up"></i>
                  <small>Excellent reputation</small>
                </span>
                <span>
                  <i className="fas fa-check-circle"></i>
                  <small>Free cancellation</small>
                </span>
                <span>
                  <i className="far fa-clock"></i>
                  <small>Free waiting time</small>
                </span>
                <span>
                  <i className="far fa-handshake"></i>
                  <small>free meet and greet with nameplate</small>
                </span>
                <span>
                  <i className="fas fa-infinity"></i>
                  <small>tourism registered driver & vehicle</small>
                </span>
                <span>
                  <i className="far fa-credit-card"></i>
                  <small>no credit card fees</small>
                </span>
              </div>
            </div>
            <div className="book_us">
              <div className="book_us_specs_section_two">
                <span>
                  <i className="fas fa-handshake"></i>
                  <h3>Meet & greet</h3>
                  <p>
                    Your driver will be waiting to meet you no matter what
                    happens
                  </p>
                </span>
                <span>
                  <i className="fas fa-hand-holding-heart"></i>
                  <h3>Value</h3>
                  <p>
                    Enjoy a high-quality transfer experience at surprisingly low
                    prices
                  </p>
                </span>
                <span>
                  <i className="fas fa-clock"></i>
                  <h3>Speedy</h3>
                  <p>
                    No queues, no delays - we’ll get you to your destination
                    quickly
                  </p>
                </span>
                <span>
                  <i className="fas fa-door-open"></i>
                  <h3>Door-to-Door</h3>
                  <p>
                    For complete peace of mind we’ll take you directly to your
                    hotel door
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our_fleet">
        <div className="custom_container">
          <h2>Our Fleets</h2>
          <div className="fleet_services">
            <div className="single_service">
              <figure>
                <img src="assets/image/standard.png" alt="" />
              </figure>
              <h3>Standard</h3>
              <h4>4 pax & 4 bags</h4>
            </div>
            <div className="single_service">
              <figure>
                <img src="assets/image/standard.png" alt="" />
              </figure>
              <h3>VIP & Exec</h3>
              <h4>3 pax & 3 bags</h4>
            </div>
            <div className="single_service">
              <figure>
                <img src="assets/image/family.png" alt="" />
              </figure>
              <h3>Family</h3>
              <h4>5 pax & 6 bags</h4>
            </div>
            <div className="single_service">
              <figure>
                <img src="assets/image/minivan.png" alt="" />
              </figure>
              <h3>Minivan</h3>
              <h4>9 pax & 9 bags</h4>
            </div>
            <div className="single_service">
              <figure>
                <img src="assets/image/smallbus.png" alt="" />
              </figure>
              <h3>Small Bus</h3>
              <h4>15 pax & 15 bags</h4>
            </div>
            <div className="single_service">
              <figure>
                <img src="assets/image/coash.png" alt="" />
              </figure>
              <h3>Coach</h3>
              <h4>30 pax & 30 bags</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="our_services_section">
        <div className="custom_container">
          <h2>Our services</h2>
          <div className="our_services">
            <div className="offer_service">
              <i className="fas fa-map-marker-alt"></i>
              <h2>Address Pickup</h2>
            </div>
            <div className="offer_service">
              <i className="fas fa-plane-departure"></i>
              <h2>Airport Transfer</h2>
            </div>
            <div className="offer_service">
              <i className="fas fa-route"></i>
              <h2>Long Distance</h2>
            </div>
            <div className="offer_service">
              <i className="fas fa-tree"></i>
              <h2>Taxi Tours</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="order_btn_section">
        <div className="custom_container">
          <div className="order_btn">
            <a href="#order_taxi_form">Order Taxi Now</a>
          </div>
        </div>
      </section>

      <section className="experience_section">
        <div className="custom_container">
          <h2>Book today and get the Jamrock Taxi experiences</h2>
          <div className="our_experience">
            <div className="experience">
              <i className="fas fa-wallet"></i>
              <h3>Best Prices</h3>
              <h4>
                We provide the latest models of vehicles for individuals, large
                groups, families and BMWs for our VIP guests at the best prices.
              </h4>
            </div>
            <div className="experience">
              <i className="fas fa-clock"></i>
              <h3>Reliable & Flexible</h3>
              <h4>
                Our clients can expect the best quality and most reliable
                service every time. If your plan changes, you can count on us!
              </h4>
            </div>
            <div className="experience">
              <i className="fas fa-taxi"></i>
              <h3>Registered Vehicles</h3>
              <h4>
                All our vehicles and drivers are are tourism industry
                registered, certified and tracked to ensure we deliver the best
                service.
              </h4>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section id="testim" className="testim">
          <div className="testim-cover">
            <div className="wrap">
              <span
                id="right-arrow"
                className="arrow right fa fa-chevron-right"
              ></span>
              <span
                id="left-arrow"
                className="arrow left fa fa-chevron-left "
              ></span>
              <ul id="testim-dots" className="dots">
                <li className="dot active"></li>
                {/* <!--
                                --> */}
                <li className="dot"></li>
                {/* <!--
                                --> */}
                <li className="dot"></li>
                {/* <!--
                                --> */}
                <li className="dot"></li>
                {/* <!--
                                --> */}
                <li className="dot"></li>
              </ul>
              <div id="testim-content" className="cont">
                <div className="active">
                  <div className="img">
                    <img
                      src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
                      alt=""
                    />
                  </div>
                  <h2>Lorem P. Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>

                <div>
                  <div className="img">
                    <img
                      src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
                      alt=""
                    />
                  </div>
                  <h2>Mr. Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>

                <div>
                  <div className="img">
                    <img
                      src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
                      alt=""
                    />
                  </div>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>

                <div>
                  <div className="img">
                    <img
                      src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
                      alt=""
                    />
                  </div>
                  <h2>Lorem De Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>

                <div>
                  <div className="img">
                    <img
                      src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
                      alt=""
                    />
                  </div>
                  <h2>Ms. Lorem R. Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="popular_airport_section">
        <div className="custom_container">
          <h2>Popular airports worldwide</h2>
          <div className="popular_airport">
            <div className="airport_list">
              <ul>
                <li>
                  <a href="#1">Alicante airport</a>
                </li>
                <li>
                  <a href="#1">Amsterdam airport</a>
                </li>
                <li>
                  <a href="#1">Antalya airport</a>
                </li>
                <li>
                  <a href="#1">Bali Denpasar airport</a>
                </li>
                <li>
                  <a href="#1">Barcelona airport</a>
                </li>
                <li>
                  <a href="#1">Budapest airport</a>
                </li>
                <li>
                  <a href="#1">Cancún airport</a>
                </li>
              </ul>
            </div>
            <div className="airport_list">
              <ul>
                <li>
                  <a href="#1">Alicante airport</a>
                </li>
                <li>
                  <a href="#1">Amsterdam airport</a>
                </li>
                <li>
                  <a href="#1">Antalya airport</a>
                </li>
                <li>
                  <a href="#1">Bali Denpasar airport</a>
                </li>
                <li>
                  <a href="#1">Barcelona airport</a>
                </li>
                <li>
                  <a href="#1">Budapest airport</a>
                </li>
                <li>
                  <a href="#1">Cancún airport</a>
                </li>
              </ul>
            </div>

            <div className="airport_list">
              <ul>
                <li>
                  <a href="#1">Alicante airport</a>
                </li>
                <li>
                  <a href="#1">Amsterdam airport</a>
                </li>
                <li>
                  <a href="#1">Antalya airport</a>
                </li>
                <li>
                  <a href="#1">Bali Denpasar airport</a>
                </li>
                <li>
                  <a href="#1">Barcelona airport</a>
                </li>
                <li>
                  <a href="#1">Budapest airport</a>
                </li>
                <li>
                  <a href="#1">Cancún airport</a>
                </li>
              </ul>
            </div>
            <div className="airport_list">
              <ul>
                <li>
                  <a href="#1">Alicante airport</a>
                </li>
                <li>
                  <a href="#1">Amsterdam airport</a>
                </li>
                <li>
                  <a href="#1">Antalya airport</a>
                </li>
                <li>
                  <a href="#1">Bali Denpasar airport</a>
                </li>
                <li>
                  <a href="#1">Barcelona airport</a>
                </li>
                <li>
                  <a href="#1">Budapest airport</a>
                </li>
                <li>
                  <a href="#1">Cancún airport</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
