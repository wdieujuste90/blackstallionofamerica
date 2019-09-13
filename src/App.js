import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactBnbGallery from 'react-bnb-gallery'


import './styles/App.css';
import Image from './components/common/Image';
import Navbar from './components/global/Navbar';
import CarouselImage1 from './assets/images/teenheadphones.jpg';
import CarouselImage2 from './assets/images/teenslooking.jpg';
import CarouselImage3 from './assets/images/bestfriends.jpg';

import AboutImage1 from './assets/images/kidsuit.jpg';
import AboutImage2 from './assets/images/teacher.jpg';
import AboutImage3 from './assets/images/communityhands.jpg';
import AboutImage4 from './assets/images/teens.jpg';

import galaPhotos from './assets/images/events';
import jacques1 from './assets/images/events/jacques1.jpg';
const CarouselImageHeight = 1200;

// const galleryEventPhotos = EventImages.map(image => ({
//   src: image,
//   width: 3,
//   height: 2,
// }));


const carouselData = [
  {
    image: CarouselImage1,
    caption: { header: "Our Mission", body: "Nurturing kids into selfless, yet, well balanced adults", }
  },
  {
    image: CarouselImage2,
    caption: { header: "Our Vision", body: "Educate our community at large about bullying and cyber bullying" },
  },
  {
    image: CarouselImage3,
    caption: { header: "Our Goal", body: "Create advocacy opportunities on issues of bullying and cyberbullying" },
  },
];

export default () => {
  const [showGallery, setShowGallery] = useState(false);

  const carouselItems = carouselData.map((item, i) => {
    return (
      <Carousel.Item key={`carousel-${i}`} >
        <Image
          height={CarouselImageHeight}
          className="d-block w-100 img-fluid"
          src={item.image}
        />
        <Carousel.Caption className="bg-black my-carousel-caption">
          <h3 className="carousel-caption-header">{item.caption.header}</h3>
          <p className="carousel-caption-body">{item.caption.body}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div className="App">
      <Navbar />
      <header className="masthead">
        <Carousel id="carousel-header">
          {carouselItems}
        </Carousel>
      </header>

      {/* Black Stallion */}
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Black Stallion of America Corp</h2>
              <h3 className="section-subheading text-muted">Established 2018</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={AboutImage1} alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="text-muted">We nurture kids into selfless, well-balanced adults</h4>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={AboutImage2} alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="text-muted">Teaching and educating the community about bullying, cyberbullying and how to prevent it</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={AboutImage3} alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="text-muted">Develop relationships with organizations, churches and schools to address community issues</h4>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src={AboutImage4} alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="subheading text-muted">Create advocacy opportunities on issues of bullying and cyberbullying</h4>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Be Part
                  <br />Of Our
                  <br />Mission!</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Black Stallion */}
      <section className="page-section" id="community">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Community</h2>
              <br/>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-id-badge fa-stack-1x fa-inverse"></i>

              </span>
              <h4 className="service-heading">Law Enforcement</h4>
              <p className="text-muted">Partnering with our local Law Enforcement officials to help continue establishing awareness of anti-bullying</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-child fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">National Organizations of local chapters</h4>
              <p className="text-muted">Currently establishing a relationship with national organization of local chapters which provides after-school youth programs and educate the youth about anti-bullying awareness</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-hands fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Networking</h4>
              <p className="text-muted">Organized a gala in July 2019 to introduce Black Stallion of America Corp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-light page-section" id="events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Events</h2>
            </div>
          </div>
        </div>
        <div style={{marginTop: 10 }} className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <img height={300} alt="" className="rounded" src={jacques1}></img>
            </div>
            <div className="col-md-8 col-sm-6">
              <a href='javascript:void(0)'onClick={() => setShowGallery(!showGallery)}><h5 className="text-muted text-left">Black Stallion of America Corp Launch Gala - July 2019</h5></a>
              <p className="text-left">Check out our Black Stallion of America Corp Gala pictures where we launched our non-for-profit organization and introduce our vision to friends, family and the community!</p>
            </div>
          </div>
        </div>

      </section>

      <ReactBnbGallery
        show={showGallery}
        photos={galaPhotos}
        onClose={() => setShowGallery(!showGallery)} />

      {/* Team */}
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="" />
                <h6>Gracia Martin Pierre-Pierre</h6>
                <p className="text-muted">President</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt="" />
                <h6>Michel Celestin</h6>
                <p className="text-muted">Vice President</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt="" />
                <h6>Sophie Chery Pierre Pierre</h6>
                <p className="text-muted">Treasury and Marketing</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" noValidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Your Website 2019</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};
