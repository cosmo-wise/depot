import React from 'react';
import { View, Text, type ViewProps } from 'react-native';

export interface CardProps extends ViewProps {
  title?: string;
  subtitle?: string;
}

export function Card({ title, subtitle, children, ...props }: CardProps): React.JSX.Element {
  return (
    <View {...props} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
      {title ? <Text className="text-lg font-semibold text-gray-900">{title}</Text> : null}
      {subtitle ? <Text className="text-sm text-gray-500 mt-0.5">{subtitle}</Text> : null}
      {(title || subtitle) && children ? <View className="h-3" /> : null}
      {children}
    </View>
  );
}

export function CardHeader({ children, ...props }: ViewProps): React.JSX.Element {
  return <View {...props} className="px-4 pt-4">{children}</View>;
}

export function CardContent({ children, ...props }: ViewProps): React.JSX.Element {
  return <View {...props} className="px-4 py-2">{children}</View>;
}

export function CardFooter({ children, ...props }: ViewProps): React.JSX.Element {
  return <View {...props} className="px-4 pb-4 border-t border-gray-100 pt-3 mt-2">{children}</View>;
}

export function CardTitle({ children, ...props }: ViewProps): React.JSX.Element {
  return <Text className="text-lg font-semibold text-gray-900" {...props}>{children as React.ReactNode}</Text>;
}
