class SignUpBox extends Component {

handleFormSubmit(props) {
  event.preventDefault()
  debugger
  var locdata = this.props.fetchLatLong(props["city"], props["state"])
  debugger
  //call addUser on Parent
  // this.props.addUser(props, location_data).then( ()=>{
  //   var router = require('react-router')
  //   router.browserHistory.push('/profile')
  // })
}

render() {
  const {fields: {fullName, email, city, state}, handleSubmit} = this.props;
  return (
    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <div>
        <label>Full Name</label>
        <input type="text" placeholder="Full Name" {...fullName} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" id="userEmail" placeholder="Email" {...email}/>
      </div>
      <div>
        <label>City</label>
        <input type="city" id="userCity" placeholder="City" {...city}/>
        <label>State</label>
        <select {...state}>
            {stateList.map( (state) => {
             return (<option value={state}> {state} </option>)
              })
            }
        </select>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
}


export reduxForm({
  form: 'signUpForm',
  fields: ['fullName', 'email', 'city', 'state']
}, null, { addUser })(SignUpBox);
