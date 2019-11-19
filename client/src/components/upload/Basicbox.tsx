import React from 'react';

type BasicboxProps = {
    name: string,
}

function Basicbox({
  name,
}: BasicboxProps) {
  return (
    <div className="Basicbox">
      {/* <button type="button">{name}</button> */}
      <p>{name}</p>
    </div>
  );
}

export default Basicbox;
