import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      content: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createProject(this.state)
    this.props.history.push('/')
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render () {
    const { auth } = this.props

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className='container form'>
        <form onSubmit={this.handleSubmit}>
          <h5 className='grey-text text-darken-3'>Create New Project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Content</label>
            <textarea
              className='materialize-textarea'
              name='content'
              id='content'
              onChange={this.handleChange}
            ></textarea>
            {/* <input type='password' id='password' onChange={this.handleChange} /> */}
          </div>

          <div className='input-field'>
            <button className='btn pink light-1'>Create Project</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
