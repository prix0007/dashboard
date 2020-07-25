import React from 'react'

import styled from 'styled-components'

//MUI Imports
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


//Import custom icons
import plus_icon from '../../assets/plus.svg';
import delete_icon from '../../assets/delete.svg';
import search_icon from '../../assets/search.svg'


const useStyles = theme => ({
    root: {
        marginTop: 20
    },
    view: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 60,
    },
    add : {
        height: 12,
        width: 12,
        marginRight: 10
    },
    delete: {
        height: 14,
        width: 14,
        marginRight: 10
    },
    buttonGroup: {
        width: 232,
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: 5,
        background: theme.customPalette.background.light,
        border: `1px solid ${theme.customPalette.background.secondary}`,
    },
    buttonGroupSeperator: {
        height: 18,
        marginTop: 9
    },
    button: {
        fontSize: 12,    
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius:  0,
        color: 'rgba(255,255,255,0.6)',
    },
    searchInputGroup: {
        display: 'flex',
        alignItems: 'center',
        background: theme.customPalette.background.light,
        borderRadius: 5,
        padding: 4,
        paddingLeft: 15,
        paddingRight: 10,
        border: `1px solid ${theme.customPalette.background.secondary}`,
        marginRight: 20,
    },
    searchIcon: {
        marginRight: 10
    },
})

const CustomInput = styled.input`
    color: rgba(255,255,255,0.7);
    background: rgba(0,0,0,0);
    border: none;
    boxShadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    margin: 0px;
    padding: 3px;

    &:focus {
        border: none;
        outline: none;
    }
`;


const Utility = (props) => {
    const { classes } = props
    return (
        <Grid container className={classes.root}>
            <Grid item xs={4} />
            <Grid item xs={8} className={classes.view}>
                <div className={classes.searchInputGroup}>
                    <img src={search_icon} alt="search" className={classes.searchIcon}/>
                    <CustomInput type="text" placeholder="Search Your Coin."/>
                </div>
                <div className={classes.buttonGroup}>
                    <Button className={classes.button}>
                        <img src={plus_icon} alt="plus_icon" className={classes.add} />
                        ADD COIN
                    </Button>
                    <Divider className={classes.buttonGroupSeperator} variant="vertical" />
                    <Button className={classes.button}>
                        <img src={delete_icon} alt="delete_icon" className={classes.delete} />
                        DELETE
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default withStyles(useStyles)(Utility)
