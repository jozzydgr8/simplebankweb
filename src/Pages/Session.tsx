import { Formik } from "formik";
import { FlatButton } from "../shared/FlatButton";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../App";
import { UseAuthContext } from "../Context/UseAuthContext";
import { useState } from "react";
import { Input } from "antd";


type formikType = {
    email:string,
    password:string
}

const styles = {
    input:{
     
        width:'100%',
        padding:'10px',
        border:'none',
        outline:'none',
        borderBottom:'solid 1px black',
        margin:'5px 0',
        borderRadius:0,
    },
    container:{
      border:'solid 1px black',
      padding:'30px',
      borderRadius:'10px'
    },
    error:{
        color:'red',
        
    }, 
    direction:{
        color:'gray',
        fontSize:'12px'
    }
    
}
const validationSchema = Yup.object({
    email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
    password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number"),
})
export default function Session(){
    const navigate = useNavigate();
    const {dispatch} = UseAuthContext();
    const [error, setError] = useState(false);
    const handleSignIn = async(values:formikType)=>{
    
        try{
            const usercredential = await signInWithEmailAndPassword(auth, values.email, values.password  );
            dispatch({type:'getUser', payload :usercredential.user})
        }catch(error){
            console.error(error);
            setError(true);
        }
    }

    return(
        <>
        <Formik
        validationSchema={validationSchema}
        initialValues={{email:'',password:""}}
        onSubmit={(values:formikType, actions)=>{
            handleSignIn(values);
            actions.resetForm()
        }}>
            {
                (props)=>(
                    <div  className="sessioncontainer">
                     <div style={styles.container}>
                     <h1>Login</h1>

                    <small style={styles.direction}>Login with joshdeveloper@mail.com &
                        password:hardPasswordall1 :for test<br/>  or just create a new account
                    </small>

                    <div style={styles.error}>{error && 'Email or Password mismatch'}</div>
                    
                    <input
                    style={styles.input} 
                    placeholder="Email: e.g. myemail@mail.com"
                    value={props.values.email}
                    onChange={props.handleChange('email')}/>
                    <div style={styles.error}> {props.touched.email && props.errors.email}</div>
                

                    
                    <Input.Password
                    style={styles.input}
                    placeholder="password"
                    value={props.values.password}
                    onChange={props.handleChange('password')}/>
                    <div style={styles.error}>{props.touched.password && props.errors.password}</div>
                    


                    
                       <div style={{display:'flex', flexDirection:'column'}}>
                       <FlatButton title={'submit'} onClick={props.handleSubmit}/>
                       </div>
                       <br/>
                       <div onClick={()=>navigate('/simplebankweb/signup')}>
                        if you do not have an account click to create one thanks!
                       </div>
                    
                     </div>
                    </div>

                )
            }
        </Formik>
        </>
    )
}