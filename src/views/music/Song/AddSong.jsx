import React from 'react';
import {
    Row, Col, Label, Input,
} from 'reactstrap';

import InputMask from 'react-input-mask';

import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class AddSong extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Add Song</h1>
                        </div>
                    </div>


                            


                    <div className="row margin-0">
                        <div className="col-12">
                            <section className="box ">
                                <header className="panel_header">
                                    <h2 className="title float-left">Basic Info</h2>
                                    
                                </header>
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">

                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4">Song Title</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label htmlFor="inputname4">Song Artist</label>
                                                        <input type="text" className="form-control" id="inputname4" placeholder="" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                       <Label htmlFor="field-11">Song Length (04:54)</Label>
                                                       <InputMask id="field-11" className="form-control" mask="99:99" maskChar="_" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label>Song Release Date</label>
                                                        <div className="controls">
                                                            <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
                                                        </div>
                                                   </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleSelect">Song Genre</Label>
                                                      <Input type="select" name="select" id="exampleSelect">
                                                        <option>Select</option>
                                                        <option>Jazz</option>
                                                        <option>Hip Hop</option>
                                                        <option>Rock</option>
                                                      </Input>
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleText">Brief</Label>
                                                      <Input type="textarea" name="text" id="exampleText" />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleFile">Song Image</Label>
                                                      <Input type="file" name="file" id="exampleFile" />
                                                    </div>

                                                    <div className="form-group col-md-12">
                                                      <Label htmlFor="exampleFile1">Song File</Label>
                                                      <Input type="file" name="file" id="exampleFile1" />
                                                    </div>

                                                </div>
                                                <button type="submit" className="btn btn-primary">Save</button>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>

                    </div>






                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default AddSong;
