import { PersonnelList } from '../PersonnelList';

const personnel = [{
    name: 'Kyrsk Algrothum',
    duty: 'Assassin',
    kills: 109
}, {
  name: 'Kyrsk Dubori',
  duty: 'Assassin',
  kills: 23
}, {
  name: 'Thrakk Puurth',
  duty: 'Shuttle Maintenance',
  kills: 2
}, {
  name: 'Sular CThryyl',
  duty: 'Ambassador',
  kills: 1
}];

export const PersonnelListPage = () => (
  <>
    <h1>My Personnel Page</h1>
    <PersonnelList personnel={personnel} />
  </>
);
