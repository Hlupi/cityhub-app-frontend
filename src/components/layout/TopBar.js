import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

const TopBar = (props) => {
  const { history } = props

  return (
    <AppBar position="absolute" style={{zIndex:10}} color="inherit">
      <Toolbar>
        <Typography variant="title" color="inherit" style={{flex: 1}} align='left'>
          CityHub Social Screen Dashboard
        </Typography>

          <Button color="inherit" onClick={() => history.push('/contents')}>Add content</Button>


          <Button color="inherit" onClick={() => history.push('/items')}>Recommendations</Button>


          <Button color="inherit" onClick={() => history.push('/insta')}>Insta</Button>


          <Button color="inherit" onClick={() => history.push('/feed')}>Feed</Button>

      </Toolbar>
    </AppBar>
  )
}

export default withRouter(
  connect(null)(TopBar)
)
