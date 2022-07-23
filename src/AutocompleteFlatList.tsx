import Animated from 'react-native-reanimated';
import { AutocompleteContext } from './AutocompleteContext';
import type { FlatListProps } from 'react-native';
import * as React from 'react';
import { useScrollableProps } from './shared';

function AutocompleteFlatList<T>(rest: FlatListProps<T>, ref: any) {
  const { scrollableRef, scrollX, scrollY, scrollableProps } =
    useScrollableProps(rest, ref);
  const Flat = Animated.FlatList as any;
  return (
    <AutocompleteContext.Provider value={{ scrollableRef, scrollX, scrollY }}>
      <Flat {...rest} {...scrollableProps} />
    </AutocompleteContext.Provider>
  );
}

export default React.forwardRef(AutocompleteFlatList);
