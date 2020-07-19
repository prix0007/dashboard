import React from 'react'

import logo from '../assets/logo.svg'
import maximize from '../assets/maximize.svg'

//MUI Imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';


//MUI Icons
import Close from '@material-ui/icons/Close'
import Minimize from '@material-ui/icons/Minimize'

//Custom Component Style
import CustomIconButton from '../utils/CustomIconButtom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appbar_toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
    appbar_controls: {
        display: 'flex',
        width: 100,
        justifyContent: 'space-evenly'
    }
  }));

const Appbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky">
            <Toolbar className={classes.appbar_toolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <img src={logo} alt="company_logo" />
                </IconButton> 
                <div className={classes.appbar_controls}>
                    <CustomIconButton title="Minimize">
                        <Minimize />
                    </CustomIconButton>
                    <CustomIconButton title="Maximize">
                        <img src={maximize} alt="maximize" style={{ height: '20px', width: '20px', padding: '2px'}} />
                    </CustomIconButton>
                    <CustomIconButton title="Close">
                        <Close />
                    </CustomIconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar
