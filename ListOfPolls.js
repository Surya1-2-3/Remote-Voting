import {Link} from 'react-router-dom';
const List=()=>{
    const sty={
        width : '100%',
        border: '1px solid black',
        borderRadius:'5px',
    };
    const sty1={
        textDecoration:'none',
    };
    return(
        <>
            <table style={sty}>
                <tr>
                    <td><h3>ELECT THE MLA</h3></td>
                    <td rowspan='3'><Link style={sty1}to="/ThrowTheVote" >Open Poll</Link></td>
                </tr>
                <tr>
                    <td><h6>Starting Date and Time  :  02-08-23 09:00:00 am</h6></td>
                </tr>
                <tr>
                    <td><h6>Ending Time and Date : 02-08-23 01:00:00 pm</h6></td>
                </tr>
            </table>
        </>
    );
};
export default List;