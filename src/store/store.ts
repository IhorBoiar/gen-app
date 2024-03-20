import { create } from 'zustand'
import {Snack, createSnackSlice} from "./slices/snackSlice.ts";


type LayoutStore = Snack

export const useLayoutStore = create<LayoutStore>()(
	(...a) => ({
		...createSnackSlice(...a)
	})
)