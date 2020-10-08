import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        /*
            TODO - set initial state for link name and URL 
            
        */
       this.setState({Name:"IBr"});
       this.setState({URL:"ien"});
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       //this.setState({favLinks})
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}

            </form>
        )
    
    }
}

export default Form;
