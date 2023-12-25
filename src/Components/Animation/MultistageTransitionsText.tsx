import { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'

import { useThemeContext } from '../theme/ThemContextProvider'
import { GetBreakpoint } from '../Function/GetBreakpoint';


export default function MultistageTransitionsText() {
  const { mode } = useThemeContext();
  // const theme = useTheme();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const currentBreakpoint = GetBreakpoint();

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Set initial screen width
    setScreenWidth(window.innerWidth);

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount


  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#537188' },
      //   { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#EEEEEE' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    // leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: (mode === "light" ? '#E1D4BB' : '#EEEEEE') },
    // update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Porames', 'Atipattranan', 'Front']), 1000))
    ref.current.push(setTimeout(() => set(['Porames.A', 'End']), 5000))
    ref.current.push(setTimeout(() => set(['Porames','Atipattranan', `Front-end developer`]), 8000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [currentBreakpoint, reset,screenWidth])

  // useEffect(() => {
  //   const interval = setInterval(() => reset()   //--> looping reset funcntion
  //   , 20000);
  //   return () => clearInterval(interval);
  // }, [reset])

  const adjustFontSize =():string=>{

    switch (currentBreakpoint) {
      case 'xs':
        return '0.7rem'
      case 'sm':
        return '1.2rem'
      case 'md':
        return '1.7rem'
      case 'lg':
        return '2.5rem'
      default:
        return 'default'
    }

  }



  return (
    <div className={"container_animated_text"}>
      <div className={"main"}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className={"transitionsItem"} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight , fontSize : adjustFontSize()}}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
