import { useEffect, useRef, useState } from 'react'
import './App.css'
function App() {
   const OTP_DIGITS_COUNT=5;
   const [inputArr,setInputArr]=useState(new Array(OTP_DIGITS_COUNT).fill(""));
   
   const refArr = useRef([]);
   useEffect(()=>{
    refArr.current[0]?.focus();
   },[])
   const handleOnChange = (value,index) => 
   {
    if(isNaN(value)) return;
    const newvalue=value.trim();
    //console.log(value);
    //console.log(newvalue);
    const newArray=[...inputArr];
    newArray[index]=newvalue.slice(-1);
    setInputArr(newArray);

    newvalue && refArr.current[index+1]?.focus();
   };
   const handleOnKeyDown = (e,index) => {
      if(!e.target.value && e.key==="Backspace")
        refArr.current[index-1]?.focus();
   };
  return (
    <div className='App'>
  <h1>Validate OTP</h1>
  {
    inputArr.map((input, index) => (
      <input
        key={index}
        className='inputbox'
        type='text'
        value={input}
        ref={(input) => (refArr.current[index]=input)}
        onChange={(e)=> {handleOnChange(e.target.value,index)}}
        onKeyDown={(e) => {handleOnKeyDown(e,index)}}
      />
    ))
  }
</div>

  )
}

export default App
