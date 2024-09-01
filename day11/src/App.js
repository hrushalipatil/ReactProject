import React, {useState} from 'react';

function Counter(){
    const[count,setCount]=useState(0)
    

    // //part1 --------------------
    // const increment=()=>{
    //     setCount(count+5)
        
    // }
    // console.log(count)

    // const decrement=()=>{
    //     setCount(count-5)
    // }
    // //part2---------------------
    // function increment() {
    //     setCount(count + 5);
    // }
    // console.log(count)

    // function decrement() {
    //     setCount(count - 5);
    // }
    // //part3--------------------------
    const increment = ()=>{
        setCount( (preCount) => preCount + 1 )
    }
    console.log()
    const decrement = ()=>{
        setCount( (preCount) => preCount + 1 )
    }
  

    return(
        <div>
            <h2>COUNT  :  {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Counter