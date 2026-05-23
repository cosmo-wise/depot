import React from 'react';
import { Pressable, Text, ActivityIndicator, type PressableProps } from 'react-native';

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
}

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

const variantClasses: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: 'bg-primary-600 active:bg-primary-700', text: 'text-white', border: '' },
  secondary: { bg: 'bg-white active:bg-gray-50', text: 'text-gray-900', border: 'border border-gray-300' },
  ghost: { bg: 'active:bg-gray-100', text: 'text-gray-700', border: '' },
};

export function Button({
  variant = 'primary',
  size = 'md',
  loading,
  disabled,
  children,
  ...props
}: ButtonProps): React.JSX.Element {
  const v = variantClasses[variant];
  const isDisabled = disabled || loading;
  return (
    <Pressable
      {...props}
      disabled={isDisabled}
      className={`rounded-lg items-center justify-center flex-row gap-2 ${sizeClasses[size]} ${v.bg} ${v.text} ${v.border} ${isDisabled ? 'opacity-50' : ''}`}
    >
      {loading && <ActivityIndicator size="small" />}
      {typeof children === 'string' ? (
        <Text className={`font-semibold ${v.text}`}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
