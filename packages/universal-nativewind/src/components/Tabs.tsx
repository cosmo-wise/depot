import React, { useState, createContext, useContext } from 'react';
import { View, Text, Pressable, type ViewProps } from 'react-native';

interface TabsContextValue {
  active: string;
  setActive: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue>({ active: '', setActive: () => {} });

export interface TabsProps extends ViewProps {
  defaultValue: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({
  defaultValue,
  onValueChange,
  children,
  ...props
}: TabsProps): React.JSX.Element {
  const [active, setActive] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ active, setActive: (v) => { setActive(v); onValueChange?.(v); } }}>
      <View {...props}>{children}</View>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, ...props }: ViewProps): React.JSX.Element {
  return <View {...props} className="flex-row border-b border-gray-200">{children}</View>;
}

export interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

export function TabsTrigger({ value, children }: TabsTriggerProps): React.JSX.Element {
  const { active, setActive } = useContext(TabsContext);
  const isActive = active === value;
  return (
    <Pressable
      onPress={() => setActive(value)}
      className={`px-4 py-2 border-b-2 ${isActive ? 'border-primary-500' : 'border-transparent'}`}
    >
      {typeof children === 'string' ? (
        <Text className={`text-sm font-medium ${isActive ? 'text-primary-600' : 'text-gray-500'}`}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

export interface TabsContentProps extends ViewProps {
  value: string;
}

export function TabsContent({ value, children, ...props }: TabsContentProps): React.JSX.Element | null {
  const { active } = useContext(TabsContext);
  if (active !== value) return null;
  return <View {...props}>{children}</View>;
}
