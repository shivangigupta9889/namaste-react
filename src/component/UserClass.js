import React from "react"
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{

constructor(props){
    
    super(props)
    
   this.state={
    userInfo:{
        name:"Dummy",
        location:"Default",
        avatar_url:"http:Dummy pic"

    },
   }
}
async componentDidMount(){
    const data = await fetch("https://api.github.com/users/shivangigupta9889");
    const json = await data.json()
    this.setState({
        userInfo:json,}
    );
    console.log(json);

}
componentDidUpdate(){
    console.log("componnet update called")
}
componentWillUnmount(){
    console.log("componnet will update called")
}
    render(){
        return(
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url}></img>
                <h1>Name:{this.state.userInfo.name}</h1>
                <h3>Location :{this.state.userInfo.location}</h3>
                <UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h3 className=" font-bold text-lg">{loggedInUser}</h3>
                    )}
                    
                </UserContext.Consumer>

                <h4>Contact:6392833262</h4>

            </div>
        )
    }
}

export default UserClass