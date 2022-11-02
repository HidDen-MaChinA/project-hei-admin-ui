import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "./DialogueBox.css";
import { TextField } from '@mui/material';
import { group } from 'console';

export default function DialogSelect(){
  const [open, setOpen] = useState(false);
  const [groupe, setgroupe] = useState<number| string>('');
  const [first_date,setFirst_date] = useState('');
  const [second_date,setSecond_date] = useState('');

  const handleChange = (event:SelectChangeEvent<typeof groupe>) => {
    setgroupe(Number(event.target.value) || '');
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event:React.SyntheticEvent<unknown>, reason?:String) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
    console.log(groupe)
  };

  return (
    <div>
      <Button onClick={handleClickOpen} className="test">Filtre de selection</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          {/* <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}> */}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Groupe</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={groupe}
                onChange={handleChange}
                input={<OutlinedInput label="Groupe" />}
              >
                <MenuItem value={5}>
                  <em>Tout</em>
                </MenuItem>
                <MenuItem value={10}>G1</MenuItem>
                <MenuItem value={15}>G2</MenuItem>
                <MenuItem value={20}>G3</MenuItem>
              </Select>
              <label>Date anterieur</label>
              <TextField type="date" onInput={(e:any)=>{setFirst_date(e.target.value)}}/>
              <label>Date prochain</label>
              <TextField type="date" onInput={(e:any)=>{setSecond_date(e.target.value)}}/>
            </FormControl>
          {/* </Box> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}