import React, { useState } from 'react';
import logo from '../../../images/PngItem_1322127.png'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';

const Header = () => {
    const [open,setOpen] = useState(false);
   
  
    return (
        
    <div className='parent-header'>
    
                <div className='header'>
             <div className='icon-div'>
             <img src={logo}
                className='header_icon'
                 alt=''></img>
             </div>
            <div className='header-center'>
                <input type='text'></input>
                <SearchIcon></SearchIcon>  
            </div>
            <div className='header-right'>
                <p>Become a host</p>
                <div>
                <LanguageIcon></LanguageIcon>
                </div>
                <div>
                <ExpandMoreIcon></ExpandMoreIcon>
                </div>
               <div>
               <Avatar></Avatar>
               </div>
               
                
            </div>
            <div className="topnav">
               
                <div className='icon' onClick={()=>setOpen(!open)}>
                 <i className="fa fa-bars"></i>
                </div>
                
                
                </div>

              
                
                 
                
            </div>
            <div>
            {
                     open && <div className='logos'>
                     <p>Become a host</p>
                     <LanguageIcon></LanguageIcon>
                     <ExpandMoreIcon></ExpandMoreIcon>
                     <Avatar></Avatar>
                     </div>
                }
            </div>

           </div>




        
           
            
        
    );
};

export default Header;

