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
        background: ' linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)',
        height: '25px',
    },
    gridItem: {
        width: '50% !important',
        height: '500px !important',
        padding: '2px !important',
    },
    image: {
        height: '100%'
    }
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
            <img src={imageUrl} alt={title} className={classes.image}/>
            <GridListTileBar
                title={title}
                classes={{
                    root: classes.titleBar,
                    title: classes.title,
                }}
                actionIcon={
                    <IconButton aria-label="tick">
                        <CheckBoxOutlineBlankOutlinedIcon className={classes.title} onClick={onCheck}/>
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