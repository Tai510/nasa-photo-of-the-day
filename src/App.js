import React, {useState , useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Image from './Components/Image/image.js';
import styled, { css } from 'styled-components'

const MainApp = styled.div`
text-align: center;
`;

const H1 = styled.h1`
  border: 3px solid grey;
  margin: 0px 508px;
  height: 50px;
  padding-top: 5px;
  background-color: #6D89A6;
  color: white;
  text-shadow: 1px 1px black;
  border-top: 3px solid #6D89A6;
`;

const NasaIcons = styled.div `
  border: 3px solid grey;
  margin: 0 508px;
  height: 50px;
  background-color: #6D89A6;
  color: white;
  text-shadow: 1px 1px black;
  border-bottom: 3px solid #6D89A6;
  font-size: 40px;
  display: flex;
  justify-content: space-between;
  font-weight: bolder;
`


function App() {
  const [image , setImage] = useState();  
  const [ title, setTitle ] = useState();
  const [ date, setDate ] = useState();
  const [ copyright, setCopyright ] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((res) => {
        setImage(res.data.url);
        setTitle(res.data.title);
        setDate(res.data.date);
        setCopyright(res.data.copyright);
        return res;  
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch(err => {
      console.log('Cant find Image' , err)
    })
}, [])


  return (
    <MainApp>
        <NasaIcons>
          <i class="fas fa-user-astronaut"></i> Nasa <i class="fas fa-rocket"></i>
        </NasaIcons>
        <H1>Photo Of The Day</H1>
        <Image src={image} title={title} date={date} copyright={copyright} />
    </MainApp>
  );
}

export default App;
