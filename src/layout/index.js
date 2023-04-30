import React, {useState} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import brand from '../assets/brand.png';

// Legacy Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { Stack } from "@mui/material";

// Icon Components imports
import {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    WhatsappIcon
} from '../icons';



const routes_list = [
    {key: 'route-home-key', route: 'home', label: 'Home'},
    {key: 'route-wishlist-key', route: 'wishlist', label: 'Wishlist'},
    {key: 'route-about-key', route: 'about', label: 'About Us'},
    {key: 'route-contact-key', route: 'contact', label: 'Contact Us'},
]

export const AppLayout = ()=> {
    // Globals
    const navigate = useNavigate();
    // State
    const [state, setState] = useState({  
        anchor: {elevation: null, open: false},
    })

    // Event handlers
    const handleOpenNavMenu = (event)=> setState({...state, anchor: {elevation: event.currentTarget, open: true}});
    const handleCloseNavMenu = ()=> setState({...state, anchor: {elevation: null, open: false}});
    const handleNavigate = (route)=> {navigate(route); handleCloseNavMenu()};
    const handleLogout = ()=> navigate('/main');
    

    // Renderer
    return(
        <React.Fragment>
            <Menu
              id="menu-appbar"
              anchorEl={state?.anchor['elevation']}
              anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}
              keepMounted
              transformOrigin={{vertical: 'top',horizontal: 'left',}}
              open={state?.anchor['open']}
              onClose={handleCloseNavMenu}
              sx={{display: { xs: 'block', md: 'none' },}}
            >
                {
                    routes_list.map((element)=> {
                        return(
                            <MenuItem key={element?.key} onClick={()=> handleNavigate(element?.route)}>
                                <Typography textAlign="center">{element?.label}</Typography>
                            </MenuItem>
                        )
                    })
                }
            </Menu>
            <Box sx={{border:'1px solid #eee'}}>
                <AppBar position="static" color="transparent" elevation={0}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                                <img src={brand} alt="Mila Foods" width={'72px'}/>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{flexGrow: 2, display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                                <img src={brand} alt="Mila Foods" width={'72px'}/>
                            </Box>
                            <Box 
                                sx={{
                                    flexGrow: 1, 
                                    display: {xs: 'none', md: 'flex'},
                                    justifyContent: 'center'
                                }}
                            >                                        
                                {
                                    routes_list.map((element)=> {
                                        return(
                                            <Button
                                                variant={'text'}
                                                color={'success'}
                                                key={element?.key}
                                                sx={{ 
                                                    my: 2, 
                                                    display: 'flex', 
                                                    mx: '4px', 
                                                    fontWeight:600,
                                                    '&:hover': {
                                                        backgroundColor: 'transparent',
                                                        border: 'none'
                                                    } 
                                                }}
                                                onClick={()=> handleNavigate(element?.route)}
                                            >
                                                {element?.label}
                                            </Button>
                                        )
                                    })
                                }
                            </Box>
                            {/* <Box
                                sx={{ 
                                    flexGrow: 1, 
                                    display: {xs: 'none', md: 'flex'},
                                    justifyContent: 'center'
                                }}
                            >
                                <TextField
                                    placeholder="Search for products"
                                    label=""
                                    color={'secondary'}
                                    fullWidth
                                    sx={{ 
                                        m: '16px', 
                                        width: '50%',
                                        '.MuiOutlinedInput-root': {
                                            borderRadius: '28px'
                                            }
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                                    }}
                                    variant='outlined'
                                />
                            </Box> */}
                            
                            {
                                <Box sx={{display: 'flex', justifyContent: 'flex-end', flexGrow: {xs: 2, md: 0}}}>
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
                                        <Button
                                            variant={'text'}
                                            color={'secondary'}
                                            onClick={handleLogout}
                                            startIcon={<ExitToAppRoundedIcon/>}
                                        >
                                            Sign out
                                        </Button>
                                        
                                    </Stack>                                    
                                </Box>
                            }
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <Box
                sx={{
                    px: {xs: '4px', sm: '8px', md: '16px', lg: '32px'},
                    mt: '32px'
                }}
            >
                <Outlet/>
            </Box>
        </React.Fragment>
    )
}