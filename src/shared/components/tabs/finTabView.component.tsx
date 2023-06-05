import * as React from 'react';
import { Dimensions, StatusBar, Animated, Pressable } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Box, useColorModeValue } from 'native-base';
import { IFinTabViewProps } from './IFinTabViewPropos';
import { Component, ReactNode } from 'react';

export class FinTabViewClassComponent extends Component<IFinTabViewProps> {
  public state = {
    index: 0,
    routes: this.props.routes,
  };
  private initialLayout = {
    width: Dimensions.get('window').width,
  };
  
  private renderScene = SceneMap(this.props.scenes);

  private renderTabBar = ({ navigationState, setIndex }) => {
    const { index } = this.state;

    return (
      <Box flexDirection="row">
        {navigationState.routes.map((route, i) => {
          const color = index === i ? useColorModeValue('#000', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa');
          const borderColor = index === i ? 'cyan.500' : useColorModeValue('#c2c9e0', 'gray.400');
          return (
            <Box borderBottomWidth="2" borderColor={borderColor} flex={1} alignItems="center" p="3" key={route.key}>
              <Pressable onPress={() => {
                setIndex(i);
              }}>
                <Animated.Text style={{
                  color,
                }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };
  private setIndex = (index) => {
    this.setState({ index });
  };

  public render(): ReactNode {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={(props) => this.renderTabBar({ ...props, setIndex: this.setIndex })}
        onIndexChange={this.setIndex}
        initialLayout={this.initialLayout}
        style={{
          marginTop: StatusBar.currentHeight,
        }}
      />
    );
  }
}