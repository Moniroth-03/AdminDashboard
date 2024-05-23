import React from 'react'
import "./topbar.css"
import {Notifications, Language, Settings} from '@mui/icons-material';
const Topbar = () => {
  return (
    <div className='topbar'>
      
      <div className='topbarWrapper'>
        <div className='topleft'>
          <span className="logo">Rothadmin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <Notifications /> 
            <span className="topIconBadge">2</span>
          </div>

          <div className='topbarIconContainer'>
            <Language /> 
            <span className="topIconBadge">2</span>
          </div>

          <div className='topbarIconContainer'>
            <Settings /> 
          </div>
          <img src="https://i.pinimg.com/736x/6e/b5/41/6eb5411faeecfd0ac02401744f13dc35.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default Topbar;

