import React, { useState } from 'react';

function HookCounterFunctionBased() {
  const [name, setName] = useState({ firstName: '', lastName: '' })

  return (
    <form>
      <div>
      <input
        type='text'
        value={name.firstName}
        onChange={event => setName({...name,firstName: event.target.value })}
        placeholder="First Name"
      />
      </div>
      <div>
      <input
        type='text'
        value={name.lastName}
        onChange={event => setName({...name,lastName: event.target.value })}
        placeholder="Last Name"
      />
      </div>
      <h1>FirstName : {name.firstName}</h1>
      <h1>LastName : {name.lastName}</h1>
    </form>
  )
}



export default HookCounterFunctionBased;