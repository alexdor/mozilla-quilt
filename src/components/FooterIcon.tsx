import React from "react";

const FooterIcon: React.SFC<{ src: string; title: string }> = ({
  src,
  title
}) => (
  <div className="m-auto pr-4">
    <img className="pr-2" src={src} alt={title} />
    <span>{title}</span>
  </div>
);

export default FooterIcon;
