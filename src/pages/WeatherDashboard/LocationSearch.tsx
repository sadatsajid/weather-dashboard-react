import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
    const [localQuery, setLocalQuery] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalQuery(event.target.value);
        // setQuery(event.target.value); // Update the Zustand store
    };

    return (
        <TextField
            variant="outlined"
            fullWidth
            placeholder="Search for a city..."
            value={localQuery}
            onChange={handleSearch}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchBar;
