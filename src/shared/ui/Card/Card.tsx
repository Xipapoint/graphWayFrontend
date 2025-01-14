'use client';

import React, { forwardRef, memo } from 'react';

import CardButton from '../CardButton/CardButton';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  imagePath: string;
}
const Card = forwardRef<HTMLDivElement, Props>(
  ({ name, imagePath, ...props }, ref) => {
    return (
      <div
        className="mt-24 flex h-64 w-40 animate-glow flex-col items-center gap-6 rounded-xl border-[1px] border-cyan-400 bg-[#252525] text-center text-white"
        ref={ref}
        {...props}
      >
        <p style={{ flex: 1 }}>{imagePath}</p>
        <h3>{name}</h3>
        <CardButton>Click</CardButton>
      </div>
    );
  },
);

Card.displayName = 'Card';

export default memo(Card);
