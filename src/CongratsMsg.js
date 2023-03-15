import { useEffect } from "react";

export const CongratsMsg = ({ timesClicked, triggerClicks, onHide }) => {
    useEffect(() => {
        return () => console.log('Unmounting congrats message');
    }, []);

    return timesClicked >= triggerClicks ? 
    <>
        <h2>Hey look, you clicked {triggerClicks} times!</h2>
        <button onClick={onHide}>Hide</button>
    </> : null;
}
