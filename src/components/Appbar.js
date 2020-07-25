import React from 'react'

import logo from '../assets/logo.svg'
import maximize from '../assets/maximize.svg'
import minimize from '../assets/minimize.svg'
import close from '../assets/close.svg'

//MUI Imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

//Custom Component Style
import CustomIconButton from '../utils/CustomIconButtom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: '#0A1018',
      borderBottom: '1px solid #1A1F26',
      boxShadow: 'none'
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
    },
    appbar_control_icon: {
        height: '20px',
        width: '20px',
        padding: '2px'
    }
  }));

const Appbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" className={classes.root}>
            <Toolbar className={classes.appbar_toolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <img src={logo} alt="company_logo" />
                </IconButton> 
                <div className={classes.appbar_controls}>
                    <CustomIconButton title="Minimize">
                        <img src={minimize} alt="minimize" className={classes.appbar_control_icon} />
                    </CustomIconButton>
                    <CustomIconButton title="Maximize">
                        <img src={maximize} alt="maximize" className={classes.appbar_control_icon} />
                    </CustomIconButton>
                    <CustomIconButton title="Close">
                        <img src={close} alt="close" className={classes.appbar_control_icon} />
                    </CustomIconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar
