import React from 'react'

function ProjectSummary ({ project }) {
  return (
    <div className='project-summary card'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{project.title}</span>
        <p>{project.content}</p>
        <p className='grey-text'>
          By {project.authorFirstName} {project.authorLastName}
        </p>
        <p className='grey-text'>
          {project.createdAt.toDate().toLocaleString()}
        </p>
      </div>
    </div>
  )
}

export default ProjectSummary
