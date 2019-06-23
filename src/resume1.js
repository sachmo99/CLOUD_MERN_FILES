import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./table"
import Table1 from "./table1"
class Resume extends React.Component{
  constructor(){
    super();
  }
render() {
  return (
    <div>
    <h2 style={{textAlignVertical: "center",textAlign: "center",lineHeight: 0.1}}>SANJAY KUMAR K.K.R.</h2>
  <h3 style={{textAlignVertical: "center",textAlign: "center",lineHeight: 0.1}}>[Address]</h3>
  <h3 style={{textAlignVertical: "center",textAlign: "center",lineHeight: 0.1}}>[PHONE #]-[EMAIL]</h3>
    <h3 style={{lineHeight: 0.1}}>EDUCATION</h3>
  <hr style={{lineHeight: 0.1}}></hr>
  <div style={{lineHeight: 0.1,display:"float",fontSize:"12"}}>
    <div style={{fontWeight: "bold",float: 'left'}} >University of Washington School of Medicine-Seatle,WA</div>
  <div style={{float: 'right',fontWeight: "bold"}}>[DATE]-PRESENT</div>
  </div>
  <h4 style={{paddingLeft:30,lineHeight: 0.1}}>Doctor of Medicine</h4>
  <h4 style={{paddingLeft:30,lineHeight: 0.1}} >Expected Graduation :</h4>
  <br></br>
  <div style={{lineHeight: 0.1,display:"float",fontSize:"12"}}>
    <div style={{float: 'left',fontWeight: "bold"}} >University of Washington School of Public Health -Seatle,WA</div>
  <div style={{float: 'right',fontWeight: "bold"}}>[DATE]-[DATE]</div>
  </div>
  <h4 style={{paddingLeft:30,lineHeight: 0.1}}>[SECONDARY DEGREE]</h4>
  <br></br>
  <div style={{lineHeight: 0.1,display:"float",fontSize:"12"}}>
    <div style={{float: 'left',fontWeight: "bold"}} >[UNDERGRADUATE]-[LOCATION]</div>
  <div style={{float: 'right',fontWeight: "bold"}}>[DATE]-[DATE]</div>
  </div>
  <h4 style={{paddingLeft:30,lineHeight: 0.1}}>[DEGREE],[FIELD]-[HONORS]</h4>
  <h4 style={{paddingLeft:30,lineHeight: 0.1}}>[MINOR DEGREES]</h4>
  <br></br>
  <h3 style={{lineHeight: 0.1}}>HONORS & AWARDS</h3>
  <hr style={{lineHeight: 0.1}}></hr>
  <div style={{lineHeight: 0.1,display:"float",fontSize:"12"}}>
    <div style={{float: 'left',fontWeight: "bold"}} >[AWARD]</div>
  <div style={{float: 'right',fontWeight: "bold"}}>[YEAR]</div>
  </div>
  <br></br>
  <div style={{lineHeight: 0.1,display:"float",fontSize:"12"}}>
    <div style={{float: 'left',fontWeight: "bold"}} >[AWARD]</div>
  <div style={{float: 'right',fontWeight: "bold"}}>[YEAR]</div>
  </div>
  <h4 style={{paddingLeft:30,lineHeight: 0.1}}>? [DESCRIPTION]</h4>
  <h4 style={{paddingLeft:30,lineHeight: 0.1}}>? [DESCRIPTION]</h4>
  <br ></br>
  <div style={{lineHeight: "0.1",display:"float",fontSize:"12"}}>
    <div style={{float: 'left',fontWeight: "bold"}} >[AWARD]</div>
  <div style={{float: 'right',fontWeight: "bold"}}>[YEAR]</div>
  </div>
  <h4 style={{paddingLeft:30,lineHeight: 0.1}}>? [DESCRIPTION]</h4>
  <h4 style={{paddingLeft:30,lineHeight: 0.1}}>? [DESCRIPTION]</h4>
  <br></br>
  <h3 style={{lineHeight: 0.1}}>RESEARCH EXPERIENCE</h3>
  <hr style={{lineHeight: 0.1}}></hr>
  <div style={{lineHeight: 0.1,display:"float",fontSize:"12"}}>
    <div style={{float: 'left',fontWeight: "bold"}} >[INSTITUTE/COMPANY]- [LOCATION]</div>
  <div style={{float: 'right',fontWeight: "bold"}}>[YEAR]</div>
  </div>
  <h4 style={{paddingLeft:30,lineHeight: 0.5}}>? [PROJECT TITLE]</h4>
  <Table/>
  <br></br>
  <div style={{lineHeight: 0.1,display:"float",fontSize:"12"}}>
    <div style={{float: 'left',fontWeight: "bold"}} >[INSTITUTE/COMPANY]-[LOCATION]</div>
  <div style={{float: 'right',fontWeight: "bold"}}>[DATE]-[DATE]</div>
  </div>
  <h4 style={{paddingLeft:30,lineHeight: 0.5}}>? [PROJECT TITLE]</h4>
  <Table1></Table1>
  <br></br>
  <div style={{lineHeight: 0.1,display:"float",fontSize:"12"}}>
    <div style={{float: 'left',fontWeight: "bold"}} >[INSTITUTE/COMPANY]- [LOCATION]</div>
  <div style={{float: 'right',fontWeight: "bold"}}>[YEAR]</div>
  </div>
  <h4 style={{paddingLeft:30,lineHeight: 0.5}}>? [PROJECT TITLE]</h4>
  <Table1/>
  <br></br>
  <h3 style={{lineHeight: 0.1}}>PRESENTATIONS</h3>
  <hr style={{lineHeight: 0.1}}></hr>
  <h3 style={{lineHeight: 0.1,display:"float",fontSize:"12"}}>
    <div style={{float: 'left'}} >[CONFERENCE TITLE]-[LOCATION]</div>
  <div style={{float: 'right'}}>[YEAR]</div>
  </h3>
  <br></br>
  <h3 style={{lineHeight: 0.1,display:"float",fontSize:"12"}}>
    <div style={{float: 'left'}} >[CONFERENCE TITLE]-[LOCATION]</div>
  <div style={{float: 'right'}}>[YEAR]</div>
  </h3>
  <br></br>
  <h3 style={{lineHeight: 0.1,display:"float",fontSize:"12"}}>
    <div style={{float: 'left'}} >[CONFERENCE TITLE]-[LOCATION]</div>
  <div style={{float: 'right'}}>[YEAR]</div>
  </h3>

</div>
  );
}
}
export default Resume;
