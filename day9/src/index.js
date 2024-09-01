import React from 'react';
import ReactDOM from 'react-dom/client';


let data = [
  {
    name: "vrushali",
    age: 24,
    city: "nagpur",
    grade: "A",
  },
  {
    name: "kabir",
    age: 27,
    city: "chandrapur",
    grade: "B",

  },
  {
    name: "chinmay",
    age: 34,
    city: "pune",
    grade: "C",

  },
  {
    name: "sayali",
    age: 22,
    city: "nagpur",
    grade: "D",

  },

]

// functional component ----> render

function App() {
  return (
    <div>                      
      {/* <Header></Header> */}
      <StudentInfo></StudentInfo>
      {/* <Footer></Footer> */}

    </div>
  )}             


// Component to render the list of students
function StudentInfo() {
  let style = { color: 'Pink', fontSize: "20px", textTransform: "uppercase",border:"10px solid pink"};

  return (
      <div>
          <h1 style={style}>Student List</h1>
          {/* Map over the data array to create a Student component for each item */}
          {data.map((student, index) => (
              <Student key={index} student={student} />
          ))}
      </div>
  );
}

// Component to display the details of a single student
function Student({ student }) {
  let style = { color: "orange" }                          ;

  return (
      <div>
          <h2 style={style}>name:{student.name}</h2>
          <p style={style}>Age: {student.age}</p>
          <p style={style}>Grade: {student.grade}</p>
      </div>
  );
}

// // Simple Header component
// function Header() {
//   return <h1>Header</h1>;
// }

// // Simple Footer component
// function Footer() {
//   return <h1>Footer</h1>;
// }




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

