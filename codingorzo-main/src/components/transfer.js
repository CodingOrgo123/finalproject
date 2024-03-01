<div className="register-container">
			<div className="register-image">
<img src={registerimg} height="auto" width="auto" />
<h1 id="register-text">Join our community</h1>
<p className="register_desc">Codingorzo is a place where coding and creativity unite</p>
<a className="appbuttons" href="/" >Go Back to Home</a>
			</div>
			<div className="register-form">

<div className="registerss">
<h1>Register</h1>
	<input className="input-box" id="input-box" type="text" onChange={(e)=>console.warn(e)} placeholder="Firstname" />
	<input  className="input-box"   id="input-box" type="text" placeholder="Lastname" />
	<input  className="input-box"  id="input-box" type="email" placeholder="Email" />
	<input  className="input-box"  id="password" type="password" placeholder="Password" />
	
	<input  className="input-box" id="re-enter-password" type="password" placeholder="Re-enter Password" />
	<button className="appbutton"  type="button">Register</button>
	<p>or</p>
	<p className="register_desc">Already have an account</p>
	<a href="/login">Login</a>

</div>
			</div>
		</div>