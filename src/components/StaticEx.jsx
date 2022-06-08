import React from "react";
import PersonContext from "../contexts/personContext";

export default class StaticEx extends React.Component {
  // static contextType은 여러 개를 지정할 수 없기 때문에 만약 다른 컨텍스트에서 데이터를 동시에 가져다가 쓰고 싶다면
  //컴포넌트를 하나 더 만들어야 해서 복잡해짐. 현재는 별로 선호되는 방식은 아니다.
  static contextType = PersonContext;

  render() {
    const persons = this.context;
    return (
      <ul>
        {persons.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}
