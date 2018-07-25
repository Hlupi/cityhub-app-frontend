import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createContent } from '../../actions/content';
import InputForm from './InputForm'

class InputPage extends PureComponent{

    createContent = (content) => {
        this.props.createContent(content)
    }

    render() {
        return(
            <div className='holder'>
               <h1 id='title'>Share a recommendation</h1> 
                <InputForm onSubmit={this.createContent}/>
            </div>
        )
    }
} 


export default connect(null, { createContent })(InputPage)