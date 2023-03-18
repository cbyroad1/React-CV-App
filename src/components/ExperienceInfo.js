import React, { Component } from 'react';


class ExperienceInfo extends Component {
    constructor(props){
        super(props);

        this.updateExperience = this.updateExperience.bind(this)
    }

    updateExperience = (e, id) => {
        this.props.updateExperienceInfo(e, id);
    }

    addExperience = (e) => {
        this.props.addExperienceInfo(e);
    }

    render(){

        return(
            <div>
                {this.props.experiences.map((experience) =>{
                    return(
                        <div className='individual-info'>
                            <h3>Work Experience:</h3>
                            <form>
                                <p>Company</p>
                                <input type='text' name="company" onChange={(e) => this.updateExperience(e, experience.id)} ></input>
                                <p>Job Title</p>
                                <input type='text' name="jobTitle" onChange={(e) => this.updateExperience(e, experience.id)}></input>
                                <p>City</p>                   
                                <input type='text' name="jobCity" onChange={(e) => this.updateExperience(e, experience.id)}></input>
                                <p>State</p>                 
                                <input type='text' name="jobState" onChange={(e) => this.updateExperience(e, experience.id)}></input>
                                <p>Start Date</p>
                                <input type='text' name="start" onChange={(e) => this.updateExperience(e, experience.id)}></input>
                                <p>End Date</p>
                                <input type='text' name="end" onChange={(e) => this.updateExperience(e, experience.id)}></input>
                                <p>Description</p>                   
                                <textarea type='text' name="description" onChange={(e) => this.updateExperience(e, experience.id)}></textarea>
                            </form>
                            <button onClick={this.addExperience}>Add Experience</button>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default ExperienceInfo;