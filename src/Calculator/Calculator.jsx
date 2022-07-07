import React from 'react';
import Button from '../Button/Button';
import Display from '../Display/Display';
import "./Calculator.css";

const Calculator = () => {
    return (
        <div className='Calculator'>
            <Display />

            <div className="Keypad">
                <div className="Keypad-left">
                    <Button size='big' value={'AC'} bg={'light'} operator />
                    <Button size='small' value={7} bg={'light'} />
                    <Button size='small' value={8} bg={'light'} />
                    <Button size='small' value={9} bg={'light'} />
                    <Button size='small' value={4} bg={'light'} />
                    <Button size='small' value={5} bg={'light'} />
                    <Button size='small' value={6} bg={'light'} />
                    <Button size='small' value={1} bg={'light'} />
                    <Button size='small' value={2} bg={'light'} />
                    <Button size='small' value={3} bg={'light'} />
                    <Button size='medium' value={0} bg={'light'} />

                    <Button size='small' value={'.'} bg={'light'} />
                </div>

                <div className="Keypad-right">
                    <Button size='small' value={'/'} bg={'dark'} operator/>
                    <Button size='small' value={'*'} bg={'dark'} operator/>
                    <Button size='small' value={'-'} bg={'dark'} operator/>
                    <Button size='small' value={'+'} bg={'dark'} operator/>
                    <Button size='small' value={'='} bg={'dark'} operator/>
                </div>
            </div>
        </div>
    );
}
 
export default Calculator;