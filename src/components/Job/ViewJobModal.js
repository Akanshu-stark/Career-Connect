import React from "react";
import {
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  Button,
  IconButton,
} from "@material-ui/core";
import { format } from "date-fns";
import { Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme)=>({
  info: {
    "& > *": {
      margin: '2px'
    },
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

export default (props) => {
  const classes = useStyles();
  return (
    <Dialog open={!!Object.keys(props.job).length} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {props.job.title} @ {props.job.companyName}
          <IconButton onClick={props.closeModal}>
            <CloseIcon></CloseIcon>
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box>
          <Box className={classes.info} display="flex">
            <Typography variant="body1">Posted On :</Typography>
            <Typography variant="body2">
              {props.job.postedOn &&
                format(props.job.postedOn, "dd/mm/yyy HH:MM")}
            </Typography>
          </Box>
          <Box className={classes.info} display="flex">
            <Typography variant="body1">Job Type :</Typography>
            <Typography variant="body2">{props.job.type}</Typography>
          </Box>
          <Box className={classes.info} display="flex" >
            <Typography variant="body1">Job Location :</Typography>
            <Typography variant="body2">{props.job.location}</Typography>
          </Box>
          <Box className={classes.info} display="flex" flexWrap="wrap">
            <Typography variant="body1">Job Description :</Typography>
            <Typography variant="body2">{props.job.description}</Typography>
          </Box>
          <Box className={classes.info} display="flex" flexWrap="wrap">
            <Typography variant="body1">Company Website :</Typography>
            <Typography variant="body2">{props.job.companyUrl}</Typography>
          </Box>
          <Box className={classes.info} display="flex" flexWrap="wrap">
            <Typography variant="body1">Skills :</Typography>
            <Grid container alignItems="center">
              {props.job.skills && 
              props.job.skills.map((skill) => (
                <Grid className={classes.skillChip} key={skill} item>
                  {skill}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined"component="a" href={props.job.link} target="_blank">Apply</Button>
      </DialogActions>
    </Dialog>
  );
};
