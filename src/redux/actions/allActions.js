import {ADD_VALUE} from './action-type'


export const addValue=(data)=>{
    console.log('data be',data);
    return{
        type:ADD_VALUE,
        payload:data
    }
}