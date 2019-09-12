import React from 'react';
import styled, { css } from 'styled-components'

const ImageStyle = styled.img`
height: 420px;
width: 802px;
border: 3px solid white;
`;

const Span = styled.span`
font-weight: bolder;
font-size: 25px
`;

const Para = styled.p`
font-weight: bolder;
font-size: 20px;
`;

const ImageSection = styled.div`
border: 3px solid white;
margin: -3px 315px;
background-color: #6D89A6;
color: white;
text-shadow: 1px 1px black;
`;

const ImageDiv = styled.div`
`




export default function Image (props) {
    console.log("props", props)
    return (
      <ImageDiv>
          <ImageStyle src={props.src}>
          </ImageStyle>
       <ImageSection>
          <Para id='title-section' title={props.title}> <Span>Title :</Span>  {props.title}</Para>
          <Para id='explanation' title={props.title}>{props.explanation}</Para>
          <Para id='copyright' copyright={props.copyright}> Copyright © {props.date} {props.copyright}.</Para>
       </ImageSection>
     </ImageDiv>
    );
}