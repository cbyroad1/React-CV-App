import React, { Component } from 'react'

class Resume extends Component {
    constructor(props){
        super(props);

    }

    render(){

        return(
            <div id='resume-section'>
                <div id='resume'>
                    <div className='personal-info'>
                        <span><h3 className="personal-info">{this.props.info.name}</h3></span>
                        <p><span className="personal-info">{this.props.info.address}</span></p>
                        <p><span className="personal-info">{this.props.info.email}</span><span>&nbsp;| </span>
                        <span className="personal-info">{this.props.info.phone}</span></p>
                    </div>
                    <div className='education-section'>
                        <p class="c16"><span class="c4 c12">EDUCATION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                        <p class="c18"><span class="c20">{this.props.info.university}</span><span class="c2">&nbsp;{this.props.info.university_city}, {this.props.info.university_state}</span><span class="c2 c11 c12">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c2">{this.props.info.date_graduated}</span></p>
                        <p class="c18"><span class="c2 c12">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c9 c2">{this.props.info.degree}</span></p>
                        <p class="c16"><span class="c12 c13">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                        <p class="c5"><span class="c3"></span></p>
                    </div>
                    <div className='work-experience'>
                        <p class="c16"><span class="c4 c12">WORK EXPERIENCE</span></p>

                        {this.props.info.experiences.map((experience) => {
                            return(
                                <div>
                                    <p class="c18"><span class="c20">{experience.jobTitle}</span><span class="c20 c12">, </span>
                                    <span class="c2">{experience.company}</span><span class="c2 c12">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span>
                                    <span class="c2">{experience.start} - {experience.end}</span></p><p class="c18">
                                    <span class="c2 c11">{experience.jobCity}</span><span> {experience.jobState}</span><span class="c2">&nbsp;</span></p>
                                    <ul class="c21 lst-kix_list_2-0 start">
                                        <li class="c10 li-bullet-0"><span class="c2">{experience.description}</span></li>
                                    </ul><p class="c5"><span class="c8"></span></p><p class="c5"><span class="c3"></span></p><p class="c16 c22"><span class="c1"></span></p>
                                </div>
                            )
                        })}
                        <p class="c16"><span class="c4">KEY SKILLS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p class="c18">
                        <span class="c2">Skills</span><span class="c2 c11">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p class="c16 c22"><span class="c1"></span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;