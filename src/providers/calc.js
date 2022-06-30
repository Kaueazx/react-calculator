import { createContext, useState } from "react";

export const CalcContext = createContext([]);

export function CalcProvider({ children }) {
    const [value, setValue] = useState("0");

    function changeValue(newValue) {
        if (value.includes('/') ||
            value.includes('+') ||
            value.includes('-') ||
            value.includes('*')) {
            setValue(value + ' ' + newValue);
        }
        else {
            if (value != "0" && value.length >= 1) {
                setValue(value + ' ' + newValue);
            }
            else {
                setValue(newValue + ' ');
            }
        }
    }

    function clean() {
        setValue('0');
    }

    function Sum(a, b) {
        return parseInt(a) + parseInt(b)
    }

    function Sub(a, b) {
        return parseInt(a) - parseInt(b)
    }

    function Calc() {
        let parts = value.split(" ");
        parts = parts.join('').split('');

        let auxResult = '';

        parts.map((part, index) => {
            //  console.log(`posição: ${index}\nConteudo`);
            if (part == '+') {
              //  auxResult = Sum(index - 1, index + 1);
              auxResult = (Sum(parts[index - 1], parts[index + 1]));
            }
           

        });

        console.log(auxResult);
        // console.log(parts);




        //  setValue((Sum(parts[0], parts[1])) + '');
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
            setValue(value + ' ' + operator);
        }

    }

    return (
        <CalcContext.Provider value={{ value, changeValue, operation }}>
            {children}
        </CalcContext.Provider>
    );
}