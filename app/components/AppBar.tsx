import { Box, Button } from '@mui/material';

const AppBar = () => (
  <Box sx={{ display: 'flex' }}>
    <Button component= 'a' href = '/' style={{ background: 'none', color: 'var(--foreground)', margin: '10px 0 0 10px'}}>
      home
    </Button>
    <Button component= 'a' href = '/experience' style={{ background: 'none', color: 'var(--foreground)', margin: '10px 0 0 10px'}}>
      experience
    </Button>
    <Button component= 'a' href = '/projects' style={{ background: 'none', color: 'var(--foreground)', margin: '10px 0 0 10px'}}>
    projects
    </Button>
    <Button component= 'a' href = '/about' style={{ background: 'none', color: 'var(--foreground)', margin: '10px 0 0 10px'}}>
      about
    </Button>
    <Button component={'a'} href = '/contact' style={{ background: 'none', color: 'var(--foreground)', margin: '10px 0 0 10px'}}>
      contact
    </Button>
  </Box>
)
export default AppBar
