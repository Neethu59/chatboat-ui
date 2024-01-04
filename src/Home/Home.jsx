import React, { useState } from 'react'
import {Button, Card, Col, Row } from 'react-bootstrap';
import Header from '../Component/Header';
// import { Form } from 'react-router-dom';

import './Home.css'
import Formradio from '../Component/Formradio';
import {Search} from '@mui/icons-material/';
export default function Home() {
    const[selectedOption, setSelectedOption] = useState('ChatGpt');
    const[checkedOption,setCheckedOption]=useState('Local document')
    const[selectOther,setSelectother]=useState('Confluence')
    const[state,setState]=useState(false)
    const handleRadioChange = (option) => {
      setSelectedOption(option);
    };
    const handleOptionchange=(data)=>{
        setCheckedOption(data)
        if(data==='Other'){
            setState(true)  
        }
        else{
           setState(false) 
        }
    }
    const handleOtherchange=(value)=>{
        setSelectother(value) 
    }
    
  return (
    <>
    <Row>
   <Header/>
    </Row>
    <Row className='bg-light'>
<Col xl={4} lg={4} md={6} sm={12}>
<Card className='m-5 border-0 pt-5 pb-5' >

<form className='container'style={{fontSize:"1.5rem"}}>
      <div className='row'>
        <div className='col'>
          <h3 className='p-2'>Model</h3>
        </div>
      </div>
      <Formradio title="ChatGpt" checked={selectedOption === 'ChatGpt'} onChange={() => handleRadioChange('ChatGpt')} />
      <Formradio title="BERT" checked={selectedOption === 'BERT'} onChange={() => handleRadioChange('BERT')} />
      <Formradio title="LLALMA-2" checked={selectedOption === 'LLALMA-2'} onChange={() => handleRadioChange('LLALMA-2')} />
    
      </form>

      <form className='container pt-5'style={{fontSize:"1.5rem"}}>
      <div className='row'>
        <div className='col'>
          <h3 className='p-2'>Document Source</h3>
        </div>
      </div>
      <Formradio title="Local document" checked={checkedOption==='Local document'}onChange={()=>handleOptionchange('Local document')}/>
      <Formradio title="Other"checked={checkedOption==='Other'}onChange={()=>handleOptionchange('Other')}/>
      </form>
   {state===true?<>
    <form className='container pt-5'style={{fontSize:"1.5rem"}}>
     
     <Formradio title="Confluence"checked={selectOther==='Confluence'}onChange={()=>handleOtherchange('Confluence')}/>
     <Formradio title="Sharepoint"checked={selectOther==='Sharepoint'}onChange={()=>handleOtherchange('Sharepoint')}/>
     <Formradio title="Jira"checked={selectOther==='Jira'}onChange={()=>handleOtherchange('Jira')}/>
     <Formradio title="Drive"checked={selectOther==='Drive'}onChange={()=>handleOtherchange('Drive')}/>
     </form>
</>:<></>}
      



</Card>

</Col>
<Col xl={8} lg={8} md={6} sm={12}>
<div style={{padding:"40px", display:"flex", justifyContent:"center"}}>
    <h3>Ask Questions</h3>
</div>
<div>
<div class="input-group "style={{marginTop:"400px", fontSize:"100px"}}>
  <input type="text"step={{fontSize:"2rem"}} class="form-control" placeholder="Enter your Question" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
