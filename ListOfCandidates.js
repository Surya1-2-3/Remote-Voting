import img1 from './images/Sudeer1.jpg';
import img2 from './images/BYreddy1.jpg';
import img3 from './images/Chittor.jpg';
import {Link} from 'react-router-dom';
import TimeSetter from './settimer';
import img5 from './images/listOfCand.jpg';
const ListOfCandidates=()=>{
    const sty={
        border:'1px solid black',
        borderRadius:'5px',
        position:'fixed',
        top:'90',
        right:'50',
        
    };
    const sty1={
        paddingRight:'100px',
    };
    const sty2={
        position:'fixed',
        bottom:'20',
        right:'50',
        backgroundColor:'Black',
        color:'white',
        textDecoration:'none',
    }
    const sty7={
        position:'fixed',
        top:'90',
        left:'50',
    };
    const sty5={
        position:'fixed',
        top:'10',
        left:'450',
    };
    
    const sty9={
        position:'fixed',
        bottom:'40',
        
        left:'10',
    }
    const imageResize ={
        width: '100px', /* Set the desired width for the images */
        height: '100px', /* Set the desired height for the images */
        /* Add any additional styling for the images as needed */
      }
    return (
        <>
        <h1 style={sty5}>THROW THE VOTE</h1>
            <img src={img5} style={sty7}></img>
            <table style={sty}>
                <tr>
                    <td style={sty1}><img src={img1}></img></td>
                    <td style={sty1}><h4>SUDHEER</h4></td>
                    <td > <input type='radio' name="surya"></input></td>
                </tr>
                <tr>
                    <td ><img src={img2}></img></td>
                    <td style={sty1}><h4>SIDDHARTH</h4></td>
                    <td ><input type="radio" name='surya'></input></td>
                </tr>
                <tr>
                    <td><img src={img3}></img></td>
                    <td style={sty1}><h4>SIVA</h4></td>
                    <td ><input type="radio" name='surya'></input></td>
                </tr>
            </table>
            <TimeSetter style={sty9}></TimeSetter>
            <Link to='/WishTheVoter' style={sty2}>SUBMIT</Link>
            
        </>
    );
};
export default ListOfCandidates;