import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PRIMARY } from 'utils/theme';
import { Normalize } from 'utils';

export const Separator = ({ style, color = PRIMARY, size, width }) => {
  return (
    <View
      style={[
        styles.separator,
        style,
        { borderColor: color },
        { borderBottomWidth: size || 1 },
        { width: width || '100%' },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY,
    marginVertical: Normalize(3),
    width: '100%',
  },
});
