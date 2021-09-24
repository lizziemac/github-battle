import React from 'react'
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa'

function Instructions () {
  return (
    <div className='instructions-container'>
      <h1 className='center-text header-lg'>
        Instructions
      </h1>
      <ol className='container-sm grid center-text battle-instructions'>
        <li>
          <h3 className='header-sm'>Enter two GitHub users</h3>
          <FaUserFriends className='bg-light' color='rgb(255,191,196)' size={140}/>
        </li>
        <li>
          <h3 className='header-sm'>Battle</h3>
          <FaFighterJet className='bg-light' color='#727272' size={140}/>
        </li>
        <li>
          <h3 className='header-sm'>See the Winners</h3>
          <FaTrophy className='bg-light' color='rgb(255, 215,0)' size={140}/>
        </li>
      </ol>
    </div>
  )
}

export default class Battle extends React.Component {
  constructor (props) {
    super (props);

    this.state = {

    }
  }

  render () {
    return (
      <React.Fragment>
        <Instructions />
      </React.Fragment>
    )
  }
}