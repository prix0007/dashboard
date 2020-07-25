import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'


//MUI Icons
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


//Assets Import 
import portfolio from '../assets/portfolio.svg'
import transaction from '../assets/transaction.svg'
import tutorial from '../assets/tutorial.svg'
import settings from '../assets/settings.svg'


const useStyles = makeStyles((theme) => ({
  rootView: {
    background: theme.customPalette.background.secondary,
    maxWidth: 230,
    width: 230,
    height: 'calc(100vh - 68px)',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed'
  },
  root: {
    width: '100%',
    maxWidth: 230,
    fontSize: '0.7rem',
    backgroundColor: theme.customPalette.background.secondary,
    color: 'rgba(255,255,255,0.8)'
  },
  nested: {
    paddingLeft: theme.spacing(10),
    color: theme.customPalette.primarySubtle,
  },
  nestedText: {
    fontSize: '0.7rem',
  },    
  beneficiary_button: {
    color: theme.customPalette.blueButton.text,
    border: `2px solid ${theme.customPalette.blueButton.border}`,
    margin: 20,
    textTransform: 'none',
  },
  support_button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textTransform: 'none',
    background: '#4B3C2B',
  }, 
  header : {
      padding: 10,
      position: 'relative',
      color: theme.customPalette.white.light,
      paddingLeft: 0
  },
  lightWhite: {
    color: theme.customPalette.white.light
  },
  active: {
      color: theme.customPalette.primary,
      fontSize: '1rem'
  },
  activeWallet: {
    color: theme.customPalette.primary,
  }
 
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.rootView}>
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >   
            <ListItem>
                <ListItemIcon>
                    <img src={portfolio} alt="portfolio" />
                </ListItemIcon>
                <Typography variant="body1" className={classes.header}>Portfolio</Typography>
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <AccountBalanceWalletOutlinedIcon className={classes.active}/>
                </ListItemIcon>
                <ListItemText >
                    <Typography variant="body2" className={classes.active}>
                        Wallet
                    </Typography>
                </ListItemText>
                {open ? <ExpandLess className={classes.active} /> : <ExpandMore className={classes.active}/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText >
                            <Typography variant="body2" className={classes.activeWallet}>
                                Wallet 1    <span style={{marginLeft: '30px', fontSize: '20px'}}>...</span>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText >
                            <Typography variant="body2">
                                Wallet 2   <span style={{marginLeft: '30px', fontSize: '20px'}}>...</span>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText >
                            <Typography variant="body2">
                                Wallet 3   <span style={{marginLeft: '30px', fontSize: '20px'}}>...</span>
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        
                    </ListItem>
                </List>
            </Collapse>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <img src={transaction} alt="transaction" />
                </ListItemIcon>
                <ListItemText >
                    <Typography variant="body2" className={classes.lightWhite}>
                        Last Transaction
                    </Typography>
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <img src={tutorial} alt="tutorial" />
                </ListItemIcon>
                <ListItemText >
                    <Typography variant="body2" className={classes.lightWhite}>
                        Tutorials
                    </Typography>
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <img src={settings} alt="settings" />
                </ListItemIcon>
                <ListItemText >
                    <Typography variant="body2" className={classes.lightWhite}>
                        Settings
                    </Typography>
                </ListItemText>
            </ListItem>
            <Divider />
        </List>
        
        <Button className={classes.beneficiary_button} variant="outlined">
            Make Beneficiary 
        </Button>
        
        <Button className={classes.support_button} >
            Support
        </Button>
    </div>
  );
}
