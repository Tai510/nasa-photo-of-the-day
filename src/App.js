import React, {useState , useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Image from './Components/Image/image.js';


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
    <div className="App">
      <div className='nasa-icons'>
      <i class="fas fa-user-astronaut"></i> Nasa <i class="fas fa-rocket"></i>
      </div>
    <h1 className='h1'>Photo Of The Day</h1>
       <Image src={image} title={title} date={date} copyright={copyright} />
    </div>
  );
}

export default App;
