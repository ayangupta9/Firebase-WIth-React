// export const createProject = project => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     //   make async call to database
//     const firestore = getFirestore()
//     firestore
//       .collection('projects')
//       .add({
//         ...project,
//         authorFirstName: 'Ayan',
//         authorLastName: 'Gupta',
//         authorId: 69420,
//         createdAt: new Date()
//       })
//       .then(() => {
//         console.log(project)
//         dispatch({ type: 'CREATE_PROJECT', project })
//       })
//       .catch(err => {
//         dispatch({ type: 'CREATE_PROJECT_ERROR', err })
//       })
//   }
// }

const { v4: uuidv4 } = require('uuid')

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call
    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project })
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err })
      })
  }
}
