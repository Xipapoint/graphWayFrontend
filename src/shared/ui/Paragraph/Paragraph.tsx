import React, { memo } from 'react';

//const TextVariants = {};

const Paragraph: React.FC = (
  props: React.HTMLAttributes<HTMLParagraphElement>,
) => {
  return <p {...props}>{props.children}</p>;
};

export default memo(Paragraph);
