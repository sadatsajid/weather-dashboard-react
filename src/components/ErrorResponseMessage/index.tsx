import { Alert, Box } from "@mui/material";

interface IErrorResponseMessage {
    message: string;
}

function ErrorResponseMessage({ message }: IErrorResponseMessage) {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Alert severity="error">Failed to fetch weather data: {message}</Alert>
        </Box>
    )
}

export default ErrorResponseMessage;