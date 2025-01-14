import clsx from 'clsx';
import React, { ReactNode, forwardRef, memo } from 'react';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const ResponsiveContainerGap40: React.FC<Props> = forwardRef<
  HTMLDivElement,
  Props
>(({ children, className, ...props }, ref) => (
  <div className={clsx('sm:flex sm:gap-10', className)} ref={ref} {...props}>
    {children}
  </div>
));

ResponsiveContainerGap40.displayName = 'ResponsiveContainerGap40';

export default memo(ResponsiveContainerGap40);
