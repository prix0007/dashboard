import React from 'react'

//MUI Imports
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from '@material-ui/core/IconButton';

const CustomIconButtom = ({children , title , color, iconButtonClassName, onClick}) => {

    return (
        <Tooltip title={title}>
            <IconButton color={color} className={iconButtonClassName} onClick={onClick}>
                {
                    children
                }
            </IconButton>            
        </Tooltip>
    )
}

export default CustomIconButtom
