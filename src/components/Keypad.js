// Code Keypad Component Here
import React from 'react'

function passwordChange() {
    console.log("Entering password...")
}

function Keypad() {
  return (
    <form>
        <label>Password</label>
        <input 
            type="password"
            onChange={passwordChange}
        ></input>
    </form>
  )
}

export default Keypad