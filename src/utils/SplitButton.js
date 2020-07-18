import React from 'react';

//MUI Components
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const options = ['Amount High-Low', 'Amount Low-High', 'Arrange A-Z', 'Arrange Z-A'];

const styles = theme => ({
    dropIcon : {
        color: theme.customPalette.primary
    },
    button: {
        color: 'rgba(255,255,255, 1)',
        textTransform: 'none'
    },
    dropMenuRoot: {
        zIndex: 100
    },
    dropMenu: {
        zIndex: 100
    }
})

const  SplitButton = (props) => {

  const { classes } = props

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
      <Grid item xs={3}>
        <ButtonGroup variant="text" color="primary" ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick} className={classes.button}>{options[selectedIndex]}</Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon className={classes.dropIcon}/>
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.dropMenuRoot}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                zIndex: 100
              }}
            >
              <Paper >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" className={classes.dropMenu}>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
  );
}

export default withStyles(styles)(SplitButton)
