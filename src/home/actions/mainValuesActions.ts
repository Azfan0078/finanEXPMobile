import { Home } from "../../core/models/home/home"

export function setTotalActualBalance(value: number) {
  return {
    type:"SET_TOTAL_ACTUAL_BALANCE",
    value
  }
}
export function setTotalRevenues(value: number) {
  return {
    type:"SET_TOTAL_REVENUES",
    value
  }
}
export function setTotalExpenses(value: number) {
  return {
    type:"SET_TOTAL_EXPENSES",
    value
  }
}
export function setMainValues(mainValues: Home) {
  return {
    type:"SET_MAIN_VALUES",
    mainValues
  }
}