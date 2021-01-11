import React from "react";

interface Props {
  name: string;
}

const TSCompactComponent: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h1>Hi, my name is {name}</h1>
      <p>
        This is a simple react functional component that takes a parameter,
        name, and renders it. This type of component is also known as a
        presentational component.
      </p>
    </div>
  );
};

export default TSCompactComponent;
