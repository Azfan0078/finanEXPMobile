import { Ionicons } from '@expo/vector-icons';
import { Box, Center, Icon, Text } from "native-base";
import { Component } from "react";
import { IComponentBaseProps } from "../../interfaces/iComponentBaseProps";
import { ILinearGradientProps } from 'native-base/lib/typescript/components/primitives/Box/types';
import { ResponsiveValue, ColorType } from 'native-base/lib/typescript/components/types';

export interface IFinSimpleDisplayDataCardComponent extends IComponentBaseProps {
  iconCircleColor?: ResponsiveValue<ColorType | (string & {}) | ILinearGradientProps>;
  valueColor?: ColorType
  iconName?: string;
  label?: string;
  labelAlignItems?: string;
  value?: string | number;
  valueFontSize?: string;
  dataType: 'currency' | 'text'
}
export class FinSimpleDisplayDataCardComponent extends Component<IFinSimpleDisplayDataCardComponent> {
  constructor(props: IFinSimpleDisplayDataCardComponent) {
    super(props)
  }
  private get value(): string {
    switch (this.props.dataType) {
      case 'currency':
          const value = this.props.value as number 
        return value.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })
      case 'text':
        return `${this.props.value}`
      default : return this.props.value.toString()
    }
  }

  public render() {
    return (
      <Box
        backgroundColor={this.props.backgroundColor}
        display={"flex"}
        flexDirection={"row"}>
        <Center
          display={this.props.iconName ? 'flex' : 'none'}
          backgroundColor={this.props.iconCircleColor}
          borderRadius={'full'}
          marginRight={"2"}
          size={"12"}>
          <Icon
            as={Ionicons}
            name={this.props.iconName}
            color="white"
            size={"9"}
          />
        </Center>
        <Box flexDirection={"column"} alignItems={this.props.labelAlignItems}>
          <Text color={'gray.400'}>{this.props.label}</Text>
          <Text color={this.props.valueColor} fontSize={this.props.valueFontSize || "20"}>
            {this.value}
          </Text>
        </Box>
      </Box>
    )
  }
}