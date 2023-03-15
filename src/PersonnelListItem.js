import './PersonnelListItem.css';

export const PersonnelListItem = ({ person }) => (
    <div
        className="list-item-container"
    >
        <h3>Minion Name: {person.name}</h3>
        <p>Duty: {person.duty} </p>
        <p>Kills: {person.kills} </p>
    </div>
);