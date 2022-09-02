interface Props {
  person: any
}

const Person = ({ person }: Props) => {
  return (
    <>
      {typeof person === 'string' ? (
        <span>{person}</span>
      ) : (
        <a href={person.link} target="_blank" rel="noreferrer">
          {person.name}
        </a>
      )}
    </>
  )
}

export default Person
