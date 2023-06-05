import { ColorSchemeType, ColorType, ResponsiveValue } from "native-base/lib/typescript/components/types"

export interface IComponentBaseProps {
  colorScheme?: ColorSchemeType;
  backgroundColor?: ColorType;
  wight?: ResponsiveValue<"lg" | "md" | "sm" | "xs" | "px" | "xl" | "2xl" | (string & {}) | (number & {}) | "container" | "3xs" | "2xs" | "0" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "full">;
  borderRadius?: ResponsiveValue<"lg" | "md" | "sm" | "xs" | "xl" | "2xl" | (string & {}) | (number & {}) | "none" | "3xl" | "full">;
}