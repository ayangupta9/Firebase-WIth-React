import { CircularProgress } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = props => {
  const { auth, profile } = props

  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  )
  const loadingLink = auth.isLoaded ? (
    links
  ) : (
    <CircularProgress className='right' color='white' />
  )
  return (
    <nav className='nav-wrapper grey darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          Project Planner
        </Link>
        {loadingLink}
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
