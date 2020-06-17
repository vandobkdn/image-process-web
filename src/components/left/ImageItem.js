import React from "react";
import GridListTileBar from "@material-ui/core/GridListTileBar/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';

const useStyle = makeStyles((theme) => ({
    title: {
        color: theme.palette.secondary.dark,
    },
    titleBar: {
        background: '#87c2ff',
        height: '25px',
        margin: '15px 5px',
        borderRadius: '10px',
        padding: '4px 0',
    },
    gridItem: {
        boxSizing: 'border-box',
        width: '30%',
        height: '500px',
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: '0.5s',
        '&:hover': {
            width: '33%',
        },
    },
    image: {
        height: '90%',
        width: '100%',
        transition: '0.5s',

    },

}));

const ImageItem = (props) => {
    const {
        title,
        imageUrlIndex,
        imageUrl,
    } = props.item;

    const classes = useStyle();

    return (
        <GridListTile key={imageUrlIndex} className={classes.gridItem}>
            <img src={imageUrl} alt={title} className={classes.image} />
            <GridListTileBar
                title={title}
                classes={{
                    root: classes.titleBar,
                    title: classes.title,
                }}
                actionIcon={
                    <IconButton aria-label="tick">
                        <CheckBoxOutlineBlankOutlinedIcon className={classes.title} onClick={onCheck} />
                    </IconButton>
                }
            />
        </GridListTile>
    )
};

const onCheck = () => {
    alert("check this check Box")
};

export default ImageItem;