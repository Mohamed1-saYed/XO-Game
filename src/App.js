import react,{useState,useEffect,useRef} from 'react';
import "./App.css";
export default function App() {
  let [ChosePlayer,SetPlayer] = useState(localStorage.getItem("Player")||"o");
  let [PlayerWinner,SetPlayerWinner] = useState("");

  const Container_Game = useRef();
  const Audio_Effrct = useRef();
  const box_1 = useRef();
  const box_2 = useRef();
  const box_3 = useRef();
  const box_4 = useRef();
  const box_5 = useRef();
  const box_6 = useRef();
  const box_7 = useRef();
  const box_8 = useRef();
  const box_9 = useRef();

 useEffect(function(){
  if(box_1.current.innerHTML!=""&&box_2.current.innerHTML!=""&&box_3.current.innerHTML!=""&&box_1.current.innerHTML==box_2.current.innerHTML&&box_2.current.innerHTML==box_3.current.innerHTML){
    SetPlayerWinner(`Player (${box_1.current.innerHTML}) is winner`);
    box_4.current.style.cssText = `color: #ffffff96`;
    box_5.current.style.cssText = `color: #ffffff96`;
    box_6.current.style.cssText = `color: #ffffff96`;
    box_7.current.style.cssText = `color: #ffffff96`;
    box_8.current.style.cssText = `color: #ffffff96`;
    box_9.current.style.cssText = `color: #ffffff96`;
     setTimeout(function(){
       window.location.reload()
     },2000)
    Container_Game.current.style = "pointer-events: none";
  }else if(box_4.current.innerHTML!=""&&box_5.current.innerHTML!=""&&box_6.current.innerHTML!=""&&box_4.current.innerHTML==box_5.current.innerHTML&&box_5.current.innerHTML==box_6.current.innerHTML){
    SetPlayerWinner(`Player ${box_4.current.innerHTML} is winner`);
    box_1.current.style.cssText = `color: #ffffff96`;
    box_2.current.style.cssText = `color: #ffffff96`;
    box_3.current.style.cssText = `color: #ffffff96`;
    box_7.current.style.cssText = `color: #ffffff96`;
    box_8.current.style.cssText = `color: #ffffff96`;
    box_9.current.style.cssText = `color: #ffffff96`;
    setTimeout(function(){
      window.location.reload()
    },1000)
    Container_Game.current.style = "pointer-events: none";
  }else if(box_7.current.innerHTML!=""&&box_8.current.innerHTML!=""&&box_9.current.innerHTML!=""&&box_7.current.innerHTML==box_8.current.innerHTML&&box_8.current.innerHTML==box_9.current.innerHTML){
     SetPlayerWinner(`Player ${box_7.current.innerHTML} is winner`);
     box_4.current.style.cssText = `color: #ffffff96`;
    box_5.current.style.cssText = `color: #ffffff96`;
    box_6.current.style.cssText = `color: #ffffff96`;
    box_1.current.style.cssText = `color: #ffffff96`;
    box_2.current.style.cssText = `color: #ffffff96`;
    box_3.current.style.cssText = `color: #ffffff96`;
    setTimeout(function(){
      window.location.reload()
    },1000)
    Container_Game.current.style = "pointer-events: none";
  }else if(box_1.current.innerHTML!=""&&box_5.current.innerHTML!=""&&box_9.current.innerHTML!=""&&box_1.current.innerHTML==box_5.current.innerHTML&&box_5.current.innerHTML==box_9.current.innerHTML){
     SetPlayerWinner(`Player ${box_1.current.innerHTML} is winner`);
    box_4.current.style.cssText = `color: #ffffff96`;
    box_2.current.style.cssText = `color: #ffffff96`;
    box_6.current.style.cssText = `color: #ffffff96`;
    box_7.current.style.cssText = `color: #ffffff96`;
    box_8.current.style.cssText = `color: #ffffff96`;
    box_3.current.style.cssText = `color: #ffffff96`;
    setTimeout(function(){
      window.location.reload()
    },1000)
    Container_Game.current.style = "pointer-events: none";
  }else if(box_1.current.innerHTML!=""&&box_4.current.innerHTML!=""&&box_7.current.innerHTML!=""&&box_1.current.innerHTML==box_4.current.innerHTML&&box_4.current.innerHTML==box_7.current.innerHTML){
    SetPlayerWinner(`Player ${box_1.current.innerHTML} is winner`);
    box_2.current.style.cssText = `color: #ffffff96`;
    box_3.current.style.cssText = `color: #ffffff96`;
    box_6.current.style.cssText = `color: #ffffff96`;
    box_5.current.style.cssText = `color: #ffffff96`;
    box_8.current.style.cssText = `color: #ffffff96`;
    box_9.current.style.cssText = `color: #ffffff96`;
    setTimeout(function(){
      window.location.reload()
    },1000)
    Container_Game.current.style = "pointer-events: none";
  }else if(box_2.current.innerHTML!=""&&box_5.current.innerHTML!=""&&box_8.current.innerHTML!=""&&box_2.current.innerHTML==box_5.current.innerHTML&&box_5.current.innerHTML==box_8.current.innerHTML){
    SetPlayerWinner(`Player ${box_2.current.innerHTML} is winner`);
    box_4.current.style.cssText = `color: #ffffff96`;
    box_3.current.style.cssText = `color: #ffffff96`;
    box_6.current.style.cssText = `color: #ffffff96`;
    box_7.current.style.cssText = `color: #ffffff96`;
    box_1.current.style.cssText = `color: #ffffff96`;
    box_9.current.style.cssText = `color: #ffffff96`;
    setTimeout(function(){
      window.location.reload()
    },1000)
    Container_Game.current.style = "pointer-events: none";
  }else if(box_3.current.innerHTML!=""&&box_5.current.innerHTML!=""&&box_7.current.innerHTML!=""&&box_3.current.innerHTML==box_5.current.innerHTML&&box_5.current.innerHTML==box_7.current.innerHTML){
     SetPlayerWinner(`Player ${box_3.current.innerHTML} is winner`);
    box_4.current.style.cssText = `color: #ffffff96`;
    box_1.current.style.cssText = `color: #ffffff96`;
    box_6.current.style.cssText = `color: #ffffff96`;
    box_2.current.style.cssText = `color: #ffffff96`;
    box_8.current.style.cssText = `color: #ffffff96`;
    box_9.current.style.cssText = `color: #ffffff96`;
    setTimeout(function(){
      window.location.reload()
    },1000)
    Container_Game.current.style = "pointer-events: none";
  }else if(box_3.current.innerHTML!=""&&box_6.current.innerHTML!=""&&box_9.current.innerHTML!=""&&box_3.current.innerHTML==box_6.current.innerHTML&&box_6.current.innerHTML==box_9.current.innerHTML){
     SetPlayerWinner(`Player ${box_3.current.innerHTML} is winner`);
    box_4.current.style.cssText = `color: #ffffff96`;
    box_5.current.style.cssText = `color: #ffffff96`;
    box_6.current.style.cssText = `color: #ffffff96`;
    box_7.current.style.cssText = `color: #ffffff96`;
    box_8.current.style.cssText = `color: #ffffff96`;
    box_1.current.style.cssText = `color: #ffffff96`;
    setTimeout(function(){
      window.location.reload()
    },1000)
    Container_Game.current.style = "pointer-events: none";
  }
 },[ChosePlayer])

 useEffect(function(){
  if(box_1.current.innerHTML!=""&&box_2.current.innerHTML!=""&&box_3.current.innerHTML!=""&&box_4.current.innerHTML!=""&&box_5.current.innerHTML!=""&&box_6.current.innerHTML!=""&&box_7.current.innerHTML!=""&&box_8.current.innerHTML!=""&&box_9.current.innerHTML!=""){
    document.body.style.cssText = "font-size: 70px; color: white; font-family: 'Bungee Shade';";
    document.body.innerHTML = `The game is a draw!`
    setTimeout(function(){
      window.location.reload()
    },1000)
  }
 },[ChosePlayer])

  return (
    <div className='Container_All'>
      <div className="Text_Container">
       <h1>X-O Game</h1>
       <p>It's <span>{ChosePlayer}</span>'s Player Turn</p>
      </div>
      <div ref={Container_Game} className='Game_Container'>
       <p id="P_1" onClick={(e)=>{e.target.innerHTML = ChosePlayer;{ChosePlayer=="o"?SetPlayer("x"):SetPlayer("o")};localStorage.setItem("Player",ChosePlayer);e.target.style = "pointer-events: none"}} className='box_1' ref={box_1}></p>
       <p id="P_2" onClick={(e)=>{e.target.innerHTML = ChosePlayer;{ChosePlayer=="o"?SetPlayer("x"):SetPlayer("o")};localStorage.setItem("Player",ChosePlayer);e.target.style = "pointer-events: none"}} className='box_2' ref={box_2}></p>
       <p id="P_3" onClick={(e)=>{e.target.innerHTML = ChosePlayer;{ChosePlayer=="o"?SetPlayer("x"):SetPlayer("o")};localStorage.setItem("Player",ChosePlayer);e.target.style = "pointer-events: none"}} className='box_3' ref={box_3}></p>
       <p id="P_4" onClick={(e)=>{e.target.innerHTML = ChosePlayer;{ChosePlayer=="o"?SetPlayer("x"):SetPlayer("o")};localStorage.setItem("Player",ChosePlayer);e.target.style = "pointer-events: none"}} className='box_4' ref={box_4}></p>
       <p id="P_5" onClick={(e)=>{e.target.innerHTML = ChosePlayer;{ChosePlayer=="o"?SetPlayer("x"):SetPlayer("o")};localStorage.setItem("Player",ChosePlayer);e.target.style = "pointer-events: none"}} className='box_5' ref={box_5}></p>
       <p id="P_6" onClick={(e)=>{e.target.innerHTML = ChosePlayer;{ChosePlayer=="o"?SetPlayer("x"):SetPlayer("o")};localStorage.setItem("Player",ChosePlayer);e.target.style = "pointer-events: none"}} className='box_6' ref={box_6}></p>
       <p id="P_7" onClick={(e)=>{e.target.innerHTML = ChosePlayer;{ChosePlayer=="o"?SetPlayer("x"):SetPlayer("o")};localStorage.setItem("Player",ChosePlayer);e.target.style = "pointer-events: none"}} className='box_7' ref={box_7}></p>
       <p id="P_8" onClick={(e)=>{e.target.innerHTML = ChosePlayer;{ChosePlayer=="o"?SetPlayer("x"):SetPlayer("o")};localStorage.setItem("Player",ChosePlayer);e.target.style = "pointer-events: none"}} className='box_8' ref={box_8}></p>
       <p id="P_9" onClick={(e)=>{e.target.innerHTML = ChosePlayer;{ChosePlayer=="o"?SetPlayer("x"):SetPlayer("o")};localStorage.setItem("Player",ChosePlayer);e.target.style = "pointer-events: none"}} className='box_9' ref={box_9}></p>
      </div>
      <h2 className='Winner_Hidding' style={{fontSize:"25px"}}><span>{PlayerWinner}</span></h2>
    </div>
  );
}


