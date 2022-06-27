import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="description_Home">
      <div className="description_Home_min">
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air and it does not quite help that is
          change all the time.clothes having always been a markers of the era
          and we are in a revolution .your Fashion makes you been seen and
          heated that ways you are.so,celebrated the seasons new and exiting
          fashion in yours own way
        </p>
        <button>Shop Now </button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="image_logo_clothe"
        />
      </div>
    </div>
  </>
)

export default Home
