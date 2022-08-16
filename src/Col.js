import {StyleSheet, View, Pressable} from 'react-native';
import React from 'react';

export const Col = ({
  children,
  style,
  pointerEvents = null,
  alignCenter,
  flexStart,
  noFlex,
  justifyCenter,
  justifyEnd,
  flexEnd,
  spaceBetween,
  width,
  onPress,
}) => {
  const Component = onPress ? Pressable : View;

  return (
    <Component
      style={[
        styles.row,
        flexStart && {alignItems: 'flex-start'},
        flexEnd && {alignItems: 'flex-end'},
        alignCenter && {alignItems: 'center'},
        justifyCenter && {justifyContent: 'center'},
        justifyEnd && {justifyContent: 'flex-end'},
        spaceBetween && {justifyContent: 'space-between'},
        noFlex && {flex: 0},
        width && {width},
        style,
      ]}
      pointerEvents={pointerEvents}
      onPress={onPress}>
      {children}
    </Component>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
