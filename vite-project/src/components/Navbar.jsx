import React, {useContext} from 'react'
import {AppContext} from "../context/context"

const Navbar = () => {
    const {connectWallet} = useContext(AppContext)
  return (
    <div>

        <button onClick={() => connectWallet()}>Connect</button>
    </div>
  )
}

export default Navbar