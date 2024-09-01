import React from "react";

// 1.

function NameList(){
    let Fruits = ["apple","banana","kiwi","papaya","graphs"]
    return(
        <div>
            <h1>1.{Fruits[0]}</h1>
            <h1>2.{Fruits[1]}</h1>
            <h1>3.{Fruits[2]}</h1>
            <h1>4.{Fruits[3]}</h1>
            <h1>5.{Fruits[4]}</h1>
        </div>
    )
}


// =====================================================
// 2.

// function NameList(){
//     let Flowers =["lily","Rose","Lotus","Jasmine","Sunflower"]
// return (
//        Flowers.map(Flowers=><h1>{Flowers}</h1>)
//        )
// }



// =====================================================
// 3.

// function NameList(){
//     let Students = ["Vrushali","kabir","sayali","ashu"]
//     let Studentlist =Students.map(Students=><h1>{Students}</h1>)
//     return(
//         <div>
//             {
//                 Studentlist
//             }
//         </div>
//     ) 
//  }



// =======================================================

// 4.
// const persons = [
//     {
//         firstName:"Vrushali",
//         lastName:"patil"
//     },
//     {
//         firstName:"shruti",
//         lastName:"patil"
//     },
//     {
//         firstName:"kabir",
//         lastName:"wandhare"
//     }

// ] 
// let personList = persons.map(person => <h1>My firstName is {person.firstName} and lastName is {person.lastName}</h1>)
// return(
//     <div>
//         {personList}
//     </div>
// )
export default NameList