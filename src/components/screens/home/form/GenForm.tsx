import {Box, Grid, MenuItem, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {FORM_FIELD, genFormOptions, GenFormSchema} from "../../../box/forms/helpers/schemas.ts";
import {useLayoutStore} from "../../../../store/store.ts";
import {SNACK_TYPE} from "../../../../store/slices/snackSlice";
import BoxInputs from "../../../box/forms/blocks/BoxInputs.tsx";
import TextFieldController from "../../../box/forms/elements/TextFieldController.tsx";
import PhonesBlock from "../../../box/forms/blocks/PhonesBlock.tsx";
import SelectController from "../../../box/forms/elements/SelectController.tsx";
import MaskFieldController from "../../../box/forms/elements/MaskFieldController.tsx";
import CheckboxFieldController from "../../../box/forms/elements/CkeckboxFieldController.tsx";
import {mockEmailHandler, mockSubmit} from "../../../../lib/common/queries.ts";
import {commonFocusField} from "../../../../lib/common/functions.ts";

const GenForm = () => {
  const {
    control,
    handleSubmit,
    setFocus,
    formState: {
      isSubmitted,
      errors
    }
  } = useForm<GenFormSchema>(genFormOptions)
  const { showSnack } = useLayoutStore()
  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = (data: GenFormSchema) => {
    console.log(data, '(formData)')
    setLoading(true)

    if (data.email) {
      mockEmailHandler().then(res => {
        showSnack(SNACK_TYPE.SUCCESS, <Box>{res}</Box>)
      }).catch(e => {
        showSnack(SNACK_TYPE.ERROR, <Box>{e}</Box>)
      }).finally(() => {
        setLoading(false)
      })
    } else {
      mockSubmit().then((res) => {
        showSnack(SNACK_TYPE.SUCCESS, <Box>{res}</Box>)
      }).finally(() => {
        setLoading(false)
      })
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length > 0 && isSubmitted) {
      showSnack(SNACK_TYPE.ERROR, (
        <Box>
          {Object.entries(errors).map(e => (
            <Box key={e[0]}>{e[1].message}</Box>
          ))}
        </Box>
      ))
    }
    commonFocusField(Object.keys(errors), setFocus)
  }, [errors, isSubmitted]);

  return (
    <Box
      className={'form'}
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box className={'form__title'}>
        <Typography variant={'h1'} component={'span'}>🟣 Gen App</Typography>
      </Box>
      <Box className='form__content'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <BoxInputs title={'Personal Info'}>
              <TextFieldController
                control={control}
                name={FORM_FIELD.FIRST_NAME}
                label={'First name'}
                error={!!errors.firstName}
              />
              <TextFieldController
                control={control}
                name={FORM_FIELD.LAST_NAME}
                label={'Last name'}
                error={!!errors.lastName}
              />
            </BoxInputs>
          </Grid>
          <Grid item xs={12} md={4}>
            <BoxInputs title={'Contact information'}>
              <TextFieldController
                control={control}
                name={FORM_FIELD.EMAIL}
                label={'Email'}
                error={!!errors.email}
              />
              <PhonesBlock control={control} errors={errors} />
              <SelectController
                name={FORM_FIELD.COUNTRY}
                control={control}
                label={'Country'}
                error={!!errors.country}
              >
                {['Ukraine', 'Spain', 'Italy', 'England'].map(u => (
                  <MenuItem key={u} value={u}>
                    {u}
                  </MenuItem>
                ))}
              </SelectController>
              <TextFieldController
                control={control}
                name={FORM_FIELD.ADDRESS}
                label={'Address'}
                error={!!errors.address}
              />
            </BoxInputs>
          </Grid>
          <Grid item xs={12} md={4}>
            <BoxInputs title={'Payment details'}>
              <MaskFieldController
                name={FORM_FIELD.CARD}
                control={control}
                format={'#### #### #### ####'}
                label={'Credit card'}
                placeholder={'Enter card'}
                error={!!errors.card}
              />
              <MaskFieldController
                name={FORM_FIELD.CODE}
                control={control}
                format={'###'}
                label={'CVV2'}
                placeholder={'***'}
                error={!!errors.code}
              />
              <CheckboxFieldController
                label={'Agreement with terms of use'}
                control={control}
                name={FORM_FIELD.AGREE}
                error={!!errors.agree}
              />
            </BoxInputs>
          </Grid>
        </Grid>
      </Box>
      <LoadingButton
        loading={loading}
        variant={'contained'}
        type={'submit'}
        className='button'
      >
        Send
      </LoadingButton>
    </Box>
  )
}

export default GenForm