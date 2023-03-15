import { PersonnelListItem } from "./PersonnelListItem";
import styled from 'styled-components';

const Wrapper = styled.div`
    border: 3px solid purple;
    padding: 1.5rem;
`;

export const PersonnelList = ({ personnel }) => (
    <Wrapper>
        {personnel.map(person => <PersonnelListItem person={person} key={person.name} />)}
    </Wrapper>
);