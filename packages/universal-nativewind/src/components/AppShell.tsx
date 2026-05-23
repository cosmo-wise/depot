import React from 'react';
import { View, type ViewProps } from 'react-native';

export interface AppShellProps extends ViewProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
}

export function AppShell({
  header,
  sidebar,
  footer,
  children,
  ...props
}: AppShellProps): React.JSX.Element {
  return (
    <View {...props} className="flex-1 bg-gray-50">
      {header}
      <View className="flex-1 flex-row">
        {sidebar}
        <View className="flex-1">{children}</View>
      </View>
      {footer}
    </View>
  );
}
