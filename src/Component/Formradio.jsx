import React from 'react'

export default function Formradio(props) {
  return (
    <>
     <div className='row'>
        <div className='col'>
          <div className="radio">
            <label>
              <input type="radio"className='radiobtn' value={props.title.toLowerCase()} 
              checked={props.checked}
              onChange={props.onChange} />
              {props.title}
            </label>
          </div>
        </div>
      </div>
    
    
    </>
  )
}
