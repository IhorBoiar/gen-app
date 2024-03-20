import {Box, Checkbox, Typography} from "@mui/material";
import {Control, Controller} from "react-hook-form";
import {FORM_FIELD, GenFormSchema} from "../helpers/schemas.ts";

interface ICheckboxFieldController {
  label: string
  control: Control<GenFormSchema>
  name: FORM_FIELD
  error: boolean
}

const CheckboxFieldController = ({ label, control, name, error }: ICheckboxFieldController) => {
  return (
    <Box className='flexJustifyBetween'>
      <Typography variant={'body2'} component='span'>{label}</Typography>
      <Controller
        defaultValue={false}
        control={control}
        name={name}
        render={({field}) => {
          return (
            <Checkbox {...field} sx={error ? {
              color: '#d32f2f',
              '&.Mui-checked': {
                color: '#d32f2f',
              },
            } : {}} />
          )
        }}/>
    </Box>
  )
}

export default CheckboxFieldController