import { Box } from "native-base";
import { Component } from "react";
import { FinSimpleDisplayDataCardComponent } from "../../../shared/components/cards/finSimpleDisplayDataCard.component";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as mainValuesActions from '../../actions/mainValuesActions'
import { HomeService } from "../../services/home.service";

interface IDashboardComponentProps {
  totalActualBalance: number;
  totalRevenues: number;
  totalExpenses: number;
}
class DashboardComponent extends Component<IDashboardComponentProps> {
  private homeService = new HomeService();
  public componentDidMount() {
    this.homeService.getMainValues();
  }
  public render() {
    return (
      <Box
        backgroundColor={"primary.50"}
        height={"full"}
      >
        <Box
          backgroundColor={"white"}
          height={"2/6"}
          borderBottomRadius={"50"}
          justifyContent={"space-evenly"}
          alignItems={"center"}>
          <FinSimpleDisplayDataCardComponent
            label="Saldo Atual"
            value={this.props.totalActualBalance}
            valueFontSize="30"
            labelAlignItems="center"
            dataType="currency"
          />

          <Box
            justifyContent={"space-around"}
            flexDirection={"row"}
            width={"full"}>
            <FinSimpleDisplayDataCardComponent
              iconCircleColor={"green.400"}
              iconName="arrow-up"
              label="Receitas"
              value={this.props.totalRevenues}
              valueColor={'green.400'}
              dataType="currency" />
            <FinSimpleDisplayDataCardComponent
              iconCircleColor={"red.400"}
              iconName="arrow-down"
              label="Despesas"
              value={this.props.totalExpenses}
              valueColor={"red.400"}
              dataType="currency" />
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps =
  state => {
    return ({
      totalActualBalance: state.mainValuesReducer.totalActualBalance | 0,
      totalRevenues: state.mainValuesReducer.totalRevenues | 0,
      totalExpenses: state.mainValuesReducer.totalExpenses | 0
    })
  }

const mapDispatchToProps = dispatch =>
  bindActionCreators(mainValuesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)