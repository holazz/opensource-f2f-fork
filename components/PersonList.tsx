import Person from './Person'

interface Props {
  persons: any
}

const PersonList = ({ persons }: Props) => {
  return (
    <>
      {persons.map((person: any, index: any) => (
        <div key={index}>
          <Person person={person} />
          {index !== persons.length - 1 && <span>,</span>}
        </div>
      ))}
    </>
  )
}

export default PersonList
