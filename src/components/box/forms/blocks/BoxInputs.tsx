import {Box, Typography} from "@mui/material";
import {ReactNode} from "react";

interface IBoxInputs {
  title: string
  children: ReactNode
}

const BoxInputs = ({ title, children }: IBoxInputs) => {
  return (
    <Box className={'boxInputs'}>
      <Box className={'boxInputs__title'}>
        <Typography component={'span'} variant={'h6'} className={'titleInputs__text'}>{title}</Typography>
      </Box>
      <Box className={'boxInputs__body'}>
        {children}
      </Box>
    </Box>
  )
}

export default BoxInputs