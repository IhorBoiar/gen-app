import {PatternFormat} from "react-number-format";
import {Box, TextField} from "@mui/material";
import {Control, Controller} from "react-hook-form";
import {FORM_FIELD, GenFormSchema} from "../helpers/schemas.ts";

interface IPhoneFieldController {
  name: FORM_FIELD
  control: Control<GenFormSchema>
  error: boolean
  label: string
}

const PhoneFieldController = ({ name, control, error, label }: IPhoneFieldController) => {
  return (
    <Controller
      defaultValue=''
      name={name}
      control={control}
      render={({ field: { ref, ...field } }) => (
        <PatternFormat
          inputRef={ref}
          format="### ### ## ##"
          customInput={TextField}
          onValueChange={(values) => {
            field.onChange({
              target: {
                name,
                value: values.value,
              },
            })
          }}
          size={'small'}
          valueIsNumericString
          allowEmptyFormatting={false}
          placeholder="097 000 00 00"
          label={label}
          error={error}
          style={{ paddingLeft: '0 !important' }}
          InputProps={{
            label,
            startAdornment: (
              <Box sx={{ marginRight: '4px', marginTop: '1px' }}>+38</Box>
            ),
          }}
        />
      )}
    />
  )
}

export default PhoneFieldController