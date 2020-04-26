import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const ImagePlaceHolder = 'data:image/jpeg;base64,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';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        maxWidth: 345,
        flexGrow: 1
    },
    media: {
      height: '510px',
      border: '4px solid #fff'
    },
    control: {
        padding: theme.spacing(2),
      },
  }));




const Movie = ({movie}) => {
    const poster = movie.Poster ==='N/A' ? ImagePlaceHolder : movie.Poster;
    const classes = useStyles();
    

    return (
<React.Fragment>
      <Grid className={classes.root} item xs={12}>
        <Grid>        
    <Paper  elevation={20}>
        <Card>
        <CardActionArea>
        <CardMedia  
            className={classes.media}
            title={movie.Title} 
            image={poster}
        />
            <CardContent>
                <Typography  component="h6" gutterBottom>
                        <b>{movie.Title}</b>
                </Typography>
                    <Typography component="p">
                        {movie.Year}
                    </Typography>
            </CardContent>
            </CardActionArea>                      
        </Card>
    </Paper>
    </Grid>  
      </Grid>

</React.Fragment>    
);
}

export default Movie;