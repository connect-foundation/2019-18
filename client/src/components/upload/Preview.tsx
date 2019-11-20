import React from 'react';
import styled from 'styled-components';

const P = {
  Box: styled.div`
  max-width: 600px;
  height: auto;
`,
  Img: styled.img`
  width:100%;
  height: auto;
    `,
};
type PreviewProps ={
    src: string
}
function Preview({
  src,
}: PreviewProps) {
  return (
    <P.Box className="Preview-container">
      <P.Img src={src} alt="preview_image" />
    </P.Box>
  );
}


export default Preview;
