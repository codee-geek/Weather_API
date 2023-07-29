import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useState} from 'react';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import Weather from '@/components/Weather';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [city,setCity]=useState('');
  const [weather,setWeather]=useState({});
  const [loading,setLoading]=useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  // console.log(city)
  const fetchWeather =(e)=>{
    // console.log("rtyu")
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((response)=>{
      setWeather(response.data)
      // console.log(response.data)
    })
    setCity('')
    setLoading(false)
  }
 
  // if(loading){
  //   console.log("load ho rha hai ruk nhi sakte?")
  // }
  // else{
  return (
    
    <div>
        <center>
          <form onSubmit={fetchWeather} >
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[1]'>
            <input onChange={(e) => setCity(e.target.value)}
             className='flex justify-between items-center m-auto p-3 bg-white border border-gray-900 text-black rounded-2xl'
              placeholder='Search city'/></div>
            <button><BsSearch/></button> 
          </form>
        </center>
      {/* {weather.main &&<Weather data={weather} />} */}
      {weather.main && <Weather data={weather} />}

      </div>
  );
}
// }
