import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider({ value, onChange }) {
    const handleChange = (event, newValue) => {
        onChange(newValue);
    };

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                sx={{
                    color: '#46A358', 
                    '& .MuiSlider-thumb': {
                        border: '2px solid #46A358',
                        backgroundColor: '#46A358', 
                    },
                    '& .MuiSlider-track': {
                        backgroundColor: '#46A358', 
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: '#C4C4C4', 
                    },
                }}
            />
        </Box>
    );
}
