import React from "react";
import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { getDepartmentCollection } from "../services/employeeService";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

export default function SideMenu() {
  const classes = useStyles();
  const departments = getDepartmentCollection();

  return (
    <div className={classes.sideMenu}>
      <List component="nav">
        {departments.map((department) => (
          <ListItem key={department.id} button>
            <ListItemText
              primary={department.title}
              style={{ color: "white" }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
