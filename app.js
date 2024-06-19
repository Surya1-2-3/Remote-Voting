import UserLogin from "./Pages/UserLogin.js";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Start from './Pages/start.js';
import UserSignUp from "./Pages/UserSignUp.js";
import List from './Pages/ListOfPolls.js';
import ListOfCandidates from './Pages/ListOfCandidates.js';
import Wish from './Pages/WishTheVoter.js';
const App=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start/>}/>
                <Route path="/UserLogin" element={<UserLogin/>}/> 
                <Route path="/UserSignUp" element={<UserSignUp/>}/>
                <Route path="/ListOfPolls" element={<List/>}></Route>
                <Route path="/ThrowTheVote" element={<ListOfCandidates/>}></Route>
                <Route path="/WishTheVoter" element={<Wish/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;