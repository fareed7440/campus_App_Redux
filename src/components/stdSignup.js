import React from 'react'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 14,
};

class StdSignup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            qualification:"",
            skills:'',
            email:'',
            password:'',
             }
              this.inputHandle= this.inputHandle.bind(this)
              this.submit=this.submit.bind(this)
    }

componentDidMount(){
    this.props.loadInitialState();
}

submit(e){
e.preventDefault()
var name=this.refs.name.getValue();
var qualification=this.refs.qualification.getValue();
var skills=this.refs.skills.getValue();
var email=this.refs.email.getValue();
var password=this.refs.password.getValue();

var stdobj ={name:name,qualification:qualification,skills:skills,email:email,password:password};
this.props.stdSignUpRequest(stdobj);
}

inputHandle(e){
const target = e.target;
const value = target.type === 'checkbox' ? target.checked : target.value   
const name = e.name;
this.setState({
    [name]:value
})
}
render(){
    console.log('lll',this.submit)
    return(
        <div>
 <AppBar
    title="student SignUp"
    style={{textAlign:'center'}}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  <center>
<form  onSubmit={this.submit}>
  <TextField
      id="text-field-default"
      onChange={this.inputHandle}
      ref='name'
      hintText='name'
      
    /><br /><br />
<TextField
      id="text-field-default"
      onChange={this.inputHandle}
      ref='qualification'
      hintText='qualification'
    /><br /><br />
<TextField
      id="text-field-default"
      onChange={this.inputHandle}
      ref='skills'
      hintText='Major skills'
    /><br /><br />
<TextField
      id="text-field-default"
      onChange={this.inputHandle}
      ref='email'
      hintText='email'
    /><br /><br />
<TextField
      id="text-field-default"
      onChange={this.inputHandle}
      ref='password'
      type='password'
      hintText='password'
    /><br /><br />

    <RaisedButton label="SignUp" type='submit' primary={true} style={style} />

</form>
</center>
        </div>
    )
}

}//main
export default StdSignup