import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout';
import HomePage from './Pages/HomePage';
import Transfer from './Pages/Transfer';
import Help from './Pages/Help';
import { UseAuthContext } from './Context/UseAuthContext';
  // Import the functions you need from the SDKs you need
  import {initializeApp} from 'firebase/app';
  import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { useEffect } from 'react';
import Session from './Pages/Session';
import SignUp from './Pages/SignUp';
import { Loading } from './shared/Loading';

  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messageingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId:process.env.REACT_APP_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)




function App() {
  const {user, dispatch, loading} = UseAuthContext();
  useEffect(()=>{
    dispatch({type:'loading', payload:true});
    const unSubscribe = onAuthStateChanged(auth, user=>{
      if(user){
        const user = auth.currentUser;
        dispatch({type:'getUser', payload:user});
        console.log('signed in', user);
        dispatch({type:'loading', payload:false});
      }else{
        dispatch({type:'getUser', payload:null});
        console.log('logged out')
        dispatch({type:'loading', payload:false});
      }
    });
    return ()=>unSubscribe()
  },[]);
  if(loading){
    return <Loading/>
  }
  console.log("Current user in component:", user);
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    

    <Route path='/simplebankweb'element={<Layout/> }>
    <Route index element={user ? <HomePage/>: <Navigate to = {'/simplebankweb/user'}/>}/>
    <Route path='transfer' element={user ? <Transfer/>: <Navigate to = {'/simplebankweb/user'}/>} />
    <Route path='help' element={user ? <Help/> : <Navigate to = {'/simplebankweb/user'}/>}/>
    <Route path='user' element={!user ? <Session/>: <Navigate to = {'/simplebankweb'}/> }/>
    <Route path='signup' element ={!user ? <SignUp/>:<Navigate to = {'/simplebankweb'}/>} />
    </Route>
    </>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
