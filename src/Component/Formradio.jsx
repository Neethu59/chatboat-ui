import React from 'react'

export default function Formradio(props) {
  return (
    <>
     <div className='row'>
        <div className='col'>
          <div className="radio">
            <label>
              <input type="radio"className='radiobtn' value="option1" checked={true} />
              {props.title}
            </label>
          </div>
        </div>
      </div>
    
    
    </>
  )
}
