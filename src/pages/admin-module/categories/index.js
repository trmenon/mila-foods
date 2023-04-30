import React from "react";
import coming_soon from '../../../assets/coming_soon.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const AdminCategoriesPage = ()=> {
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
                Admin Categories Page
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
                Offers provisions to create categories of products
            </Typography>
            <img src={coming_soon} alt={'Coming soon'} width={'300px'}/>
        </Box>
    )
}