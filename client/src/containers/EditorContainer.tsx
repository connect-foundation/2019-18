import React, { useState } from 'react';

interface ITexts{
  text: string;
  setText: React.Dispatch<string>;
}

const EditorContainer = () => {
  const [texts, setTexts] = useState<ITexts[]>();


  const onChange = () => {

  };
  return (
    <div />
  );
};
