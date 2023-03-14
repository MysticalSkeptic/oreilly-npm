import { PersonnelListItem } from "./PersonnelListItem";
// import the style package here
import styled from 'styled-components';

// make sure to use BACKTICKS with styled.attribute
const Wrapper = styled.div`
    border: 3px solid purple;
    padding: 1.5rem;
`;

export const PersonnelList = ({ personnel }) => (
    // Ensure the attribute here maps to the proper name of the argument in the imported component
    // note: when rendering child elements like a list of components, assign a key to the element
    // when rendering objects, use one of the properties as the key - such as person.name
    <Wrapper>
        {personnel.map(person => <PersonnelListItem person={person} key={person.name} />)}
    </Wrapper>
    // adding "Wrapper" style to the fragment?? yep
    // from app.js we get attribute value "personnel" then pass "person" to PersonnelListItem
    // another way to make keys is to use the index value of an array as the key
    // looks as follows:
    // {personnel.map((person, i) => <PersonnelListItem person={person} key={i} />)}
    // using index value can cause its own problems, but key should be unique
    // try to use only unique properties as keys, CANNOT use duplicates
    // attaching the render to a key helps keep errors down when changing information in the object

);
    // { arrow function w/1 statement uses ()
    // add "personnel" as an argument prop
    // in order to return top-level elements for each object in the list,
    // wrap the return in more (), add <>{}</> around the object
    // note: this arrow function has only one statement "return" unnecessary
    // demo made a new component with the data...
        // (
        //     <>
        //         {
        //             personnel.map(personnel => (
        //                 <div>
        //                     <h3>Minion Name: {personnel.name}</h3>
        //                     <p>Duty: {personnel.duty} </p>
        //                     <p>Kills: {personnel.kills} </p>
        //                 </div>
        //             ))
        //         };
        //     </>
        // );
        
// }