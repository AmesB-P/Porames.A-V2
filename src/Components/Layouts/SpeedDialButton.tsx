import { SpeedDial, SpeedDialAction, useScrollTrigger } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system'
import { pages } from '../routes/all-pages'
import { NavLink, useLocation, Location } from 'react-router-dom';



const SpeedDialButton = () => {
    const hideSrcollTrigger = useScrollTrigger({ threshold: 20 })
    const currentLocation: Location = useLocation();

    return (
        <>

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <SpeedDial
                    ariaLabel="SpeedDial"
                    sx={{ position: 'fixed', top: 10}}
                    icon={<MenuIcon />}
                    hidden={!hideSrcollTrigger}
                    direction={`down`}
                >
                    {pages.map((action) => (
                        <SpeedDialAction
                            key={action.key}
                            icon={(<NavLink to={`${action.path}`}>{action.icon}</NavLink>)}
                            tooltipTitle={action.value}
                            sx={{
                                bgcolor: currentLocation.pathname === `/${action.path}` ? "#E1D4BB" : 'default'
                            }}
                        />
                    ))}
                </SpeedDial>
                {/* </Fab> */}

            </Box>

        </>
    )
}

export default SpeedDialButton