'use client';

import React, { forwardRef, memo, useCallback } from 'react';

import CardButton from '../CardButton/CardButton';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  imagePath: string;
  selectComponent: (componentId: string) => void;
}
const Card = forwardRef<HTMLDivElement, Props>(
  ({ id, name, imagePath, selectComponent, ...props }, ref) => {
    const handleSelectId = useCallback(() => {
      selectComponent(id);
    }, [id, selectComponent]);
    return (
      <div
        className="mt-24 flex h-64 w-40 animate-glow flex-col items-center gap-6 rounded-xl border-[1px] border-cyan-400 bg-[#252525] text-center text-white"
        ref={ref}
        {...props}
      >
        <p style={{ flex: 1 }}>{imagePath}</p>
        <h3>{name}</h3>
        <CardButton onClick={handleSelectId}>Click</CardButton>
      </div>
    );
  },
);

Card.displayName = 'Card';

export default memo(Card);
