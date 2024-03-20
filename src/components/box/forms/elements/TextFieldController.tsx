import {TextField} from "@mui/material";
import {Control, Controller} from "react-hook-form";
import {FORM_FIELD, GenFormSchema} from "../helpers/schemas.ts";

interface ITextFieldController {
	control: Control<GenFormSchema>
	name: FORM_FIELD
	label: string
	error: boolean
}

const TextFieldController = ({ control, name, error, label }: ITextFieldController) => {
  return (
		<Controller
			control={control}
			name={name}
			defaultValue=''
			render={({ field: { ref, ...field } }) => (
				<TextField
					{...field}
					inputRef={ref}
					label={label}
					error={error}
					size={'small'}
				/>
			)}
		/>
  )
}

export default TextFieldController