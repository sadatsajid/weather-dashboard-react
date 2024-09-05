import React, { useEffect } from 'react';
import { TextField, CircularProgress, Box, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useSearchStore } from '../../store';
import { LocationData } from '../../types/location';
import { useFetchLocationData } from '../../api/location';

const LocationSearch: React.FC = () => {
    const { query, setQuery, setCoordinates } = useSearchStore();
    const [selectedLocation, setSelectedLocation] = React.useState<LocationData | null>(null);

    useEffect(() => {
        const handler = setTimeout(() => {
            setQuery(query);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [query, setQuery]);


    const { data, error, isLoading } = useFetchLocationData(query);

    const handleInputChange = (event: React.ChangeEvent<{}>, newInputValue: string) => {
        console.log(event);
        setQuery(newInputValue);
    };

    const handleLocationChange = (event: React.SyntheticEvent, newValue: LocationData | null) => {
        console.log(event);
        setSelectedLocation(newValue);
        if (newValue) {

            setCoordinates({ lat: newValue.lat, lon: newValue.lon });
        } else {

            setCoordinates(null);
        }
    };

    return (
        <Box>
            <Autocomplete
                id="city-search"
                options={data || []}
                getOptionLabel={(option: LocationData) => `${option.name}, ${option.state}, ${option.country}`}
                loading={isLoading}
                onInputChange={handleInputChange}
                onChange={handleLocationChange}
                value={selectedLocation}
                fullWidth
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search for a city"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </>
                            ),
                        }}
                    />
                )}
                noOptionsText="No results found"
            />

            {/* Error state */}
            {error && (
                <Box mt={2}>
                    <Typography color="error">Error: {error.message}</Typography>
                </Box>
            )}

            {/* Display selected location */}
            {/* {selectedLocation && (
                <Box mt={2}>
                    <Typography variant="h6">
                        You selected: {selectedLocation.name}, {selectedLocation.state}, {selectedLocation.country}
                    </Typography>
                </Box>
            )} */}
        </Box>
    );
};

export default LocationSearch;
