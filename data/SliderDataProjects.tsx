import { ImageSourcePropType, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type ImageSliderTypeProjects = {
    title: string;
    image: ImageSourcePropType;
    description: string;
    // button: string;
    // page: string;
}

{/* <Button title="Learn More" color={'#2f4f4f'} /> */}


const Stack = createNativeStackNavigator();


export const ImageSliderProjects = [
    {
        title: 'CAN`T HELP MYSELF',
        image: require('../assets/cent.png'),
        description: 'An animatic I edited in about a character who likes to help his classmate, maybe a bit too much.',
        // button: 'Learn More',
        // page: 'DetailCant'
    },
    {
        title: 'Socius',
        image: require('../assets/socius.png'),
        description: 'A short film made by Washed Productions, a short film about discovering what is real friendship',
        // button: 'Learn More',
        // page: 'DetailSocius'
    },
    {
        title: 'Inventory Management System',
        image: require('../assets/no-img.png'),
        description: 'An inventory management system project. Just an inventory management system made for a finals exam.',
        // button: 'Learn More',
        // page: 'DetailInv'
    }
    
]