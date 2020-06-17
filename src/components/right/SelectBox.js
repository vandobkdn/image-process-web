import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
    root: {
        display: 'flex',
        flex: 'auto',
        justifyContent: 'flex-end',
        marginBottom: '30px',
        marginLeft: '20px'
    }
}));

const SelectBox = (props) => {
    const {
        name,
        options,
        onSelectOption
    } = props;

    const classes = useStyle();

    return (
        <Autocomplete
            id={name}
            options={options}
            getOptionLabel={(option) => option.label}
            style={{ width: 300}}
            renderInput={(params) => <TextField {...params} label={name} variant="outlined" />}
            className={classes.root}
            size="small"
        />
    );
};

export default SelectBox;