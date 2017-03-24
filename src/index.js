import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { Provider } from 'react-redux';
import store from './store/store';
import CompanySignUpContainer from './container/comSignupCn'
import  Stdsignupcontainer from './container/stdSignup'
import Main from './components/main'
import {Router,Route,indexRoute,browserHistory} from 'react-router'
class Routercomponent extends React.Component{
render(){
return(
  <div>
     <Provider store={store}>
    <MuiThemeProvider>
<Router history={browserHistory}>
<Route path = 'main' component={Main}></Route>
<Route path = 'stdSignup' component={Stdsignupcontainer}></Route>
<Route path = 'comSignupCn' component={CompanySignUpContainer}></Route>
  </Router>
  </MuiThemeProvider>
  </Provider>
  </div>
)

}
}



ReactDOM.render(
  
 // <Main />,
 <Routercomponent/>,
  document.getElementById('root')
);
