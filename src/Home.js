import React, {useState} from "react";
import { Paper, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import axios from "axios";

function Home() {
  const [Apiresponse, setApiresponse] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const handleChange = (event) => {
    setSelectedDay(event.target.value);
    console.log(event.target.value);
    console.log(selectedDay);
  };
  const handleButtonClick = async () => {
    try{
      const response = await axios.get("http://localhost:5001/getMenu",{
        headers:{
          'menuday' : selectedDay,
        }
      });
      setApiresponse(response.data);
      console.log(response.data);
    } catch(error){
      console.error("Error fetching API:::", error);
      setApiresponse("API response failed");
    }
  }

  return (
    <div style={{padding:"20px"}}>
      <FormControl fullWidth>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'left' }}>
        <Typography variant="h6" style={{ marginBottom: '10px' }}>Welcome</Typography>
        <FormControl sx={{ m: 1, minWidth: 300 }}>
          <InputLabel id="day-label">Select a day</InputLabel>
          <Select
            labelId="day-label"
            id="day-select"
            value={selectedDay}
            onChange={handleChange}
            style={{marginTop:"10px"}}
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Monday"}>Monday</MenuItem>
            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
            <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
            <MenuItem value={"Thursday"}>Thursday</MenuItem>
            <MenuItem value={"Friday"}>Friday</MenuItem>
            <MenuItem value={"Saturday"}>Saturday</MenuItem>
            <MenuItem value={"Sunday"}>Sunday</MenuItem>
          </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            style={{ width: '150px', margin: '20px auto', display:'block' }}
            onClick={handleButtonClick}
          >
            Submit
          </Button>
        </Paper>
      </FormControl>
    </div>
  );
}

export default Home;
