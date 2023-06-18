import { useState } from 'react'
import './App.css'
import Converter from './component/Converter'

export default function App() {

  const [color, setColor] = useState('');

  function hex2rgb(hex) {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      } : null;
  }

  const debounce = (func, ms) => {
    let timeout;
    return function() {
    const fnCall = () => {func.apply(this, arguments)}
      clearTimeout(timeout)
      timeout = setTimeout(fnCall, ms)
    }
  };

  let rgb = ({target}) => {
      const {value} = target;
      let rgbColor = hex2rgb(value)
      if (rgbColor === null) {
        setColor('Ошибка!')
      } else {
        setColor(`rgb(${rgbColor['r']},${rgbColor['g']}, ${rgbColor['b']})`)
      }
  };
 
  return (
    <>
      <input type='text' class='color' onChange={debounce(rgb, 1500)}></input>
      <Converter color={color}/>
    </>
  )
}

