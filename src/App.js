import React,{useEffect,useRef} from 'react';
import {Grid} from '@material-ui/core';
//import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui';
import {SpeechState, useSpeechContext} from '@speechly/react-client'
import IncomeExpenseDetails from './components/IncomeExpenseComp/IncomeExpenseDetails';
import MainDetails from './components/MainComp/MainDetails';
import useStyles from './styles';


function App() {
  const classes = useStyles();
  const {speechState} = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(()=>{
    if(speechState === SpeechState.Recording){
      executeScroll();
    }
  },[speechState])

  return (
    <div className="App">
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="ceneter" style={{height:'100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <IncomeExpenseDetails title="Income"/>
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
            <MainDetails/>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <IncomeExpenseDetails title="Income"/>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <IncomeExpenseDetails title="Expense"/>
        </Grid>
      </Grid>

//       <PushToTalkButtonContainer>
//         <PushToTalkButton/>
//         <ErrorPanel/>
//       </PushToTalkButtonContainer>

    </div>
  );
}

export default App;
