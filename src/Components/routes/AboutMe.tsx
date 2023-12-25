import { Grid, styled } from '@mui/material'
import { FC, useMemo, useState } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'
import { useThemeContext } from '../theme/ThemContextProvider'
import { GetBreakpoint } from '../Function/GetBreakpoint'
import { AboutMeInfo } from '../Data/SkillAndEducationData'
import MySelf_01 from '../../Images/MySelf_01.png';

const AboutMe: FC = () => {
  const { mode, theme } = useThemeContext();
  const getBreakpoint = GetBreakpoint();

  const currentBreakPoint = useMemo(() => getBreakpoint, [getBreakpoint])

  const [open, set] = useState(false);

  const adjustSizeFrom = (): { width: string, height: string } => {
    switch (currentBreakPoint) {
      case 'xs':
        return { width: '50%', height: '40%' }
      case 'sm':
        return { width: '100%', height: '100%' }
      case 'md':
        return { width: '60%', height: '60%' }
      case 'lg':
        return { width: '40%', height: '50%' }
      default:
        return { width: '100%', height: '100%' }
    }

  }
  const adjustSizeTo = (): { width: string, height: string } => {
    switch (currentBreakPoint) {
      case 'xs':
        return { width: open ? '100%' : '100%', height: open ? '80%' : '55%' }
      case 'sm':
        return { width: open ? '100%' : '50%', height: open ? '100%' : '50%' }
      case 'md':
        return { width: open ? '100%' : '70%', height: open ? '50%' : '70%' }
      case 'lg':
        return { width: open ? '100%' : '40%', height: '50%' }
      default:
        return { width: open ? '70%' : '20%', height: open ? '40%' : '40%' }
    }

  }
  const adjustSizeImg = (): { width: string, height: string } => {
    switch (currentBreakPoint) {
      case 'xs':
        return { width: open ? '100%' : '100%', height: open ? '30%' : '55%' }
      case 'sm':
        return { width: open ? '40%' : '50%', height: open ? '100%' : '50%' }
      case 'md':
        return { width: open ? '20%' : '70%', height: open ? '80%' : '70%' }
      case 'lg':
        return { width: open ? '60%' : '40%', height: open ? '100%' : '50%' }
      default:
        return { width: open ? '30%' : '20%', height: open ? '100%' : '40%' }
    }

  }

  const WrapperDiv = styled('div')(() => ({
    width: '100%',
    height: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }));


  console.log('adjustSizeFrom() :>> ', adjustSizeFrom());
  const springApi = useSpringRef()
  const Spring = useSpring({
    ref: springApi,
    config: config.stiff,

    from: {
      width: adjustSizeFrom().width,
      height: adjustSizeFrom().height,
      background: mode === "light" ? theme.palette.primary.light : "#616161",
    },

    to: {
      width: adjustSizeTo().width,
      height: adjustSizeTo().height,
      // size: open ? '100%' : '30%',
      background: open
        ? "white"
        : mode === "light"
          ? theme.palette.primary.light
          : "#616161",
    },
  });
  console.log('currentBreakPoint', currentBreakPoint)
  const transApi = useSpringRef()
  const transition = useTransition(open ? AboutMeInfo : [], {
    ref: transApi,
    trail: 400 / AboutMeInfo.length,
    // trail: 400 / AboutMeInfo.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.2 : 0,
  ])

  return (
    <>
      <Grid
        item
        zeroMinWidth
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          width:'100vw',
          height: "100vh",
          overflow: "hidden",
          flexGrow: 1,
          background: `linear-gradient(to right bottom, ${mode === "light" ? "#E1D4BB" : "#EEEE"
            }, #B2C8BA)`,
        }}
      >
        <WrapperDiv>
          <animated.div
            style={{
              ...Spring,
              width: Spring.width,
              height: Spring.height,
              borderRadius: !open ? "100%" : "0",
            }}
            className={`container-about-me`}
            onClick={() => set((open) => !open)}
          >
            <>
              {!open ? (
                <img
                  src={MySelf_01}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius : '100%'
                  }}
                />
              ) : null}
              {transition((style, item) => (
                <>
                  <animated.div
                    className={`item-about-me`}
                    style={{
                      ...style,
                      flexDirection:  currentBreakPoint === 'xs' ? 'column' : 'row',
                      background:
                        mode === "light" ? "#FFFF" : theme.palette.primary.main,
                    }}
                  >
                    <img
                      src={MySelf_01}
                      style={{
                        width : adjustSizeImg().width,
                        height: adjustSizeImg().height,
                        objectFit: "cover",
                        objectPosition: 'top !important',
                        borderRadius : 5,
                      }}
                    />

                    <span className='about-me-description'>
                    {item.name}
                      {
                        `
                      My main job is Front end dev. My secondary job is sleeping and playing games. Even though I'm an introvert, I work well as a team.
                      Have knowledge of HTML, CSS, JS, React, Ant Design(UI framework), especially because I have worked with it for 2 years.
                      Can do CURD through API because I need to communicate with the team.
                      Currently learning new languages such as Node.js and Typescript.
                      I like learning new things. and likes challenges Oh, another thing you might not believe. But I'm very easy to contact, so give me a call 094-5276440 or you can visit the contact page for contact.
                      `
                      }
                    </span>
                  </animated.div>

                </>
              ))}
            </>
          </animated.div>
          <div
            style={{
              marginTop: 10,
              fontSize: "2rem",
              fontWeight: 700,
              opacity: open ? 0 : 1,
            }}
          >
            Click me!!
          </div>
        </WrapperDiv>
      </Grid>
    </>
  );
}

export default AboutMe