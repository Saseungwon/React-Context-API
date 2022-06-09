## Context API

Context를 이용하면 트리단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 이러한 값을 공유하도록 할 수 있다.

#### 하위 컴포넌트 전체에 데이터를 공유하는 법

- 데이터를 Set 하는 것
  - 가장 상위 컴포넌트 => 프로바이더
- 데이터를 Get 하는 것
  - 모든 하위 컴포넌트에서 접근 가능
    - 컨슈머로 하는 방법
    - 클래스 컴포넌트의 this.context로 하는 방법
    - 펑셔널 컴포넌트의 useContext로 하는 방법

#### 데이터를 Set 하기 - .Provider

1. 일단 컨텍스트를 생성한다. (Context API 사용)
2. Context.Provider 라고 하는 컴포넌트 사용
3. value 라는 props를 사용해서 provider에게 데이터를 넣어주면 됨

PersonContext.Provider

```jsx
import React from "react";
import App from "./App";
import PersonContext from "./contexts/personContext";

const persons = [
  { id: 0, name: "Mark", age: 36 },
  { id: 1, name: "Seungwon", age: 27 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersonContext.Provider value={persons}>
      <App />
    </PersonContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
```

#### 데이터를 Get 하기(1) - .Consumer

1. Context를 가져온다.
2. Context.Consumer를 사용한다.
3. value 사용

PersonContext.Consumer

```jsx
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
```

#### 데이터를 Get하기(2) - class

1. static contextType에 컨텍스트를 설정한다.
2. this.context 로 접근하면 그게 value가 나온다.

```jsx
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
```

#### 데이터를 Get하기(3) - functional

가장 많이 사용됨

1. useContext 로 컨텍스트를 인자로 호출한다.
2. useContext 의 리턴이 value 이다.

```jsx
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
```
