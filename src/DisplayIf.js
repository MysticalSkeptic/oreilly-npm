export const DisplayIf = ({ condition, children }) => {
    // if condition is true, display what comp wraps
    // parent comp auto receives child comps in props
    // add children prop to destructuring to access the child comps
    // "condition" is what prop value needed for display/trigger
    // "children" contains child comp props contained in DisplayIf
    return condition ? children : null;
    // display if condition met in child comps, otherwise no?
}