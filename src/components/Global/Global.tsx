import { Search } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DialogSelect from "../dialogue_select/DialogueBox";
import { Navigate, Route, BrowserRouter as  Router, Routes } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, FormControl, IconButton, Input, InputLabel, Menu, MenuItem, Modal, Paper, Select, Toolbar, Typography } from "@mui/material";
import React, { MouseEventHandler, useState } from "react";
import './Global.css';
import { useNavigate } from "react-router-dom";
function Globale(): React.ReactElement {
    const [open, setopen] = useState<boolean>(false);
    const toogle = () => {
        setopen(!open)
    }
    const navigate = useNavigate();
    const test = ["logo", "creer evenement", "list evenements"]
    return (
        <div className="test">
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <IconButton sx={{ my: 2, color: 'white', display: 'block' }}><HomeIcon fontSize="medium" /></IconButton>
                        <ButtonLatout label="creer evenement" execute={() => { console.log("should be good") }} />
                        <ButtonLatout label="Faire la presence" execute={() => { navigate("/attendance") }} />
                    </Box>
                    <SearchBarre />
                    <IconButton className="info-account" onClick={toogle}><AccountCircleIcon fontSize="large" /></IconButton>
                    <Modal
                        open={open}
                        onClose={toogle}
                    >
                        <Paper elevation={3} className="modale-account">

                        </Paper>
                    </Modal>
                </Toolbar>
            </AppBar>
        </div>
    );
}
function SearchBarre(): React.ReactElement {
    return (<>
        <Box >
            <button className="btn-search">
                <SearchIcon />
            </button>
        </Box>
        <input placeholder="Search" className="search-input" />
        <DialogSelect />
    </>
    )
}
function ButtonLatout(props: { execute: MouseEventHandler<HTMLButtonElement>, label: string }): React.ReactElement {
    const { execute, label } = props
    return (<>
        <Button sx={{ my: 2, color: 'white', display: 'block' }} key={"button"} onClick={execute} variant="outlined">
            {label}
        </Button>
    </>
    )
}
export default function (): React.ReactElement {
    return (<>
        <Globale />
    </>
    )
}