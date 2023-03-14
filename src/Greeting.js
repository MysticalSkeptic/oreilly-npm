export const Greeting = ({ name, numberOfConquests }) => {
    // this syntax allows taking the html attributes "name" and "numberOfConquests" directly
    // without this syntax, must use Greeting = (props); place props.name where using the html attribute "name"

    // now using conditional rendering syntax for missing attribute/property
    if (!name) return null;

    let isMorning = (new Date()).getHours() < 12;
    let greetingHeader = isMorning
        ? <h3>Hail {name}, Ruler of Morning!</h3> : <h3>Hail {name}, Ruler of Afternoon!</h3>
    return (
        <>
            {greetingHeader}            
            {/* demonstrate removing this component with ternary <p>We honor your {numberOfConquests} conquests!</p> 
            Of note: return null is okay to hide components
            returning undefined is errors*/}
            {numberOfConquests === 0 ? null : <p>We honor your {numberOfConquests} conquests!</p>}
        </>        
        );
}
