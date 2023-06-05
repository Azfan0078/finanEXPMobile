import { FormControl, Input } from "native-base";
import { Component } from "react";
import { IComponentBaseProps } from "../../interfaces/iComponentBaseProps";

export interface IFinInputProps extends IComponentBaseProps {
  label: string,
  type?: 'text' | 'password',
  value?: string,
  variant?: "underlined",
  hint?: string,
  isRequired?: boolean,
  placeholder?:string,
  inputRightElement?: JSX.Element | JSX.Element[],
  onChangeText?: (text: string) => void,
  isInvalid?:boolean
}
export class FinInput extends Component<IFinInputProps> {
  constructor(props: IFinInputProps) {
    super(props)
    props.type = props.type ? props.type : "text"
    props.isRequired = props.isRequired ? props.isRequired : false
    props.variant = props.variant ? props.variant : "underlined"

  }
  public render() {
    return (
      <FormControl isRequired={this.props.isRequired} isInvalid={this.props.isInvalid}>
        <FormControl.Label>{this.props.label}</FormControl.Label>
        <Input
          type={this.props.type}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          variant={this.props.variant}
          p={2}
          placeholder={this.props.placeholder}
          InputRightElement={this.props.inputRightElement} />
        <FormControl.HelperText _text={{
          fontSize: '8'
        }}>
          {this.props.hint}
        </FormControl.HelperText>
      </FormControl>
    )
  }
}