import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards({ info }) {

    return (
        <Card sx={{ margin: "14px", alignContent: "right" }} >
            <CardActionArea sx={{ width: "230px" }} >
                <CardMedia
                    component="img"
                    height="200"
                    alt="teste"
                    image={info.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {info.gender}<br/>
                        {info.status}<br/>
                        {info.species}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}