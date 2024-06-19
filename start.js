import {Link} from 'react-router-dom';
import './images/login_page.jpg';
import img1 from './images/login_page_background.jpg';
const Start=()=>{
    const mystyle={
        position:'fixed',
        top:'150',
        right:'20',
        textDecoration:'none',
        color:'white',
    };
    const mystyle1={
        position:'fixed',
                top:'150',
                right:'150',
                textDecoration:'none',
        color:'white',
    };
    const mystyle3={
        height:'100%',
        width:'100%',
    };
    const mystyu={
        height:'100%',
        width:'100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    const overlay={
        position: 'absolute', /* Set the content to absolute positioning within the container */
  top: '0', /* Position the content at the top of the image container */
  left: '0', /* Position the content at the left of the image container */
  padding: '20px', /* Add padding to the content for better visibility */
  color: 'white',
    };
    return(
        <><h4 style={mystyle3}  >
        <img src={img1} style={mystyu}></img>
        <div style={overlay}>
        <br></br><br />
            <h1 style={{'marginLeft':'400px'}}>REMOTE VOTING</h1>
            <Link style={mystyle} to={"/UserSignUp"}>UserSignUp</Link>
            <Link style={mystyle1} to={"/UserLogin"}>UserLogin</Link>
           </div>
        </h4>
        </>
    );
};

export default Start;