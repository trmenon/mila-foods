import React, {useState} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import brand from '../../assets/brand.png';

// Legacy Imports
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

const service_routes = [
    {key: 'admin-home-route', label: 'Home', route: 'home'},
    {key: 'admin-products-route', label: 'Manage Products', route: 'manage-products'},
    {key: 'admin-categories-route', label: 'Manage Categories', route: 'manage-category'},
    {key: 'admin-reports-route', label: 'Reports', route: 'reports'},
]

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - 240px)`,
      marginLeft: `240px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-240px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

export const AdminLayout = ()=> {
    // Globals
    const navigate = useNavigate();
    const theme = useTheme();

    // State
    const [state, setState] = useState({
        open: false
    })

    // Event Handlers
    const handleDrawerOpen = () => setState({...state, open: state?.open === false});
    const handleDrawerClose = () => setState({...state, open: state?.open === false});
    const handleNavigate = (route)=> navigate(route);
    const handleLogout = ()=> navigate('/main');

    // Renderer
    return(
        <React.Fragment>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar 
                    position="fixed" 
                    open={state?.open} 
                    color="transparent" elevation={1}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(state?.open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Mila foods Control Center
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                flexGrow: 1
                            }}
                        >
                            <Button
                                variant={'text'}
                                color={'secondary'}
                                onClick={handleLogout}
                                startIcon={<ExitToAppRoundedIcon/>}
                            >
                                Sign out
                            </Button>
                        </Box>                        
                    </Toolbar>
                    
                </AppBar>
            </Box>
            <Drawer
                sx={{
                    width: '240px',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '240px',
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={state?.open}
            >
                <DrawerHeader>
                    <Box
                        sx={{
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}
                    >
                        <img src={brand} alt="Mila Foods" width={'64px'}/>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </Box>    
                </DrawerHeader>
                <Divider/>
                <List>
                    {
                        service_routes.map((element)=> {
                            return(
                                <ListItem 
                                    key={element?.key} 
                                    disablePadding
                                    onClick = {()=> handleNavigate(element?.route)}
                                >
                                    <ListItemButton>
                                        <ListItemText primary={element?.label} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Drawer>
            <Main open={state?.open}>
                <DrawerHeader />
                <Box sx={{mt: '32px'}}><Outlet/></Box>
            </Main>
        </React.Fragment>
    )
}