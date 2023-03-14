import { useEffect } from "react";

export const CounterButton = ({ onIncrement, timesClicked }) => {
    // define two new constants with array destructuring syntax as seen below
    // moved during demo - const [timesClicked, setTimesClicked] = useState(0);
    // other syntax example const [x, y] = [1, 2] means x = 1 and y = 2
    // timesClicked constant is current value of state
    // second constant is function to change that state
    // the initial state is set with useState() with 0 in the () for initial value

    // use below function call to change the state
    // moved during demo - const increment = () => setTimesClicked(timesClicked + 1);

    // crucial react detail: components only re-render if value of any props or value from hooks change
    // react only re-renders components affected by changes
    // only code within the hook/prop components interacted with runs
    // such as console logs only repeating when the button attached is clicked

    // now working with life cycle of components in modern functional react components
    // import useEffect - done above
    // call useEffect function and pass it a function as an argument - anonymous as first example
    // first draft with just one argument -- useEffect(() => {
    //     console.log('called useEffect!');
    // });
    // useEffect gets called 1. when component is rendered 2. when component data updates (data from props or hooks changes)
    // logic placed in conjunction with the useEffect logic will occur at the same time, such as a console.log()
    // useEffect can be used to control when functions called/rerun by passing second argument
    // pass in an array of values as a second argument, so useEffect only reruns when the value/s met
    // version 2 w/array for when to call -- useEffect(() => {
    //     console.log('Second version of useEffect!');
    // }, [timesClicked]);
    // counterButton function must have the prop passed for useEffect to use it
    // can also pass an empty array to prevent useEffect from rerun, only runs when first rendered, not when state changes
    // this is useful for fetching server data / sending a request only when something changes
    // useEffect can call/return another function when component removed from dom (unmounts)
    useEffect(() => {
        console.log('Version 3!');
        return () => console.log('Unmounting the component');
        // use for when component subscribed to observable or other event
        // must unsubscribe when unmounted
    }, []);
    return (
        <>
            <p>You clicked my button {timesClicked} times</p>
            <button
            // changed this from onClick={increment} bc increment is now a function
            // in the parent component; now it uses the prop onIncrement
                onClick={onIncrement}
            >
                Button
            </button>
        </>
    );
}

// react hooks: add state and side effects to functional react components
// import the hooks from 'react'