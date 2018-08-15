import * as React from "react";
import { Admin, Resource } from "react-admin";
import "../../../styles/projects.css";
import authProvider from "../helpers/authProvider";
import dataProvider from "../helpers/dataProvider";
import { IssueList } from "./Issues";
import { ProjectCreate, ProjectEdit, ProjectList } from "./Projects";

export default class AdminComponent extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div style={{ width: "100vw", position: "absolute", left: "0px" }}>
        <Admin dataProvider={dataProvider} authProvider={authProvider}>
          <Resource
            name="admin/projects"
            list={ProjectList}
            edit={ProjectEdit}
            create={ProjectCreate}
          />
          <Resource name="admin/issues" list={IssueList} />
        </Admin>
      </div>
    );
  }
}
