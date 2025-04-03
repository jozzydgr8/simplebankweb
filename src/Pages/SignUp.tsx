import { Formik } from "formik";
import { FlatButton } from "../shared/FlatButton";
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup'
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../App";
import { UseAuthContext } from "../Context/UseAuthContext";
import { Input } from "antd";
type formikType = {
    email:string,
    password:string,
    name:string
}

const validationSchema = Yup.object({
    name:Yup.string().required('name is required').min(3, "must be more than three characters long"),
    email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
    password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number"),
})
const styles = {
    input:{
     
        width:'100%',
        padding:'10px',
        border:'none',
        outline:'none',
        borderBottom:'solid 1px black',
        margin:'5px 0'
    },
    container:{
      border:'solid 1px black',
      padding:'30px',
      borderRadius:'10px'
    }, 
    error:{
        color:'red',
        
    }
    
}
export default function SignUp(){

    const navigate = useNavigate();
    const {dispatch} = UseAuthContext();

    const handleSignUp = async ({name, email, password}:formikType)=>{
        dispatch({type:'loading', payload:true});
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const {user} = userCredential
            await updateProfile(user, {displayName:name});
            

            console.log('welcome new user');
            dispatch({type:'getUser', payload:user});
            dispatch({type:'loading', payload:false});
        }catch(error){
            console.error(error);
            alert("email already exists");
            dispatch({type:'loading', payload:false});
        }
    }
    return(
        <>
        <Formik
        validationSchema={validationSchema}
        initialValues={{email:'',password:"", name:''}}
        onSubmit={(values:formikType)=>{
            console.log(values);
            handleSignUp(values);
        }}>
            {
                (props)=>(
                    <div  className="sessioncontainer">
                     <div style={styles.container}>
                     <h1>Sign Up</h1>
                    
                    {/* <div style={styles.error}>{error && 'Error Account already exist'}</div> */}
                    <input
                    style={styles.input} 
                    placeholder="Email: e.g. myemail@mail.com"
                    value={props.values.email}
                    onChange={props.handleChange('email')}
                    onBlur={props.handleBlur('email')}/>
                    <div style={styles.error}> {props.touched.email && props.errors.email}</div>

                    <input
                    style={styles.input} 
                    placeholder="name: e.g. John Doe"
                    value={props.values.name}
                    onChange={props.handleChange('name')}
                    onBlur={props.handleBlur('name')}/>
                    <div style={styles.error}>{props.touched.name && props.errors.name} </div>
                    
                

                    
                    <Input.Password
                    style={styles.input}
                    placeholder="password"
                    value={props.values.password}
                    onChange={props.handleChange('password')}
                    onBlur={props.handleBlur('password')}/>
                    <div style={styles.error}>{props.touched.password && props.errors.password}</div>
                    


                    
                       <div style={{display:'flex', flexDirection:'column'}}>
                       <FlatButton title={'submit'} onClick={props.handleSubmit}/>
                       </div>
                       <br/>
                       <div onClick={()=>navigate('/simplebankweb/user')}>
                        if you already have an account click to sign in thanks!
                       </div>
                    
                     </div>
                    </div>

                )
            }
        </Formik>
        </>
    )
}