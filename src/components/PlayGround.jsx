import React,{useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import  GeneratedList  from './GeneratedList';
import { connect } from 'react-redux'
import {addValue} from '../redux/actions/allActions'

const box={
    marginLeft:'auto',
    marginRight:'auto',
    border:' 2px solid black',
    width:'373px',
    height:'373px'

}

const PlayGround = ({data:{allData},SendValue}) => {
    const [value,setValue]=useState('')
    const [random,setRandom]=useState(0)
    const [count,setCount]=useState(0)
    const [disable,setDisable]=useState(false)    
    
    
    useEffect(()=>{ 
        setRandom(GeneratedList[Math.floor(Math.random()*GeneratedList.length)])    
    },[])

    var bulls=0
    var cows=0

    const checkIt=()=>{  
        console.log('valu',value);
        let regExp=new RegExp('^[0-9]{4}') 
        const numericalValue=parseInt(value)  
        if(regExp.test(numericalValue)){
            console.log('valu in random',random); // numbe
        const randArr= String(random).split("").map((random)=>{
            return Number(random)
            })
        console.log('array be0',randArr); // string
        const valArr= String(value).split("").map((value)=>{
            return Number(value)
            })
        console.log('array be0',valArr); // string
        for (let i = 0; i < randArr.length; i++) {
            if(valArr.includes(randArr[i])){
                if(valArr[i]===randArr[i]){
                    bulls++
                }
                else{
                    cows++
                }
            }
        }
        setCount(count+1)
        SendValue({value,cows,bulls})   
        if(count===8){
            setDisable(!disable)
        }         

        }else{
            if (999>parseInt(value) || parseInt(value)>10000 || value===null) {
                alert('Numbers should be b/w 1000 to 9999')
            }else{
                alert('Enter Numbers only 0-9')
            }
        }
        
    }
  return(
    <div style={box}>
        <input type="text" maxLength={4}
        pattern="^[0-9]*$" style={{margin:'25px 0px 15px 0px'}} onChange={e=>setValue(e.target.value)} onKeyPress={(e)=>e.key==="Enter" && !disable?checkIt():null}/>
        <br />
        <Button disabled={disable} variant="info" onClick={checkIt}>Check It</Button>&nbsp;
        <Button variant="warning" onClick={()=>{window.location.reload(false);}}>Reset game</Button>
        <br />
        {allData.length>0 && <div>
            <table style={{width:"100%"}}>
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Cows</th>
                    <th>Bulls</th>
                </tr>
                </thead>
                <tbody>
                {allData.map((i,index)=>{
               return(
                   <tr key={index}>
                       <td>{i.value}</td>
                       <td>{i.cows}</td>
                       <td>{i.bulls}</td>
                       {/* <img style={{width:"25px",height:'25px'}} src={bull} alt="bull image"/> */}
                   </tr>
               )
            })} 
                </tbody>
                
            </table>
                      
        </div>}
    </div>
  )
};

const mapStateToProps=(store)=>{
    return{
        data:store.allReducer
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        SendValue:(data)=>dispatch(addValue(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayGround)
