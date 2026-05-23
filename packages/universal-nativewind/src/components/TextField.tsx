import React, { useState } from 'react';
import { View, Text, TextInput, type TextInputProps } from 'react-native';

export interface TextFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
}

export function TextField({
  label,
  error,
  helperText,
  style: _style,
  ...props
}: TextFieldProps): React.JSX.Element {
  const [focused, setFocused] = useState(false);
  return (
    <View className="mb-4">
      {label ? (
        <Text className="text-sm font-medium text-gray-700 mb-1">{label}</Text>
      ) : null}
      <TextInput
        {...props}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
        className={`px-3 py-2 border rounded-lg text-base bg-white text-gray-900 ${
          error ? 'border-red-500' : focused ? 'border-primary-500' : 'border-gray-300'
        }`}
        placeholderTextColor="#9ca3af"
      />
      {error ? (
        <Text className="text-xs text-red-500 mt-1">{error}</Text>
      ) : helperText ? (
        <Text className="text-xs text-gray-400 mt-1">{helperText}</Text>
      ) : null}
    </View>
  );
}
