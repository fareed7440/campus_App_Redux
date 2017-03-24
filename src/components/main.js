import React,{component} from 'react'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Link from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 14,
};
class Main extends React.Component{
    constructor(props){
        super(props);
    }




    render(){
return(
    
    <div>
        
 <AppBar
    title="CAMPUS REQUIREMENT "
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    
  >
  <RaisedButton label="Admin" primary={true} style={style} />
  <RaisedButton label="Student" primary={true} style={style} />
  <RaisedButton label="Campus" primary={true} style={style} />
  
  </AppBar>
  
  </div>
)


    }
}//main



export default Main;   