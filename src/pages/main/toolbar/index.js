import React from 'react';
import brand from '../../../assets/brand.png';
import { 
    FacebookIcon,
    WhatsappIcon,
    InstagramIcon,
    TwitterIcon 
} from '../../../icons';

// Legacy Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import { Stack } from "@mui/material";
import Grid from '@mui/material/Grid';

export const ToolbarComponent = ()=> {

    // Renderer
    return(
        <React.Fragment>
            <AppBar position="static" color="transparent" elevation={0}>
                <Container>
                    <Toolbar disableGutters>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <img src={brand} alt="Mila Foods" width={'96px'}/>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Stack direction = {'row'} spacing={'4px'}>
                                        <IconButton onClick={()=> console.log('Facebook link TODO')}>
                                            <FacebookIcon />
                                        </IconButton>   
                                        <IconButton onClick={()=> console.log('Instagram link TODO')}>
                                            <InstagramIcon />
                                        </IconButton>   
                                        <IconButton onClick={()=> console.log('Twitter link TODO')}>
                                            <TwitterIcon />
                                        </IconButton>   
                                        <IconButton onClick={()=> console.log('Whatsapp link TODO')}>
                                            <WhatsappIcon />
                                        </IconButton>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    )
}