import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'

function ProjectDetails (props) {
  const { project, auth } = props
  if (!auth.uid) return <Redirect to='/signin' />

  return project ? (
    <div className='project-details container section'>
      <div className='card'>
        <div className='card-content'>
          <span className='card-title'>{project.title}</span>
          <p>{project.content}</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div className='black-text'>
            Posted by {project.authorFirstName} {project.authorLastName}
          </div>
          {project.createdAt.toDate().toDateString()}
        </div>
      </div>
    </div>
  ) : (
    <div className='container center'>
      <p className='grey-text'>Loading Project...</p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.ordered.projects
  const project = projects ? projects.find(project => project.id === id) : null
  return {
    project: project,
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
)(ProjectDetails)
