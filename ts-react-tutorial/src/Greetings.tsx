import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  option?: string;
  onClick: (name: string) => void;
};

const Greetings = ({ name, mark, option, onClick }: GreetingsProps) => {
  return (
    <div onClick={() => onClick(name)}>
      Hello, {name} {mark}
    </div>
  );
};

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
