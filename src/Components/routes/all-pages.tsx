import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import {SvgIconProps} from '@mui/material';

type PagesProps = {
    icon : React.ReactElement<SvgIconProps>,
    path : string,
    value: string,
    key: number
}[]


export const pages: PagesProps = [
    {
        icon :<HomeIcon sx={{color : (theme)=> theme.palette.mode === 'light' ? 'primary.main': '#FFFF' ,mt : 0.7}} />,
        path: "Home",
        value: "Home",
        key: 0,
    },
    {
        icon : <PersonIcon sx={{color : (theme)=> theme.palette.mode === 'light' ? 'primary.main': '#FFFF' ,mt : 0.7}}/>,
        path: "About_me",
        value: "About me",
        key: 1,
    },
    {
        icon : <CodeIcon sx={{color : (theme)=> theme.palette.mode === 'light' ? 'primary.main': '#FFFF' ,mt : 0.7}}/>,
        path: "SkillAndEducation",
        value: "Skill & Education",
        key: 2,
    },
    {
        icon : <ContactPageIcon sx={{color : (theme)=> theme.palette.mode === 'light' ? 'primary.main': '#FFFF' ,mt : 0.7}}/>,
        path: "Contact",
        value: "contact",
        key: 3,
    },

];