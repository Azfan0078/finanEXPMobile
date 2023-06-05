import { Button } from "native-base";
import { ResponsiveValue } from "native-base/lib/typescript/components/types";
import { Component } from "react";
import { GestureResponderEvent } from "react-native";
import { IComponentBaseProps } from "../../interfaces/iComponentBaseProps";

export interface IFinButtonProps extends IComponentBaseProps{
  label: string;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined
  rightIcon?: JSX.Element | Array<JSX.Element>;
  leftIcon?: JSX.Element | Array<JSX.Element>
  disabled?: boolean,
  children?: never[],
  variant?: ResponsiveValue<(string & {}) | "ghost" | "outline" | "solid" | "subtle" | "link" | "unstyled">,
}
export class FinButton extends Component<IFinButtonProps> {
  constructor(props: IFinButtonProps) {
    super(props)
    props.disabled = props.disabled ? props.disabled : false;
  }
  public render() {
    return (
      <Button
        variant={this.props.variant ?? 'solid'}
        width={this.props.wight ?? '130'}
        borderRadius={this.props.borderRadius ?? '5'}
        disabled={this.props.disabled}
        colorScheme={this.props.colorScheme ?? 'primary'}
        onPress={this.props.onPress}
        leftIcon={this.props.leftIcon}
        rightIcon={this.props.rightIcon}
        backgroundColor={this.props.backgroundColor}>
        {this.props.label}
        {this.props.children}
      </Button>
    )
  }
}