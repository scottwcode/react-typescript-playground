import * as React from 'react';

type FruitColorProps = {
  fruit: Array<string>;
};

function FruitColors(props: FruitColorProps) {
  return (
    <ul>
      {props.fruit.map((value, index) => {
        return (
          <li key={index} style={{ color: value }}>
            {value}
          </li>
        );
      })}
    </ul>
  );
}

FruitColors.displayName = 'FruitColors';

export { FruitColors };
