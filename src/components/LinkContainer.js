import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state = { 
            storeFaveLink: props.storeFaveLink
        }
    }
     removeLink = remove =>{
         for (var i = 0; i < this.state.storeFaveLink; i++){
                if (this.state.storeFaveLink > 1){
                    this.state.storeFaveLink[i] = "";
                }
         }
     }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
            this.setState({
                storeFaveLink: []
            })
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */
                    <table >
                        <button onClick> = {this.removeCharacter} Delete </button>
                        <Table> </Table>
                     </table>
            }
                
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */
                    <form>
                        <label> Name:
                            <input type="text" name="name" />
                        </label>
                        <label> URL:
                            <input type="text" url="url" />
                        </label>
                            <input type="submit" value="Submit" />
                        
                    </form>
                }
            </div>
        );
    }
}

export default LinkContainer;