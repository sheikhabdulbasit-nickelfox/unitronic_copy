"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
  List,
  Typography,
  ListItemIcon,
  Divider,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { DashboardMenus } from "@local/constants/dashboardMenu";
import { useStyles } from "./privateLayoutStyles";
import LogoutIcon from "@mui/icons-material/Logout";
import { useCookies } from "react-cookie";
import { CookieKeys, CookieOptions } from "@local/constants/cookieKeys";
import { useRouter } from "next/navigation";
import { useIsLoggedIn } from "@local/hooks/state";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/system";
import { useCommonStyles } from "@local/app/auth/commonStyles";
import PlusIcon from "@local/assets/icons/plus";
import MinusIcon from "@local/assets/icons/minus";
import Logo from "@local/assets/images/logos/unitronics_logo.png";
import Image from "next/image";
import ReusableCard from "@local/components/ReusableCard";
import QuestionIcon from "@local/assets/icons/questionMark.png";
import Button from "@local/components/Button";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  height: "100px",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

export default function PrivateLayout({ children }) {
  const router = useRouter();
  const styles = useStyles();
  const commonStyles = useCommonStyles();
  const currentRoute = usePathname();
  const isLoggedIn = useIsLoggedIn();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies([CookieKeys.Auth]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/auth/login", "/auth/login");
    }
  }, [isLoggedIn, router]);

  const handleLogout = () => {
    removeCookie(CookieKeys.Auth, CookieOptions);
  };

  const navigate = (route) => {
    router.push(route);
  };

  const activeMenu = (item) => {
    return currentRoute?.includes(item.route);
  };
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer sx={styles.drawer} variant="persistent" anchor="left" open={true}>
        <List>
          <DrawerHeader className="pl-0">
            <Image src={Logo} />
          </DrawerHeader>
          <ReusableCard
            className="bg-gradient-to-r from-[#494949] to-[#130F0F] h-[82px] mb-5"
            sx={styles.accountCard}
          >
            <Typography variant="chipsText" color={theme.palette.text.greyText}>
              Your Account Balance
            </Typography>
            <Box className="flex flex-row justify-between">
              <Typography variant="boldH3" color={theme.palette.primary.white}>
                2000.00 CR
              </Typography>
              <Button variant="text">+ Add</Button>
            </Box>
          </ReusableCard>
          {DashboardMenus.map((item) => {
            const Icon = item.icon;
            const isActive = activeMenu(item);
            return (
              <ListItemButton
                sx={isActive ? styles.activeListItem : styles.listItem}
                key={item.alias}
                onClick={() => navigate(item.route)}
              >
                <Box sx={commonStyles.justifySpaceBetween}>
                  <>
                    <ListItemIcon
                      sx={isActive ? styles.iconActive : styles.icon}
                    >
                      <Icon
                        color={
                          isActive
                            ? theme.palette.primary.main
                            : theme.palette.primary.white
                        }
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        sx={
                          isActive
                            ? styles.listItemTextActive
                            : styles.listItemText
                        }
                      >
                        {item.title}
                      </Typography>
                    </ListItemText>
                  </>
                  {item.title !== "Home" && (
                    <Box sx={isActive ? styles.minusSign : styles.plusSign}>
                      {isActive ? (
                        <MinusIcon color={theme.palette.primary.white} />
                      ) : (
                        <PlusIcon color={theme.palette.primary.white} />
                      )}
                    </Box>
                  )}
                </Box>
              </ListItemButton>
            );
          })}
        </List>
        <ReusableCard>
          <Box sx={commonStyles.flexColumn}>
            <Box sx={commonStyles.flexRow} className="mb-5">
              <Image className="h-[42px] w-[42px]" src={QuestionIcon} />
              <Box
                sx={[commonStyles.flexColumn, styles.supportCard]}
                className="ml-5"
              >
                <Typography
                  variant="inputField"
                  color={theme.palette.primary.white}
                >
                  Need help?
                </Typography>
                <Typography
                  variant="secondaryBodyText"
                  color={theme.palette.text.greyText}
                >
                  Please check our docs
                </Typography>
              </Box>
            </Box>
            <Button variant="contained">Get Support</Button>
          </Box>
        </ReusableCard>
      </Drawer>
      <Main className="bg-black" open={true}>
        {children}
      </Main>
    </Box>
  );
}
