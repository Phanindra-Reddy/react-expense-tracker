import React,{useContext} from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './Expense List/List';

import {ExpenseTrackerContext} from '../../context/Context';
//import InfoCard from '../InfoCard';

const MainDetails = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Phanindra"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance ₹{balance}</Typography>
//                 <Typography variant="subtitle2" style={{lineHeight:'1.5em', marginTop:'20px'}}>
//                     <InfoCard/>
//                 </Typography>
                <Divider className={classes.divider}/>
                <Form/>
            </CardContent>
            <CardContent classes={classes.CardContent}>
                <Grid item xs={12}>
                    <List/>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MainDetails
