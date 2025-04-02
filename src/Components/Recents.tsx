import { Input, Modal, Popconfirm, Table } from "antd"
import { useEffect, useState } from "react"
import {EyeOutlined, SearchOutlined} from '@ant-design/icons';
import { ColumnGroupType } from "antd/es/table";
import { transactionsData } from "../global/data";


export const Recents :React.FC= ()=>{
     const [dataSource, setDataSource] = useState([]);;
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    
    useEffect(()=>{
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>setDataSource(data))
        .catch(error=>console.log(error))
        .finally(()=>{
            setLoading(false)
        })
        
    },[]);

    const columns = [
        {
          title: "Date",
          dataIndex: "date",
          key: "date",
        },
        {
          title: "Description",
          dataIndex: "description",
          key: "description",
        },
        {
          title: "Amount (₦)",
          dataIndex: "amount",
          key: "amount",
          render: (amount:String) => `₦${amount.toLocaleString()}`, // Formats amount with commas
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          render: (status:String) => {
            let color = status === "Completed" ? "green" : status === "Pending" ? "orange" : "red";
            return <span style={{ color, fontWeight: "bold" }}>{status}</span>;
          },
        },
      ];
      
      
    return (
        <Table
        dataSource={transactionsData}
        columns={columns}
        pagination={{ pageSize: 5 }}>

        </Table>
    )
}
