// const initState = {
//   projects: [
//     {
//       id: '1',
//       title: 'help me find peach',
//       content:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam consequatur est eum, sint eius excepturi ducimus. Quo impedit eveniet asperiores esse quasi ad in sint? Dolorem facilis voluptates provident!'
//     },
//     {
//       id: '2',
//       title: 'collect all the stars',
//       content:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam consequatur est eum, sint eius excepturi ducimus. Quo impedit eveniet asperiores esse quasi ad in sint? Dolorem facilis voluptates provident!'
//     },
//     {
//       id: '1',
//       title: 'egg hunt with yoshi',
//       content:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam consequatur est eum, sint eius excepturi ducimus. Quo impedit eveniet asperiores esse quasi ad in sint? Dolorem facilis voluptates provident!'
//     }
//   ]
// }

// const projectReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'CREATE_PROJECT':
//       console.log('created Project', action.project)
//       return state
//     case 'CREATE_PROJECT_ERROR':
//       console.log('Create Project Error', action.err)
//       return state
//     default:
//       return state
//   }
// }

// export default projectReducer

const initState = {
  projects: [
    {
      id: '1',
      title: 'help me find peach',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam consequatur est eum, sint eius excepturi ducimus. Quo impedit eveniet asperiores esse quasi ad in sint? Dolorem facilis voluptates provident!'
    },
    {
      id: '2',
      title: 'collect all the stars',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam consequatur est eum, sint eius excepturi ducimus. Quo impedit eveniet asperiores esse quasi ad in sint? Dolorem facilis voluptates provident!'
    },
    {
      id: '1',
      title: 'egg hunt with yoshi',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo totam consequatur est eum, sint eius excepturi ducimus. Quo impedit eveniet asperiores esse quasi ad in sint? Dolorem facilis voluptates provident!'
    }
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Added Project')
      console.log(action.project)
      return state
    // return {
    //   projects: [...state.projects, action.project]
    // }
    case 'CREATE_PROJECT_ERROR':
      console.log('Encountered Error')
      return state

    default:
      return state
  }
}

export default projectReducer
