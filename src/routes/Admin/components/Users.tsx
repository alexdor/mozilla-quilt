import * as React from "react";
import { Datagrid, EmailField, List, TextField } from "react-admin";

export const UserList = (props: any) => (
  <List title="All users" {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);
