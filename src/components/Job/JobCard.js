import React from "react";
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: "1px solid #e8e8e8",
    cursor:"pointer",
    transition:'0.3s',
    "&:hover":{
        boxShadow:"0px 5px 25px rgba(0,0,0,0.1)",
        borderLeft:"6px solid #4D64E4",
    }
  },
  companyName: {
    fontSize: "13.5px",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.75),
    borderRadius: "5px",
    display: "inline-block",
    fontWeight: 600,
  },
  skillChip:{
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize:"14.5px",
    borderRadius:"5px",
    fontWeight:600,
    backgroundColor:theme.palette.secondary.main,
    color:"#fff",
  },
}));
const getRelativeTime = (timestamp) => {
  const now = new Date();
  const then = new Date(timestamp);
  const diffInSeconds = Math.floor((now - then) / 1000);

  if (diffInSeconds < 60) {
    return `${Math.floor(diffInSeconds)} seconds ago`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
};



export default (props) => {
  const classes = useStyles();
  return (
    <Box p={2} mb={1} className={classes.wrapper}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography variant="subtitle1">{props.title}</Typography>
          <Typography className={classes.companyName} variant="subtitle2">
            {props.companyName}
          </Typography>
        </Grid>
        <Grid item xs>
          <Grid item container xs>
            {props.skills.map((skill) => (
              <Grid className={classes.skillChip} key={skill} item>
                {skill}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="flex-end" xs>
          <Grid item>
            <Typography variant="caption">
              { getRelativeTime(props.postedOn)} | {props.type} | {props.location}
              
              </Typography>
              </Grid>
              <Grid item>
            <Box mt={2}>
              <Button onClick={props.open} variant="outlined">Check</Button>
            </Box>
          </Grid>
        </Grid>
        </Grid>
        </Box>
      );
};
