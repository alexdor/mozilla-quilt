import * as React from "react";
import { Datagrid, List, NumberField, ReferenceField, TextField } from "react-admin";
export const IssueList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="experience_needed" />
      <TextField source="expected_time" />
      <TextField source="language" />
      <TextField source="tech_stack" />
      <TextField source="url" />
      <TextField source="logo" />
      <TextField source="type" />
      <TextField source="type" />
      <NumberField source="number" />
      <TextField source="labels" />
      <ReferenceField label="Project" source="project_id" reference="projects">
        <TextField source="display_name" />
      </ReferenceField>
      <ReferenceField
        label="Repository"
        source="repository_id"
        reference="repositories"
      >
        <TextField source="repository_url" />
      </ReferenceField>
    </Datagrid>
  </List>
);
