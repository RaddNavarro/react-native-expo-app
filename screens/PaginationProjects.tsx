import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "../style/styles";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { ImageSliderTypeProjects } from "../data/SliderDataProjects";

type Props = {
    items: ImageSliderTypeProjects[];
    paginationIndex: number;
    scrollX: SharedValue<number>
}

const { width } = Dimensions.get('screen')

const PaginationProjects = ({items, paginationIndex, scrollX}: Props) => {
    return (
        <View style={styles.pagination_container}>
            {items.map((_,index) => {
                const pgAnimationStyle = useAnimatedStyle(() => {
                    const dotWidth = interpolate(
                        scrollX.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [8, 20, 8],
                        Extrapolation.CLAMP
                    );

                    return {
                        width: dotWidth
                    }
                })
                return (
                    <Animated.View style={[styles.dot, pgAnimationStyle, {backgroundColor: paginationIndex === index ? '#222' : '#aaa'}]} />
                )
            })}
        </View>
    )
}

export default PaginationProjects

