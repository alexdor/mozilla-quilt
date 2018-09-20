import * as React from 'react';

const Divider: React.SFC<{ className?: string }> = ({ className }) => (
  <div className={`divider ${className}`} />
);

export default Divider;
