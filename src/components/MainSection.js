import React, { Component } from 'react';
import EducationInfo from './EducationInfo';
import GeneralInfo from './GeneralInfo';
import Resume from './Resume';
import uniqid from 'uniqid'
import ExperienceInfo from './ExperienceInfo';

class MainSection extends Component {
    constructor(props){
        super(props);
         
        this.state = {
            general:{
                name: 'Name',
                email: 'Email',
                phone: 'Phone Number',
                address: 'Address',
            },
            education: {
                degree: 'Degree',
                university: 'University',
                date_graduated: 'Date Graduated',
                university_city: 'University City',
                university_state: 'University State',
            },
            experiences: [
                {
                    id: uniqid(),
                    company: '',
                    jobTitle: '',
                    jobCity: '',
                    jobState: '',
                    start: '',
                    end: '',
                    description: '',
                }
            ],
            
        }

        this.updateInfo= this.updateInfo.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.updateExperience = this.updateExperience.bind(this);
    }

    updateInfo = (e) => {
        const value = e.target.value;

        this.setState({
            [e.target.name]: value, 
        });
    }

    addExperience = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
           ...prevState,
           experiences: [
            ...prevState.experiences,
            {
                id: uniqid(),
                company: '',
                jobTitle: '',
                jobCity: '',
                jobState: '',
                start: '',
                end: '',
                description: '',
            }
           ]
        }));
    }
        
    updateExperience = (e, id) =>{
        const { name, value } = e.target;

        this.setState(prevState => {
            const newExperience = prevState.experiences.map((experience) => {
                if (experience.id === id) {
                    return {...experience, [name]: value }
                } else {
                    return experience;
                }
            })
            return { ...prevState, experiences: newExperience };
        })
    }
    

    render(){
        return(
            <div id="main-section">
                <div id="info-section">
                    <GeneralInfo updateGeneralInfo = {this.updateInfo} />
                    <EducationInfo updateEducationInfo = {this.updateInfo} />
                    <ExperienceInfo experiences={this.state.experiences} updateExperienceInfo= {this.updateExperience} addExperienceInfo={this.addExperience} />
                </div>
                <Resume info={this.state}/>
            </div>
        )
    }
}

export default MainSection;