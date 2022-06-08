import PersonContext from "../contexts/personContext";

// function class 둘다 사용가능
export default function ConsumerEx() {
  return (
    <PersonContext.Consumer>
      {(persons) => (
        <ul>
          {persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
      )}
    </PersonContext.Consumer>
  );
}
