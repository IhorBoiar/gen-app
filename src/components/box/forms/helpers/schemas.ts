import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { checkPhoneByOperator } from '../../../../lib/common/functions.ts'
import {Mode, Resolver} from "react-hook-form";

export const YUP_SCHEMA_PHONE = yup
  .string()
  .test('phone-operator', 'Phone must be a valid!', (value) =>
    checkPhoneByOperator(value)
  ).length(10, 'Phone must be exactly 10 characters!')

export enum FORM_FIELD {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  PHONE1 = 'phone1',
  PHONE2 = 'phone2',
  PHONE3 = 'phone3',
  COUNTRY = 'country',
  ADDRESS = 'address',
  CARD = 'card',
  CODE = 'code',
  AGREE = 'agree',
}

export const genSchema = yup
  .object({
    firstName: yup.string().required('First name is required!'),
    lastName: yup.string().required('Last name is required!'),
    email: yup.string().email('Email must be a valid!'),
    phone1: YUP_SCHEMA_PHONE.required('Phone is required!'),
    phone2: YUP_SCHEMA_PHONE,
    phone3: YUP_SCHEMA_PHONE,
    country: yup.string().required('Country is required!'),
    address: yup.string().required('Address is required!'),
    card: yup.string().required('Credit card must be a valid!').length(16, 'Credit card must be exactly 16 characters!'),
    code: yup.string().required('CVV2 must be a valid!').length(3, 'CVV2 must be exactly 16 characters!'),
    agree: yup.boolean().required('Agreement must be checked!').oneOf([true], 'Agreement must be checked!')
  })

export type GenFormSchema = yup.InferType<typeof genSchema>

export const genFormOptions: {
  resolver: Resolver<GenFormSchema>,
  mode: Mode
} = {
  resolver: yupResolver(genSchema),
  mode: 'all'
}
