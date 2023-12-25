import { Grid, styled } from '@mui/material'
import { FC, useState } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'
import { skillIcon, educationIcon } from '../Data/SkillAndEducationData';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import { useThemeContext } from '../theme/ThemContextProvider';
import { GetBreakpoint } from '../Function/GetBreakpoint';

const SkillAndEducation: FC = () => {
  const { mode, theme } = useThemeContext();
  const currentBreakPoint = GetBreakpoint()

  const [open, set] = useState(false);
  const [openEducation, setEducation] = useState(false);

  /**
   * For Skill
   */
  const springApiSkill = useSpringRef()
  const skillSpring = useSpring({
    ref: springApiSkill,
    config: config.stiff,
    from: { size: '30%', background: (mode === 'light') ? theme.palette.primary.light : '#616161' },
    to: {
      size: open ? '100%' : '30%',
      background: open ? 'white' : (mode === 'light') ? theme.palette.primary.light : '#616161',
    },
  })

  const transApiSkill = useSpringRef()
  const transitionSkill = useTransition(open ? skillIcon : [], {
    ref: transApiSkill,
    trail: 400 / skillIcon.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApiSkill, transApiSkill] : [transApiSkill, springApiSkill], [
    0,
    open ? 0.1 : 0.6,
  ])

  /**
   * End for skill
   */

  /**
   * For Education
   */
  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '30%', background: (mode === 'light') ? theme.palette.primary.light : '#616161' },
    to: {
      size: openEducation ? '100%' : '30%',
      background: openEducation ? 'white' : (mode === 'light') ? theme.palette.primary.light : '#616161',
    },
  })

  const transApi = useSpringRef()
  const transition = useTransition(openEducation ? educationIcon : [], {
    ref: transApi,
    trail: 400 / educationIcon.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(openEducation ? [springApi, transApi] : [transApi, springApi], [
    0,
    openEducation ? 0.1 : 0.6,
  ])

  /**
   * End for Education
   */

  const WrapperDiv = styled('div')(() => ({
    width: '100%',
    height: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: (currentBreakPoint === "lg" || currentBreakPoint === "xl") ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }));


  return (
    <>
      <Grid
        zeroMinWidth
        item
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
          background: `linear-gradient(to right bottom, ${(mode === 'light') ? '#E1D4BB' : '#EEEE'}, #B2C8BA)`
        }}
      >
        <WrapperDiv>
          <animated.div
            style={{
              ...skillSpring,
              width: currentBreakPoint === "lg" || currentBreakPoint === "xl" ? skillSpring.size : '100%',
              height: skillSpring.size,
            }}
            className={`container-education-and-skill`}
            onClick={() => set((open) => !open)}
          >
            <>
              {!open ? (
                <CodeIcon
                  sx={{
                    position: "absolute",
                    width:  "100%",
                    height: "100%",
                    color: mode === "light" ? "primary.main" : "default",
                  }}
                />
              ) : null}
              {transitionSkill((style, item) => (
                <animated.div
                  className={`item-education-and-skill`}
                  style={{
                    ...style,
                    background:
                      mode === "light"
                        ? item.css
                        : theme.palette.primary.main,
                  }}
                >
                  <div>
                    {item.index === 0 || item.index === 1 || item.index === 2
                      ? item.element
                      : mode === "light"
                        ? item.element
                        : item.elementDarkTheme}
                    {item.index === 0 || item.index === 1 || item.index === 2
                      ? ""
                      : item.name}
                  </div>
                </animated.div>
              ))}
            </>
          </animated.div>
          <animated.div
            style={{ ...rest, width: currentBreakPoint === "lg" || currentBreakPoint === "xl" ? size : '100%', height: size }}
            className={`container-education`}
            onClick={() => setEducation((openEducation) => !openEducation)}
          >
            {!openEducation ? (
              <SchoolIcon
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  color: mode === "light" ? "primary.main" : "default",
                }}
              />
            ) : null}
            {transition((style, item) => (
              <animated.div
                className={`item-education`}
                style={{
                  ...style,
                  background:
                    mode === "light" ? "default" : theme.palette.primary.main,
                }}
              >
                <>
                  <div>
                    <img
                      src={item.element}
                      style={{  width:item.index === 0 ? "50%" : '100%', marginBottom: 20 }}
                    />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "2rem" }}>
                    {item.name}
                    <br />
                    {
                      item.index === 0 ? 
                    `(Bachelor of Business Administration Program in Business
                    Computer)`
                    : null
                    }
                    
                  </div>
                </>
              </animated.div>
            ))}
          </animated.div>
        </WrapperDiv>
      </Grid>
    </>
  );
}

export default SkillAndEducation