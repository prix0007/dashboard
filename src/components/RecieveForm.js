import React from 'react';

import PropTypes from "prop-types";
import styled from 'styled-components'
import { makeStyles, withStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import StepConnector from '@material-ui/core/StepConnector'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'

//Icon
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';

import rightIcon from '../assets/chevron_left.svg'
import information from '../assets/information.svg'

// Custom Stepper

const QontoConnector = withStyles({
    alternativeLabel: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)"
    },
    active: {
      "& $line": {
        borderColor: "#ff9800"
      }
    },
    completed: {
      "& $line": {
        borderColor: "#ffb74d"
      }
    },
    line: {
      borderColor: "#rgba(255,255,255,0.6)",
      borderTopWidth: 1,
      borderRadius: 1
    }
  })(StepConnector);
  
  const useQontoStepIconStyles = makeStyles({
    root: {
      color: "#eaeaf0",
      display: "flex",
      height: 22,
      alignItems: "center"
    },
    active: {
      color: "#ff9800"
    },
    outerCircle: {
      border: '1px solid #ff9800',
      padding: 4,
      borderRadius: '50%'
    },
    notActiveCircle: {
      border: '1px solid rgba(255,255,255,0.6)',
    },
    circle: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "currentColor",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    completed: {
      color: "#ffb74d",
      zIndex: 1,
      fontSize: 28,
    },
    text: {
      color: 'black',
      fontWeight: 600
    }
  });
  
  function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed , icon} = props;
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active
        })}
      >
        {completed ? (
          <CheckCircleIcon className={classes.completed} />
        ) : (
          <div className={clsx(classes.outerCircle,{ 
              [classes.notActiveCircle]: !active })}>
            <div className={classes.circle} >
              <span className={classes.text}>{icon}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool
  };
  

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepRoot: {
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50
  },
  darkBlack: {
    background: '#0e1013'
  },
  toggleButtonCheck: {
    fontSize: '1rem',
    marginTop: 4,
    position: 'absolute',
    right: 35,
    color: ' #ff9800'
  },
  chevronRight: {
    marginRight: 10,
    marginTop: 3,
    height: '1rem',
    width: '1rem'
  },
  specialCode: {
    background: theme.customPalette.background.main,
    color: theme.customPalette.primary,
    position: 'relative',
    textAlign: 'center',
    borderRadius: '5px',
    padding: '20px 10px',
    marginBottom: 15,
    border: `2px dashed ${theme.customPalette.background.light}`
  },
  information: {
    color: theme.customPalette.blueButton.text,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10
  },
  reVerifyButton: {
    color: theme.customPalette.blueButton.text,
    border: `2px solid ${theme.customPalette.blueButton.border}`,
    margin: 20,
    textTransform: 'none',
    marginLeft: 280
  },
  copyButton: {
    position: 'absolute',
    right: 0,
    marginRight: 5,
    top: 12,
    border: 'none',
    height: 50,
    color: theme.customPalette.primarySubtle,
    background: theme.customPalette.background.light
  },
  active: {
    color: theme.customPalette.blueButton.text
  }
}));

function getSteps() {
  return ['Device', 'Verification', 'Recieve'];
}

//Custom Added Views for Data Display

const CustomPaper = styled(Paper)`
    position: relative;
    display: flex;
    justifyContent: space-between; 
    alignItems: center;
    background: rgba(66,66,66,0.5);
    padding: 10px 30px;
    margin: 15px 0px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background: rgba(66,66,66,0.3);
    }
`
const ToggleButton = ({ text, classes }) => {
    const [completed, setCompleted] = React.useState(false);

    const toggleComplete = () => {
        if(completed){
            setCompleted(false);
        } else {
            setCompleted(true);
        }
    }
    return (
        <CustomPaper 
          variant="outlined" 
          elevation={0} 
          onClick={toggleComplete} 
          >
            <img src={rightIcon} alt="step" className={classes.chevronRight}/>
            <Typography variant="body1" className={completed ? classes.active : ""} >{ text }</Typography>
            {
                completed ?
                    <DoneOutlineOutlinedIcon className={classes.toggleButtonCheck} />
                    :
                    null
            }
        </CustomPaper>
    )
}

//Prop Types from Toggle Button
ToggleButton.propTypes = {
  text: PropTypes.string.isRequired
}

function getStepContent(stepIndex, classes) {

  

  switch (stepIndex) {
    case 0:
      return <React.Fragment>
                <div className={classes.stepRoot}>
                  <Typography variant="body2"> Follow the instruction on Device </Typography>
                  <ToggleButton text="Select the wallet on Device" classes={classes} />
                  <ToggleButton text="Select the Coin on Device" classes={classes}/>
                  <ToggleButton text="Tap 1 card of any 4 cards" classes={classes} />
                </div>
             </React.Fragment>;
             
    case 1:
      return <React.Fragment>
                <div className={classes.stepRoot}>
                  <Typography variant="h5" className={classes.specialCode}>wehfiwe57wefkow6578ehfji578</Typography>
                  <div>
                      <Typography variant="body2">Verify Address on Device</Typography>
                      <ToggleButton text="Please match the address to be shown in X1 Wallet" classes={classes}/>
                  </div>
                </div>
             </React.Fragment>;
    case 2:
      return <React.Fragment>
                <div className={classes.stepRoot}>
                  <Typography variant="body2">Coin Address</Typography>
                  <Typography variant="h5"  id="coin-code" className={classes.specialCode}>
                      hgeyf56gqifut765ewf24r42
                      <Button 
                        variant="outlined" 
                        onClick={() => copyCodeToClipboard()} 
                        className={classes.copyButton}
                      >
                        Copy 
                      </Button>
                  </Typography>
                  
                  <Typography variant="body2" className={classes.information}>
                      <img src={information} alt="information" style={{marginRight: 10}}/>
                      Address Verified
                  </Typography>
                  <Button variant="outlined" className={classes.reVerifyButton}>
                      Re-Verify
                  </Button>
                </div>
             </React.Fragment>;
    default:
      return 'Unknown Step';
  }
}


const copyCodeToClipboard = () => {
  var text = document.getElementById('coin-code').innerText
  navigator.clipboard.writeText(text)
}

const RecieveForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
        <div className={classes.root}>
        <Stepper
            alternativeLabel
            activeStep={activeStep}
            className={classes.darkBlack}
            connector={<QontoConnector />}
        >
            {steps.map(label => (
              <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
              </Step>
            ))}
        </Stepper>
        <div>
            {activeStep === steps.length ? (
            <div>
                <Typography className={classes.instructions}>Device Verified</Typography>
                <Button onClick={handleReset}>Reset</Button>
            </div>
            ) : (
            <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep, classes)}</Typography>
                <div>
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                >
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
                <p>These buttons are just for navigation . Will be removed when data is available</p>
                </div>
            </div>
            )}
        </div>
        </div>  
  );
}

export default RecieveForm