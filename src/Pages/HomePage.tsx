import { FlatButton } from "../shared/FlatButton"
import { QuestionCircleOutlined, DollarOutlined, CreditCardFilled} from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import ChartsRender from "../Components/ChartsRender"
import { Recents } from "../Components/Recents"
import Services from "../Components/Services"
import { UseAuthContext } from "../Context/UseAuthContext"
export default function HomePage(){
    const navigate = useNavigate();
    const {user} = UseAuthContext();
    const styles={
        headerContainer:{
            display:"flex",
            justifyContent:'space-between',
            padding: '15px 0',
            alignItems:'center'
        },
        dashicons:{
            padding: '5px 12px',
            color:'white',
            borderRadius: '70%',
            fontSize:'30px',   
        },
       
    }
    return(
        <section>
            <div className="container-fluid">
                <div style={styles.headerContainer}>
                    <h1 style={{textTransform:'capitalize'}}>Welcome {user?.displayName}</h1>
                    <FlatButton onClick={()=>navigate('/simplebankweb/transfer')} title={'Make a Transfer'}/>
                </div>

                <div>
                    <Services/>
                </div>
                <main>
                    <div className="row">

                        {/* transaction card */}
                        <div className="col-6">
                            <div className="dfirst"onClick={()=>navigate('/simplebankweb/transfer')}>
                                <div style={{...styles.dashicons,backgroundColor:'gray'}}>
                                    <CreditCardFilled/>
                                </div>
                                <div>Balance 5000</div>
                            </div>
                        </div>

                        {/* helpcard */}
                        <div className="col-6">
                            <div className="dfirst" onClick={()=>navigate('/simplebankweb/help')}>
                                <div style={{...styles.dashicons, backgroundColor:"#198754"}}>
                                    <QuestionCircleOutlined/>
                                </div>
                                <div>Request Help</div>
                            </div>
                        </div>
                    </div>
                    <ChartsRender/>
                    <div>
                        <h2>Recent Transactions</h2>
                        <Recents/>
                    </div>
                </main>
            </div>
        </section>
    )
}