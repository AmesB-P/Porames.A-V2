import { useState, FC, Children, ReactElement, useEffect } from 'react'
import { useTrail, a } from '@react-spring/web'

const Trail: FC<{ open: boolean, children: ReactElement }> = ({ open, children }) => {
    const items = Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className={`trailsText`} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}


const TrailText: FC = () => {
    const [open, set] = useState(true)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         set((preVal) => !preVal);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);
    return (
        <>
            <div className={`trail-container`} onClick={() => set(state => !state)}>
                <Trail open={open}>
                    <>
                        <span>Lorem</span>
                        <span>Ipsum</span>
                        <span>Dolor</span>
                        <span>Sit</span>
                    </>
                </Trail>
            </div>
        </>

    )
}

export default TrailText