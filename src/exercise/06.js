// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // const [error, setError] = React.useState(null);

  const [username, setUsername] = React.useState('');
  let UserNameInput = React.useRef();
  function HandleSubmit(e) {
    e.preventDefault();
    onSubmitUsername(UserNameInput.current.value);
  }

    // function handleChange(e){
    //   const value = e.target.value;
    //   const isLowerCase = (value === value.toLowerCase());
    //   setError(isLowerCase? null : 'Username must b e lower case');
    // }
    
    function handleChange(e){
      const value = e.target.value;
      setUsername(value.toLowerCase());
    }
  

  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit = {HandleSubmit} >
      <div>
        <label>Username:</label>
        <input type="text" ref = {UserNameInput} onChange={handleChange} value={username}/>
      </div>
      {/* <div style={{color: 'red'}}>{error}</div> */}
      {/* <button type="submit" disabled = {Boolean(error)}>Submit</button> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
