import React from 'react';
import styled, { css } from 'styled-components'

const ImageStyle = styled.img`
height: 420px;
width: 420px;
border: 3px solid grey;
`;

const Span = styled.span`
font-weight: bolder;
font-size: 25px
`;

const Para = styled.p`
font-weight: bolder;
font-size: 20px
`;

const ImageSection = styled.div`
border: 3px solid grey;
margin: 5px 508px;
background-color: #6D89A6;
color: white;
text-shadow: 1px 1px black;
`;




export default function Image (props) {
    console.log(props)
    return (
      <div>
          <ImageStyle src={props.url}>
          </ImageStyle>
       <ImageSection>
          <Para title={props.title}> <Span>Title :</Span>  {props.title}</Para>
          <Para date={props.date}> {props.date}</Para>
          <Para id='copyright' copyright={props.copyright}> Copyright ©  {props.copyright}</Para>
       </ImageSection>
     </div>
    );
}