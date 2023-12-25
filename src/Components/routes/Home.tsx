
import { useMemo, useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import MySelf_04 from '../../Images/MySelf_04.png'
import as_a_exchange_student3 from '../../Images/as_a_exchange_student3.png'
import to_the_jungle from '../../Images/to_the_jungle3.png'
import { useThemeContext } from '../theme/ThemContextProvider';
import MultistageTransitionsText from '../Animation/MultistageTransitionsText';
import {  Grid } from '@mui/material';
import { GetBreakpoint } from '../Function/GetBreakpoint';

interface PageProps {
    offset: number
    gradient: string
    onClick: () => void
    themeMode: string
    adjustFontSize: string
}


const Page = ({ offset, gradient, onClick, themeMode, adjustFontSize }: PageProps) => (
    <>
        <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
                {offset === 0 && (
                        <div className={`imageContainer`}>
                            <img src={MySelf_04} alt="Parallax Image" className={`image`} />
                        </div>
                )}
                {offset === 1 && (
                    <div className={`imageContainer`}>
                        <img src={as_a_exchange_student3} alt="Parallax Image" className={`image`} />
                    </div>
                )}
                {offset === 2 && (
                    <div className={`imageContainer`}>
                        <img src={to_the_jungle} alt="Parallax Image" className={`image`} />
                    </div>
                )}
        </ParallaxLayer>

        <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
            <div className={`slopeEnd ${themeMode === "light" ? gradient : "darkTheme"}`} >
                {offset === 0 && (
                    <MultistageTransitionsText />
                )}
                {offset === 1 && (
                    <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', width: '78%', height: '100%', fontSize: adjustFontSize, fontWeight: '700' }}>
                        <span>"Work Hard"</span>
                        <span>"Play Harder"</span>
                    </div>
                )}
                {offset === 2 && (
                    <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', width: '78%', height: '100%', fontSize: adjustFontSize, fontWeight: '700' }}>
                        <span>"Sleep Hardest !!"</span>
                    </div>
                )}
            </div>

        </ParallaxLayer>

        <ParallaxLayer className={`text number`} offset={offset} speed={0.3}>

        </ParallaxLayer>
    </>
)


const Home = () => {
    const { mode } = useThemeContext()

    const getBreakpoint = GetBreakpoint();
    const currentBreakpoint = useMemo(() => getBreakpoint, [getBreakpoint])

    const adjustFontSize = (): string => {

        switch (currentBreakpoint) {
            case 'xs':
                return '1.2rem'
            case 'sm':
                return '2rem'
            case 'md':
                return '2.8rem'
            case 'lg':
                return '4rem'
            case 'xl':
                return '5rem'
            default:
                return 'default'
        }
    }

    const fontSize = adjustFontSize();

    const parallax = useRef<IParallax>(null);
    const scroll = (to: number) => {
        if (parallax.current) {
            parallax.current.scrollTo(to)
        }
    }

    return (
        <>
            <Grid item columns={12}>
                <div style={{ background: '#dfdfdf' }}>
                    <Parallax className={"container"} ref={parallax} pages={3} horizontal>
                        {/* <Parallax className={styles.container} ref={parallax} pages={3} horizontal> */}
                        <Page offset={0} gradient="pink" onClick={() => scroll(1)} themeMode={mode} adjustFontSize={fontSize} />
                        <Page offset={1} gradient="teal" onClick={() => scroll(2)} themeMode={mode} adjustFontSize={fontSize} />
                        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} themeMode={mode} adjustFontSize={fontSize} />
                    </Parallax>
                </div>
            </Grid>

        </>

    )
}

export default Home