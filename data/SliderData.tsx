import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
}

export const ImageSlider = [
    {
        title: 'Python',
        image: require('../assets/python.png'),
        description: 'Intermediate Level Python'
    },
    {
        title: 'C++',
        image: require('../assets/cpp.png'),
        description: 'Intermediate Level C++'
    },
    {
        title: 'JavaScript',
        image: require('../assets/javascript.png'),
        description: 'Intermediate Level JavaScript'
    },
    {
        title: 'HTML',
        image: require('../assets/html.png'),
        description: 'Intermediate Level HTML'
    },
    {
        title: 'TypeScript',
        image: require('../assets/typescript.png'),
        description: 'Beginner Level TypeScript'
    },
    {
        title: 'DaVinci Resolve',
        image: require('../assets/davinci.png'),
        description: 'Intermediate Level DaVinci Resolve editing skills'
    }
]