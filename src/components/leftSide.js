import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'wrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    gridItem: {
        width: '50% !important',
        height: '250px !important',
    }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 */
const tileData = [
    {
        img: "https://batterymanguide.com/wp-content/uploads/2019/11/is-it-ok-to-use-a-travel-trailer-without-a-battery-696x464.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "https://batterymanguide.com/wp-content/uploads/2019/11/is-it-ok-to-use-a-travel-trailer-without-a-battery-696x464.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "https://batterymanguide.com/wp-content/uploads/2019/11/is-it-ok-to-use-a-travel-trailer-without-a-battery-696x464.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "https://batterymanguide.com/wp-content/uploads/2019/11/is-it-ok-to-use-a-travel-trailer-without-a-battery-696x464.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "https://batterymanguide.com/wp-content/uploads/2019/11/is-it-ok-to-use-a-travel-trailer-without-a-battery-696x464.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "https://batterymanguide.com/wp-content/uploads/2019/11/is-it-ok-to-use-a-travel-trailer-without-a-battery-696x464.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "https://batterymanguide.com/wp-content/uploads/2019/11/is-it-ok-to-use-a-travel-trailer-without-a-battery-696x464.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "https://batterymanguide.com/wp-content/uploads/2019/11/is-it-ok-to-use-a-travel-trailer-without-a-battery-696x464.jpg",
        title: 'Image',
        author: 'author',
    },
    {
        img: "https://batterymanguide.com/wp-content/uploads/2019/11/is-it-ok-to-use-a-travel-trailer-without-a-battery-696x464.jpg",
        title: 'Image',
        author: 'author',
    },
];
function SingleLineGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} className={classes.gridItem}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star`}>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

const leftSide = () => {
    return (
        <SingleLineGridList />
    )
};
export default leftSide;
