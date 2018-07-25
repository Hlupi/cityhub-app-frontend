import React, {PureComponent} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class InputForm extends PureComponent {
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
      <div className="input-form">
        <form onSubmit={this.handleSubmit}>
            <TextField
            id="title"
            label="title"
            onChange={ this.handleChange }
            margin="normal"
            />
            <br />
            <TextField
            id="description"
            label="description"
            onChange={ this.handleChange }
            margin="normal"
            />
            <br />
            <TextField
            id="image"
            label="image"
            onChange={ this.handleChange }
            margin="normal"
            />
            <br />
            <TextField
            id="address"
            label="address"
            onChange={ this.handleChange }
            margin="normal"
            />
            <br />
            <TextField
            id="startDate"
            label="starts"
            onChange={ this.handleChange }
            margin="normal"
            />
            <br />
            <TextField
            id="endDate"
            label="ends"
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
