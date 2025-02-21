import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, Dimensions, Button } from "react-native";
import React from "react";
import { ImageSliderTypeProjects } from "../data/SliderDataProjects";
import styles from "../style/styles";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, { SharedValue, useAnimatedStyle, interpolate, useSharedValue, Extrapolation } from "react-native-reanimated";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";

type Props = {
    item: ImageSliderTypeProjects;
    index: number;
    scrollX: SharedValue<number>
};

const Stack = createNativeStackNavigator();

const { width } = Dimensions.get('screen')

const SliderItemProjects = ({ item, index, scrollX }: Props) => {
    const navigation = useNavigation();
    const rnAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(
                        scrollX.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [-width * 0.25, 0, width * 0.25],
                        Extrapolation.CLAMP
                    ),
                },
                {
                    scale: interpolate(
                        scrollX.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [0.9, 1, 0.9],
                        Extrapolation.CLAMP
                    ),
                }
               
            ]
            
        };
    })
    return (
        <>
        <Animated.View style={[styles.item_container, rnAnimatedStyle]}>

            <Image source={item.image} style={{ width: 200, height: 400, resizeMode: 'contain', borderRadius: 20 }} />
            <View style={styles.background}>


                <View style={{ gap: 10 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.desc}>{item.description}</Text>
                    
                </View>
            </View>
            
        </Animated.View>
        <View>
         
            
        
        </View>
        </>
    
       
        
    )
    
}

export default SliderItemProjects