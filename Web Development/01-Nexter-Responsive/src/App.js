
import './sass/main.scss';

const featureTitleText = ["World's best luxury homes", "Only the best properties", "All homes in top locations",
  "New home in one week", "Top 1% realtors", "Secure payments"]

const featureContentText = ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
  "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.",
  "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.",
  "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.",
  "Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."]
const featureSvgname = ["global", "trophy", "map-pin", "key", "presentation", "lock"]

const homeTitleCard = ["Beutiful Family House", "Modern Glass Village", "Cozy Country House",
  "Large Rustical Village", "Majestic Palace House", "Modern Family Apartment"]
const priceHomeCard = ["1,200,000", "2,750,000", "850,000", "1,950,000", "9,500,000", "600,000"]
const spaceHomeCard = ["325", "450", "250", "300", "4230", "180"]
const numberRoomsCard = ["5", "6", "4", "6", "18", "3"]
const locationHomeCard = ["USA", "Canada", "UK", "Portugal", "Germany", "Italy"]


function App() {


  return (
    <main className="container">
      <div className="sidebar">
        <button className="nav-btn"></button>
      </div>
      <aside className="realtors">
        <h3 className="heading-3">Top 3 Realtors</h3>
        <div className="realtors__list">
          <img src="img/realtor-1.jpeg" alt="Realtor 1" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
            <p className="realtors__sold">245 houses sold</p>
          </div>
          <img src="img/realtor-2.jpeg" alt="Realtor 1" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Kim Brown</h4>
            <p className="realtors__sold">212 houses sold</p>
          </div>
          <img src="img/realtor-3.jpeg" alt="Realtor 1" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
            <p className="realtors__sold">198 houses sold</p>
          </div>

        </div>
      </aside>

      {/*--------- Header  ---------*/}

      <header className="header" id="header">
        <img src="img/logo.png" alt="Nexter Logo" className="header__logo" />
        <h3 className="heading-3">Your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">View our properties</button>
        <div className="header__seenon-text">Seen on</div>
        <div className="header__seenon-logos">
          <img src="img/logo-bbc.png" alt="seen on logo 1" />
          <img src="img/logo-forbes.png" alt="seen on logo 2" />
          <img src="img/logo-techcrunch.png" alt="seen on logo 3" />
          <img src="img/logo-bi.png" alt="seen on logo 4" />
        </div>
      </header>


      {/*--------- Feature Section ---------*/}

      <section className="features">

        {featureTitleText.map((val, i) => {

          return (
            <div className="feature">
              <svg className="feature__icon">
                <use xlinkHref={`img/sprite.svg#icon-${featureSvgname[i]}`} ></use>
              </svg>
              <h4 className="heading-4--dark">{val}</h4>
              <p className="feature__text">{featureContentText[i]}</p>
            </div>)

        })}


      </section>


      {/*--------- Story Section ---------*/}
      <section className="story">
        <div className="story__pictures">
          <img src="img/story-1.jpeg" alt="Couple with new house" className="story__img--1" />
          <img src="img/story-2.jpeg" alt="new house" className="story__img--2" />

        </div>
        <div className="story__content">
          <h3 className="heading-3 mb-sm">Happy customers</h3>
          <h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&ldquo;</h2>
          <p className="story__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!</p>
          <button className="btn">Find your own home</button>
        </div>

      </section>





      {/*--------- Homes Section ---------*/}

      <section className="homes">

        {homeTitleCard.map((el, i) => {

          return (<div className="home">
            <img src={`img/house-${i + 1}.jpeg`} alt={`house ${i + 1}`} className="home__img" />
            <svg className="home__like">
              <use xlinkHref={`img/sprite.svg#icon-heart-full`} ></use>
            </svg>
            <h5 className="home__name">{el}</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref={`img/sprite.svg#icon-map-pin`} ></use>
              </svg>
              <p>{locationHomeCard[i]}</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref={`img/sprite.svg#icon-profile-male`} ></use>
              </svg>
              <p>{`${numberRoomsCard[i]} rooms`}</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref={`img/sprite.svg#icon-expand`} ></use>
              </svg>
              <p>{`${spaceHomeCard[i]} m`}<sup>2</sup></p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref={`img/sprite.svg#icon-key`} ></use>
              </svg>
              <p>{`$ ${priceHomeCard[i]}`}</p>
            </div>
            <button className="btn home__btn">Contact realtor</button>
          </div>
          )


        })



        }


      </section>




      {/*--------- Gallery Section ---------*/}
      <section className="gallery">
        {[...Array(14).keys()].map((val) => {
          return (

            <figure className={`gallery__item gallery__item--${val + 1}`}>
              <img src={`img/gal-${val + 1}.jpeg`} alt={`Gallery ${val + 1}`} className="gallery__img" />
            </figure>


          )
        })}
      </section>

      {/*--------- Footer Section ---------*/}


      <footer className="footer">
        <ul className="nav">
          <li className="nav__item">
            <a href="#id" className="nav__link">Find your dream home</a>
          </li>
          <li className="nav__item">
            <a href="#id" className="nav__link">Request proposal</a>
          </li><li className="nav__item">
            <a href="#id" className="nav__link">Download home planner</a>
          </li><li className="nav__item">
            <a href="#id" className="nav__link">Contact us</a>
          </li><li className="nav__item">
            <a href="#id" className="nav__link">Submit your property</a>
          </li><li className="nav__item">
            <a href="#id" className="nav__link">Come work with use</a>
          </li>
        </ul>
        <p className="copyright">
          &copy; Copyright 2022 by Jonas Schmedtmann.
        </p>
      </footer>
    </main>
  );
}

export default App;
