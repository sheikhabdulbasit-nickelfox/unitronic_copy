"use client"
import React from "react"
import { Container, Typography } from "@mui/material"
import SectionContainer from "@local/components/sectionContainer"
import Banner from "@local/components/banner"
import Image from "next/image"

function About() {
  return (
    <React.Fragment>
      <Banner></Banner>
      <Container sx={{ p: 4 }} maxWidth="xl">
        <SectionContainer>
          <div>
            <Typography variant="h3" className="m-0">
              Our Mission
            </Typography>
            <div style={{ marginTop: "20px" }}>
              <Typography sx={{ opacity: 0.5 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nunc finibus,
                congue dui non, accumsan sapien.
              </Typography>
            </div>
          </div>
          <div>
            <Image
              width={500}
              height={500}
              src="https://tdsgroup.in/wp-content/uploads/2022/07/our-mission.jpg"
              alt=""
            />
          </div>
        </SectionContainer>
      </Container>
    </React.Fragment>
  )
}

export default About
