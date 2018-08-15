import * as React from "react";
import License from "../assets/icon-small-cc.svg";
import Guidelines from "../assets/icon-small-guidelines.svg";
import Legal from "../assets/icon-small-legal.svg";
import FooterIcon from "./FooterIcon";

const QuiltFooter: React.SFC<{}> = () => (
  <footer className="row quilt-footer mt-auto">
    <div className="container d-flex justify-content-between py-4">
      <div className="d-flex flex-column">
        <span className="p-2 quilt-footer-moz-text">
          Mozilla is a global non-profit dedicated to putting you in control of
          your online experience and shaping the future of the web for the
          public good. Visit us at mozilla.org
        </span>
      </div>
      <div className="d-flex justify-content-between">
        <FooterIcon src={Legal} title="Legal" />
        <FooterIcon src={License} title="License" />
        <FooterIcon src={Guidelines} title="Guidelines" />
      </div>
    </div>
  </footer>
);

export default QuiltFooter;
