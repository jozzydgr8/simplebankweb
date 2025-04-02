import React from 'react';
import { Menu } from 'antd';
import {QuestionCircleFilled, CreditCardOutlined, LogoutOutlined, HomeOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '../Types/Types';
import { signOut } from 'firebase/auth';
import { auth } from '../App';


export const SideNav: React.FC = () => {
  // Define the menu items
  const items: MenuItem[] = [
    { label: 'Dashboard', key: '/simplebankweb' , icon :<HomeOutlined/>},
    {label:'transfer', key:'/simplebankweb/transfer', icon: <CreditCardOutlined/>},
    { label: 'SignOut', key: 'signOut', icon :<LogoutOutlined/> },
    { label: 'Help', key: '/simplebankweb/help', icon :<QuestionCircleFilled/> },
    
  ];
  const navigate = useNavigate();

  // Map the items array to the format required by the Menu component
  const menuItems = items.map(item => ({
    label: item.label,
    key: item.key,
    icon: item.icon
  }));

  const handleSignOut = async()=>{
    try{
      await signOut(auth)
    }catch(error){
      console.error(error)
    }
  }

  return (
    <Menu
    className='customMenu'
    onClick={({key})=>{
      if(key == 'signOut'){
        handleSignOut();
      }
      navigate(key);
    }}
     items={menuItems} />
  );
};
