import React, { Component } from 'react'

//MUI Stuff
import Grid from '@material-ui/core/Grid'

import SideDrawer from './SideDrawer'
import Wallet from "./Wallet";

//Custom Components
import Sync from './permanent_items/Sync'
import Utility from './permanent_items/Utility'

class MainDisplay extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={2}>
                    <SideDrawer /> 
                </Grid>
                <Grid item xs={10}>
                    <Sync />
                    <Utility />
                    <Wallet />
                </Grid>
            </Grid>
        )
    }
}

export default MainDisplay
