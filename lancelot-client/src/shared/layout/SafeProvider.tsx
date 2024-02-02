import React, { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SafeProviderProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

const SafeProvider: React.FC<SafeProviderProps> = ({ children, style }) => {
  const { left, bottom, right, top } = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <View
      style={[
        {
          paddingTop: top,
          paddingBottom: bottom,
          paddingLeft: left,
          paddingRight: right,
          backgroundColor: theme.colors.background,
          height: "100%",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default SafeProvider;
