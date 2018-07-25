import React, { PureComponent } from 'react'
import { login } from '../../actions/users'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom'


class LoginPage extends PureComponent {
  state = {
    user: false
  }

  handleSubmit = (data) => {
		this.props.login(data.email, data.password)
  }
  
  render() {
    if (this.props.user === true) return (
			<Redirect to="/" />
    )
    
    return (
      <div>
        <h1>Please log in:</h1>
        <LoginForm onSubmit={this.handleSubmit} />
        { this.props.error &&
         <span style={{color:'red'}}>{this.props.error}</span> }
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
    error: state.login.error
	}
}

export default connect(mapStateToProps, { login })(LoginPage)
