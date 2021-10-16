import react from "react";
import '../src/assets/bloger.css';



class Bloger extends react.Component{
    render(){
return(<>
<nav className="Navbar-bloger">
    <ul>
        <li>Logout</li>
        <li>Profile</li>
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
export default Bloger;