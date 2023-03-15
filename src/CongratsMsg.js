import { useEffect } from "react";

// no need to pass number of clicks anymore, handled in DisplayIf component
export const CongratsMsg = ({ triggerClicks, onHide }) => {
    useEffect(() => {
        return () => console.log('Unmounting congrats message');
    }, []);

    return( 
    <>
        <h2>Hey look, you clicked {triggerClicks} times!</h2>
        <button onClick={onHide}>Hide</button>
    </>
    );
}
