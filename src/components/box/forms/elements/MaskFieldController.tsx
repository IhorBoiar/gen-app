import {PatternFormat} from "react-number-format";
import {TextField} from "@mui/material";
import {Control, Controller} from "react-hook-form";
import {FORM_FIELD, GenFormSchema} from "../helpers/schemas.ts";

interface IMaskFieldController {
  name: FORM_FIELD
  control: Control<GenFormSchema>
  format: string
  label: string
  placeholder: string
  error: boolean
}

const MaskFieldController = ({ name, control, format, label, placeholder, error }: IMaskFieldController) => {
  return (
    <Controller
      defaultValue=''
      name={name}
      control={control}
      render={({ field: { ref, ...field } }) => (
        <PatternFormat
          inputRef={ref}
          format={format}
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
          allowEmptyFormatting={false}
          placeholder={placeholder}
          label={label}
          error={error}
          InputProps={{
            label
          }}
        />
      )}
    />
  )
}

export default MaskFieldController