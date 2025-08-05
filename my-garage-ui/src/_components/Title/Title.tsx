import { Typography } from "@mui/material";
import React from "react";

export const Title = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div>
      <Typography className="caps title-header " variant="h4">
        {title}
      </Typography>
      {subtitle && (
        <Typography className="caps" variant="subtitle1">
          {subtitle}
        </Typography>
      )}
    </div>
  );
};
