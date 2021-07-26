import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import arrayBufferToBase64 from '../../utilities/arrayBufferToBase64';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function PostCard({ rentals }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const landlord_initial = rentals.landlord.charAt(0).toUpperCase();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {landlord_initial}
                    </Avatar>
                }
                title={`$ ${rentals.price}`}
                subheader={rentals.type}
                style={{ color: '#37a864' }}
            />
            <Link to={'/rental/' + rentals._id}>
                <CardMedia
                    className={classes.media}
                    image={arrayBufferToBase64(rentals.image.data)}
                    title="Paella dish"
                />
            </Link>
            <CardContent>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ textAlign: 'justify' }}
                >
                    This impressive paella is a perfect party dish and a fun meal to cook together
                    with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
        </Card>
    );
}
