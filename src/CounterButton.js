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
    useEffect(() => {
        console.log('called useEffect!');
    });
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