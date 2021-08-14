import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import ProjectList from '../project/ProjectList'
import Notification from './Notification'

class Dashboard extends Component {
  render () {
    const { projects, auth } = this.props

    if (!auth.uid) return <Redirect to='/signin' />
    
    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            <ProjectList projects={projects} />
          </div>
          <div className='col s12 m5 offset-m1'>
            <Notification />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects || null,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'projects'
    }
  ])
)(Dashboard)
