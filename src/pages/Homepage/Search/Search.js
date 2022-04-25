import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material';
import './Search.css';
const Search = () => {
    const [startDate,setStartDate]=useState(new Date());
    const [endtDate,setEndDate]=useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endtDate,
        key: 'selection',
      };

      function handleSelect(ranges){
          setStartDate(ranges.selection.startDate);
          setEndDate(ranges.selection.endDate);
        
        
      }

    return (
        <div className='search'>
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              className='date-picker'
            />
            <h2>
                Number of guests
                <PeopleIcon/>
            </h2>
            <input min={0} max={100}>
            </input>
            <Button>Search Places</Button>
            
        </div>
    );
};

export default Search;