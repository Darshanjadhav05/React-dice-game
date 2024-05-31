import React, { useState } from 'react'
import './second_page.css'

const Second_page = () => {
    const arr = [1,2,3,4,5,6];
    const [score, setscore] = useState(0)
    const [selected, setselected] = useState()
    const [currentDice, setcurrentDice] = useState(1)
    const [err, seterr] = useState("");
    
    const roleDice= ()=>{
        if(!selected){ 
        seterr("You have not selected any number")   
        return;
    }
    seterr("")
        const randonmnumber = Math.floor(Math.random()*6+1)
        setcurrentDice(randonmnumber)
        if(selected === randonmnumber){
            setscore(score+randonmnumber);
        }else{
            setscore(score-2);
        }
        setselected(undefined)
        console.log(selected,randonmnumber)
    }
    
  return (
    <>
    <div className='nav'>
        <div className="score">
            <h1>{score}</h1>
            <p>Total Score</p>
        </div>
        <div className="btn">
        <p style={{color:"red"}}>{err}</p>
            {arr.map((item,i)=>(
                <button
                className={item === selected ? 'selected' : ''}
                
                 onClick={()=>{setselected(item)}} key={i}>{item}</button>
            ))}
        </div>
     
    </div>
    <div className="main1">
        <img onClick={roleDice} src={`images/dice_${currentDice}.png`} alt="" />
        <p>Click on Dice to Roll</p>
        <button onClick={()=>{setscore(0)}} className='reset'>Reset Score </button>
        <button className='rules'>Show Rules</button>

    </div>
    </>
    
  )
}

export default Second_page
