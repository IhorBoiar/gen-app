import { StateCreator } from 'zustand'
import {ReactElement} from "react";

export enum SNACK_TYPE {
    SUCCESS = 'success',
    WARNING = 'warning',
    INFO = 'info',
    ERROR = 'error'
}

interface ISnackSlice {
    openSnack: boolean
    typeSnack: SNACK_TYPE | null
    textSnack: string | ReactElement
}

interface ISnackActions {
    showSnack: (type: SNACK_TYPE, text: ReactElement) => void
    hideSnack: () => void
}

export type Snack = ISnackSlice & ISnackActions

export const createSnackSlice: StateCreator<Snack> = (
    set,
) => ({
    openSnack: false,
    textSnack: '',
    typeSnack: null,
    showSnack: (type, text) => set({
        openSnack: true,
        typeSnack: type,
        textSnack: text
    }),
    hideSnack:() => set({
        openSnack: false,
    }),
})
