// // import React, { Component } from 'react';

// // class HookCounterClassBased extends Component {
// //   constructor() {
// //     super()
// //     this.state = {
// //       name: {
// //         firstName: '',
// //         lastName: ''
// //       }
// //     }
// //   }

// //   handleFirstNameChange = (event) => {
// //     this.setState(
// //       {
// //         name: { ...this.state.name, firstName: event.target.value }
// //       }
// //     )
// //   }

// //   handleListNameChange = (event) => {
// //     this.setState(
// //       {
// //         name: { ...this.state.name, lastName: event.target.value }
// //       }
// //     )
// //   }

// //   render() {
// //     return (
// //       <form>
// //         <div>
// //           <input type='text'
// //             value={this.state.name.firstname}
// //             onChange={this.handleFirstNameChange}
// //           />
// //         </div>
// //         <div>
// //           <input type='text'
// //             value={this.state.name.lastName}
// //             onChange={this.handleListNameChange} />

// //         </div>
// //         <h1>your firstName is - {this.state.name.firstName}</h1>
// //         <h1>your lastName is - {this.state.name.lastName}</h1>
// //       </form>
// //     )
// //   }


// // }

// // -----------------------------------------------------------------

// import React, { Component } from 'react';

// class HookCounterClassBased extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: {
//         firstName: '',
//         lastName: ''
//       },
//       namesList: [] // State to store the list of names
//     };
//   }

//   handleFirstNameChange = (event) => {
//     this.setState({
//       name: { ...this.state.name, firstName: event.target.value }
//     });
//   }

//   handleLastNameChange = (event) => {
//     this.setState({
//       name: { ...this.state.name, lastName: event.target.value }
//     });
//   }

//   addNameToList = () => {
//     this.setState((prevState) => ({
//       namesList: [...prevState.namesList, prevState.name],
//       name: { firstName: '', lastName: '' } // Resetting the name inputs
//     }));
//   }

//   render() {
//     return (
//       <form onSubmit={(e) => { e.preventDefault(); this.addNameToList(); }}>
//         <div>
//           <input 
//             type='text'
//             value={this.state.name.firstName}
//             onChange={this.handleFirstNameChange}
//             placeholder="First Name"
//           />
//         </div>
//         <div>
//           <input 
//             type='text'
//             value={this.state.name.lastName}
//             onChange={this.handleLastNameChange}
//             placeholder="Last Name"
//           />
//         </div>
//         <button type="submit">Add Name</button>
//         <h1>Your first name is: {this.state.name.firstName}</h1>
//         <h1>Your last name is: {this.state.name.lastName}</h1>

//         <ul>
//           {this.state.namesList.map((name, index) => (
//             <li key={index}>
//               {name.firstName} {name.lastName}
//             </li>
//           ))}
//         </ul>
//       </form>
//     );
//   }
// }


import React, { useState } from 'react';

function HookCounterFunctionBased() {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [namesList, setNamesList] = useState([]);

  const handleFirstNameChange = (event) => {
    setName({ ...name, firstName: event.target.value });
  }

  const handleLastNameChange = (event) => {
    setName({ ...name, lastName: event.target.value });
  }

  const addNameToList = (event) => {
    event.preventDefault();
    setNamesList([...namesList, name]);
   
  }

  return (
    <form onSubmit={addNameToList}>
      <div>
        <input 
          type='text'
          value={name.firstName}
          onChange={handleFirstNameChange}
          placeholder="First Name"
        />
      </div>
      <div>
        <input 
          type='text'
          value={name.lastName}
          onChange={handleLastNameChange}
          placeholder="Last Name"
        />
      </div>
      <button type="submit">Add Name</button>
      <h1>Your first name is: {name.firstName}</h1>
      <h1>Your last name is: {name.lastName}</h1>

      <ul>
        {namesList.map((name, index) => (
          <li key={index}>
            {name.firstName} {name.lastName}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default HookCounterFunctionBased;


// export default HookCounterClassBased;

// // export default HookCounterClassBased;
 