import React from "react";
import './style.css';
import GridList from "@material-ui/core/GridList";
import { makeStyles } from "@material-ui/core/styles";
import ImageItem from "./ImageItem";
import { Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },

    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },

}));

function checkImage(imageSrc) {
    var img = new Image();
    try {
        img.src = imageSrc;
        return true;
    } catch (err) {
        return false;
    }
}

const ImagesContainer = (props) => {
    const classes = useStyle();
    return (
        <div className="leftSide">
            <GridList cols={4} className={classes.root} >
                {props.dataFormatted.map((item) => checkImage(item.imageUrl) && (
                    <ImageItem item={item} />

                ))}
            </GridList>
        </div>
    )
};


export default ImagesContainer;