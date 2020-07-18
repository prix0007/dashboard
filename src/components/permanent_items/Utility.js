import React from 'react'

//MUI Imports
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip'

//MUI  Icons
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'

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
        color: theme.customPalette.primary,
        fontSize: '1rem',
        marginRight: 10
    },
    delete: {
        color: theme.customPalette.primary,
        fontSize: '1rem',
        marginRight: 10
    },
    buttonGroup: {
        background: theme.customPalette.background.light,
        border: `1px solid ${theme.customPalette.background.secondary}`,
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        color: 'rgba(255,255,255,0.8)',
    },
    search: {
        marginRight: 20,
        width: 300,
    },
    'MuiTextField-root': {
        paddingTop: 10,
        paddingBotton: 10
    }
})

const CustomTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
        '& input': {
            padding: 10,
        },
        '& fieldset': {
          borderRadius: `8px`,
        },
      },
    },
  })(TextField);

const Utility = (props) => {
    const { classes } = props
    return (
        <Grid container className={classes.root}>
            <Grid item xs={4} />
            <Grid item xs={8} className={classes.view}>
                <CustomTextField
                    label="Search Your Coin"
                    variant="outlined"
                    className={classes.search}
                    InputProps={{
                        startAdornment: (
                              <SearchIcon />
                          ),
                    }}
                />
                <ButtonGroup disableElevation variant="text" className={classes.buttonGroup}>
                    <Button className={classes.button}>
                        <AddIcon className={classes.add} />
                        ADD COIN
                    </Button>
                    <Button className={classes.button}>
                        <DeleteOutlineIcon className={classes.delete} />
                        DELETE
                    </Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}

export default withStyles(useStyles)(Utility)
