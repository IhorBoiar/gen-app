import {Alert, AlertColor, Snackbar} from '@mui/material'
import { useLayoutStore } from '../../../store/store'

const Snack = () => {
	const { openSnack, hideSnack, typeSnack, textSnack } = useLayoutStore()

	const handleClose = () => {
		hideSnack()
	}

	return (
		<Snackbar open={openSnack} autoHideDuration={6000} onClose={handleClose}>
			<Alert
				onClose={handleClose}
				severity={typeSnack as AlertColor}
				variant="filled"
				sx={{ width: '100%' }}
			>
				{textSnack}
			</Alert>
		</Snackbar>
	)
}

export default Snack
