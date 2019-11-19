import React, { useState } from 'react';

const Grand:React.FC = () => {
  const [id, setId] = useState('아직 안 바뀜');
  const chandGrnadId = (input:string) => {
    setId(`id 바뀜${input}`);
  };
  const ch2 = () => {
    setId('으악!');
  };
  return (
    <div>
      <h1>여긴 Grand Parent</h1>
      <Parent clickFromGrandChild={chandGrnadId} click2={ch2} />
      <p>
Grnad 에 있는 P id :
        {id}
            </p>
    </div>
  );
};

type ParentProps = {
    clickFromGrandChild: (input:string)=>void,
    click2: () => void;
}

function Parent({
  clickFromGrandChild,
  click2,
}:ParentProps) {
  return (
    <div>
      <p> 여긴 Parent </p>
      <Me forMe="props" clickFromGrandChild={clickFromGrandChild} click2={click2} />
    </div>
  );
}

type MeProps = {
    clickFromGrandChild: (input:string)=>void,
    forMe: string,
    click2: () => void,
}

function Me({
  clickFromGrandChild,
  forMe,
  click2,
}: MeProps) {
  return (
    <div>
      <p> 여긴 Me </p>
      <p>{forMe}</p>
      <Child clickFromGrandChild={clickFromGrandChild} click2={click2} />
    </div>
  );
}

type ChildProps = {
    clickFromGrandChild: (input:string)=>void,
    click2: () => void,
}

function Child({
  clickFromGrandChild,
  click2,
}: ChildProps) {
  return (
    <div>
      <p>여긴 Child</p>
      <GrandChild clickFromGrandChild={clickFromGrandChild} click2={click2} />
    </div>
  );
}

type GrandChildProps = {
    clickFromGrandChild: (input:string)=>void,
    click2: ()=> void,
}

function GrandChild({
  clickFromGrandChild,
  click2,
}: GrandChildProps) {
  const [switchState, setSwithState] = useState(false);
  let input;
  return (
    <div>
      <p>여긴 Grnad Child</p>
      <button
        type="button"
        onClick={() => {
          if (switchState === true) {
            setSwithState(false);
            input = 'haha true';
          } else {
            setSwithState(true);
            input = 'uuuu..false';
          }

          clickFromGrandChild(input);
        }}
      />
      <button type="button" onClick={click2} />
    </div>
  );
}
export default Grand;
