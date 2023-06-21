import { Home } from "../../core/models/home/home";

export default function mainValuesReducer(
  state = {} as {
    totalActualBalance: number;
    totalRevenues: number;
    totalExpenses: number;
  },
  action: { type: string; value?: number, mainValues?: Home  }
) {
  switch (action.type) {
    case "SET_TOTAL_ACTUAL_BALANCE":
      return { ...state, totalActualBalance: action.value };
    case "SET_TOTAL_REVENUES":
      return { ...state, totalRevenues: action.value };
    case "SET_TOTAL_EXPENSES":
      return { ...state, totalExpenses: action.value };
    case "SET_MAIN_VALUES":
      return { ...state, ...action.mainValues };
    default:
      return state;
  }
}
