import React from "react";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";

function ReusableButton({ children, sx, ...props }) {
  const styles = useStyles();

  let variantStyle = {};
  if (props.variant === "contained") {
    variantStyle = styles.containedButton;
  }
  if (props.variant === "outlined") {
    variantStyle = styles.outlinedButton;
  }

  return (
    <Button {...props} sx={[styles.button, variantStyle, sx]}>
      {children}
    </Button>
  );
}

export default ReusableButton;
