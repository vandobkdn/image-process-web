import React from "react";
import './style.css';
import GridList from "@material-ui/core/GridList";
import {makeStyles} from "@material-ui/core/styles";
import ImageItem from "./ImageItem";
import {Grid} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'wrap',
        transform: 'translateZ(0)',
    },
}));

function checkImage(imageSrc) {
    var img = new Image();
    try {
        img.src = imageSrc;
        return true;
    } catch(err) {
        return false;
    }
}

const ImagesContainer = (props) => {
    const classes = useStyle();
    return (
        <Grid container spacing={5} className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {props.dataFormatted.map((item) => checkImage(item.imageUrl) &&(
                    <ImageItem item={item} />
                ))}
            </GridList>
        </Grid>
    )
};


export default ImagesContainer;