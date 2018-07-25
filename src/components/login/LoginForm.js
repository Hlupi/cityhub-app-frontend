import React, {PureComponent} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class LoginForm extends PureComponent {
  state = {}

  handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

  handleChange = (event) => {
    const {id, value} = event.target

    this.setState({
      [id]: value
    })
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="email"
            label="email"
            onChange={ this.handleChange }
            margin="normal"
          />
          <br />
          <TextField
            id="password-input"
            label="Password"
            type="password"
            onChange={ this.handleChange }
            margin="normal"
          />
          <br />
          <Button variant="outlined" type="submit">
          Log in
        </Button>
        </form>
      </div>

    )
  }

}
