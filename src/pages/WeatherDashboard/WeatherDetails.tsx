import {
    Divider,
    Card,
    List,
    ListItem,
    Box,
    Typography,
    styled,
    CardHeader
} from '@mui/material';
import { WeatherData } from '../../types/weather';

const ListItemWrapper = styled(ListItem)(
    () => `
          border-radius: 0;
  `
);

interface IWeatherDetails {
    data: WeatherData
}

function WeatherDetails({ data }: IWeatherDetails) {

    return (
        <Card>
            <CardHeader title={`Today's Condition: ${data.weather[0]?.description}`} />
            <Divider />
            <List disablePadding component="nav">
                <ListItemWrapper
                    sx={{
                        py: 3.15
                    }}
                >
                    <Typography
                        variant="h5"
                        color="text.primary"
                        noWrap
                        sx={{
                            minWidth: 80
                        }}
                    >
                        City:
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        flexWrap="wrap"
                        sx={{
                            ml: 1,
                            flexGrow: 1
                        }}
                    >

                        <Typography variant="h4" color="text.primary">
                            {data.name}
                        </Typography>
                    </Box>
                </ListItemWrapper>
                <Divider />
                <ListItemWrapper
                    sx={{
                        py: 3.15
                    }}
                >
                    <Typography
                        variant="h5"
                        color="text.primary"
                        noWrap
                        sx={{
                            minWidth: 80
                        }}
                    >
                        Temperature:
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        flexWrap="wrap"
                        sx={{
                            ml: 1,
                            flexGrow: 1
                        }}
                    >

                        <Typography variant="h4" color="text.primary">
                            {data.main.temp} K
                        </Typography>
                    </Box>
                </ListItemWrapper>
                <Divider />
                <ListItemWrapper
                    sx={{
                        py: 3.15
                    }}
                >
                    <Typography
                        variant="h5"
                        color="text.primary"
                        noWrap
                        sx={{
                            minWidth: 80
                        }}
                    >
                        Feels Like:
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        flexWrap="wrap"
                        sx={{
                            ml: 1,
                            flexGrow: 1
                        }}
                    >

                        <Typography variant="h4" color="text.primary">
                            {data.main.feels_like} K
                        </Typography>
                    </Box>
                </ListItemWrapper>
                <Divider />
                <ListItemWrapper
                    sx={{
                        py: 3.15
                    }}
                >
                    <Typography
                        variant="h5"
                        color="text.primary"
                        noWrap
                        sx={{
                            minWidth: 80
                        }}
                    >
                        Pressure: 
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        flexWrap="wrap"
                        sx={{
                            ml: 1,
                            flexGrow: 1
                        }}
                    >

                        <Typography variant="h4" color="text.primary">
                            {data.main.pressure} hPa
                        </Typography>
                    </Box>
                </ListItemWrapper>
                <Divider />
                <ListItemWrapper
                    sx={{
                        py: 3.15
                    }}
                >
                    <Typography
                        variant="h5"
                        color="text.primary"
                        noWrap
                        sx={{
                            minWidth: 80
                        }}
                    >
                        Sea level:
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        flexWrap="wrap"
                        sx={{
                            ml: 1,
                            flexGrow: 1
                        }}
                    >

                        <Typography variant="h4" color="text.primary">
                            {data.main.sea_level} hPa
                        </Typography>
                    </Box>
                </ListItemWrapper>
            </List>
        </Card>
    );
}

export default WeatherDetails;
