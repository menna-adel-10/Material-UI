import Sidenav from "../components/Sidenav"
import { Box } from "@mui/material"

const About = () => {
  return (
    <>
      <Box m={8} sx={{ display: "flex" }}>
        <Sidenav />
        <h1>About</h1>
      </Box>
    </>
  )
}

export default About
