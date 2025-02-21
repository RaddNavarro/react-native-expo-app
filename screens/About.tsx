import { View, Text, FlatList, StyleSheet, ViewToken } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from '../style/styles'
import { ImageSlider, ImageSliderType } from '../data/SliderData'
import SliderItem from './SliderItem'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import Pagination from './Pagination'
// type Props = {
//     itemList: ImageSliderType[]
// }

const About = () => {

    const scrollX = useSharedValue(0);
    const [paginationIndex, setPaginationIndex] = useState(0);

    const onViewableItemsChanged = ({viewableItems}: { viewableItems: ViewToken[] }) => {
        if ( viewableItems[0].index !== undefined && viewableItems[0].index !== null ) {
            setPaginationIndex(viewableItems[0].index);
        }
    };
    
    const viewabilityConfig = {
        itemVisiblePercentThreshold: 10
    };


    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        }

    });

    

    const viewabilityConfigCallbackPairs = useRef([
        {viewabilityConfig, onViewableItemsChanged}
    ]);
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, top: 70 }}>My Skills</Text>
            <Animated.FlatList
                data={ImageSlider}
                renderItem={({ item, index }) => (
                    <SliderItem item={item} index={index} scrollX={scrollX}/>)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={onScrollHandler} 
                    viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                    
       
            />
            <Pagination items={ImageSlider} scrollX={scrollX} paginationIndex={paginationIndex}/>
        </View>
    )
}

export default About