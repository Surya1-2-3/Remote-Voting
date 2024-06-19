import {Link} from 'react-router-dom';
import UserLogin from './UserLogin.js';
import img1 from './images/SignUpPage.jpeg';
import img2 from './images/SignUp.png';
import img3 from './images/SignUpp.jpeg';
const UserSignUp=()=>{
    const mystyle={
        textAlign:'center',
    };
    const sty={
        marginTop:'100',
        border:'1px solid black',
        borderRadius:'10px',
        marginLeft:'400',
        marginRight:'100',
        padding:'20px',
    };
    const sty2={
        backgroundColor:'black',
        color:'white',
        textAlign:'center',
        textDecoration:"none",
    };
    const sty0={
        position:'fixed',
        top:'10',
        left:'450',   
    };
    const sty7={
        position:'fixed',
        top:'100',
        left:'20',
        right:'200',
        bottom:'100',
    };
    const sty8={
        position:'fixed',
        top:'300',
        left:'20',
    };
    const sty9={
        position:'fixed',
        top:'100',
        right:'20',
    };
    return(
        <>
        <h1 style={sty0}>SIGN UP HERE</h1>
        <img src={img1} style={sty7}></img>
        <img src={img2} style={sty8}></img>
        <img src={img3} style={sty9}></img>
        <table style={sty} align="center">
        <tr>
            <td ><h5>Name</h5></td>
            <td><input style={mystyle} type="text" /></td><br></br>
        </tr>
        <tr>
            <td><h5>email</h5></td>
            <td ><input style={mystyle} type="email" /></td>
        </tr>
        <tr>
            <td><h5>New Password</h5></td>
            <td ><input style={mystyle} type="password"/></td>
        </tr>
        <tr>
            <td><h5>Confirm Password</h5></td>
            <td className="mystyle style2"><input type="password"/></td>
        </tr>
        <tr>
            <td><h5>Age</h5></td>
            <td><input style={mystyle} type='text'></input></td>
        </tr>
        <tr>
            <td><h5>gender</h5></td>
            <td><input type="radio"/>Male<br></br>
            <input type="radio"/>Female<br></br>
            <input type="radio"/>Other</td>
        </tr>
        
        <tr>
        <td style={{align:'right'}}><input style={sty2} type='reset'></input></td>
            <td style={{paddingLeft:'50', paddingTop:'10',paddingBottom:'10'}} > <Link style={sty2} to='/UserLogin'>submit</Link></td>
        </tr>
            </table>
        </>
    );
}

export default UserSignUp;