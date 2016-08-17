export default function setCurrentUser(state = {current_user: "", action}) {

  switch(action.type){
    case 'SET_CURRENT_USER':
      return {current_user: action.payload.data };
    default:
      return state
  }
}


/*
export default function setCurrentUser(state = {current_user: {
  'id': "0", 'type': "users", 'attributes': {
    'bio': 'fake bio',
    'company': 'fake company',
    'email-address': 'fake email',
    'name': 'fake name',
    'position': 'investor'
    },
    'relationships': []
  }},
  */
