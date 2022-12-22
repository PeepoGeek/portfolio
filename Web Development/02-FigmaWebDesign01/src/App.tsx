
import './App.css'
import { CommentCardComponent } from './components/CommentCardComponent'
import { useState, useRef } from 'react';

function App() {

  const [toggle, setToggle] = useState(false)




  const handleToggle = () => {
    setToggle(!toggle)

  }


  return (

    <main className="content">
      {/*---------------Header Section---------------------*/}

      <header className="header">

        <h1 className="heading-1 heading-1--light header__logo"  >gd.</h1>




        <button onClick={handleToggle} aria-controls='header__nav' className={`header__nav-button header__nav-button--${toggle ? "close" : "open"}`}></button>



        <nav className={toggle ? 'header__nav header__nav-expanded ' : "header__nav header__nav-closed "} id='header__nav'>
          <a href="#" className="header__nav-ele--1">About</a>
          <a href="#" className="header__nav-ele--1">Services</a>
          <a href="#" className="header__nav-ele--1">Our Work</a>
          <a href="#" className="header__nav-ele--2 btn">Enroll Now</a>
        </nav>


      </header>



      {/*---------------Hero Section---------------------*/}

      <section className="hero">
        <div className="hero__text-container">
          <div className="heading-2 hero__text-container__title heading-2--light">Learn the art of<br /> Game Dev</div>
          <p className='hero__text-container__text'>This is a comprehensive course on Game Development. You will learn everything from generating an idea to publishing your games to different platforms.</p>
          <button className="btn hero__btn"><img src='images/pencil.svg' alt="pencil" /> Enroll Now</button>

        </div>

        <div className="hero__img-container">


          <div className='hero__img-container-img' >
            <div className="hero__card-box">
              <div className="hero__card hero__card--1">
                <h2 className=" heading-2 hero__card-heading">32K</h2>
                <p >Students Enrolled</p>
              </div>
              <div className="hero__card hero__card--2 ">

                <div className="hero__card__header ">
                  <h2 className="heading-2  hero__card-heading">4.7</h2>
                  <img src="images/star.svg" alt="star" />

                </div>
                <p>Overall Rating</p>
              </div>
            </div>
            <img src="images/hero-image-1.png" alt="none" />

          </div>
        </div>
      </section>


      {/*---------------Comments Section---------------------*/}

      <section className="comment">
        <div className='comment__main-cards-container'>
          <CommentCardComponent name='Jane Cooper' comment='This is a great course. It helped me a lot. Thank you :)' ocuppation='Developer, Sony'
            key={"card-1"} srcImage="images/user-1.png" />
          <CommentCardComponent name='Jacob Jones' ocuppation='Designer, Facebook' numCard={2} key={"card-2"} comment="Amazing Work! Well done!"
            srcImage='images/user-2.png' />
        </div>




        <div className="comment__text-container">
          <h3 className="comment__text-container__title heading-2">What our students say</h3>
          <p className="comment__text-container__text">All students get access to all the videos and also the source code of the projects.
            You will also have access to a private Discord channel where you can discuss your doubts.</p>


        </div>
        <button className='btn comment__btn'>Learn More</button>





      </section>





      {/*---------------Courses Section---------------------*/}

      <section className="courses">
        <h2 className="courses__title heading-2">Our Courses</h2>

        <div className="courses__card--1 courses__card">
          <div className="courses__card-img">
            <img src="images/course-1.png" alt="courses 1" />
          </div>

          <div className="courses__card-container">
            <h3 className="courses__card-title heading-3">Game Design Essentials
            </h3>
            <div className="courses__card-time-container">
              <img src="images/clock.svg" alt="" className="courses__cart-time-img" />
              <p className="courses__card-time">8 HRS</p>
            </div>

          </div>
        </div>
        <div className="courses__card--2 courses__card">
          <div className="courses__card-img">
            <img src="images/course-2.png" alt="courses 2" />
          </div>

          <div className="courses__card-container">
            <h3 className="courses__card-title heading-3">Unity Game Engine Fundamentals</h3>
            <div className="courses__card-time-container">
              <img src="images/clock.svg" alt="" className="courses__cart-time-img" />
              <p className="courses__card-time">8 HRS</p>
            </div>
          </div>

          <button className='btn courses__btn'>All Courses</button>

        </div>


      </section>

      {/*---------------Download Section---------------------*/}

      <section className="downloads">
        <div className="downloads__container">
          <h1 className="downloads__title heading-1">Get our App</h1>
          <div className="downloads__content">You can use our App for better experience on smartphones</div>

          <div className="downloads__btns">
            <div className="downloads__btn-container--1">
              <button className="downloads__btn">
                <img src="images/apple-store.png" alt="" />
                App Store
              </button>

            </div>
            <div className="downloads__btn-container--2">
              <button className="downloads__btn">
                <img src="images/google-play.png" alt="" />
                Google Play
              </button>
            </div>

          </div>

        </div>
      </section>
      <section className="footer">
        <div className="footer__links-container">
          <h5 className='footer__title--1'>Quick Links</h5>
          <div className="footer__links">
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
          </div>

        </div>
        <div className="footer__links-container">
          <h5 className='footer__title--2'>Course</h5>
          <div className="footer__links">
            <a href="">Log In</a>
            <a href="">Download</a>
            <a href="">All Courses</a>
          </div>


        </div>
        <div className="footer__links-container">
          <h5 className='footer__title--3'>Contact Us</h5>
          <div className="footer__links">

            <a href="">contact@email.com</a>

          </div>
          <div className='footer__links-media'>
            <div style={{ "display": "flex", "margin": "2rem", "gap": "2rem" }}>
              <div className='footer__links-media-img'>
                <img src="images/facebook.png" alt="face" />
              </div>
              <div className='footer__links-media-img'>
                <img src="images/instagram.png" alt="insta" />
              </div>
            </div>


            <div className='footer__input'>
              <input className='footer__input-email' type="email" placeholder='Email Address' />
              <input className='footer__input-submit' type="submit" value={"Subscribe"} />
            </div>


          </div>
        </div>
      </section>


    </main>




  )
}

export default App
