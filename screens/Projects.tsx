import { View, Text, FlatList, StyleSheet, ViewToken } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from '../style/styles'
import { ImageSliderProjects, ImageSliderTypeProjects } from '../data/SliderDataProjects'
import SliderItem from './SliderItem'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import PaginationProjects from './PaginationProjects'
import SliderItemProjects from './SliderItemProjects'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Projects = () => {
    const Stack = createNativeStackNavigator();
    const scrollX = useSharedValue(0);
    const [paginationIndex, setPaginationIndex] = useState(0);
    const navigation = useNavigation();

    const onViewableItemsChanged = ({viewableItems}: { viewableItems: ViewToken[] }) => {
        if ( viewableItems[0].index !== undefined && viewableItems[0].index !== null ) {
            setPaginationIndex(viewableItems[0].index);
        }
    };

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 5
    };


    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        }

    })

    const viewabilityConfigCallbackPairs = useRef([
        {viewabilityConfig, onViewableItemsChanged}
    ]);
    
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, top: 70 }}>Projects I worked on</Text>
            <Animated.FlatList
                data={ImageSliderProjects}
                renderItem={({ item, index }) => (
                    <SliderItemProjects item={item} index={index} scrollX={scrollX}/>)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={onScrollHandler} 
                    viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                    
       
            />
            <PaginationProjects items={ImageSliderProjects} scrollX={scrollX} paginationIndex={paginationIndex}/>
            
        </View>
    )
}

export default Projects