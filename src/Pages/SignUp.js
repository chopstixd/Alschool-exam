

import { signInWithGoogle } from "./firebase-auth";
function SignUp() {
    
return ( 

<div className="SignUp">

     <div> <h2> Create Account </h2> 
     <form>
     <input placeholder="Email..." /> <br></br>
     <input placeholder="Password..."  /><br></br>
         
<button > Sign Up</button>

      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
     
</form>
</div>

 </div>
 );
}

export default SignUp;