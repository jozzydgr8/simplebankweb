import { signOut } from 'firebase/auth';
import { auth } from '../App';
import {BellOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom"
import { UseAuthContext } from '../Context/UseAuthContext'
import { FlatButton } from './FlatButton';


export const Header = ()=>{
  const {dispatch} = UseAuthContext()
  const handleSignOut = async()=>{
    dispatch({type:'loading', payload:true});
    try{
      await signOut(auth);
      dispatch({type:'loading', payload:false});
    }catch(error){
      console.error(error);
      dispatch({type:'loading', payload:false});
    }
  }
    return(
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/simplebankweb">Simple bank</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

    {/* <form className="d-flex" role="search" style={{width:"100%"}}>
    
        <Input.Search className="customInput"/>
      </form> */}

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link" to="/simplebankweb">Dashboard</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><BellOutlined/></a>
        </li>
      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu">
            <li><Link to={'/simplebankweb/help'} className="dropdown-item" >Help</Link></li>
            <li><Link to={'/simplebankweb/transfer'} className="dropdown-item" >Transfer</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><div className="dropdown-item"><FlatButton  onClick={handleSignOut} title={'signout'}/></div></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to={'/simplebankweb'} className="nav-link disabled" aria-disabled="true">English</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    )
}