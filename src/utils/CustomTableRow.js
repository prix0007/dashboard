import React from 'react'

//MUI Imports
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

//Custom Assets Import 
import send from '../assets/send.svg'
import recieve from '../assets/recieve.svg'

const styles = theme => ({
    data: {
        color: 'rgba(255,255,255,0.8)',
        height: 'auto',
        marginTop: 20,
        padding: 10,
        borderRadius: 3,
        background: `${theme.customPalette.background.light}`
    },
    dataItem: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textTransform: 'uppercase'
    },
    nameIcon: {
        width: '3.5rem',
        height: '3.5rem',
        marginRight: 10
    },
    buttonGroup: {
        padding: 10
    },
    buttonGroupRoot: {
        height: 20,
    },
    recieveButton: {
        color: theme.customPalette.blueButton.text,
        padding: 20
    },
    recieveIcon: {
        height: 20,
        width: 20,
        marginRight: 5,
    } ,
    sendButton: {
        color: theme.customPalette.primary,
        padding: 20
    },
    sendIcon: {
        height: 20,
        width: 20,
        marginRight: 5,
    }
})


//Functional Component 
//Accepts all data from the props

const CustomTableRow = ({icon, name, cryptocurrency, holding, value, price, onClickRecieve, onClickSend, classes}) =>  {

    return (
        <Grid container className={classes.data}>
            <Grid item xs={3} className={classes.dataItem}>
                <img src={icon} alt={name} className={classes.nameIcon}/>
                <Typography variant="body1" className={classes.dataName}>{name}</Typography>
            </Grid>
            <Grid item xs={2} className={classes.dataItem}>
                <Typography variant="body1">
                    {cryptocurrency} {holding}
                </Typography>
            </Grid> 
            <Grid item xs={2} className={classes.dataItem}>
                $ {value}
            </Grid> 
            <Grid item xs={2} className={classes.dataItem}>
               $ {price}
            </Grid> 
            <Grid item xs={3} className={classes.dataItem, classes.buttonGroup}>
                <ButtonGroup variant="text" aria-label="text primary button group" className={classes.buttonGroupRoot}>
                    <Button onClick={onClickRecieve} className={classes.recieveButton}> 
                        <img src={recieve} className={classes.recieveIcon} alt="recieve"/>
                        Recieve
                    </Button>
                    <Button onClick={onClickSend} className={classes.sendButton}>
                        <img src={send} className={classes.sendIcon} alt="send"/>
                        Send
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(CustomTableRow)
