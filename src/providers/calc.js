import { createContext, useState } from "react";

export const CalcContext = createContext([]);

export function CalcProvider({ children }) {
    const [value, setValue] = useState("0");

    function changeValue(newValue) {
       if (value.includes('/') || 
           value.includes('+') ||
           value.includes('-') ||
           value.includes('*')) {
        setValue(value + newValue);
       }
       else {
           if (value != "0" && value.length >= 1) {
            setValue(value + newValue);
           }
            else { 
                setValue(newValue + '');
           }
       }
    }

    function clean() {
        setValue('0');
    }

    function Calc(){
        let parts = value.split("+");
    
        setValue(parseInt(parts[0]) + parseInt(parts[1]) + '');
    }

    function operation(operator) {
        if (operator == 'AC')
            clean();
        else if (operator == "=") {
            Calc()
        }
        else {
            // alert(operator);
            // let addValue = value + operator;
            setValue(value + operator);
        }
        
    }

    return (
        <CalcContext.Provider value={{ value, changeValue, operation }}>
            {children}
        </CalcContext.Provider>
    );
}