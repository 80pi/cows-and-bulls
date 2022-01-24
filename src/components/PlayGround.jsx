import React,{useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import  GeneratedList  from './GeneratedList';

const box={
    marginLeft:'auto',
    marginRight:'auto',
    border:' 2px solid black',
    width:'373px',
    height:'373px'

}

const PlayGround = () => {
    const [value,setValue]=useState('')
    const [random,setRandom]=useState(0)
    
    
    useEffect(()=>{ 
        setRandom(GeneratedList[Math.floor(Math.random()*GeneratedList.length)])    
    },[])
    
    const checkIt=()=>{
        console.log('valu in random',random); // numbe
        console.log('value be0',value); // string
    }
  return(
    <div style={box}>
        <input type="text" maxLength={4}
        pattern="^[0-9]*$" style={{margin:'25px 0px 15px 0px'}} onChange={e=>setValue(e.target.value)} />
        <br />
        <Button variant="info" onClick={checkIt}>Check It</Button>
    </div>
  )
};

export default PlayGround;
