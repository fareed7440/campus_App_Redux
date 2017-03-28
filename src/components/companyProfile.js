import React from 'react'
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class CompanyProfile extends React.Component{
    constructor(props){
        super(props)
        this.state = {arr:[]}
    }

componentDidMount(){
    this.props.companyProfileRequest()
}
componentWillMount(){
this.state.arr.push(this.props.application.user)
console.log("aghaaaaaaaa",this.state.arr)

}
render(){
    return(

<div>
                <Card className="card">
                     <h1 className="jobs">Company Profile</h1>
                   {this.state.arr.map((data,index)=>{
                       return(
                            <List key={index}>
                                <Subheader inset={true}></Subheader>
                                <ListItem className="listavatar"
                                    leftAvatar={<Avatar src={"http://www.cablesyequipos.net/images/avatar.png"} className="pic" />}
                                    primaryText={
                                        <p>
                                            <span style={{ color: '#000' }}>Name : {data.name}</span><br /><br />
                                            <span style={{ color: '#000' }}>Email : {data.about}</span><br /><br />
                                            <span style={{ color: '#000' }}>Major : {data.experience}</span><br /><br />
                                            <span style={{ color: '#000' }}>Experience : {data.email}</span><br /><br />

                                        </p>
                                    }
                                >
                                </ListItem>
                                <Divider />

                            </List>
                       )
                   })}
                </Card>
            </div>
            
        )
    }
}
export default CompanyProfile