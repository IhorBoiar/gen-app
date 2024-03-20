import {Box, Button, IconButton} from "@mui/material";
import PhoneFieldController from "../elements/PhoneFieldController.tsx";
import CloseIcon from "@mui/icons-material/Close";
import {useState} from "react";
import {Control, FieldErrors} from "react-hook-form";
import {FORM_FIELD, GenFormSchema} from "../helpers/schemas.ts";

interface IPhonesBlock<TFieldValues extends GenFormSchema = GenFormSchema> {
  control: Control<GenFormSchema>
  errors: FieldErrors<TFieldValues>
}

const PhonesBlock = ({ control, errors }: IPhonesBlock) => {
  const [phones, setPhones] = useState<number>(1)

  const addPhone = () => {
    if (phones < 3)
      setPhones(phones + 1)
  }
  const deletePhone = () => {
    setPhones(phones - 1)
  }


  return (
    <Box className='phonesBlock'>
      <Box className='phonesBlock__list'>
        {Array.from({ length: phones }, (_, i) => (
          <Box key={i} className='phonesBlock__listItem'>
            <PhoneFieldController
              name={FORM_FIELD[`PHONE${i + 1}` as keyof typeof FORM_FIELD]}
              control={control}
              error={!!errors[FORM_FIELD[`PHONE${i + 1}` as keyof typeof FORM_FIELD]]}
              label={'Phone'}
            />
            {phones === i + 1 && phones !== 1 && (
              <IconButton
                size={'small'}
                className='phonesBlock__iconDelete'
                onClick={() => deletePhone()}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Box>
        ))}
      </Box>
      {phones < 3 && (
        <Button
          className='phonesBlock__button'
          sx={{ width: 'fit-content' }}
          variant={'contained'}
          onClick={addPhone}
        >Add phone</Button>
      )}
    </Box>
  )
}

export default PhonesBlock