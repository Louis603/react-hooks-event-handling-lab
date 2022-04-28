// Code EyesOnMe Component Here
import React from 'react'

function clicker (e) {
    console.log('Good!')
}

function blur(e) {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe() {
  return (
    <button onFocus={clicker} onBlur={blur}>Eyes on me</button>
  )
}

export default EyesOnMe