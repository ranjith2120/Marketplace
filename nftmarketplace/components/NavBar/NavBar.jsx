import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {MdNotifications} from 'react-icons/md';
import {BsSearch} from 'react-icons/bs';
import {CgMenuLeft,CgMenuRight} from 'react-icons/cg';

//internal imports
import Style from './NavBar.module.css';
import {Discover, HelpCenter, Notification, Profile, SideBar} from './index';
import {Button} from '../componentsindex';
import images from '../../img';

const NavBar = () => {
  //----use state
  const [discover,setDiscover] =useState(false); 
  const [helpCenter,setHelpCenter] =useState(false);
  const [notification,setNotification] =useState(false);
  const [profile,setProfile] =useState(false);
  const [openSideMenu,setOpenSideMenu] =useState(false);

  return (
    <div className={Style.navBar}>
      <div className={Style.navBar_container}>
        <div className={Style.navBar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt="NFT MARKET PLACE" width={100} height={100} />
          </div>
          <div className={Style.navBar_container_left_box_input}>
            <div className={Style.navBar_container_left_box_input_box}>
                <input type="text" placeholder='Search NFT' />
                <BsSearch onClick={()=>{}} className={Style.search.con}/>
            </div>
          </div>
        </div>
        // end of left section
        <div className={Style.navBar_container_right}>
            <div className={Style.navBar_container_right_discover}>
                <p onClick={(e)=>{}}>Discover</p>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;