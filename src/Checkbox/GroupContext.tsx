import { createContext } from "react";
import { CheckboxValue } from ".";



export const CheckboxGroupContext = createContext<{
    value: CheckboxValue[],
    disabled: boolean,
    check: (value: CheckboxValue) => void,
    uncheck: (value: CheckboxValue) => void,
} | null>(null)