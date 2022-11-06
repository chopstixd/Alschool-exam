import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut,} from "firebase/auth";
import { auth } from "./firebase-auth";



function Login() { 
const [loginEmail, setLoginEmail] = useState(""); 
const [loginPassword, setLoginPassword] = useState("");
const [user, setUser] = useState({});


onAuthStateChanged(auth, (currentUser) => { setUser(currentUser); });


const login = async () => 
{ try
     { const user = await signInWithEmailAndPassword( 
    auth,
     loginEmail,
      loginPassword );
     console.log(user);
     } 
     catch (error) { console.log(error.message); } };

const logout = async () => { await signOut(auth); };

return ( 
<div className="Login">

    
<div> <h2> Login </h2>
<form>
 <input placeholder="Email..." onChange={(event) => 
    { setLoginEmail(event.target.value); }} /> <br></br>
    <input placeholder="Password..." onChange={(event) =>
     { setLoginPassword(event.target.value); }} />
<button onClick={login}> Login</button> 
<div>
<h4> User Logged In: </h4> {user?.email} <br></br>
<button className="bn" onClick={logout}> Sign Out </button>
</div>
</form> 
</div> <br></br>
 </div>
 );
};

export default Login;