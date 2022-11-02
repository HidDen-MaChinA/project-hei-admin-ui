import { FormControl, InputLabel, MenuItem, Modal, Paper, Select, SelectChangeEvent, TextField } from "@mui/material";
import "./createEvent.css";
import React, { MouseEventHandler, useEffect, useState } from "react";
import axios from "axios";
export default function CreateEventForm(props: { ishere: boolean, toogle_2: MouseEventHandler<HTMLButtonElement> , url:string}) {
    const { ishere, toogle_2 , url} = props
    return (
        <Modal
            open={ishere}
            onClose={toogle_2}
        >
            <Paper elevation={3} className="modale-event">
                <div className="head-event">
                    <h2>Create event</h2>
                </div>
                <div className="form-body">
                    <TextField id="outlined-basic" label="Event name" variant="outlined" />
                    <TextField id="outlined-basic" label="Type" variant="outlined" />
                    <div className="date">
                      <span>will be from</span>
                    <TextField id="outlined-basic" type="date"/>
                       <span>to</span> 
                    <TextField id="outlined-basic" type="date"/>
                    </div>
                    <label>Responsible Id</label>
                    <TextField id="outlined-basic" label="Type" variant="outlined" />
                    <SelectSmall url={url}/>
                </div>
            </Paper>
        </Modal>
    )
}

function SelectSmall(props:{url:string}) {
    const {url} = props;
    const [place, setPlace] = useState<any|undefined>();
    const handleChange = (event: SelectChangeEvent) => {
      setPlace(event.target.value);
    };
    useEffect(()=>{
        axios.get(url+"/places").then((data)=>{
            setPlace(data.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">place</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={place===undefined?'':place[0].name}
          label="place"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {place!==undefined&&place.map((i:any)=>(
                <MenuItem value={i.id}>{i.name}</MenuItem>
         ))}
        </Select>
      </FormControl>
    );
  }