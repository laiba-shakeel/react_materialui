
// import SettingsIcon from "@mui/icons-material/Settings";
import "./App.css";
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar'
import { Box } from "@mui/system";
import Stack from '@mui/material/Stack';
function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
     <Sidebar />
     <Feed />
     <Rightbar />
     </Stack>
    </Box>
  );
}

export default App;
