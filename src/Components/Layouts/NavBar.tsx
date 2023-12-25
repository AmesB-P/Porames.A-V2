import { useState, MouseEvent, ReactElement } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button, Slide, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleThemeMode from '../ToggleThemeMode';
import { NavLink, useLocation, Location } from 'react-router-dom';
import { pages } from '../routes/all-pages';
import PoramesA from '../../Icon/PoramesA-logo.svg';
import { GetBreakpoint } from '../Function/GetBreakpoint';

interface HideAppBarWhenScroll {
  children: ReactElement;
}

const HideOnScroll = (props: HideAppBarWhenScroll) => {
  const { children } = props
  const trigger = useScrollTrigger({
    threshold: 20
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}



const Header = () => {

  const currentLocation: Location = useLocation();
  const { pathname } = currentLocation;

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getBreakpoint = GetBreakpoint();
  


  return (
    <>
      <HideOnScroll >
        <AppBar position="static" sx={{ width: "100%" }}>
          <Toolbar disableGutters>
            <div style={{paddingRight : '10px',display : getBreakpoint === 'xs' || getBreakpoint === 'sm' ? 'none' : 'flex'}}>
              <img src={PoramesA} width={80} />

            </div>

            <Typography
              variant="h6"
              noWrap
              component={NavLink}
              to={``}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Porames.A
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.key} component={NavLink} to={`/${page.path}`}
                    selected={`/${page.path}` === pathname}
                  >
                    <Typography>
                      {page.value}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>


            <div style={{padding : 0 ,display : getBreakpoint === 'xs' || getBreakpoint === 'sm' ? 'flex' : 'none'}}>
              <img src={PoramesA} width={80} />
            </div>

            <Typography
              variant="h5"
              noWrap
              component={NavLink}
              to={``}
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Porames.A
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.key}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', borderBottom: (`/${page.path}` === pathname ? 1 : "") }}
                  component={NavLink} to={`/${page.path}`}
                >
                  {page.value}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <ToggleThemeMode />
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>

  );
}
export default Header;
