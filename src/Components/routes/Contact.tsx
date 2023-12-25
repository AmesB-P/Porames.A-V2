import { FC, useMemo } from 'react'
import { useTrail, useChain, useSprings, animated, useSpringRef } from '@react-spring/web'
import { useThemeContext } from '../theme/ThemContextProvider'
import { Box, Grid, IconButton, Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GetBreakpoint } from '../Function/GetBreakpoint';

const COORDS = [
    [40, 0],
    [40, 10],
    [30, 20],
    [30, 30],
    [20, 40],
    [20, 50],
    [20, 60],
    [20, 70],
    [30, 80],
    [40, 80],
    [50, 90],
    [60, 90],
    [70, 90],
    [80, 90],
    [90, 90],
    [100, 80],
    [110, 80],
    [120, 70],
    [120, 60],
    [120, 50],
    [120, 40],
    [110, 30],
    [110, 20],
    [100, 10],
    [100, 0],
    [90, 20],
    [80, 30],
    [70, 30],
    [60, 30],
    [50, 20],

    [10, 40],
    [0, 40],
    [10, 60],
    [0, 60],

    [130, 40],
    [140, 40],
    [130, 60],
    [140, 60],

    [50, 50],
    [90, 50],

    [70, 60],
    [60, 70],
    [80, 70],

]
// const COORDS = [
//     [50, 30],
//     [90, 30],
//     [50, 50],
//     [60, 60],
//     [70, 60],
//     [80, 60],
//     [90, 50],
// ]

const STROKE_WIDTH = 0.5

const OFFSET = STROKE_WIDTH / 2

const MAX_WIDTH = 150 + OFFSET * 2
const MAX_HEIGHT = 100 + OFFSET * 2

const Contact: FC = () => {
    const { mode, theme } = useThemeContext();

    const getBreakpoint = GetBreakpoint();
    const currentBreakpoint = useMemo(() => getBreakpoint, [getBreakpoint])
    console.log('currentBreakpoint', currentBreakpoint)
    const adjustSize = (): string => {
        switch (currentBreakpoint) {
            case 'xs':
                return '60%'
            case 'sm':
                return '50%'
            case 'md':
                return '40%'
            case 'lg':
                return '30%'
            default:
                return '10%'
        }
    }

    const gridApi = useSpringRef()

    const gridSprings = useTrail(16, {
        ref: gridApi,
        from: {
            x2: 0,
            y2: 0,
        },
        to: {
            x2: MAX_WIDTH,
            y2: MAX_HEIGHT,
        },
    })

    const boxApi = useSpringRef()

    const [boxSprings] = useSprings(COORDS.length, i => ({
        ref: boxApi,
        from: {
            scale: 0,
        },
        to: {
            scale: 1,
        },
        delay: i * 200,
        config: {
            mass: 2,
            tension: 220,
        },
    }))

    useChain([gridApi, boxApi], [0, 0.1], 1500)
    return (
        <>
            {/* <Grid
                zeroMinWidth
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                sx={{
                      width:
                      currentBreakpoint ==='xs'||currentBreakpoint ==='sm'|| currentBreakpoint === "md" || currentBreakpoint === "lg"
                          ? "99.1vw"
                          : "100%",
                      height: currentBreakpoint ==='xs'||currentBreakpoint ==='sm'|| currentBreakpoint === "md" || currentBreakpoint === "lg"
                      ? "100vh"
                      : "100%",
                    position: 'relative',
                    // width: '100%',
                    // height: '100%',
                    overflow: "hidden",
                    flexGrow: 1,
                    background: `linear-gradient(to right bottom, ${(mode === 'light') ? '#E1D4BB' : '#EEEE'}, #B2C8BA)`
                }}
            > */}
            {/* <Box sx={{ width: '100%', height: 'auto' }}> */}
            <div className={`background-smile-grid-container`} style={{ backgroundColor: mode === 'light' ? theme.palette.primary.light : theme.palette.primary.main }}>
                <div className={`smile-grid-container`}>
                    <svg viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
                        <g>
                            {gridSprings.map(({ x2 }, index) => (
                                <animated.line
                                    x1={0}
                                    y1={index * 10 + OFFSET}
                                    x2={x2}
                                    y2={index * 10 + OFFSET}
                                    key={index}
                                    strokeWidth={STROKE_WIDTH}
                                    stroke="currentColor"
                                />
                            ))}
                            {gridSprings.map(({ y2 }, index) => (
                                <animated.line
                                    x1={index * 10 + OFFSET}
                                    y1={0}
                                    x2={index * 10 + OFFSET}
                                    y2={y2}
                                    key={index}
                                    strokeWidth={STROKE_WIDTH}
                                    stroke="currentColor"
                                />
                            ))}
                        </g>
                        {boxSprings.map(({ scale }, index) => (
                            <animated.rect
                                key={index}
                                width={10}
                                height={10}
                                fill="currentColor"
                                style={{
                                    transformOrigin: `${5 + OFFSET * 2}px ${5 + OFFSET * 2}px`,
                                    transform: `translate(${COORDS[index][0] + OFFSET}px, ${COORDS[index][1] + OFFSET}px)`,
                                    scale,
                                }}
                            />
                        ))}
                    </svg>
                </div>
                <Box sx={{ width: '100%', height: 'auto' }}>
                    <Grid container spacing={1} sx={{ width: '100%', display: 'flex', justifyContent: 'center', }}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sx={{ textAlign: 'center', fontSize: '4rem' }} xs={12}>
                            Thank you for visiting!!
                        </Grid>
                        <Grid item sx={{ textAlign: 'center', fontSize: '2rem' }} xs={12}>
                            Phone : 094-5276440
                        </Grid>
                        <Grid item sx={{ textAlign: 'center', fontSize: '2rem' }} xs={12}>
                            E-mail : p.atipattranan@gmail.com
                        </Grid>
                        <Grid item sx={{ textAlign: 'center', fontSize: '2rem' }} xs={12}>
                            <Button sx={{ width: adjustSize() }} size='large' variant='contained' href='mailto:p.atipattranan@gmail.com' startIcon={<EmailIcon sx={{ fontSize: 60 }} />}>Mail me</Button>
                        </Grid>

                        <Grid item sx={{ textAlign: 'center' }} xs={2} lg={1}>
                            <IconButton href='https://www.facebook.com/SeaSonChangeRXBom'target="_blank">
                                <FacebookIcon sx={{fontSize : 40}}/>
                            </IconButton>
                        </Grid>
                        <Grid item sx={{ textAlign: 'center' }} xs={2} lg={1}>
                            <IconButton href='https://github.com/AmesB-P'target="_blank">
                                <GitHubIcon sx={{fontSize : 40}}/>
                            </IconButton>
                        </Grid>
                        <Grid item sx={{ textAlign: 'center' }} xs={2} lg={1}>
                            <IconButton href='https://www.linkedin.com/in/porames-a-423122224'target="_blank">
                                <LinkedInIcon sx={{fontSize : 40}}/>
                            </IconButton>
                        </Grid>
                    </Grid>

                </Box>
            </div>
            {/* </Box> */}
            {/* </Grid> */}



        </>
    )
}

export default Contact