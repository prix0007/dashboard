import React from 'react'

//MUI Imports
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

//MUI Icons
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import { Typography, makeStyles } from '@material-ui/core';

//Custom Slider Switch
const AntSwitch = withStyles((theme) => ({
    root: {
      width: 38,
      height: 20,
      padding: 3,
      display: 'flex',
    },
    switchBase: {
      margin: 1,
      padding: 2,
      color: '#ff9800',
      '&$checked': {
        transform: 'translateX(18px)',
        color: theme.customPalette.secondary,
        '& + $track': {
          opacity: 1,
          backgroundColor: 'rgba(255,255,255,0)',
          borderColor: theme.customPalette.secondary,
        },
      },
    },
    thumb: {
      width: 16,
      height: 16,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid #ff9800`,
      borderRadius: 20 / 2 - 1,
      opacity: 1,
      backgroundColor: 'rgba(255,255,255,0)',
    },
    checked: {},
  }))(Switch);

const useStyles = theme => ({
    view: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: 20,
        paddingBottom: 10,
        paddingRight: 60
    },
    status: {
        display: 'flex',
        width: 150,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    divider: {
        marginRight: 20
    },
    text: {
        color: theme.customPalette.primary
    },
    icon: {
        color: theme.customPalette.primary
    },
    successIcon: {
      color: theme.customPalette.secondary
    },
    successText: {
      color: theme.customPalette.secondary
    }
});

const Sync = (props) => {
    
    const { classes } = props;

    const [synced, setSync] = React.useState(false);

    const toggleSync = () => {
      if(synced){
        setSync(false)
      } else {
        setSync(true)
      }
    }
    return (
        <Grid container >
            <Grid item xs={9} />
            <Grid item xs={3} className={classes.view}>
                <div className={classes.status}>
                  {
                    synced ?
                      <React.Fragment>
                        <CheckCircleIcon className={classes.successIcon} />
                        <Typography variant="body1" className={classes.successText}>Synchronized</Typography>
                      </React.Fragment>
                      : 
                      <React.Fragment>
                        < HighlightOffOutlinedIcon className={classes.icon}/>
                        <Typography variant="body1" className={classes.text}>Un-Synchronized</Typography>
                      </React.Fragment>

                  }
                    
                </div>
                <Divider orientation="vertical" flexItem className={classes.divider}/>
                <AntSwitch onClick={toggleSync} checked={synced}/>
            </Grid>
        </Grid>
    )
}

export default withStyles(useStyles)(Sync)
