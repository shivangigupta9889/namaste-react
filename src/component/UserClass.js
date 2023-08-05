import React from "react"

class UserClass extends React.Component{

constructor(props){
    
    super(props)
    
   this.state={count:1}
}
    render(){
        const {count}=this.state

        return(
            <div className="user-card">
                <h1>{this.props.name}</h1>
                <h1>count={count}</h1>
                <button  onClick={()=>{
                  this.setState({
                    count: this.state.count+1
                  })

                }}>CountInc</button>
                <h3>location :Banda</h3>
                <h4>Contact:6392833262</h4>

            </div>
        )
    }
}

export default UserClass