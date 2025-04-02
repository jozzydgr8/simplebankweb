import {ArrowRightOutlined, CaretDownFilled, ArrowLeftOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { UseAuthContext } from '../Context/UseAuthContext';

const styles= {
    contents:{
        backgroundColor:'white',
        padding:'30px',
        marginBottom:'10px',
        borderRadius:'13px',
        display:"flex",
        justifyContent:'space-between',
        alignItems:'center',
        fontSize:'20px'
    },
    
}
function Help() {
    const navigate = useNavigate();
    const {user} = UseAuthContext();
    
  return (
    <section>
        <div className="container-fluid">
        <div style={{fontSize:'30px', marginBottom:'10px'}}onClick={()=>navigate('/simplebankweb/')}>
                    <ArrowLeftOutlined/>
        </div>
            
                <div >
                    <h3 style={{textTransform:'capitalize'}}>Hi {user?.displayName}👋</h3>
                    <h2>How can we help?</h2>
                </div>
                <div style={styles.contents}>
                    <div>
                        <span>Send us a message</span> <br/>
                        <span style={{fontSize:'16px', color:'gray'}}>We typically reply in under 30 minutes</span>
                    </div>
                    <ArrowRightOutlined/>
                    
                </div>

                <div style={styles.contents}>
                    FAQ
                    <CaretDownFilled/>
                </div>
            </div>
        
    </section>
  )
}

export default Help
