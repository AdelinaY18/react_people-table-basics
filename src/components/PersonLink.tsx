import { Link } from 'react-router-dom';

export const PersonLink = ({ person, name, people }) => {
  if (person) {
    return (
      <Link
        to={`/people/${person.slug}`}
        className={person.sex === 'f' ? 'has-text-danger' : ''}
      >
        {person.name}
      </Link>
    );
  }

  const found = people?.find(p => p.name === name);

  if (!found) {
    return name ?? '';
  }

  return (
    <Link
      to={`/people/${found.slug}`}
      className={found.sex === 'f' ? 'has-text-danger' : ''}
    >
      {name}
    </Link>
  );
};
