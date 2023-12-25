import { ThemeProvider, CssBaseline, Container, Fade, Grid } from '@mui/material'
import React from 'react'
import NavBar from './Components/Layouts/NavBar';
import { useThemeContext } from './Components/theme/ThemContextProvider';
import { Location, Outlet, useLocation } from 'react-router-dom';
import SpeedDialButton from './Components/Layouts/SpeedDialButton';
import { AnimatePresence } from 'framer-motion'; 
import ChangePageTransition from './Components/Animation/ChangePageTransition';
import Footer from './Components/Layouts/Footer';

const App: React.FC = () => {
  const { theme } = useThemeContext();

  const location: Location = useLocation();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Fade in={true} timeout={1000}>
          <Container maxWidth={false} disableGutters sx={{ bgcolor: '#dfdfdf'}}>
            <header>
              <NavBar />
              <SpeedDialButton />
            </header>

            <section>
              <Grid container sx={{ overflowX: 'hidden' , overflowY  :'auto'}}>
                <AnimatePresence mode='wait' initial={false}>
                  <ChangePageTransition key={location.pathname}> 
                    <Outlet />
                  </ChangePageTransition>
                </AnimatePresence>
              </Grid>
            </section>
            <footer>
              {
                location.pathname !== `/Home` ? <Footer/> : null
              }
            </footer>
          </Container>

        </Fade>
      </ThemeProvider>
    </>
  )
}

export default App