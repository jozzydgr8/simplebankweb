import { transfersData } from "../global/data";
import { FlatButton } from "../shared/FlatButton";
import {ArrowLeftOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

export default function Transfer(){
    const navigate = useNavigate()
    const styles = {
        content:{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
         
        },
        input:{
            borderBottom:'solid 1px black',
            padding:'15px',
            margin:'10px 0'
            
        },
        text:{
            margin:0,
            fontSize:'18',
            fontWeight:'bold'
        },
        smalltext:{
            color:'gray',
            fontSize:'10'
        }
        
    }
    return(
        <section>
            <div className="container-fluid" >
                <div style={{fontSize:'30px'}}onClick={()=>navigate('/simplebankweb')}>
                    <ArrowLeftOutlined/>
                </div>
                <h3 style={{textAlign:'center'}}>Available Balance: 5,000</h3>
                <div style={
                    {
                        display:'flex',
                        flexDirection:'column',
                        gap:'20px'
                    }
                }>
                    <div style={styles.input}>select bank</div>
                    <div style={styles.input}>Type in account number</div>
                    <div style={styles.input}>full name</div>
                    
                
                  


                    <main>
                    <div style={styles.content}>
                        <p>Send again</p>
                        <p style={{color:"#198754"}}>View all</p>
                    
                    </div>

                    <div>
                        {transfersData.map(data=>(
                            <div key={data.key}>
                                <p style={styles.text}>{data.recipient}</p>
                                <p>{data.bank} <span style={styles.smalltext}>. ...{data.status}</span></p>
                            </div>
                        ))}
                    </div>
                </main>

                <FlatButton title={'Next'} onClick={()=>console.log('submit')}/>
                </div>

                
            </div>
        </section>
    )
}