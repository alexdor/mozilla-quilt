import Decent from '../assets/icon-decentralization.svg';
import Digital from '../assets/icon-digital-inclusion.svg';
import Openness from '../assets/icon-openness.svg';
import Privacy from '../assets/icon-privacy-security.svg';
import Web from '../assets/icon-web-literacy.svg';

export const types = {
  web: { icon: Web, title: "Web literacy", color: "#6dd8af", key: "web" },
  digital: {
    icon: Digital,
    title: "Digital inclusion",
    color: "#5fa1f4",
    key: "digital"
  },
  openness: {
    icon: Openness,
    title: "Openness",
    color: "#ff5c73",
    key: "openness"
  },
  decentralization: {
    icon: Decent,
    title: "Decentralization",
    color: "#ffe159",
    key: "decentralization"
  },
  privacy: {
    icon: Privacy,
    title: "Privacy & Security",
    color: "#76e1f4",
    key: "privacy"
  }
};

export type Types =
  | "web"
  | "digital"
  | "openness"
  | "decentralization"
  | "privacy";
