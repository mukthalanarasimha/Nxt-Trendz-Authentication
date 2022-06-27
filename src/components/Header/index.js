import './index.css'

const Header = () => (
  <nav className="navabar_container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo_images"
      />
    </div>
    <div>
      <ul className="sub_header">
        <li className="element">Home</li>
        <li className="element">Products</li>
        <li className="element">Cart</li>
        <button type="button" className="logout_button">
          LOGOUT
        </button>
      </ul>
    </div>
  </nav>
)

export default Header
