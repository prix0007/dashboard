import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'

//Custom Component Import
import Sync from './permanent_items/Sync'
import Utility from './permanent_items/Utility'

//MUI Icons
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LoopIcon from '@material-ui/icons/Loop';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SettingsIcon from '@material-ui/icons/Settings';

//Assets Import 
import portfolio from '../assets/portfolio.svg'
import transaction from '../assets/transaction.svg'
import tutorial from '../assets/tutorial.svg'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`} 
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.customPalette.background.main,
    display: 'flex',
    minHeight: 'calc(100vh - 64px)',
  },
  tabs: {
    minWidth: 200,
    background: theme.customPalette.background.secondary,
    borderRight: `1px solid ${theme.palette.divider}`,
    color: 'rgba(255,255,255,0.8)'
  },
  tab: {
    display: 'flex',
    textTransform: 'none',
  },
  panel_view: {
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100% - 200px)',
  },
  permanent_items: {
      display: 'flex',
      flexDirection: 'column',
      height: '100px',
      width: '100%',
  }, 
  beneficiary_button: {
    color: theme.customPalette.blueButton.text,
    border: `2px solid ${theme.customPalette.blueButton.background}`,
    margin: 20,
    textTransform: 'none',

  },
  support_button: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      textTransform: 'none',
      background: theme.customPalette.primarySubtle,
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab 
            icon={<AccountBalanceWalletIcon />} 
            label="Wallets" 
            className={classes.tab}
            {...a11yProps(0)} 
        />
        <Tab 
            icon={<LoopIcon />} 
            label="Last Transaction" 
            className={classes.tab}
            {...a11yProps(1)} 
        />
        <Tab 
            icon={<VideoLibraryIcon />} 
            label="Tutorials" 
            className={classes.tab}
            {...a11yProps(2)} 
        />
        <Tab 
            icon={<SettingsIcon />} 
            label="Settings" 
            className={classes.tab}
            {...a11yProps(3)} 
        />
        <Button className={classes.beneficiary_button} variant="outlined">
            Make Beneficiary 
        </Button>
        <Button className={classes.support_button} >
            Support
        </Button>
      </Tabs>
      <div className={classes.panel_view}>
        <div className={classes.permanent_items}>
            <Sync />
            <Utility />
        </div>
        <div className={classes.current_view}>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
        </div>
      </div>
    </div>
  );
}