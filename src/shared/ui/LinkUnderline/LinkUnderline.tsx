import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import React, { forwardRef, memo } from 'react';

type Props = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
const LinkUnderline = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, ...props }, ref) => (
    <Link
      className={clsx(
        'cursor-pointer pb-0.5 text-white no-underline transition duration-75 ease-in hover:border-b-2 hover:border-white',
        className,
      )}
      ref={ref}
      {...props}
    >
      <p>{children}</p>
    </Link>
  ),
);

LinkUnderline.displayName = 'Link';

export default memo(LinkUnderline);
/*className={clsx(styles.link, className)}*/
