import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import React from 'react'
import { Link }from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    
    const toggleDrawer = (open) => (event) =>{
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'shift')){
            return;
        }
        setDrawerOpen(open)
    };
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/books">
            <ListItemText primary="Book's List" />
          </ListItem>
          <ListItem button component={Link} to="/add">
            <ListItemText primary="Add Book" />
          </ListItem>
        </List>
      </Drawer>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/books">
        Book's List
      </Button>
      <Button color="inherit" component={Link} to="/add">
        Add Book
      </Button>
    </Toolbar>
  </AppBar>

  )
}

export default Navbar