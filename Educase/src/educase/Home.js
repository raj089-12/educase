import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CountUp from "react-countup";
import "../App.css";
const Home = () => {
  
  return (
    <div>
      <div className="container" style={{ marginTop: "3%" }}>
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <img
              src="https://educase.io/wp-content/uploads/2021/10/educase-2.webp"
              width={"50%"}
            />
          </div>
          <div className=" col-md-8 col-lg-8 ">
            <nav class="navbar navbar-expand-lg  ">
              <div class="container-fluid">
              
                  
               
                  
                {/* <a class="navbar-brand" href="#">Navbar</a> */}

                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle me-2"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Features
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a class="dropdown-item" id="zip" href="#">
                            CCTV Integration
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" id="zip" href="#">
                            Online Attendance
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" id="zip" href="#">
                            Child Assessment
                          </a>
                        </li>

                        <li>
                          <a class="dropdown-item" id="zip" href="#">
                            Online Class
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" id="zip" href="#">
                            Preschool Management Software
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" id="zip" href="#">
                            Daycare Management Software
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" id="zip" href="#">
                            Fee Management Software
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" id="zip" href="#">
                            RFID Enabled Attendance
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" id="zip" href="#">
                            Parent Communication
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" id="zip" href="#">
                            personalized School App
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" id="zip" href="#">
                            Integrated With Wordpress
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" id="zip" href="#">
                            Franchise Management System
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active me-2"
                        aria-current="page"
                        id="nap"
                        href="#"
                      >
                        EduSocial
                      </a>
                    </li>
                    <li class="nav-item me-2">
                      <a class="nav-link" id="nap" href="#">
                        Career
                      </a>
                    </li>
                    <li class="nav-item me-2">
                      <a class="nav-link" id="nap" href="#">
                        About&nbsp;Us
                      </a>
                    </li>
                    <li class="nav-item me-2">
                      <a class="nav-link" id="nap" href="#">
                        Blog
                      </a>
                    </li>
                  </ul>

                  {/* <i class="fa-brands fa-whatsapp"></i> */}
                  <button className=" me-2 btn btn-" id="book">
                    Contact
                  </button>
                </div>
             
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <p className="for">FOR SCHOOLS</p>
            <h1 className="pop" id="mob">
              Create Your Own
            </h1>{" "}
            <h1 className="pop" id="mob">
              School App In 2 Min
            </h1>
            <p className="best">Best school management software in India for</p>
            <p className="best">facilitating a seamless app experience</p>
            <div class="form-group">
              <input
                type="text"
                id="firname"
                name="firstname"
                placeholder="Enter School Name*"
              ></input>
            </div>
            <div class="form-group">
              <input
                type="submit"
                class="sub"
                id="myBtn1"
                value="Create Your App"
              ></input>
              <button className="btn btn-" id="pill">
                Book a Demo
              </button>
            </div>
            <i class="fa-brands fa-facebook me-3"></i>
            <i class="fa-brands fa-youtube me-3"></i>
            <i class="fa-brands fa-instagram me-3"></i>
            <i class="fa-brands fa-linkedin me-3"></i>
          </div>
          <div className="col-sm-6 col-md-6">
            <img
              src="https://educase.io/wp-content/uploads/2022/10/heroimage-1-scaled.webp"
              width={"115%"}
              height={"480px"}
            />
          </div>
        </div>
      </div>
      <h1 className="sleep" id="mob">
        Trusted by over 100+ clients, including unnamed (6)
      </h1>
      <OwlCarousel items={6} margin={5} autoplay={true}>
        <div>
          {" "}
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-19-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          {" "}
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-17-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-16-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-15-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-13-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-14-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-12-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-11-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-10-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-9-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-8-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-7-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-26-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>

        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>

        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-23-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>

        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-18-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
        <div>
          <img
            src="https://educase.io/wp-content/uploads/elementor/thumbs/unnamed-25-qi53rx9sktaitcax99zeb7pnvr0oxrne5qy2rp5puo.webp"
            id="buy"
          />
        </div>
      </OwlCarousel>

      <p className="solve">INTEGRATED SOLUTION</p>

      <h2 className="sun" id="mob">
        We provide one-stop solution to all your problems
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h4 className="track">Bus Tracking</h4>
            <p className="jam">
              Our bus tracking feature provides guardians with actual data
            </p>

            <h4 className="track">CCTV</h4>
            <p className="jam">
              You can give your parents access to their little one’s classroom.
            </p>
            <h4 className="track">Fee Management</h4>
            <p className="jam">
              Our unique system starts sending reminders to parents 7 days prior
              to the due date.
            </p>
            <h4 className="track">Reports And AlertsHome</h4>
            <p className="jam">
              Keep the parents apprised about the daily schedule of their kids,
              their meal time.
            </p>
          </div>
          <div className="col-md-6 col-lg-6">
            <OwlCarousel
              autoplay={true}
              className="owl-theme"
              loop
              margin={5}
              dots
              items={1}
            >
              <div>
                <img src="https://educase.io/wp-content/uploads/2023/04/bus-tracking-1-1-scaled.webp" />
              </div>
              <div>
                <img src="https://educase.io/wp-content/uploads/2022/11/bus-tracking-1-scaled.webp" />
              </div>
              <div>
                <img src="https://educase.io/wp-content/uploads/2022/11/bus-tracking-scaled.webp" />
              </div>
              <div>
                <img src="https://educase.io/wp-content/uploads/2022/11/report-and-alert-scaled.webp" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ marginTop: "10%" }} id="time">
        <div className="row">
          <p className="sweet">NUMBERS</p>

          <h2 className="let" id="mob">Let the Number Speak</h2>
          <div className="col-5 col-md-6 col-xl-4" id="yummy">
            <span id="mob">
              <CountUp end={10} duration={5} />+
            </span>
            <p className="pencil">FRANCHISES</p>
          </div>

          <div className="col-5 col-md-6 col-xl-4" id="yummy">
            <span id="mob">
              <CountUp end={100} duration={5} />+
            </span>
            <p className="pencil">CLIENTS</p>
          </div>
          <div className="col-5 col-md-6 col-xl-4" id="yummy">
            <span id="mob">
              {" "}
              <CountUp end={10} duration={5} />+
            </span>
            <p className="pencil">TEAM MEMBERS</p>
          </div>
          <div className="col-5 col-md-6 col-xl-4" id="yummy">
            <span id="mob">
              <CountUp end={30} duration={5} />+
            </span>
            <p className="pencil">MODULES</p>
          </div>
        </div>
      </div>

      <p className="fish">PERSONALIZED</p>
      <h2 className="egg">Created For You</h2>

      <div className="container">
        <div className="row">
          <div class="card-group">
            <div class="card">
              <img
                src="https://educase.io/wp-content/uploads/2023/04/fran-with-bg-e1666270884463.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h2 class="title">Franchisors & Administration</h2>
                <p class="fam">
                  Meet the management demands of multiple franchisees with a
                  dynamic platform.
                </p>
                <p class="day">Franchise Management System</p>
              </div>
            </div>
            <div class="card">
              <img
                src="https://educase.io/wp-content/uploads/2023/04/teacher-with-bg-e1666270966583.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h2 class="title">Teachers & Staffs</h2>
                <p class="fam">
                  Easily manage daily tasks, from check-in and activities, to
                  messaging with families.
                </p>
                <p class="day">Daycare Attendance System</p>
              </div>
            </div>
            <div class="card" style={{}}>
              <img
                src="https://educase.io/wp-content/uploads/2023/04/parents1-with-bg-e1666271019630.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h2 class="title">Parents & Guardians</h2>
                <p class="fam">
                  We make it very easy for you to keep track of every little
                  step of progress in the growth of their little one.
                </p>
                <p class="day">Parent Communication</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="have">
        <div className="row">
          <p className="solve">STRATEGY</p>

          <h1 className="sun" id="mob">
            We Have Incredible Services For You
          </h1>
          <div className="col-md-6 col-lg-6" style={{ marginTop: "9%" }}>
            <p className="bill">
              Right from your{" "}
              <strong className="web">personalized website</strong> to creating
              a fully
              <strong className="web"> functional app</strong> with features
              like automated Attendance, Assignment and lesson planning, Bus
              tracking service, Reliable Billing Services, and a lot more
            </p>
            <div class="form-group">
              <input
                type="submit"
                class="mate"
                id="myBtn1"
                value="Create Your App"
              ></input>
              <button className="btn btn-" id="pill">
                Book a Demo
              </button>
            </div>
          </div>
          <div className="col-md-3 col-lg-3" style={{ marginTop: "9%" }}>
            <h2 className="gold" id="cop">
              {" "}
              <i class="fa-solid fa-vector-square"></i>Multi
              <br />
              Branch <br /> Management{" "}
            </h2>

            <h2 className="gold" id="cop" style={{ marginTop: "10%" }}>
              <i class="fa-solid fa-list"></i>Updates
              <br /> and <br /> Observations
            </h2>
          </div>

          <div className="col-md-3 col-lg-3">
            <h2 className="gold" id="cop" style={{ marginTop: "20%" }}>
              <i class="fa-solid fa-video"></i>Digital <br />
              Learning Platform
            </h2>
            <h2 className="gold" id="cop" style={{ marginTop: "10%" }}>
              <i class="fa-solid fa-magnifying-glass"></i>See <br /> More <br />{" "}
              Features
            </h2>
          </div>
        </div>
      </div>

      <div className="container-fluid phone " id="time">
        <p className="sweet">REVIEWS</p>
        <h1 className="let">What Our Clients Say About Us</h1>
        <OwlCarousel
         
          loop={true}
          margin={10}
          nav={true}
          dots={false}
          items={2} // default items on laptop screen
          autoplay={true}
          autoplayTimeout={5000}
          autoplayHoverPause={true}
          responsive={{
            768: {
              items: 2,
              nav: true,
              dots: false,
            
            },
            460: {
              items: 1,
              nav:true,
              dots: true,
             
            },
            0: {
              items: 1,
              nav:true,
              dots: true,
            
            },
          }}
        >
          <div className=" raji" id="mobi">
            <img
              src="https://educase.io/wp-content/uploads/2022/01/lm.webp"
              id="kite"
            />
            {/* <img src="https://educase.io/wp-content/uploads/2022/10/Reviews.svg"/> */}
            <h3 className="owner">Vaishali Vyas </h3>
            <p className="sector"> Owner Little Millennium Airoli Sector 8</p>

            <p className="pro">
              The Educase is the best Preschool & School Management System and
              it is very useful whenever there is an issue or problem it is
              solved very quickly. Due to this app communication with the
              parents has become easier. Thanks, Alok.
            </p>
          </div>
          <div className=" raji" id="mobi">
            <img
              src="https://educase.io/wp-content/uploads/2022/01/uni.webp"
              id="kite"
            />
            <h3 class="owner">Amit Hingu</h3>
            <p class="sector">Owner at Unitedians Kids, Vastral - Ahmedabad</p>
            <p className="pro">
              Eduschool by Educase is one of the best solutions for preschool
              &amp; school management systems. I researched the market for
              applications and Finally, I got a solution from Educase. Quick
              response from the Support team. Recommend to all.
            </p>
          </div>

          <div className="raji" id="mobi">
            <img
              src="https://educase.io/wp-content/uploads/2022/01/essel...webp"
              id="kite"
            />
            <h3 class="owner">Owner</h3>
            <p class="sector">Essel Odean Public School</p>
            <p className="pro">
              The Educase people, very professional, dedicated service
              providers.They work on their clients Ideas with all their R & D,
              considering any project as their own, focusing on value for money
              & Client’s Satisfaction with 24 x 7 support.
            </p>
          </div>

          <div className="raj" id="mobi">
            <img
              src="https://educase.io/wp-content/uploads/2022/01/cambri.webp"
              id="kite"
            />
            <h3 class="owner">Mrs. Shweta Arora</h3>
            <p class="sector">Joyful Happy Hours</p>
            <p className="pro">
              The efforts and the dedication shown by team Educase – Best
              Preschool &amp; School Management System is really commendable, I
              highly recommend them
            </p>
          </div>
        </OwlCarousel>
      </div>

      <p className="solve phone" >READ BLOG</p>
      <h1 className="sun" id="mob">Stay Informed On Our Latest News</h1>
      <div className="container">
        <div className="row">
          <div class="card-group">
            <div class="card">
              <img
                src="https://educase.io/wp-content/uploads/2022/11/New-Project-18-300x169.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h3 class="media">
                  7 New Social Media Trends that You Need to Follow
                </h3>

                <p class="muted">November 15, 2022</p>
              </div>
            </div>
            <div class="card">
              <img
                src="https://educase.io/wp-content/uploads/2022/11/business-people-casual-meeting_53876-101882-1-300x169.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h3 class="media">
                  How to Choose the best Digital Marketing Agency
                </h3>

                <p class="muted">November 3, 2022</p>
              </div>
            </div>
            <div class="card">
              <img
                src="https://educase.io/wp-content/uploads/2022/11/medium-shot-girl-reading-book_23-2148892763-1-300x169.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="media">
                  10+ Reasons to Use School Management Software
                </h5>

                <p class="muted">November 1, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="happy">
        <div className="row">
          <div className="col-md-9 col-lg-9">
            <h1 className="mad" id="mob">Reach Out To Us And </h1>
            <h1 className="mad" id="mob">Upgrade Your Preschool</h1>
            <h5 style={{ fontSize: "20px", fontFamily: "Poppins, Sans-serif" }}>
              Educase changes the way your preschool management system works!
            </h5>
          </div>
          <div className="col-md-3 col-lg-3">
            <div class="form-group">
              <input
                type="submit"
                class="sub"
                id="myBtn1"
                value="Create Your App"
              ></input>
            </div>
            <button className="btn btn-" id="pole">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
      <h1 className="solve">SUBSCRIBE </h1>
      <p className="sun">Stay always in touch!</p>
      <div className="conatiner text-center">
        <div class="form-group">
          <input
            type="text"
            id="enter"
            name="Email"
            placeholder="Enter Your Email"
          />

          {/* <button className="btn btn">Subcribe</button> */}

          <button className="btn btn-" id="lazy">
            <span>Subscribe</span>
          </button>
        </div>
        <i class="fa-brands fa-facebook me-3"></i>
        <i class="fa-brands fa-youtube me-3"></i>
        <i class="fa-brands fa-instagram me-3"></i>
        <i class="fa-brands fa-linkedin me-3"></i>
      </div>

      <div className="container-fluid" id="moon">
        <div className="row">
          <div className=" col-md-6 col-lg-6">
            <img src="https://educase.io/wp-content/uploads/2021/10/261x71.webp" />

            <img
              src="https://educase.io/wp-content/uploads/2022/11/ECA.png"
              width={"45%"}
            />
            <h6
              style={{
                color: "#FFFFFF",
                fontFamily: "Poppins, Sans-serif",
                textAlign: "left",
                fontSize: "22px",
                marginTop: "4%",
              }}
            >
              Educase is a one-stop solution to all the additional resources
              that a school/ preschool need. From customized school management
              software to social media marketing for schools, Educase has been
              putting in continuous efforts to be a solid case for all these
              needs.
            </h6>
          </div>

          <div className="col-md-6 col-lg-6">
            <h4
              style={{
                color: "#FFFFFF",
                fontFamily: "Poppins , Sans-serif",
                fontSize: "24px",
                fontWeight: "700",
                textTransform: "capitalize",
                marginTop: "7%",
              }}
            >
              Contact Us
            </h4>

            <h6
              style={{
                fontFamily: "Poppins, Sans-serif",
                fontSize: "17px",
                fontWeight: "300",
                color: "#FFFFFF",
                paddingLeft: "5px",
                marginTop: "6%",
              }}
            >
              <i class="fa-solid fa-location-dot"></i>
              3rd floor, Sreshta Marvel, Sy.No.136, Kondapur Main Road,
              Gachibowli, Hyderabad, Telangana 500032
            </h6>

            <h6
              style={{
                fontFamily: "Poppins, Sans-serif",
                fontSize: "17px",
                fontWeight: "300",
                color: "#FFFFFF",
                paddingLeft: "5px",
              }}
            >
              <i class="fa-solid fa-location-dot"></i>
              2nd Floor, Above Sambhav Kirana Store Nehar, AIIMS Rd, Jodhpur,
              Rajasthan 342008
            </h6>
            {/* <i class="fa-solid fa-at"></i> */}
            <h6
              style={{
                fontFamily: "Poppins, Sans-serif",
                fontSize: "17px",
                fontWeight: "300",
                color: "#FFFFFF",
                paddingLeft: "5px",
              }}
            >
              {" "}
              <i class="fa-solid fa-at"></i>info@educase.io
            </h6>

            <i class="fa-solid fa-phone"></i>
            <span
              style={{
                fontFamily: "Poppins, Sans-serif",
                fontSize: "17px",
                fontWeight: "300",
                color: "#FFFFFF",
                paddingLeft: "5px",
              }}
            >
              +91 8559892092
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
