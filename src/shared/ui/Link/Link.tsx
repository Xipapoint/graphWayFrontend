import clsx from 'clsx';
import NextLink, { LinkProps } from 'next/link';
import React, { forwardRef } from 'react';
type Props = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, ...props }, ref) => (
    <NextLink
      className={clsx('cursor-pointer text-white', className)}
      ref={ref}
      {...props}
    >
      {children}
    </NextLink>
  ),
);

Link.displayName = 'Link';

export default Link;
