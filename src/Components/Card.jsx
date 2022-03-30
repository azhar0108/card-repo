import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const UserCard = ({ user }) => {
  const { name, email } = user;

  const [open, setOpen] = React.useState(false);
  const [text,setText]=React.useState('');
  const [age,setAge]=React.useState('');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange=(e)=>{
    setAge(e.target.value);
  }

  const handleText=(e)=>{
      setText(e.target.value);
  }


  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      ></IconButton>
    </React.Fragment>
  );

  return (
    <Card className="lp-card">
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          {name}
        </Typography>

        <Typography color="text.secondary">{email}</Typography>
        <Typography>{text}</Typography>
        <Typography>{age}</Typography>
      </CardContent>

      <div>
        <TextField id="outlined-basic" 
        label="Text field"
         variant="outlined"
         onChange={handleText} />
      </div>

      <br />
      
        <div>
          <Button onClick={handleClick}>Open simple snackbar</Button>
          <br />
          </div>


          <div>
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
         onChange={handleChange}
        >
          <MenuItem value='10'>Ten</MenuItem>
          <MenuItem value='20'>Twenty</MenuItem>
          <MenuItem value='thirty'>Thirty</MenuItem>
        </Select>
      </FormControl>
          </div>


          <div>
          <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message="Note archived"
            action={action}
          />
        </div>

      <CardActions>
        <Button variant="contained">Button</Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
