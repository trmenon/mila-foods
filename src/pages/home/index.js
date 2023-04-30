import React from "react";
import coming_soon from '../../assets/coming_soon.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export const HomePage = ()=> {
    return(
        <Box 
            sx={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '100%', 
                minHeight: '500px',
                flexDirection: 'column'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    my: '24px'
                }}
            >
                <TextField
                    placeholder="Search for products"
                    label=""
                    color={'secondary'}
                    fullWidth
                    sx={{ '.MuiOutlinedInput-root': {borderRadius: '28px'}}}
                    InputProps={{
                        endAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                    }}
                    variant='outlined'
                />
            </Box>
            <Typography gutterBottom variant="h5" component="div">
                Home Page
            </Typography>
            <img src={coming_soon} alt={'Coming soon'} width={'300px'}/>
        </Box>
    )
}