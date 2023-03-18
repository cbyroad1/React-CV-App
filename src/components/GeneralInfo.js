import React, { Component } from 'react';


class GeneralInfo extends Component {
    constructor(props){
        super(props);

        this.updateGeneral = this.updateGeneral.bind(this)
    }

    updateGeneral = (e) => {
        this.props.updateGeneralInfo(e);
    }

    render(){

        return(
            <div>
                <div className='individual-info'>
                    <h3>General Info:</h3>
                    <form>
                        <p>First Name</p>
                        <input type='text' name="name" className='form-control' onChange={this.updateGeneral} ></input>
                        <p>Email</p>
                        <input type='text' name="email" className='form-control' onChange={this.updateGeneral}  ></input>
                        <p>Phone Number</p>                   
                        <input type='text' name="phone" className='form-control' onChange={this.updateGeneral} ></input>
                        <p>Address</p>                 
                        <input type='text' name="address" className='form-control' onChange={this.updateGeneral} ></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default GeneralInfo;