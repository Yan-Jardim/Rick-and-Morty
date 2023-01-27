import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase({ search }) {

    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                borderRadius: "20px",
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                width: 500,
            }}>
            <SearchIcon />
            <InputBase
                onChange={(e) => search(e.target.value)}
                sx={{ ml: 5, flex: 1 }}
                placeholder="Look for a character"
            />
        </Paper>
    );
}