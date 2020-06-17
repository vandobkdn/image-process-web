import React from 'react';
import { Grid } from "@material-ui/core";
import ImagesContainer from "./left";
import ActionRightSide from "./right";
import imageData from '../mocks/data-one-entity';
import './style.css'

const dataFormatted = imageData.imageUrls.map((item, index) => ({
    title: imageData.entity,
    imageUrlIndex: index,
    imageUrl: item
}));

class Application extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataFormatted,
        }
    }

    imageExists = (url, callback, timeout) => {
        timeout = timeout || 5000;
        let timedOut = false, timer;
        const img = new Image();
        img.onerror = img.onabort = function() {
            if (!timedOut) {
                clearTimeout(timer);
                callback(false);
            }
        };
        img.onload = function() {
            if (!timedOut) {
                clearTimeout(timer);
                callback(true);
            }
        };
        img.src = url;
        timer = setTimeout(function() {
            timedOut = true;
            callback(false);
        }, timeout);
    };

    render() {
        return (
            <div className="Application">
                <Grid container spacing={1}>
                    <Grid container item xs={8} md={9}>
                        <ImagesContainer dataFormatted={this.state.dataFormatted} />
                    </Grid>
                    <Grid container item xs={4} md={3} className="RightSide">
                        <ActionRightSide />
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default Application;
