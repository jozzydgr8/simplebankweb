
import {PhoneOutlined, DribbbleOutlined, CreditCardOutlined, CloudSyncOutlined} from '@ant-design/icons'

const styles={
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text:{
        color:'gray',
        
    },
    serviceicon:{
        fontSize:'30px',
     
    }
}
function Services() {
  return (
    <div style={styles.container}>
        <div>
            <PhoneOutlined style={styles.serviceicon} />
            <p style={styles.text}>Airtime</p>
        </div>
        <div>
            <CloudSyncOutlined style={styles.serviceicon}/>
            <p style={styles.text}>Data</p>
        </div>

        <div>
            <CreditCardOutlined style={styles.serviceicon}/>
            <p style={styles.text}>Bills</p>
        </div>

        <div>
            <DribbbleOutlined style={styles.serviceicon}/>
            <p style={styles.text}>Betting</p>
        </div>
    </div>
  )
}

export default Services
