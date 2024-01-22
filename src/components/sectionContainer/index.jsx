"use client"
import { styled } from "@mui/system"

const SectionContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr"
  }
}))

export default SectionContainer
