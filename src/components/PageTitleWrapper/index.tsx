import { Box, styled } from '@mui/material';
import { ChildrenProps } from '../../types/shared';

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4)};
`
);

function PageTitleWrapper({ children }: ChildrenProps) {
  return <PageTitle className="MuiPageTitle-wrapper">{children}</PageTitle>;
}

export default PageTitleWrapper;
