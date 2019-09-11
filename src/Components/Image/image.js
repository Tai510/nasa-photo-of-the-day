import React from 'react';


export default function Image (props) {
    return (
      <div>
        <img className='image-style' src={props.hdurl}>
        </img>
        <p title={props.title}> <span>Title :</span>  {props.title}</p>
     </div>
    );
}