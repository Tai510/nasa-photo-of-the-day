import React from 'react';


export default function Image (props) {
    console.log(props)
    return (
      <div>
          <img className='image-style' src={props.url}>
          </img>
       <div className='image-section'>
          <p title={props.title}> <span>Title :</span>  {props.title}</p>
          <p date={props.date}> {props.date}</p>
          <p id='copyright' copyright={props.copyright}> Copyright ©  {props.copyright}</p>

       </div>
     </div>
    );
}