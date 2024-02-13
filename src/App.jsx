import { fon, bear } from './assets';
import './App.css'
import { useState,useRef, useEffect } from 'react';



function App() {
  const [isUp, setUp] = useState(80)
  function convertOpen(){
    document.querySelector('.list').classList.add('animoflist')
    setUp(20)
    document.querySelector('.main').classList.remove('shake')
    document.querySelector('.title').classList.add('close')
  }
  return (
    <div className='screen'>
      <div className='title'><h1>Click on me!</h1></div>
      <div className='main shake'>
      <div className='convert' onClick={convertOpen}>

        <div className='list'>
          <p>Солнышко, я хочу поздравить тебя с днём всех влюблённых. Ещё несколько месяцев назад, я и представь не мог, насколько ты станешь для меня близким человеком. Я часто смотрю на тебя таким заворожённым взглядом, что даже теряю нить нашего разговора. Я не могу передать словами всю твою красоту, так что я надеюсь ты понимаешь это по моей реакции. Очень сильно тебя люблю❤️</p>
          <img src={bear} className='bear' alt="" />
          <p className='ps'>P.S. Твой Сашенька</p>
        </div>
        <div className='polygon top' style={{clipPath: `polygon(0% 50%,52% ${isUp}%,100% 50%)`}}></div>
        <div className='polygon container'>
          
          <div className='polygon left'></div>
          <div className='polygon right'></div>
          <div className='polygon bot'></div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
