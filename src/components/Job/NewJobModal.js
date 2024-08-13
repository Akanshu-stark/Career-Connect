import React, { useState } from "react";
import {
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  Button,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius: "5px",
    fontWeight: 600,
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  },
  included: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  },
}));

const initState={
  title: "",
  type: "Full Time",
  companyName: "",
  companyUrl: "",
  location: "Remote",
  link: "",
  description: "",
  skills: [],
};

export default (props) => {
  const [jobDetails, setJobDetails] = useState(initState);
  const [loading, setLoading] = useState(false);
  
  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Vue",
    "Firebase",
    "MongoDB",
    "SQL",
  ];

  const handleChange = (e) => {
    e.persist();
    setJobDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const addRemoveSkill = (skill) => {
    jobDetails.skills.includes(skill)
      ? setJobDetails((oldState) => ({
          ...oldState,
          skills: oldState.skills.filter((s) => s !== skill),
        }))
      : setJobDetails((oldState) => ({
          ...oldState,
          skills: oldState.skills.concat(skill),
        }));
  };

  const handleSubmit = async () => {
    for(const field in jobDetails){
      if(typeof(jobDetails[field])=='string' && !jobDetails[field]){
        console.log('not validated');
        alert("Please fill out all fields. ")
        return;
      }

    }
    if(!jobDetails.skills.length){
      alert("Please select relevant skills.")
      return;
    }
    console.log('validated');
    setLoading(true);
    await props.postJob(jobDetails);
    closeModal();
  };

  const closeModal=()=>{
    setJobDetails(initState);
    setLoading(false);
    props.closeNewJobModal();

  }

  const classes = useStyles();


  // console.log(jobDetails);

  return (
    <Box>
    <Dialog open={props.newJobModal} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Post Job
          <IconButton onClick={closeModal}>
            <CloseIcon></CloseIcon>
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput
              autoComplete="off"
              onChange={handleChange}
              name="title"
              value={jobDetails.title}
              placeholder="Job Title *"
              disableUnderline
              fullWidth
              />
          </Grid>
          <Grid item xs={6}>
            <Select
              disableUnderline
              variant="filled"
              name="type"
              value={jobDetails.type}
              onChange={handleChange}
              fullWidth
              >
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              autoComplete="off"
              onChange={handleChange}
              name="companyName"
              value={jobDetails.companyName}
              placeholder="Company Name *"
              disableUnderline
              fullWidth
              />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              autoComplete="off"
              onChange={handleChange}
              name="companyUrl"
              value={jobDetails.comapnyUrl}
              placeholder="Company URL *"
              disableUnderline
              fullWidth
              />
          </Grid>
          <Grid item xs={6}>
            <Select
              disableUnderline
              variant="filled"
              name="location"
              onChange={handleChange}
              value={jobDetails.location}
              fullWidth
              >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="In-Office">In-Office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              autoComplete="off"
              onChange={handleChange}
              name="link"
              value={jobDetails.link}
              placeholder="Job Link *"
              disableUnderline
              fullWidth
              />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              autoComplete="off"
              onChange={handleChange}
              placeholder="Job Description *"
              name="description"
              value={jobDetails.description}
              disableUnderline
              fullWidth
              multiline
              rows={5}
              />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box display="flex">
            {skills.map((skill) => (
              <Box
                onClick={() => addRemoveSkill(skill)}
                className={`${classes.skillChip} ${
                  jobDetails.skills.includes(skill) && classes.included
                }`}
                key={skill}
                >
                {skill}
              </Box>
            ))}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box
          width="100%"
          color="red"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          >
          <Typography variant="caption">* Required fields</Typography>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disableElevation
            color="primary"
            disabled={loading}
            >
            {loading ? (
              <CircularProgress color="secondary" size={22} />
            ) : (
              "Post Job"
            )}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
    </Box>
  );
};
