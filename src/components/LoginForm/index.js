import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    erroMsg: '',
  }

  onSubmitSucess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = erroMsg => {
    this.setState({showErrorMsg: true, erroMsg})
  }

  SubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const UserDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSucess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeOfUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeOfpassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showErrorMsg, erroMsg} = this.state
    return (
      <div className="login_Container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="image_login_logo"
          />
        </div>
        <form className="login_form_container" onSubmit={this.SubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo_website"
          />
          <div className="input_container">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              className="inputs"
              onClick={this.onChangeOfUsername}
              value={username}
            />
          </div>
          <div className="input_container">
            <label htmlFor="password">password</label>
            <input
              id="password"
              placeholder="password"
              className="inputs"
              onClick={this.onChangeOfpassword}
              value={password}
              type="password"
            />
          </div>
          <button type="submit" className="button_submit">
            Login
          </button>
          {showErrorMsg && <p>*{erroMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
