import React, {useState , useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Image from './Components/Image/image.js';
import styled, { css } from 'styled-components'

const MainApp = styled.div`
  text-align: center;
  background-image: url('https://images8.alphacoders.com/685/685661.jpg')
`;

const H1 = styled.h1`
  border: 3px solid white;
  margin: 0 315px;
  height: 50px;
  padding-top: 5px;
  background-color: #6D89A6;
  color: white;
  text-shadow: 1px 1px black;
  border-top: 3px solid #6D89A6;
  border-bottom: 3px solid #6D89A6;
  cursor: pointer;
`;


function App() {
  const [ image , setImage ] = useState();  
  const [ title, setTitle ] = useState();
  const [ explanation, setExplanation ] = useState();
  const [ date, setDate ] = useState();
  const [ copyright, setCopyright ] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=1pcsXqgloQjpDorKhVxy62ya2XNMig8jJAD4V1xc')
    .then((res) => {
        setImage(res.data.hdurl);
        setTitle(res.data.title);
        setExplanation(res.data.explanation);
        setDate(res.data.date);
        setCopyright(res.data.copyright);
        return res;  
    })
    .then((res) => {
        console.log('data', res.data)
    })
    .catch(err => {
        console.log('Cant find Image' , err)
    })
}, [])

  return (
    <MainApp>
        <H1>Picture Of The Day</H1>
        <Image src={image} title={title} explanation={explanation} date={date} copyright={copyright} />
    </MainApp>
  );
}

export default App;
