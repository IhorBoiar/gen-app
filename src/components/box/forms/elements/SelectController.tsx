import {FormControl, InputLabel, Select} from "@mui/material";
import {Control, Controller} from "react-hook-form";
import {ReactNode} from "react";
import {FORM_FIELD, GenFormSchema} from "../helpers/schemas.ts";

interface ISelectController {
  name: FORM_FIELD
  control: Control<GenFormSchema>
  label: string
  error: boolean
  children: ReactNode
}

const SelectController = ({
  name,
  label,
  control,
  error,
  children,
}: ISelectController) => {
  return (
    <FormControl>
      <InputLabel size={'small'} htmlFor={name}>
        {label}
      </InputLabel>
      <Controller
        defaultValue=''
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <Select
              {...field}
              label={label}
              error={error}
              id={name}
              size={'small'}
            >
              {children}
            </Select>
          )
        }}/>
    </FormControl>
  );
};

export default SelectController