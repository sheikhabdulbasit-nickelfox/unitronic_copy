"use client"
import React from "react"
import { styled } from "@mui/system"
import { useTheme } from "@mui/system"
import AdbIcon from "@mui/icons-material/Adb"
import { Container, Link, Typography } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import YouTubeIcon from "@mui/icons-material/YouTube"
import ListItem from "@mui/material/ListItem"

import ListItemText from "@mui/material/ListItemText"
import List from "@mui/material/List"

const FooterDiv = styled("div")(({ theme }) => ({
  paddingTop: 30,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  columnGap: "50px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}))

const CustomDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
  padding: 10
}))

const FooterBottom = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.default,
  padding: 10
}))

function Footer() {
  const theme = useTheme()
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.default,
        display: "flex",
        flex: "auto",
        flexDirection: "column"
      }}>
      <Container maxWidth="xl">
        <FooterDiv>
          <CustomDiv>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <AdbIcon
                fontSize="large"
                sx={{ display: { md: "flex" }, mr: 1, color: theme.palette.primary.main }}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: theme.palette.primary.main,
                  textDecoration: "none"
                }}>
                LOGO
              </Typography>
            </div>
            <div>
              <Typography sx={{ opacity: 0.5 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nunc finibus,
                congue dui non, accumsan sapien.
              </Typography>
            </div>
          </CustomDiv>
          <CustomDiv style={{ paddingTop: 0 }}>
            <List>
              {pages.map((text, idx) => (
                <ListItem key={idx} sx={{ paddingTop: 0, paddingBottom: "10px" }} disablePadding>
                  <Link href={text.link} underline="none">
                    <ListItemText primary={text.name} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </CustomDiv>
          <CustomDiv>
            <Typography fontWeight={"500"} variant="p">
              Follow Us
            </Typography>
            <div style={{ display: "flex", marginTop: 10 }}>
              <FacebookIcon fontSize="medium" style={{ marginRight: "20" }}></FacebookIcon>
              <InstagramIcon fontSize="medium" style={{ marginRight: "20" }}></InstagramIcon>
              <LinkedInIcon fontSize="medium" style={{ marginRight: "20" }}></LinkedInIcon>
              <YouTubeIcon fontSize="medium" style={{ marginRight: "20" }}></YouTubeIcon>
            </div>
          </CustomDiv>
        </FooterDiv>
      </Container>
      <FooterBottom>
        <Typography sx={{ opacity: 0.5 }}>
          Copyright &#169; <span>{new Date().getFullYear()}</span>. All rights reserved
        </Typography>
      </FooterBottom>
    </div>
  )
}

export default Footer

const pages = [
  {
    name: "Home",
    link: "/home"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Contact Us",
    link: "/contact"
  }
]
