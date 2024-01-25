import { useTheme } from "@mui/system";

const drawerWidth = 300;

export const useStyles = () => {
  const theme = useTheme();

  return {
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        background: theme.palette.primary.black,
        width: drawerWidth - 16,
        boxSizing: "border-box",
        height: "100vh",
      },
    },
    drawerHeader: {
      color: theme.palette.text.white,
    },
    divider: {
      border: `1px solid rgba(255, 255, 255, 0.1)`,
      marginBottom: "21px",
    },
    activeListItem: {
      color: theme.palette.text.white,
      backgroundColor: theme.palette.accents.cards,
      width: "90%",
      margin: "auto",
      borderRadius: "5px",
      padding: "16px",
      "&:hover": {
        backgroundColor: theme.palette.accents.cards,
      },
    },
    listItem: {
      color: theme.palette.text.white,
      width: "90%",
      margin: "auto",
      borderRadius: "5px",
      padding: "16px",
      "&:hover": {
        backgroundColor: theme.palette.accents.cards,
      },
    },
    listItemText: {
      fontFamily: theme.typography.fontFamily,
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "16px",
    },
    listItemTextActive: {
      fontFamily: theme.typography.fontFamily,
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "16px",
      color: theme.palette.primary.main,
    },
    icon: {
      color: theme.palette.primary.white,
    },
    iconActive: {
      color: theme.palette.primary.main,
    },
    logout: {
      position: "absolute",
      bottom: 10,
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.accents.cards,
      fontSize: "14px",
      fontWeight: "400",
      left: 0,
      right: 0,
    },
    plusSign: {
      position: "relative",
      top: "5px",
    },
    minusSign: {
      position: "relative",
      top: "10px",
    },
    supportCard: {
      backgroundColor: theme.palette.accents.cards,
    },
  };
};
