import React from 'react';
import PropTypes from "prop-types";
import { makeStyles, withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import clsx from "clsx";
import StepConnector from '@material-ui/core/StepConnector'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

//Icon
import Check from "@material-ui/icons/Check";

const formTheme = {
    primary: {
        main: '#ef6c00'
    },
    secondary: {
        main: '#ffa000'
    }
}
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
      borderColor: "#ff9800",
      borderTopWidth: 3,
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
    circle: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "currentColor"
    },
    completed: {
      color: "#ffb74d",
      zIndex: 1,
      fontSize: 18
    }
  });
  
  function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active
        })}
      >
        {completed ? (
          <Check className={classes.completed} />
        ) : (
          <div className={classes.circle} />
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
}));

function getSteps() {
  return ['Device', 'Verification', 'Recieve'];
}

//Custom Added Views
const ToggleButton = ({ text }) => {
    const [completed, setCompleted] = React.useState(false);

    const toggleComplete = () => {
        if(completed){
            setCompleted(false);
        } else {
            setCompleted(true);
        }
    }

    return (
        <Paper variant="outline" onClick={toggleComplete}>
            <KeyboardArrowRightOutlinedIcon />
            { text }
            {
                completed ?
                    <Check />
                    :
                    null
            }
        </Paper>
    )
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <React.Fragment>
                <Typography variant="body2"> Follow the instruction on Device </Typography>
                <ToggleButton text="Select the wallet on Device" />
                <ToggleButton text="Select the Coin on Device" />
                <ToggleButton text="Tap 1 card of any 4 cards" />
             </React.Fragment>;
    case 1:
      return <React.Fragment>
                <Typography variant="h4">wehfiwe57wefkow6578ehfji578</Typography>
                <div>
                    <Typography>Verify Address on Device</Typography>
                    <ToggleButton text="Please match the address to be shown in X1 Wallet" />
                </div>
             </React.Fragment>;
    case 2:
      return <React.Fragment>
                <Typography variant="body2">Coin Address</Typography>
                <div>
                    <Typography variant="h4">wehfiwe57wefkow6578ehfji578</Typography>
                    <Button variant="contained">Copy</Button>
                </div>
                <Typography variant="body2">Address Verified</Typography>
                <Button variant="outlined">
                    Re-Verify
                </Button>
             </React.Fragment>;
    default:
      return 'Unknown Step';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
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
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
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
                </div>
            </div>
            )}
        </div>
        </div>  
  );
}