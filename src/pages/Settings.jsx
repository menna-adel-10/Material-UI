import Sidenav from "../components/Sidenav"
import { Box } from "@mui/material"

const Settings = () => {
  return (
    <>
      <Box m={8} sx={{ display: "flex" }}>
        <Sidenav />
        <h1>Settings</h1>
      </Box>
    </>
  )
}

export default Settings
