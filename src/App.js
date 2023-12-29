import { useState } from "react";


function App() {
  const [bgcolor,setBgColor] = useState("olive");
  const [textColor,setTextColor] = useState("White");

  let mainStyle = {
    backgroundColor:bgcolor,
    height:'100vh',
    width:'100vw',
  }

  let textStyle = {
    padding:'0',
    margin:'0',
    height:'100vh',
    width:'100vw',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:bgcolor===textColor?"white":textColor
  }

  let barBgStyle = {
    borderRadius:'50px',
    backgroundColor:'white',
    height:'50px',
    width :'50rem',
    position:'absolute',
    left:'20rem',
    top:'2rem',
    display:'flex',
    justifyContent:'space-evenly'
  }


  let barTextStyle = {
    borderRadius:'50px',
    backgroundColor:'white',
    height:'50px',
    width :'50rem',
    position:'absolute',
    left:'20rem',
    top:'40rem',
    display:'flex',
    justifyContent:'space-evenly',
  }

  let redStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'red',
    color:'white',
    cursor:'pointer'
  }
  let greenStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'green',
    color:'white',
    cursor:'pointer'
  }
  let blueStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'blue',
    color:'white',
    cursor:'pointer'
  }
  let blackStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'black',
    color:'white',
    cursor:'pointer'
  }
  let pinkStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'pink',
    color:'white',
    cursor:'pointer'
  }
  let purpleStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'purple',
    color:'white',
    cursor:'pointer'
  }
  let orangeStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'orange',
    color:'white',
    cursor:'pointer'
  }
  let greyStyle={
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'grey',
    color:'white',
    cursor:'pointer'
  }


  let redTextStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'red',
    color:'white',
    cursor:'pointer'
  }
  let greenTextStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'green',
    color:'white',
    cursor:'pointer'
  }
  let blueTextStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'blue',
    color:'white',
    cursor:'pointer'
  }
  let blackTextStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'black',
    color:'white',
    cursor:'pointer'
  }
  let pinkTextStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'pink',
    color:'white',
    cursor:'pointer'
  }
  let purpleTextStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'purple',
    color:'white',
    cursor:'pointer'
  }
  let orangeTextStyle = {
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'orange',
    color:'white',
    cursor:'pointer'
  }
  let greyTextStyle={
    position:'relative',
    top:'.5rem',
    width:'5rem',
    height:'2rem',
    borderRadius:'50px',
    backgroundColor:'grey',
    color:'white',
    cursor:'pointer'
  }
  return (
    <div style={mainStyle}>
      <h1 style={textStyle}>Hello!</h1>
      <div style={barBgStyle}>
        <button style={redStyle} onClick={()=>setBgColor('red')}>Red</button>
        <button style={greenStyle} onClick={()=>setBgColor('green')}>Green</button>
        <button style={blueStyle} onClick={()=>setBgColor('blue')}>Blue</button>
        <button style={blackStyle} onClick={()=>setBgColor('black')}>Black</button>
        <button style={pinkStyle} onClick={()=>setBgColor('pink')}>Pink</button>
        <button style={purpleStyle} onClick={()=>setBgColor('purple')}>Purple</button>
        <button style={orangeStyle} onClick={()=>setBgColor('orange')}>Orange</button>
        <button style={greyStyle} onClick={()=>setBgColor('grey')}>Grey</button>
      </div>
      <div style={barTextStyle}>
        <button style={orangeTextStyle} onClick={()=>setTextColor('orange')}>Orange</button>
        <button style={blackTextStyle} onClick={()=>setTextColor('black')}>Black</button>
        <button style={pinkTextStyle} onClick={()=>setTextColor('pink')}>Pink</button>
        <button style={greenTextStyle} onClick={()=>setTextColor('green')}>Green</button>
        <button style={purpleTextStyle} onClick={()=>setTextColor('purple')}>Purple</button>
        <button style={greyTextStyle} onClick={()=>setTextColor('grey')}>Grey</button>
        <button style={blueTextStyle} onClick={()=>setTextColor('blue')}>Blue</button>
        <button style={redTextStyle} onClick={()=>setTextColor('red')}>Red</button>
      </div> 
    </div>
  )
}

export default App;
