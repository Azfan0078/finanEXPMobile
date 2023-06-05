import { Alert, HStack, VStack, Text, IconButton, CloseIcon, Box } from "native-base";
import { Component, ReactElement } from "react";
import { IComponentBaseProps } from "../../interfaces/iComponentBaseProps";
import { AlertsControlService } from "../../services/alertsControl.service";

export interface IFinAlertProps extends IComponentBaseProps {
  message: string;
  title?: string;
  name: string;
  success?: boolean
}
export class FinAlert extends Component<IFinAlertProps> {
  private alertsControlService = new AlertsControlService();
  constructor(props: IFinAlertProps) {
    super(props)
  }
  private renderTitle(): ReactElement {
    if (this.props.title) {
      return <HStack
        flexShrink={1}
        space={2}
        alignItems="center"
        justifyContent="space-between">
        <HStack flexShrink={1} space={2} alignItems="center">
          <Alert.Icon />
          <Text fontSize="md" fontWeight="medium" color="coolGray.800">
            {this.props.title}
          </Text>
          <IconButton onPress={() => this.alertsControlService.closeAlert(this.props.name)} variant="unstyled" _focus={{
            borderWidth: 0
          }} icon={<CloseIcon size="3" />} _icon={{
            color: "coolGray.600"
          }} />
        </HStack>
      </HStack>


    }
  }
  public render() {
    return (
      <Alert
        backgroundColor={this.props.success ? 'success.400' : 'error.400'}
        maxW="400"
        position={"absolute"}
        right={3}
        zIndex={2}
        marginTop={50}
        variant={"subtle"}>
        <VStack space={2}>
          {this.renderTitle()}

          <Box pl="6" _text={{
            color: "coolGray.600"
          }}>
            {this.props.message}
          </Box>
        </VStack>
      </Alert>
    )
  }
}