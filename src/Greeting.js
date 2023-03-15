export const Greeting = ({ name, numberOfConquests }) => {

    if (!name) return null;

    let isMorning = (new Date()).getHours() < 12;
    let greetingHeader = isMorning
        ? <h3>Hail {name}, Ruler of Morning!</h3> : <h3>Hail {name}, Ruler of Afternoon!</h3>
    return (
        <>
            {greetingHeader}
            {numberOfConquests === 0 ? null : <p>We honor your {numberOfConquests} conquests!</p>}
        </>        
        );
}
