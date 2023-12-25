// Gradients taken from: https://webgradients.com/
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import {
    TypescriptSvgIconLight,
    TypescriptSvgIconDark,
    MuiLogoLight,
    MuiLogoDark,
    NextJSLogoLight,
    NextJSLogoDark,
    ReactLogoLight,
    ReactLogoDark,
    AntdLogoLight,
    AntdLogoDark,
    ReduxLogoLight,
    ReduxLogoDark,
    SassLogoLight,
    SassLogoDark
} from "../Function/createSvgIcon";

import universityLogo from '../../Images/Universal-logo.png'
import wabashaKelloggLogo from '../../Images/Wabasha-kellogg-logo.png'
import MySelf_01 from '../../Images/MySelf_01.png';

export const skillIcon = [
    {
        index: 0,
        name: 'HTML',
        //   description: '#a8edea → #fed6e3',
        css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        height: 150,
        element: <HtmlIcon sx={{ width: "100%", height: "100%", padding: 2 }} />
    },
    {
        index: 1,
        name: 'CSS',
        //   description: '#a8edea → #fed6e3',
        css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        height: 150,
        element: <CssIcon sx={{ width: "100%", height: "100%", padding: 2 }} />
    },
    {
        index: 2,
        name: 'Javascript',
        description: '#e0c3fc → #8ec5fc',
        css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        element: <JavascriptIcon sx={{ width: "100%", height: "100%", padding: 2 }} />,
        height: 150,
    },
    {
        index: 3,
        name: 'Typesrcript',
        description: '#f093fb → #f5576c',
        css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        height: 150,
        element: <TypescriptSvgIconLight style={{ width: "100%", height: "100%" }} />,
        elementDarkTheme: <TypescriptSvgIconDark style={{ width: "100%", height: "100%" }} />,
    },
    {
        name: 'React',
        description: '#d299c2 → #fef9d7',
        css: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
        height: 150,
        element: <ReactLogoLight style={{ width: "100%", height: "100%" }} />,
        elementDarkTheme: <ReactLogoDark style={{ width: "100%", height: "100%" }} />,
    },
    {
        name: 'Next.js',
        description: '#5ee7df → #b490ca',
        css: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
        height: 150,
        element: <NextJSLogoLight style={{ width: "100%", height: "100%" }} />,
        elementDarkTheme: <NextJSLogoDark style={{ width: "100%", height: "100%" }} />,
    },
    {
        name: 'Redux',
        description: '#f6d365 → #fda085',
        css: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        height: 150,
        element: <ReduxLogoLight style={{ width: "100%", height: "100%" }} />,
        elementDarkTheme: <ReduxLogoDark style={{ width: "100%", height: "100%" }} />,
    },
    {
        index: 7,
        name: 'Material-UI',
        description: '#fdfbfb → #ebedee',
        css: 'linear-gradient(135deg, #E3FDF5 0%, #FFE6FA 100%)',
        height: 150,
        element: <MuiLogoLight style={{ width: "100%", height: "100%" }} />,
        elementDarkTheme: <MuiLogoDark style={{ width: "100%", height: "100%" }} />,
    },
    {
        name: 'Ant Design',
        description: '#ebc0fd → #d9ded8',
        css: 'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
        height: 150,
        element: <AntdLogoLight style={{ width: "100%", height: "100%" }} />,
        elementDarkTheme: <AntdLogoDark style={{ width: "100%", height: "100%" }} />,
    },
    {
        name: 'Syntactically Awesome Style Sheets',
        description: '#96fbc4 → #f9f586',
        css: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
        height: 150,
        element: <SassLogoLight style={{ width: "100%", height: "100%" }} />,
        elementDarkTheme: <SassLogoDark style={{ width: "100%", height: "100%" }} />,
    },


    // {
    //   name: 'HTML',
    //   description: '#a8edea → #fed6e3',
    //   css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    //   height: 200,
    // },

]
export const educationIcon = [
    {
        index: 0,
        name: `King Mongkut's University of Technology`,
        //   description: '#a8edea → #fed6e3',
        // css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        height: 150,
        element: universityLogo
    },
    {
        index: 1,
        name: `Exchange Student at Wabasha-Kellogg School (2012 - 2013)`,
        //   description: '#a8edea → #fed6e3',
        // css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        height: 150,
        element: wabashaKelloggLogo
    },
    

]
export const AboutMeInfo = [
    {
        index: 0,
        name: `Hi!, I'm Bom.`,
        //   description: '#a8edea → #fed6e3',
        // css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        // height: 150,
        element: MySelf_01
    },
]


// export default [
//     {
//         name: 'HTML',
//         //   description: '#a8edea → #fed6e3',
//         css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
//         height: 200,
//         element: <HtmlIcon sx={{ width: "100%", height: "100%", padding: 2 }} />
//     },
//     {
//         name: 'CSS',
//         //   description: '#a8edea → #fed6e3',
//         css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//         height: 200,
//         element: <CssIcon sx={{ width: "100%", height: "100%", padding: 2 }} />
//     },
//     {
//         name: 'Javascript',
//         description: '#e0c3fc → #8ec5fc',
//         css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
//         element: <JavascriptIcon sx={{ width: "100%", height: "100%", padding: 2}} />,
//         height: 200,
//     },
//     {
//         name: 'Typesrcript',
//         description: '#f093fb → #f5576c',
//         css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
//         height: 200,
//         element: <TypescriptSvgIconLight style={{ width: "100%", height: "100%" }} />,
//         elementDarkTheme: <TypescriptSvgIconDark style={{ width: "100%", height: "100%" }} />,
//     },
//     // {
//     //   name: 'HTML',
//     //   description: '#a8edea → #fed6e3',
//     //   css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
//     //   height: 200,
//     // },

// ]
