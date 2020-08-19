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

import TeamImage1 from './assets/images/sophie.jpg';
import TeamImage2 from './assets/images/michel.jpg'
import TeamImage3 from './assets/images/docheadshot.jpg'

import galaPhotos from './assets/images/events/gala';
import jacques1 from './assets/images/events/gala/jacques1.jpg';
import boysngirlclubphotos from './assets/images/events/BoysGirlsClub';
import pierreselfie from './assets/images/events/BoysGirlsClub/pierreselfie.jpg';



const CarouselImageHeight = 1200;
const BlackStallionFacebookUrl = "https://www.facebook.com/pg/Black-Stallion-of-America-Corp-120170706045204/about/?ref=page_internal";

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

const renderContactSection = () => (
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
);

const renderTeam = () => {
  const teamData = [
    {
      name: 'Gracia Martin Pierre-Pierre',
      position: 'President',
      social: {
        //facebook: '',
      },
      image: TeamImage3,
      bio: [
        "Gracia Martin Jacques-Richard Pierre-Pierre is a man after God’s own heart. He is compassionate, always available to elevate people’s spirit. He is a go getter, a no nonsense guy, a man with principles and values that believes that inside every human being there is a leader and that everybody has the right and the duty to share their God-given gift with the world.",
        "He also is a loving husband that loves and cherishes his wife over everything else in life. A concerned father that is loving his kids into well-adjusted adults. An attentive son that is making sure that his parents know how much he loves them and is appreciative of all the sacrifices that they made so he could have the best chances at succeeding in life.",
        "A man of integrity, of character that believes that kids are the future of a nation and that it is unacceptable to lose them to suicide due to depression brought about by bullying.",
        "Finally but not the least, Dr. Pierre-Pierre teaches us by his accomplishments, that once you understand your purpose in life, once you capture the vision of how you can materialize your dreams, commit your plans to God and surround yourself with people that are for you, you will succeed.",
      ],
    },
    {
      name: 'Michel Celestin',
      position: 'Vice President',
      social: {
        //facebook: '',
      },
      image: TeamImage2,
      bio: [
        "Michel Junior Celestin is a blessed, humble, and empathetic servant-leader. His priorities are straightforward: Faith, Family, and Country. He is a strong believer that we all have agency; therefore, he does not seek to empower anyone. Michel strives to disseminate knowledge and provide others with the necessary tools to empower themselves.",
        "Michel is a proud father and a grateful son. His dedication to fulfilling the responsibilities inherent in those roles is unwavering.",
        "Michel is a Clinical Psychologist who specializes in trauma-related care for both military and civilian patients. He agrees with the scientific community that childhood traumatic experiences such as bullying, in its various forms, can significantly impact adolescents’ psychological well-being and future adjustment to life stressors.",
        "Garcia and Michel can attest from both personal and professional perspectives that unresolved trauma from bullying and their associated compensatory maladaptive coping can lead to an array of behavioral and emotional difficulties in the future without timely and appropriate interventions.",
        "Embodying the quintessential strengths of a black stallion with a heavy focus on resilience and assertiveness are among the core objectives of this movement. Join us and let’s free the dormant stallion within you!"
      ],
    },
    {
      name: 'Sophie Chery Pierre Pierre',
      position: 'Treasury and Marketing',
      social: {
        //facebook: '',
      },
      image: TeamImage1,
      bio: [
        "Sophie Chery Pierre-Pierre is a Nurse Practitioner, a loving and devoted mother and wife.  She was born in Haiti and moved to the United States at the age of 12.  She is an advocate and a voice for the underserved and the elderly population of all racial background.",
        "A product of Boston public schools, Sophie Chery studied nursing at the University of Massachusetts Boston. After completing her BSN She joined the staff at Arbour Hospital, then accepted a nursing staff position at Boston Medical Center.",
        "After a few years working as a nurse she wanted to do more to help others.  Her passion led her to obtain a master’s degree and became a Nurse Practitioner.  She is very passionate about what she does with the underserved and elderly population and has become a voice throughout the HouseCalls program.",
      ],
    },
  ];

  const socialLinks = [
    {
      key: 'email',
      icon: '',
    },
    {
      key: 'facebook',
      icon: 'fa-facebook-f',
    },
    {
      key: 'twitter',
      icon: 'fa-twitter',
    },
    {
      key: 'linkedin',
      icon: 'fa-linkedin-in',
    },
  ];

  return (
    teamData.map((member, i) => {
      return (
        <div key={i} className="col-sm-4">
          <div className="team-member">
            <a href={'#teamModal-' + i} data-toggle="modal"><img className="mx-auto rounded-circle" src={member.image} alt="" /></a>
            <h6>{member.name}</h6>
            <p className="text-muted">{member.position}</p>
            <ul className="list-inline social-buttons">
              {
                socialLinks.map((link, j) => {
                  if (member.social[link.key]) {
                    return (
                      <li key={j} className="list-inline-item">
                        <a rel="noopener noreferrer" target="_blank" href={member.social[link.key]}>
                          <i className={'fab ' + link.icon}></i>
                        </a>
                      </li>
                    );
                  }
                  return null;
                })
              }
            </ul>
          </div>
          <div class="portfolio-modal modal fade" id={"teamModal-" + i} tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                  <div class="lr">
                    <div class="rl"></div>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8 mx-auto">
                      <div class="modal-body">
                        <h3 class="text-uppercase">{member.name}</h3>
                        <p class="item-intro text-muted">{member.position}</p>
                        <img width={200} class="img-fluid d-block mx-auto" src={member.image} alt=""/>
                        { member.bio.map(paragraph => <p>{paragraph}</p>) }
                        <button class="btn btn-primary" data-dismiss="modal" type="button">
                          <i class="fas fa-times"></i> Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

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
        <br></br>
        <div style={{marginTop: 10 }} className="container">
          <div className="row">
          
            <div className="col-md-8 col-sm-6">
              <a href='javascript:void(0)'onClick={() => setShowGallery(!showGallery)}><h5 className="text-muted text-left">Black Stallion of America Corp Launch Gala - July 2019</h5></a>
              <p className="text-left">Check out our Black Stallion of America Corp Gala pictures where we launched our non-for-profit organization and introduce our vision to friends, family and the community!</p>

            </div>
            <div className="col-md-4 col-sm-6">
              <img height={300} alt="" className="rounded" src={pierreselfie}></img>
            </div>
          </div>
        </div>
      </section>

      <ReactBnbGallery
        show={showGallery}
        photos={galaPhotos}
        onClose={() => setShowGallery(!showGallery)} />
      
      <ReactBnbGallery
        show={showGallery}
        photos={boysngirlclubphotos}
        onClose={() => setShowGallery(!showGallery)} />
          

      {/* Team */}
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
              </div>
          </div>
          <div className="row">
            { renderTeam() }
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">If you would like to get involved, please feel free to send us a message on <a target="_blank" href={BlackStallionFacebookUrl}>facebook</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Black Stallion Corp</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href={BlackStallionFacebookUrl}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};
