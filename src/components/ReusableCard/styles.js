import { useTheme } from "@mui/system";

export const useStyles = () => {
  const theme = useTheme();
  return {
    container: {
      margin: "auto 24px",
      borderRadius: "8px",
      backgroundColor: theme.palette.accents.cards,
      padding: "16px",
    },
  };
};
