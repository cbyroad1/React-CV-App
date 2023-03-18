import React, { Component } from 'react';


class EducationInfo extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.props.updateEducationInfo(e);
    }

    render(){

        return(
            <div>
                <div className='individual-info'>
                    <h3>Education Info:</h3>
                    <form>
                        <p>Degree</p>
                        <input type='text' name="degree" onChange={this.handleChange} ></input>
                        <p>University</p>
                        <input type='text' name="university" onChange={this.handleChange}  ></input>
                        <p>Date Graduated</p>                   
                        <input type='text' name="date_graduated" onChange={this.handleChange} ></input>
                        <p>University City</p>                 
                        <input type='text' name="university_city" onChange={this.handleChange} ></input>
                        <p>University State</p>                 
                        <input type='text' name="university_state" onChange={this.handleChange} ></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default EducationInfo;