import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

var IMGDIR = process.env.REACT_APP_IMGDIR;

class DoctorProfile extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div className="page-title">
                        <div className="float-left">
                            <h1 className="title">Doctor Profile</h1>
                        </div>
                    </div>


                            



                    <div className="col-xl-12">
                        <section className="box profile-page">
                            <div className="content-body">
                                    <div className="col-12">
                                    <div className="row uprofile">
                                        <div className="uprofile-image col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12">
                                            <img alt="" src={IMGDIR+"/images/hospital/doctors/doctor-3.jpg"} className="img-fluid" />
                                        </div>
                                        <div className="uprofile-name col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                                            <h3 className="uprofile-owner">
                                                <a href="#!">Dr. Shaun Nelson</a>
                                            </h3>
                                            <button className="btn btn-primary btn-sm profile-btn">Send message</button>
                                            <button className="btn btn-primary btn-sm profile-btn">Follow</button>
                                            <div className="clearfix"></div>
                                            <p className="uprofile-title">Heart Surgeon</p>
                                            <div className="clearfix"></div>
                                            <p>Humans can evaluate these visual elements in several situations to find a sense of balance. Humans can evaluate these visual elements in several situations to find a sense of balance.</p>
                                            <p className="uprofile-list">
                                                <span><i className='i-home'></i> New York, USA</span> 
                                                <span><i className='i-user'></i> 340 Contacts</span>
                                                <span><i className='i-briefcase'></i> Tech Lead, YIAM</span>

                                            </p>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="col-12">


                            <h4>Biography:</h4>
                            <p>In the United States, the Ed.D. tends to be granted by the school of education of universities and is a terminal degree in education. Majors within the Ed.D. may include: counseling, curriculum and instruction/curriculum and teaching, educational administration, education policy, educational psychology, educational technology, higher education, human resource development, language/linguistics or leadership. </p>
                            <p>In the United States, the Ed.D. tends to be granted by the school of education of universities and is a terminal degree in education. Majors within the Ed.D. may include: counseling, curriculum and instruction/curriculum and teaching, educational administration, education policy, educational psychology, educational technology, higher education, human resource development, language/linguistics or leadership. </p>
                            <div className="clearfix"></div>
                            <hr/>
                            <h4>Education:</h4>
                            <ul>
                                <li>M.B.B.S from Ski University</li>
                                <li>M.B.B.S from Ski University</li>
                                <li>M.D from Ski University</li>
                                <li>D.N.B from Ski University</li>
                                <li>M.D from Ski University</li>
                                <li>D.N.B from Ski University</li>
                            </ul>
                            <div className="clearfix"></div>
                            <hr/>
                            <h4>Experience:</h4>
                            <ul>
                                <li>Integer tincidunt.</li>
                                <li>Praesent vestibulum dapibus nibh.</li>
                                <li>M.B.B.S from Ski University</li>
                                <li>Praesent vestibulum dapibus nibh.</li>
                                <li>Proin pretium, leo ac pellentesque mollis justo.</li>
                                <li>unc ultrices eros, sed gravida augue augue</li>
                            </ul>

                            <div className="clearfix"></div>
                            <hr/>
                            <h4>Accomplishments:</h4>
                            <ul>
                                <li>Integer tincidunt.</li>
                                <li>Praesent vestibulum dapibus nibh.</li>
                                <li> Phasellus consectetuer vestibulum elit.</li>
                                <li>M.B.B.S from Ski University</li>
                                <li>Praesent vestibulum dapibus nibh.</li>
                                <li>Proin pretium, leo ac pellentesque mollis justo.</li>
                                <li>unc ultrices eros, sed gravida augue augue</li>
                            </ul>
                            <div className="clearfix"></div>
                            <hr/>
                            <h4>Membership:</h4>
                            <ul>
                                <li>M.B.B.S from Ski University</li>
                                <li>M.D from Ski University</li>
                                <li>D.N.B from Ski University</li>
                                <li>M.B.B.S from Ski University</li>
                                <li>M.D from Ski University</li>
                                <li>D.N.B from Ski University</li>
                                <li>M.B.B.S from Ski University</li>
                                <li>M.D from Ski University</li>
                                <li>D.N.B from Ski University</li>
                            </ul>
                            <div className="clearfix"></div>
                           
                                    </div>

                            </div>
                            </section>
                            </div>
           



                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default DoctorProfile;
