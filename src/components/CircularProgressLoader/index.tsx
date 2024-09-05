import { Box, CircularProgress } from "@mui/material";

function CircularProgressLoader() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress />
        </Box>
    )
}

export default CircularProgressLoader;