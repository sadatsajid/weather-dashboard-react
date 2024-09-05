import { Grid } from "@mui/material"
import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import WaterTwoToneIcon from '@mui/icons-material/WaterTwoTone';

import PageHeader from "../../components/PageHeader"
import PageHelmet from "../../components/PageHelmet"
import PageTitleWrapper from "../../components/PageTitleWrapper"
import WeatherCard from "./WeatherCard"
import { useFetchWeatherData } from "../../api/weather";
import CircularProgressLoader from "../../components/CircularProgressLoader";
import ErrorResponseMessage from "../../components/ErrorResponseMessage";
import WeatherDetails from "../WeatherDetails";
import LocationSearch from "./LocationSearch";
import { useSearchStore } from "../../store";

const WeatherDashboard = () => {
    const { coordinates } = useSearchStore();
    const { data, error, isLoading } = useFetchWeatherData(coordinates || { lat: 0, lon: 0 });

    return (
        <>
            <PageHelmet title="Today's Overview" />
            <PageTitleWrapper>
                <PageHeader
                    title="Today's Overview"
                    subtitle="Search by City Name and get today's weather updates"
                    actionableItem={<LocationSearch />}
                />
            </PageTitleWrapper>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                px={4}
                spacing={4}
                columns={12}
            >

                {
                    isLoading && <CircularProgressLoader />
                }

                {
                    error && <ErrorResponseMessage message={error.message} />
                }

                {
                    data &&
                    <>
                        <Grid item md={4} xs={12}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <WeatherCard
                                        title="Humidity"
                                        icon={WaterTwoToneIcon}
                                        iconColor="info"
                                        value={data.main.humidity + "%"}
                                        linkText=""
                                        description=""
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <WeatherCard
                                        title="Wind Speed"
                                        icon={AirTwoToneIcon}
                                        iconColor="secondary"
                                        value={data.wind.speed + "m/s"}
                                        linkText=""
                                        description=""
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <WeatherDetails data={data} />
                        </Grid>
                    </>

                }
            </Grid>
        </>
    )
}

export default WeatherDashboard