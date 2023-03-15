import { useEffect } from "react";

export const CounterButton = ({ onIncrement, timesClicked }) => {
    
    useEffect(() => {
        console.log('Version 3!');
        return () => console.log('Unmounting the component');
        
    }, []);
    return (
        <>
            <p>You clicked my button {timesClicked} times</p>
            <button onClick={onIncrement} >
                Button
            </button>
        </>
    );
}
