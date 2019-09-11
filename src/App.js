import React, {useState , useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Image from './Components/Image/image.js';


function App() {
  const [image , setImage] = useState();  
  const [ title, setTitle ] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((res) => {
        setImage(res.data.hdurl);
        setTitle(res.data.title);
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
    <div className="App">
       <Image src={image} title={title}/>
    </div>
  );
}

export default App;
