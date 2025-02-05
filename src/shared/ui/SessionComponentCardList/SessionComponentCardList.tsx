import React, { memo } from 'react';

import Card from '../Card/Card';

type SessionComponent = {
  title: string;
  image: Blob;
  id: string;
  description: string;
};
type Props = React.HTMLAttributes<HTMLDivElement> & {
  sessionComponents: SessionComponent[];
  selectComponent: (componentId: string) => void;
};
const SessionComponentCardList: React.FC<Props> = ({
  sessionComponents,
  selectComponent,
  ...props
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-20" {...props}>
      {sessionComponents.map((component) => (
        <Card
          selectComponent={selectComponent}
          id={component.id}
          name={component.title}
          imagePath={String(component.image)}
          key={component.id}
        />
      ))}
    </div>
  );
};

export default memo(SessionComponentCardList);
