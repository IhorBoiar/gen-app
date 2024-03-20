import { UseFormSetFocus } from "react-hook-form";
import {FORM_FIELD, GenFormSchema} from "../../components/box/forms/helpers/schemas.ts";

const ukOperators = [
  '039',
  '050',
  '063',
  '066',
  '067',
  '068',
  '073',
  '089',
  '091',
  '092',
  '093',
  '094',
  '095',
  '096',
  '097',
  '098',
  '099',
  '055',
]

export const checkPhoneByOperator = (phone: string | undefined) => {
  if (!phone) return true
  const operatorNum = phone?.substring(0, 3)
  for (let i = 0; i < ukOperators.length; i++) {
    if (operatorNum === ukOperators[i]) return true
  }
  return false
}



export const commonFocusField = (errors: string[], setFocus: UseFormSetFocus<GenFormSchema>) => {
  const firstError: string | undefined = errors.find(error => error !== '');
  if (firstError) {
    setFocus(firstError as FORM_FIELD);
  }
}