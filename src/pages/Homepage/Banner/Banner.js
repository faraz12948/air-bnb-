import React, { useState } from 'react';
import './Banner.css';
import banner from '../../../images/banner2.jpg'
import Search from '../Search/Search'
import { Button } from '@mui/material';

const Banner = () => {
    const [searchDate,setSearchDate]=useState(false)
    return (
        <div className='banner'>
            <div className='banner-search'>
            <Button onClick={()=>setSearchDate(!searchDate)} className='banner-searchButton'>Search Dates</Button>
                {
                    searchDate && <Search></Search>
                }
                
            </div>
            <div className='banner-info'><h1>Not sure where to go? Perfect.</h1><br/><Button className='info-button'>Im flexible</Button></div>

            <img  src={banner} alt=''></img>
            
        </div>
    );
};

export default Banner;