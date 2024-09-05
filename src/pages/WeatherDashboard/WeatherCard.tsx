import {
  Link,
  CardContent,
  Box,
  Typography,
  ListItemAvatar,
  Card,
  ListItemText,
  ListItem,
  styled
} from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

const CardContentWrapper = styled(CardContent)(
  ({ theme }) => `
     padding: ${theme.spacing(2.5, 3, 3)};
  
     &:last-child {
     padding-bottom: 0;
     }
`
);

interface IWeatherCard {
  title: string;
  icon: SvgIconComponent;
  iconColor?: 'primary' | 'secondary' | 'info' | 'success' | 'error'
  value: string | number;
  linkText: string;
  description: string;
}

function WeatherCard({ title, icon: Icon, iconColor = 'primary', value, linkText, description }: IWeatherCard) {

  return (
    <Card>
      <CardContentWrapper>
        <Typography variant="overline" color="text.primary">
          {title}
        </Typography>

        <ListItem
          disableGutters
          sx={{
            my: 1
          }}
          component="div"
        >
          <ListItemAvatar>
            <Icon
              color={iconColor}
              fontSize="large"
            />
          </ListItemAvatar>

          <ListItemText
            primary={value}
            primaryTypographyProps={{
              variant: 'h1',
              sx: {
                ml: 2
              },
              noWrap: true
            }}
          />
        </ListItem>
        <ListItem
          disableGutters
          sx={{
            mt: 0.5,
            mb: 1.5
          }}
          component="div"
        >
          <ListItemText
            primary={
              <>
                <Link fontWeight="bold" href="#">
                  {linkText}
                </Link>
                <Box
                  component="span"
                  sx={{
                    pl: 0.5
                  }}
                >
                  {description}
                </Box>
              </>
            }
            primaryTypographyProps={{ variant: 'body2', noWrap: true }}
          />
        </ListItem>
      </CardContentWrapper>
    </Card>
  );
}

export default WeatherCard;
