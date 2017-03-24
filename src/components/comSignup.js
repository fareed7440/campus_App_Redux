  import React from 'react'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase'

const style = {
  margin: 14,
};

class CompanySignUp extends React.Component{
        constructor(props){
            super(props);
            this.state={name:'',experience:'',about:'',email:'',password:''};
            this.submit=this.submit.bind(this)
            this.inputHandle=this.inputHandle.bind(this)
        }
    componentDidMount(){
        this.props.loadInitialState();
    }
    submit(e){
e.preventDefault()
var name = this.refs.name.getValue();
var experience = this.refs.experience.getValue();
var about = this.refs.about.getValue();
var email = this.refs.email.getValue();
var password = this.refs.password.getValue();
var Obj={name:name,experience:experience,about:about,email:email,password:password}
this.props.companysignupRequest(Obj);
//firebase.database().ref('company').push(Obj)
    }
inputHandle(e){
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked: target.value
    const name = target.name
    this.setState({
        [name]:value
    })
}

        render(){
    

        return(
            <div>
    <AppBar
        title="Company SignUp"
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
        ref='experience'
        hintText='Experience'
        /><br /><br />
    <TextField
        id="text-field-default"
        onChange={this.inputHandle}
        ref='about'
        hintText='About'
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
        type = 'password'
        hintText='password'
        /><br /><br />

        <RaisedButton label="SignUp" type='submit' primary={true} style={style} />

    </form>
    </center>
            </div>

    )
    
        }
    }//main
export default CompanySignUp;