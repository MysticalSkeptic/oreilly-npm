export const CongratsMsg = ({ timesClicked, triggerClicks }) => timesClicked >= triggerClicks ? <h2>Hey look, you clicked {triggerClicks} times!</h2> : null;
