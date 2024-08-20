import { Component } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { TextField } from '@mui/material'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import './index.css'
import { useNavigate } from 'react-router-dom'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  onChangePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  toggleShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }))
  }

  onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    this.props.navigate('/')
  }

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg })
  }

  submitForm = async (event) => {
    event.preventDefault()
    const { username, password } = this.state
    const userDetails = { username, password }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const { password, showPassword } = this.state
    return (
      <>
        <TextField
          placeholder="Password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={this.onChangePassword}
          variant="outlined"
        />
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={this.toggleShowPassword}
          >
            {showPassword ? (
              <VisibilityOffOutlinedIcon />
            ) : (
              <VisibilityOutlinedIcon />
            )}
          </button>
          <span className="text">Show Password</span>
        </div>
      </>
    )
  }

  renderUsernameField = () => {
    const { username } = this.state
    return (
      <>
        <TextField
          placeholder="Username"
          label="Username"
          value={username}
          onChange={this.onChangeUsername}
          variant="outlined"
        />
      </>
    )
  }

  render() {
    const { showSubmitError, errorMsg } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Navigate to="/" />
    }
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>

          <button className="cta" type="submit">
            <span>Login</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>

          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  navigate: PropTypes.func.isRequired,
}

export default function LoginFormWithNavigate(props) {
  const navigate = useNavigate()
  return <LoginForm {...props} navigate={navigate} />
}
