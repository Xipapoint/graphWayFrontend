import React, { forwardRef, memo } from 'react';
// might be it better change bg to bg-violet-700 but im not sure
const CardButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ ...props }) => (
  <button
    className="mb-3 rounded-xl bg-sky-500 py-1 pe-9 ps-9 text-center hover:bg-sky-400"
    {...props}
  />
));

CardButton.displayName = 'CardButton';

export default memo(CardButton);
