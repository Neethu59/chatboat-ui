import React from 'react'
import {Button, Card, Col, Row } from 'react-bootstrap';
import Header from '../Component/Header';
// import { Form } from 'react-router-dom';
import FormCheck from 'react-bootstrap/FormCheck'
import { Form } from 'react-router-dom';
import './Home.css'
import Formradio from '../Component/Formradio';
import {Search} from '@mui/icons-material/';
export default function Home() {
  return (
    <>
    <Row>
   <Header/>
    </Row>
    <Row className='bg-light'>
<Col lg={3} md={3} sm={12}>
<Card className='m-5'>

<form className='container'style={{fontSize:"25px"}}>
      <div className='row'>
        <div className='col'>
          <h3 className='p-2'>Model</h3>
        </div>
      </div>
      <Formradio title="ChatGpt"/>
      <Formradio title="BERT"/>
      <Formradio title="LLALMA-2"/>
      </form>

      <form className='container pt-5'style={{fontSize:"25px"}}>
      <div className='row'>
        <div className='col'>
          <h3 className='p-2'>Document Source</h3>
        </div>
      </div>
      <Formradio title="Local document"/>
      <Formradio title="Other"/>
      </form>

      <form className='container pt-5'style={{fontSize:"25px"}}>
     
      <Formradio title="Confluence"/>
      <Formradio title="Sharepoint"/>
      <Formradio title="Jira"/>
      <Formradio title="Drive"/>
      </form>



</Card>

</Col>
<Col lg={9} md={9} sm={12}>
<div style={{padding:"40px", display:"flex", justifyContent:"center"}}>
    <h3>Ask Questions</h3>
</div>
<div>
<div class="input-group "style={{marginTop:"400px", fontSize:"55px"}}>
  <input type="text"step={{fontSize:"1.5rem"}} class="form-control" placeholder="Enter your Question" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><Search/></span>
  </div>
</div>
<div className='mt-2 p-5 d-flex justify-content-end'>
<button type="button" class="btn btn-primary btn-lg p-2">Clear History</button>
</div>

</div>

</Col>

    </Row>
    </>
  )
}
