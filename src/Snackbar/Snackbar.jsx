import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';


const CustomizedSnackbar = ({open, setOpen}) => {
    const classes = useStyles();

    const handleClose = (event,reason) =>{
        if(reason === 'clickaway') return;
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <Snackbar
                open={open}
                anchorOrigin={{vertical:'top', horizontal:'right'}}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <MuiAlert onClose={handleClose} severity='success' elevation={0} variant='filled'>
                    Transaction Successfully Created. 
                </MuiAlert>
            </Snackbar>
            
        </div>
    )
}

export default CustomizedSnackbar

