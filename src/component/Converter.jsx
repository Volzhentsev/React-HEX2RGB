import React from 'react'

export default function Converter(props) {
    const {color} = props;

    if (color === 'Ошибка!'){
      document.body.style.backgroundColor='rgb(255, 0, 0)'
    } else{
      document.body.style.backgroundColor=color;
    }

  return (
        <div className="answer">
            <p>{color}</p>
        </div>
  )
}