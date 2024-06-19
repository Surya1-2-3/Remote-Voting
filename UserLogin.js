import {Link} from 'react-router-dom';
import List from './ListOfPolls.js';
import img4 from './images/login_page.jpg';
import img1 from './images/login_page_back.jpg';
const UserLogin = ()=>{
    const mystyle={
        textAlign:'center',
    };
    const sty={
        border:'1px solid black',
        backgroundColor:'white',
        position: 'fixed',
        top:'120',
        right:'10',
    };
    const sty2={
        backgroundColor:'black',
        color:'white',
        textAlign:'center',
        textDecoration:"none",
    };
    const imageStyle = {
        width: '300px',
        height: '200px',
        borderRadius: '50%',
        overflow: 'hidden',
      };
      const bodyStyle = {
        position:'fixed',
        top:'0',
        right:'0',
        bottom:'0',
        left:'0',
        backgroundColor:'#87CEEB',
      };
      const sty0={
        position:'fixed',
        top:'120',
        left:'0',
      };
    return(
        <>
        
        <div style={bodyStyle}>
        
        <h1 align="center" style={{'padding':'50'}}>User Login</h1>
        
        <img src={img1} style={sty0}></img>
            <table style={sty} >
            <tr>
                <td rowspan='4'><img src={img4} style={imageStyle}></img></td>
            </tr>
            <tr>
                <td ><h5>Email</h5></td>
                <td><input style={mystyle} type="email" /></td><br></br>
            </tr>
            <tr>
                <td><h5>Password</h5></td>
                <td ><input style={mystyle} type="password" /></td>
            </tr>
            <tr>
                <td></td>
                <td style={{paddingLeft:'50', paddingTop:'10',paddingBottom:'10'}} > 
                    <Link style={sty2} to='/ListOfPolls' element={<List/>}>submit</Link>
                </td>
            </tr>
            </table>
            </div>
        </>
    ); 
};

export default UserLogin;