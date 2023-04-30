import React from "react";

// Assets
import banana_powder from '../../../assets/banana_powder.png';
import kanakayya_powder from '../../../assets/kanakayya_powder.png';
import ragi_powder from '../../../assets/ragi_powder.png';
import rice_banana_dates_mix from '../../../assets/rice_banana_dates_mix.png';

// Legacy Imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export const ProductsIntro = ()=> {
    return(
        <React.Fragment>
            <Grid container spacing={4} sx={{px: {xs: '8px', md: '2px'}, mt: '24px'}}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ width: '100%' }} raised>
                        <CardMedia
                            component="img"
                            // height="400"
                            image={banana_powder}
                            alt="Banan Powder"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Banana Powder
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography> 
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ width: '100%' }} raised>
                        <CardMedia
                            component="img"
                            // height="194"
                            image={kanakayya_powder}
                            alt="Kannakaya Powder"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Kannakaya Powder
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography> 
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ width: '100%' }} raised>
                        <CardMedia
                            component="img"
                            // height="194"
                            image={ragi_powder}
                            alt="Ragi Powder"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Ragi Powder
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography> 
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ width: '100%' }} raised>
                        <CardMedia
                            component="img"
                            // height="194"
                            image={rice_banana_dates_mix}
                            alt="Rice Banana dates Mix"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Rice Banana Dates Mix
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography> 
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}