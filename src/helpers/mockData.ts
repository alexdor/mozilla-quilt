import { Types } from "./consts";
const date = new Date();
const postedAt = date.toISOString();
export const storieListMockData = [
  {
    id: "eb22f040-58b6-4580-9dad-cad1e8b9a2ab",
    type: "digital" as Types,
    country: "GR",
    work_on: "a;kldsfasdfjasdd;lkfj asdlfkj as;kfj asdlkfj afkjasdl;dk fk",
    im_able: "as;lkdfjasl;kf jasdlkf ja;lks jfa",
    picture: "",
    user_name: "username",
    user_photo: "",
    posted_at: "2018-08-15T08:16:48.844Z"
  },
  {
    id: "eb22f040-58b6-4580-9dad-nad1e8b9a2a4",
    type: "openness" as Types,
    country: "UK",
    work_on: "a;kldsfasdfjasdd;lkfj asdlfkj as;kfj asdlkfj afkjasdl;dk fk",
    im_able: "as;lkdfjasl;kf jasdlkf ja;lks jfa",
    picture: "",
    user_name: "username",
    user_photo: "",
    posted_at: postedAt
  },
  {
    id: "eb22f040-5nb6-4580-9dad-cad1e8b9a2a4",
    type: "decentralization" as Types,
    country: "Italy",
    work_on: "a;kldsfasdfjasdd;lkfj asdlfkj as;kfj asdlkfj afkjasdl;dk fk",
    im_able: "as;lkdfjasl;kf jasdlkf ja;lks jfa",
    picture: "",
    user_name: "username",
    user_photo: "",
    posted_at: "2018-07-15T08:16:48.844Z"
  },
  {
    id: "eb22f040-58b6-4580-9d3d-cad1e8b9a2a4",
    type: "privacy" as Types,
    country: "India",
    work_on: "a;kldsfasdfjasdd;lkfj asdlfkj as;kfj asdlkfj afkjasdl;dk fk",
    im_able: "as;lkdfjasl;kf jasdlkf ja;lks jfa",
    picture: "",
    user_name: "username",
    user_photo: "",
    posted_at: postedAt
  },
  {
    id: "eb22ff40-58b6-4580-9dad-cad1e8b9a2a4",
    type: "web" as Types,
    country: "USA",
    work_on: "a;kldsfasdfjasdd;lkfj asdlfkj as;kfj asdlkfj afkjasdl;dk fk",
    im_able: "as;lkdfjasl;kf jasdlkf ja;lks jfa",
    picture: "",
    user_name: "username",
    user_photo: "",
    posted_at: postedAt
  }
];
