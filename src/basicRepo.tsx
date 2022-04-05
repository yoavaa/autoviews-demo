import { ComponentsRepo } from "@autoviews/core";

export const basicRepo = new ComponentsRepo("displayRepo")
  .register("string", {
    name: "textComponent",
    component: (props) => <span>{props.data}</span>
  })
  .register("number", {
    name: "numberComponent",
    component: (props) => <span>{props.data}</span>
  })
  .register("boolean", {
    name: "booleanComponent",
    component: (props) => <span>{props.data ? "+" : "-"}</span>
  });
