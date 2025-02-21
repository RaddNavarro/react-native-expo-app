import { View, Text, Image, Button, StyleSheet, TouchableOpacity, TouchableHighlight, Linking, Alert, Switch } from 'react-native'
import React from 'react'
import styles from '../style/styles'
import { NavigationContainer, NavigationIndependentTree, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../screens/About';
import ProjectsScreen from '../screens/Projects';
import { ImageSlider } from '../data/SliderData';
import SliderItem from './SliderItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from "nativewind";


const logoImg = require('../assets/profile-pic.jpg')
const gmail = require('../assets/gmail.png')
const instagram = require('../assets/instagram.webp')

const url1 = "https://www.facebook.com/radian.navarro.5/"
const url2 = "https://www.instagram.com/raddd_n/"
const url3 = "https://github.com/RaddNavarro"



const Home = ({ navigation }) => {

    const Stack = createStackNavigator();
    const {colorScheme, toggleColorScheme} = useColorScheme();
   
    // const navigation = useNavigation();
    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert("Can't open this url")
        }
    }



    return (

        <View style={styles.container}>
            <View style={styles.home_content}>
            <Text>Toggle Theme</Text>
                <Switch value={colorScheme == 'dark'} onChange={toggleColorScheme} />
                <Image source={logoImg} style={styles.profile_pic} />
                <Text style={styles.bio_txt}>I am deez nutz</Text>
                <View>
                    <TouchableOpacity style={{ backgroundColor: '#DDDDDD', padding: 10 }} onPress={() => navigation.navigate('About')}>
                        <Text>More About Me</Text>
                    </TouchableOpacity>

                    <View style={{ margin: 10 }}></View>
                    <TouchableOpacity style={{ backgroundColor: '#DDDDDD', padding: 10 }} onPress={() => navigation.navigate("Projects")}>
                        <Text> View Projects</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ top: 45 }} >Socials</Text>
                </View>
                <View style={{ padding: 40, flexDirection: 'row' }} >
                    <TouchableOpacity onPress={() => {
                        openUrl(url1)
                    }}>
                        <Ionicons name="logo-facebook" size={40} color={'#1877F2'} style={{ padding: 7 }}></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 7 }} onPress={() => {
                        openUrl(url2)
                    }}>
                        <Image source={instagram} style={{ width: 35, height: 35, top: 4 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        openUrl(url3)
                    }}>
                        <Ionicons name="logo-github" size={40} style={{ padding: 7 }}></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 7, paddingLeft: 0 }} onPress={() => {
                        Linking.openURL(`mailto:radian_navarro@dlsl.edu.ph`)
                    }}>
                        <Image source={gmail} style={{ width: 53, height: 53, bottom: 5 }} />
                    </TouchableOpacity>


                </View>

            </View>

        </View>
    )
}

export default Home