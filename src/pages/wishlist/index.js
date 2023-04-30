import React from "react";
import coming_soon from '../../assets/coming_soon.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const WishlistPage = ()=> {
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
            <Typography gutterBottom variant="h5" component="div">
                Wishlist Page
            </Typography>
            <img src={coming_soon} alt={'Coming soon'} width={'300px'}/>
        </Box>
    )
}