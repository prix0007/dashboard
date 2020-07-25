import React, { Component } from 'react'

//MUI Imports
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Grid } from "@material-ui/core";
import { Divider } from '@material-ui/core';


//MUI Dialog Prompt Action
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//Custom UI Components
import SplitButton from '../utils/SplitButton'
import CustomTableRow from '../utils/CustomTableRow'
import RecieveForm from './RecieveForm';
import CustomIconButton from '../utils/CustomIconButtom'


//Asset Load
import bitcoin from '../assets/bitcoin.svg'
import ethereum from '../assets/ethereum.svg'
import binance from '../assets/binance.svg'
import close_icon from '../assets/close.svg'


const styles = theme => ({
    rootView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 30 ,
        paddingRight: 60
    },
    title: {
        color: theme.customPalette.primarySubtle
    },
    table: {
        width: '100%',
        display: 'flex',   
        flexDirection: 'column'
    },
    tableTitle: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingLeft: 10
    },
    tableTitleText: {
        color: 'rgba(255,255,255,0.65)',
        fontSize: "0.9rem",
        marginLeft: 20
    },
    tableData: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10
    },
    tableDataHeader: {
        color: 'rgba(255,255,255,0.5)',
        height: 30,
        marginTop: 20,
    },
    tableDataHeaderItem: {
        fontSize: 14,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    darkBlack: {
        background: '#0e1013'
    },
    dialogTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 20
    },
    dialogTitleText: {
        marginLeft: '315px',
        color: 'rgba(255,255,255,0.7)'
    },
    dialogContent: {
        paddingLeft: 100,
        paddingRight: 100
    }
})


//Dummy State Data Generation
const createData = (icon, name, cryptocurrency, holding, value, price) => {
    return {icon, name, cryptocurrency, holding, value, price }
}
const data = [
    createData(bitcoin, "Bitcoin", "BTC", "0.00275", "0.537", "1.534"), 
    createData(ethereum, "Ethereum", "ETH", "0.00275", "0.537", "1.534"),
    createData(binance, "Binance", "BNB", "0.0017", "0.337", "0.834"),
    createData(bitcoin, "Bitcoin", "BTC", "0.00275", "0.537", "1.534"),
    createData(bitcoin, "Bitcoin", "BTC", "0.00275", "0.537", "1.534"),
    createData(bitcoin, "Bitcoin", "BTC", "0.00275", "0.537", "1.534"),
]


console.log(data)

//Class based component need to maintain state for sorting 

class Wallet extends Component {

    constructor(props){
        super(props);
        this.state= {
            openDialog: false
        }
    }

    handleOpen = () => {
        this.setState({
            openDialog: true
        })
    }

    handleClose = () => {
        this.setState({
            openDialog: false
        })
    }


    render() {

        const { classes } = this.props
        const { openDialog} = this.state
        
        const dialogForm = <Dialog
                                open={openDialog}
                                onClose={this.handleClose}
                                fullWidth='sm'
                                maxWidth='md'
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                className={classes.dialog}
                                >
                                <DialogTitle id="alert-dialog-title" className={classes.darkBlack} >
                                    <div className={classes.dialogTitle}>
                                        <Typography variant="h5" className={classes.dialogTitleText} >Recieve</Typography> 
                                        <CustomIconButton title="Close" onClick={this.handleClose}>
                                            <img src={close_icon} alt="close" />
                                        </CustomIconButton>
                                    </div>
                                </DialogTitle>
                                <DialogContent className={[classes.darkBlack, classes.dialogContent]}>
                                    <DialogContentText id="alert-dialog-description">
                                        <RecieveForm /> 
                                    </DialogContentText>
                                </DialogContent>
                            </Dialog>

        return (
            <div className={classes.rootView}>
                <Typography variant="h4" className={classes.title}>
                    Wallet 1
                </Typography>
                { 
                    //Dialog Form Rendered Here (It Overlays )
                    dialogForm 
                }
                {
                    // Main Table Component Starts Here
                }
               
                <div className={classes.table}>
                    <div className={classes.tableTitle}>
                        <Typography variant="body1" className={classes.tableTitleText}> Total Coins - 9</Typography>
                        <SplitButton />
                    </div>
                    <Divider />
                    <div className={classes.tableData}>
                        <Grid container className={classes.tableDataHeader}>
                            <Grid item xs={3} className={classes.tableDataHeaderItem} style={{paddingLeft: '20px'}}>
                                Coin
                            </Grid>
                            <Grid item xs={2} className={classes.tableDataHeaderItem}>
                                Holding
                            </Grid> 
                            <Grid item xs={2} className={classes.tableDataHeaderItem}>
                                Value
                            </Grid> 
                            <Grid item xs={2} className={classes.tableDataHeaderItem}>
                                Price
                            </Grid> 
                            <Grid item xs={3} className={classes.tableDataHeaderItem}>
                                Actions
                            </Grid>
                        </Grid>
                        {
                            //Mapping through the data here for list generation
                            data.map( (item, index) => {
                                return <CustomTableRow
                                            icon={item['icon']}
                                            cryptocurrency={item["cryptocurrency"]}
                                            name={item['name']}
                                            holding={item['holding']} 
                                            value={item['value']} 
                                            price={item['value']}
                                            onClickRecieve={this.handleOpen}
                                            onClickSend={null}
                                        />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Wallet)
