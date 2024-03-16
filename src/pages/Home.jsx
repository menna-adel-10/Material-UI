
import Sidenav from "../components/Sidenav"
import { Box } from "@mui/material"

const Home = () => {
  return (
    <>
      
      <Box m={8} sx={{ display: "flex"}}> 
        <Sidenav />
        <h1>Home</h1>
      </Box>
    </>
  )
}

export default Home
