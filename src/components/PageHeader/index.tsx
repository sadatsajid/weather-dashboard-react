import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  actionableItem: ReactNode;
};

function PageHeader({ title, subtitle, actionableItem }: PageHeaderProps) {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {subtitle}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        {actionableItem}
      </Grid>
    </Grid>
  );
}

export default PageHeader;
