import React, { Component } from 'react'
// import '../../assets/bloger.css'
import {Link,Redirect} from 'react-router-dom'



class AdminC extends Component {
    constructor(props){
        super(props)
        const token=localStorage.getItem("token")

        let loggedIn=true
        if(token==null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
    }
    render()
    {
        if(this.state.loggedIn===false){
        return<Redirect to="/" />        }
    return (
<>




<nav className="Navbar-bloger">
    <ul>
        <li>Logout</li>
        <li>Profile</li>
        <Link to="/Logout">Logout</Link>
    </ul>
</nav><div className="instruction">
<h1>Write Your Blog here</h1>
</div>
<div className="container">
    

<div class="row d-flex justify-content-center text-center">
    
    <div class="col-4">
      
    
    <div className="title">
        <h1>heyy!! this is my new blog!</h1>
        <hr id="hr"/>
        <div className="bodytext">
            <span><p>sdcbjkdgvsvckbsjdh
                skjdfhdkjvhdfkjvn</p>
                <p>dkvjbdlfibvdfjkbkfn</p>
                <p>sdcbjkdgvsvckbsjdh
                skjdfhdkjvhdfkjvn</p>
                <p>dkvjbdlfibvdfjkbkfn</p>
                <p>sdcbjkdgvsvckbsjdh
                skjdfhdkjvhdfkjvn</p>
                <p>dkvjbdlfibvdfjkbkfn</p></span>
                
        </div>
        
    </div>
    </div>
    
        </div>
        
    </div>
    <div className="btns">
    <button type="cancel" class="button">Cancel</button>
    <button type="submit" class="button">Submit</button>
    </div>
</>)
    }
}
export default AdminC;