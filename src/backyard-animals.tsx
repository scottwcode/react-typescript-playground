import * as React from 'react';

type AnimalListProps = {
  animal: Array<string>;
};

function AnimalList(props: AnimalListProps) {
  return (
    <ul>
      {props.animal.map((value, index) => {
        return (
          <li key={index} style={{ color: value }}>
            {value}
          </li>
        );
      })}
    </ul>
  );
}

AnimalList.displayName = 'BackyardAnimalList';

export { AnimalList };
