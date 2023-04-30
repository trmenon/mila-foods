import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { FacebookIcon, GoogleIcon } from "../../icons";


// Legacy Imports
import Box from '@mui/material/Box';
import { Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';

// HOC
import { ToolbarComponent } from "./toolbar";
import { ProductsIntro } from "./products";

export const MainPage = ()=> {
    // Globals
    const navigate = useNavigate();
    // State
    const [state, setState] = useState({
        modal: false,
        login: true,
        snackbar: {open: false, message: ''},
        loginFields: {email: '', password: ''}
    });

    // Effects
    useEffect(()=> {console.log(state)}, [state]);

    // Event handlers
    const openModal = ()=> setState({...state, modal: true, login: true});
    const closeModal = ()=> setState({...state, modal: false, login: true});
    const closeSnackbar = ()=> setState({...state, snackbar: {open: false, message: ''}})
    const modalSubmit = ()=> {
        if(state?.login === false) {
            setState({
                ...state,
                login: true,
                snackbar: {open: true, message: 'Welcome to Mila Foods. Now lets get you into the store.'}
            })
        }
        if(state?.login === true) {
            let toRoute = '/main';
            if(state?.loginFields['email'] === 'admin@milafoods.com') {
                if(state?.loginFields['password'] === 'password') {
                    toRoute= '/admin/home';
                }else {
                    setState({
                        ...state,
                        snackbar: {open: true, message: 'You have entered wrong password for admin. try again'}
                    }) 
                }
            }else {
                toRoute = '/shop/home';
            }
            navigate(toRoute);
        }
    }

    // Renderer
    return(
        <React.Fragment>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={state?.snackbar['open']}
                autoHideDuration={4000}
                onClose={closeSnackbar}
                message={state?.snackbar['message']}
            />
            {/* Modal configs */}
            <Dialog
                open={state?.modal}
                onClose={closeModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: { 
                        borderRadius: '48px',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(5px)',
                        // -webkit-backdrop-filter: blur(5px);
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                    }   
                }}
            >
                {/* <DialogContent 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'scroll',
                        '&:: -webkit-scrollbar': {display: 'none'}
                    }}
                >
                    <img src={brand} width={'24px'} />
                </DialogContent> */}
                <DialogContent 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'scroll',
                        '&:: -webkit-scrollbar': {display: 'none'},
                        pt: '32px',
                    }}
                >
                    {
                        state?.login === true?
                            <Box sx={{width: '100%'}}>
                                <Stack
                                    spacing={'4px'}
                                    sx={{
                                        pb: '16px'
                                    }}
                                >
                                    <Button 
                                        fullWidth
                                        variant={'contained'}    
                                        color={'info'}
                                        startIcon={<GoogleIcon/>}                                    
                                    >
                                        Sign in using Google
                                    </Button>
                                    <Button 
                                        fullWidth
                                        color={'info'}
                                        variant={'contained'}    
                                        startIcon={<FacebookIcon/>}                                      
                                    >
                                        Sign in using Facebook
                                    </Button>
                                </Stack>
                                <TextField
                                    placeholder="Your email"
                                    label="Email"
                                    color={'secondary'}
                                    fullWidth
                                    sx={{'.MuiOutlinedInput-root': {borderRadius: '28px'},my: '12px'}}
                                    variant='outlined'
                                    value={state?.loginFields['email'] || ''}
                                    onChange = {(event)=> {setState({...state, loginFields: {...state?.loginFields, email: event.target.value}})}}
                                />
                                <TextField
                                    placeholder="Your password"
                                    label="Password"
                                    type={'password'}
                                    color={'secondary'}
                                    fullWidth
                                    sx={{'.MuiOutlinedInput-root': {borderRadius: '28px'},my: '12px'}}
                                    variant='outlined'
                                    value={state?.loginFields['password'] || ''}
                                    onChange = {(event)=> {setState({...state, loginFields: {...state?.loginFields, password: event.target.value}})}}
                                />
                                <Grid container spacing={2}>
                                    <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-start'}}>
                                        <button
                                            className="custom-bull-btn custom-bull-btn-success"
                                            onClick={()=> setState({...state, login: state?.login === false})}
                                        >
                                            Create a new account
                                        </button>
                                    </Grid>
                                    <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <button
                                            className="custom-bull-btn custom-bull-btn-warning"
                                            onClick={()=> console.log('TODO Forgot Password Feature')}
                                        >
                                            Forgot Password
                                        </button>
                                    </Grid>
                                </Grid>
                            </Box>
                            :
                            <Box sx={{width: '100%'}}>
                                <Stack
                                    spacing={'4px'}
                                    sx={{
                                        pb: '16px'
                                    }}
                                >
                                    <Button 
                                        fullWidth
                                        variant={'contained'}    
                                        color={'info'}
                                        startIcon={<GoogleIcon/>}                                    
                                    >
                                        Sign up using Google
                                    </Button>
                                    <Button 
                                        fullWidth
                                        variant={'contained'}    
                                        color={'info'}
                                        startIcon={<FacebookIcon/>}                                    
                                    >
                                        Sign up using Facebook
                                    </Button>
                                </Stack>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            placeholder="Enter your first name"
                                            label="First Name"
                                            color={'secondary'}
                                            fullWidth
                                            sx={{'.MuiOutlinedInput-root': {borderRadius: '28px'},my: '12px'}}
                                            variant='outlined'
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            placeholder="Enter your last name"
                                            label="Last Name"
                                            color={'secondary'}
                                            fullWidth
                                            sx={{'.MuiOutlinedInput-root': {borderRadius: '28px'},my: '12px'}}
                                            variant='outlined'
                                        />
                                    </Grid>
                                </Grid>
                                <TextField
                                    placeholder="Your email"
                                    label="Email"
                                    color={'secondary'}
                                    fullWidth
                                    sx={{'.MuiOutlinedInput-root': {borderRadius: '28px'},my: '12px'}}
                                    variant='outlined'
                                />
                                <TextField
                                    placeholder="Your password"
                                    label="Password"
                                    type={'password'}
                                    color={'secondary'}
                                    fullWidth
                                    sx={{'.MuiOutlinedInput-root': {borderRadius: '28px'},my: '12px'}}
                                    variant='outlined'
                                />                    
                                <TextField
                                    placeholder="Confirm password"
                                    label="Confirm Password"
                                    type={'password'}
                                    color={'secondary'}
                                    fullWidth
                                    sx={{'.MuiOutlinedInput-root': {borderRadius: '28px'},my: '12px'}}
                                    variant='outlined'
                                />        
                                <button
                                    className="custom-bull-btn custom-bull-btn-success"
                                    onClick={()=> setState({...state, login: state?.login === false})}
                                >
                                    Sign in here
                                </button>            
                            </Box>
                    }
                </DialogContent>
                <DialogActions sx={{px: '32px', pb: '32px'}}>                    
                    <Button 
                        onClick={modalSubmit} 
                        fullWidth
                        variant={'contained'}
                        sx={{borderRadius: '48px'}}
                    >
                        {state?.login === true? 'Sign in': 'Sign up'}
                    </Button>
                </DialogActions>
            </Dialog>

            <div className="container-main">
                <Stack 
                    sx={{
                        display: 'flex', 
                        justifyContent: 'flex-start', 
                        px: '24px',
                    }}
                    spacing={'36px'}
                >
                    <Box sx={{width: '100%', mb: '16px', }}>
                        <ToolbarComponent/>
                    </Box>
                    <h1 className="brand-title">Mila Foods</h1>
                    <h4 className="brand-subtitle">Nourishment through our homemade products</h4>
                    <Box sx={{width: '100%', mb: '16px', display: 'flex', justifyContent: 'center', }}>
                        <button className="rich-btn" onClick={openModal}>
                            Shop
                        </button> 
                    </Box>
                </Stack>
            </div>
            <Box 
                sx={{
                    px: {xs: '8px', sm: '12px', md: '16px', lg: '20px'}, 
                    my: '24px'
                }}
            >
                <Typography variant="h6" gutterBottom >
                    Our Best Sellers
                </Typography>
                <ProductsIntro/>
            </Box>
        </React.Fragment>
    )
}