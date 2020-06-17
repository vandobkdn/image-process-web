import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
}));

const ButtonToolBar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {props.children}
        </div>
    );
};

export default ButtonToolBar;