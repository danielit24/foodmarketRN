import { StyleSheet, Text, View, Dimensions, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../../assets';
import Rating from '../Rating';
import ItemListFood from '../ItemListFood';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#020202', height:2, width: '15%', marginLeft:'3%' }}
    style={{ backgroundColor: 'pink' }}
    tabStyle={{ width: 'auto' }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ fontFamily: 'Poppins-Medium', color: focused ? '#020202' : '#8D92A3' }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
    return (
        <View style= {{ paddingTop: 8 }}>
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy2} />
            <ItemListFood image={FoodDummy3} />
            <ItemListFood image={FoodDummy4} />
        </View>
    )
};

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  1: NewTaste,
  2: SecondRoute,
  3: NewTaste,
});

const HomeTabSection = () => {
    const initialLayout = {width: Dimensions.get('window').width};
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'New Taste' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recommended' },
    ]);
  return (
    <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
    />
  )
}

export default HomeTabSection

const styles = StyleSheet.create({})