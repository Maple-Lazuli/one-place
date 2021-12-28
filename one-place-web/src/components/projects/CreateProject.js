import React from 'react';
import 'semantic-ui-css/semantic.min.css'

class CreateProject extends React.Component {

    // sendNewProject = ()=> {

    // }

    render() {
        return (
            <form className="ui form">
                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name"/>
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name"/>
                </div>
                <div className="field">
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" className="hidden"/>
                            <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button class="ui button" type="submit">Submit</button>
            </form>
        )
    }
}

export default CreateProject;