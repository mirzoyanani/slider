import React,{useState} from "react";
import './slider.css'
function Slider() {
  const urls = [
    'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL1007936_rt_q2qwiw.jpg',
    'https://www.m4music.com/image/cache/catalog/A%20GUITAR%20NEW/OC11-250x250.jpg.webp',
    'https://images.immediate.co.uk/production/volatile/sites/3/2020/04/money_heist_season_4_key_art-9f2139c.jpg',
    'https://www.cheatsheet.com/wp-content/uploads/2021/11/money-heist-tokyo-helsinki-111.png',
    "https://images.hindustantimes.com/img/2021/08/25/1600x900/Money_Heist_Tokyo_1629899737872_1629899745238.jpg"
    
  ]
  const [currentSlide,setcurrentSlide] = useState(0);
  function clickNext(){
    setcurrentSlide((currentSlide+1)%urls.length)
  }
  function clickPrev(){
     setcurrentSlide((currentSlide-1 + urls.length)%urls.length)
  }
  return <div className="slider">
  <button className="previous" onClick={clickPrev}>Prev</button>
  <img src={urls[currentSlide]} alt="https://images.hindustantimes.com/img/2021/08/25/1600x900/Money_Heist_Tokyo_1629899737872_1629899745238.jpg" />
  <button className="next" onClick={clickNext}>Next</button>
  </div>;
}

export default Slider;
