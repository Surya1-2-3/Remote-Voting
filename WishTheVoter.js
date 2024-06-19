import img1 from './images/ThanksForVote.jpg';
const Wish=()=>{
    const sty={
        position: 'fixed',
        top:'50',
        left:'400',
    };
    const sty0={
        position: 'fixed',
        top:'100',
        left:'290',
        textAlign:'center'
    };
    const sty1={
        position:'fixed',
        top:'190',
        left:'350',
        height:'400',
    };
    const sty2={
        backgroundColor:'#87CEEB',
        position:'fixed',
        top:'0',
        left:'0',
        right:'0',
        bottom:'0',
    };
    return(
        <>
        <div style={sty2}>
            <h1 style={sty}>THANKS FOR VOTING</h1>
            <h1 style={sty0}>RESULTS WILL BE ANNOUNCED SOON</h1>
            <img src={img1} style={sty1}></img>
        </div>
        </>
    );
};
export default Wish;