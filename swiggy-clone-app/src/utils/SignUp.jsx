import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import userContext from '../functions.js/userContext';
// import LoginModal from './Loginmodal';


const SignUp = ({setVisible})=>{

    // login visible definition
    const [loginVisible, setLoginVisible] = useState(true);

    const {setUserNameDisplay,
        // email, setEmail,
        // password, setPassword
    } = useContext(userContext);

    // const [dataObj, setdataObj] = useState({});

    // Input request body parameters

    // Username
    const [name, setName] = useState('');
    // Email
    const [email, setEmail] = useState('');
    // Password
    const [password, setPassword] = useState('');
    // Login remember me
    // const [loginRemember, setLoginRemember] = useState(false);

    // useEffect(()=>{
    //     localStorage.getItem('rememberlogin') === null ?
    //     console.log('Please Login!!')
    //     : autologin();
    // },[])

    const formObj = {
        emailText : 'Email',
        passwordText : 'Password',
        usernameText : 'Username',
        loginText : 'Login',
        signupText : 'Sign Up',
        cancelText : 'Cancel',
        rememberText : 'Remeber me',
        logintosignupText : 'New to the Platform?',
        signuptologinText : 'Already have an account ?'
    };

    function handleSubmit(){
        loginVisible ? login() : signup();
    };

    // function login_cred_localstorage(data){

    //     const present = new Date();
    //     const expiry_time = 1000*10;

    //     const item = JSON.stringify({
    //         value_token : data.accessToken,
    //         value_id : data.user.id,
    //         value_username : data.user.name,
    //         expiryTime : present.getTime() + expiry_time
    //     });

    //     console.log(`item : ${item}`);
    //     console.log(`item expiryTime :  ${item.expiryTime}`);

    //     localStorage.setItem('rememberlogin', item);
    //     // localStorage.setItem('UserID', data.user.id)
    //     // localStorage.setItem('UserName', data.user.name)
    // }

    // function login_cred_sessionstorage(data){
    //         // sessionStorage.setItem('AccessToken',data.accessToken)
    //         sessionStorage.setItem('UserID', data.user.id)
    //         sessionStorage.setItem('UserName', data.user.name)
    // }


    function login(){
        console.log('Login !!');

        fetch('http://localhost:5000/api/userLogin',{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : email,
                password : password
            })
        }).then((response)=>{

            if(!response.ok){
                throw new Error(`Response Status : ${response.status}`);
            }
            // console.log(response);
            return response.json();
        }).then((data)=>{
            // console.log(data);
            // console.log(`Access Token of ${data.user.name} : ${data.accessToken}`);

            // storing accessToken on client side for a specific session.
            // loginRemember ? login_cred_localstorage(data) : login_cred_sessionstorage(data) 

            sessionStorage.setItem('AccessToken',data.accessToken);
            sessionStorage.setItem('UserID', data.user.id);
            sessionStorage.setItem('UserName', data.user.name)

            // login_localstorage();

            setUserNameDisplay(sessionStorage.getItem('UserName'));

            return data;
        })
        setVisible(false);
        setTimeout(()=>{
            window.location.reload();
        },1000)

        // setUserNameDisplay(dataObj.user.name);
        // Token check and user login;

    };

    function signup(){

        console.log('Sign Up!!');

        fetch('http://localhost:5000/api/userRegister',{
            method:"POST",
            headers : {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                name : name,
                email : email,
                password : password
            })
        }).then((response)=>{
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            // console.log(response.status);
            // console.log(response);

            return response.json();
        })
        .then((data)=>{

        console.log(`signup data : ${data}`);

        return data;
        });

        setVisible(false);
    }

    return(
        <>
        {
        loginVisible
        ? 
        // Login Form
        <div className='loginform'>
        <form className='formlogin' action='#' onSubmit={handleSubmit}>
            <span className='cancelspan'><button 
            onClick={()=>{
                setVisible(false);
            }
            }>X</button></span>

            <span className='titleSpan'>
                <h5>{formObj.loginText}</h5>
            </span>

            {/* Email ID */}
            <label className='formlabel'>{formObj.emailText}</label>
            <input className='forminput' type='email' placeholder="Email"
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            required/>
            {/* Password */}
            <label className='formlabel'>{formObj.passwordText}</label>
            <input className='forminput' type='password' placeholder="Password"
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            required/>
            {/* Remember Me */}
            <span className='span checkboxspan'>
            <input type='checkbox' className='checkbox'/>
            <label>{formObj.rememberText}</label>
            </span>
            {/* Create Account */}
            <span className='span loginspan'>
            <label>{formObj.logintosignupText}</label>
            {/* Later */}
            <Link className='loginlink' 
            onClick={()=>{
                setLoginVisible(false);
            }}>{formObj.signupText}</Link>
            </span>
            {/* Sign Up Link */}
            <span className='btnspan'>
            <button className='btn cancel'
            onClick={()=>{
                setVisible(false);
            }}
            >{formObj.cancelText}</button>
            {/* Login Button */}
            <button className='btn login' 
            type='submit'
            // formAction={handleSubmit}
            // onClick={handleSubmit}
            >{formObj.loginText}</button>
            </span>
        </form>
        </div>
        : 
        // SignUp Form
        <div className='signupform'>
        <form className='formsignup' action='#' onSubmit={handleSubmit}>
            <span className='cancelspan'><button 
            onClick={()=>{
                setVisible(false);
            }
            }>X</button></span>

            <span className='titleSpan'>
                <h5>{formObj.signupText}</h5>
            </span>

            {/* Username */}
            <label className='formlabel'>{formObj.usernameText}</label>
            <input className='forminput' type='text' placeholder="Username"
            onChange={(e)=>{
                setName(e.target.value);
            }}
            required/>
            {/* Email ID */}
            <label className='formlabel'>{formObj.emailText}</label>
            <input className='forminput' type='text' placeholder="Email"
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            required/>
            {/* Password */}
            <label className='formlabel'>{formObj.passwordText}</label>
            <input className='forminput' type='password' placeholder="Password" 
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            required/>
            {/* Remember Me */}
            <span className='span checkboxspan'>
            <input type='checkbox' className='checkbox'/>
            <label>{formObj.rememberText}</label>
            </span>
            {/* Create Account signupopen */}
            <span className='span loginspan'>
            <label>{formObj.signuptologinText}</label>
            <Link className='signuplink'
            onClick={()=>{
                setLoginVisible(true);
            }}
            >{formObj.loginText}</Link>
            </span>
            {/* Sign Up Button */}
            <span className='btnspan'>
            <button className='btn cancel'
            onClick={()=>{
                setVisible(false);
            }}
            >{formObj.cancelText}</button>
            {/* SignUp Button */}
            <button className='btn signup'
            type='submit'
            // onClick={handleSubmit}
            >{formObj.signupText}</button>
            </span>
        </form>
        </div>
        }
        </>
    )};

export default SignUp;