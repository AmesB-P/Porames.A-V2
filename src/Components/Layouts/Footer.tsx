import { Grid } from '@mui/material'
import { FC } from 'react'
import { useThemeContext } from '../theme/ThemContextProvider'

const Footer: FC = () => {
    const {mode} = useThemeContext();
    return (
        <>
            <Grid item columns={12} sx={{bgcolor : mode === 'light' ? '#E1D4BB' : 'primary.main'}}>
                <div style={{ textAlign: 'center' }}>
                    Porames.A.site © 2023
                </div>
                <div style={{ textAlign: 'center' }}>
                    Credit <span> Icon by <a target="_blank" href="https://icons8.com">Icons8</a></span>
                </div>
            </Grid>
        </>
    )
}

export default Footer