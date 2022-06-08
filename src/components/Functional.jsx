import { useContext } from "react";
import PersonContext from "../contexts/personContext";

// function class 둘다 사용가능
export default function FunctionalEx() {
  const persons = useContext(PersonContext);

  return (
    <ul>
      {persons.map((person) => (
        <li>{person.name}</li>
      ))}
    </ul>
  );
}
