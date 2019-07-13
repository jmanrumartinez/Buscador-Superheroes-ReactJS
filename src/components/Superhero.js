import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea, Divider } from '@material-ui/core';

class Superhero extends React.Component {
    render() {
        return (
            <Grid item sm={3}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            height="390"
                            component="img"
                            image={this.props.srcImg}
                            title={this.props.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <b>Name:</b> {this.props.name}
                            </Typography>
                            <Divider variant='middle'></Divider>
                            <div className="cardContent">
                                <Typography component="p">
                                    <b>Real name:</b> {this.props.realname}
                                </Typography>
                                <Typography component="p">
                                    <b>Occupation:</b> {this.props.ocupation}
                                </Typography>
                                <Typography component="p">
                                    <b>Based on:</b> {this.props.based}
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea> 
                </Card>  
            </Grid>


        );
    }
}

export default Superhero; 