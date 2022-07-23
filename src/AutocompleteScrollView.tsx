import Animated from 'react-native-reanimated';
import { AutocompleteContext } from './AutocompleteContext';
import type { ScrollViewProps } from 'react-native';
import * as React from 'react';
import { useScrollableProps } from './shared';

function AutocompleteScrollView(rest: ScrollViewProps, ref: any) {
  const { scrollableRef, scrollX, scrollY, scrollableProps } =
    useScrollableProps(rest, ref);
  return (
    <AutocompleteContext.Provider value={{ scrollableRef, scrollX, scrollY }}>
      <Animated.ScrollView {...rest} {...scrollableProps} />
    </AutocompleteContext.Provider>
  );
}
export default React.forwardRef(AutocompleteScrollView);
