import { useEffect } from "react";
// useEffect added for new functionality
// v1 -- export const CongratsMsg = ({ timesClicked, triggerClicks }) => timesClicked >= triggerClicks ? <h2>Hey look, you clicked {triggerClicks} times!</h2> : null;

// version 2 of export with hide message functionality
// added onHide function for a button to hide the congrats msg
// version 2 --export const CongratsMsg = ({ timesClicked, triggerClicks, onHide }) => {
//     return timesClicked >= triggerClicks ? 
//     <>
//         <h2>Hey look, you clicked {triggerClicks} times!</h2>
//         <button onClick={onHide}>Hide</button>
//     </> : null;
// }
// version 3 with useEffect
export const CongratsMsg = ({ timesClicked, triggerClicks, onHide }) => {
    useEffect(() => {
        return () => console.log('Unmounting congrats message');
    }, []);
    // add empty array so this effect is used only once
    return timesClicked >= triggerClicks ? 
    <>
        <h2>Hey look, you clicked {triggerClicks} times!</h2>
        <button onClick={onHide}>Hide</button>
    </> : null;
}
// be careful about using useEffect for changing the value of state variables
// if it reruns from a state variable it uses, it can be infinite loop
// can want to use it to change some state variables for other functions to use
