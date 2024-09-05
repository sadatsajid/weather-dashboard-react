import {
  Box,
  Tooltip,
  TooltipProps,
  tooltipClasses,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

import muiLogo from '../../assets/images/logo/mui-logo.png';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
          color: ${theme.palette.text.primary};
          display: flex;
          text-decoration: none;
          width: 53px;
          margin: 0 auto;
          font-weight: ${theme.typography.fontWeightBold};
  `
);

const LogoSignWrapper = styled(Box)(
  () => `
        width: 52px;
        height: 38px;
  `
);

const TooltipWrapper = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.trueWhite[100],
    color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
    borderRadius: theme.general.borderRadiusSm,
    boxShadow:
      '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.trueWhite[100],
  },
}));

function Logo() {
  return (
    <TooltipWrapper title="MUI Logo" arrow>
      <LogoWrapper to="/app/view-weather">
        <LogoSignWrapper>
          <img src={muiLogo} alt="" width="80" />
        </LogoSignWrapper>
      </LogoWrapper>
    </TooltipWrapper>
  );
}

export default Logo;
