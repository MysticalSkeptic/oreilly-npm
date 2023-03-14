import './PersonnelListItem.css';
// using class attributue in react uses className to avoid conflict w/ js class keyword

export const PersonnelListItem = ({ person }) => (
    <div
        className="list-item-container"
    >
        <h3>Minion Name: {person.name}</h3>
        <p>Duty: {person.duty} </p>
        <p>Kills: {person.kills} </p>
    </div>
);
// styles updated via .css file
// can also use npm style packages from 3rd party called styled-components
// styled components allow writing css in js component files "css in javascript"