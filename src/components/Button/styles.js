import { useTheme } from "@mui/system";

export const useStyles = () => {
  const theme = useTheme();
  return {
    button: {
      height: "42px",
    },
    containedButton: {
      backgroundColor: `${theme.palette.primary.main} !important`,
    },
    outlinedButton: {
      backgroundColor: `transparent`,
    },
  };
};
