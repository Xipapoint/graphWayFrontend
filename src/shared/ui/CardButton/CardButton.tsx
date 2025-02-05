import clsx from 'clsx';
import React, { memo } from 'react';

type Props = React.HTMLAttributes<HTMLButtonElement>;

// might be it better change bg to bg-violet-700 but im not sure
const CardButton: React.FC<Props> = ({ className, ...props }) => (
  <button
    className={clsx(
      'mb-3 rounded-xl bg-sky-500 py-2 pe-11 ps-11 text-center hover:bg-sky-400',
      className,
    )}
    {...props}
  />
);

CardButton.displayName = 'CardButton';

export default memo(CardButton);
