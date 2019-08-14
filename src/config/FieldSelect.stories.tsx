import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { FieldSelect } from "./FieldSelect";

storiesOf("SelectField", module).add("default", () => {
  const fields = [
    {
      type: "SINGLE_LINE_TEXT",
      code: "文字列1行",
      label: "文字列(1行)"
    },
    {
      type: "SINGLE_LINE_TEXT",
      code: "文字列1行_2",
      label: "文字列(1行)-その2"
    }
  ];
  return <FieldSelect fields={fields} onChange={action("onchange")} />;
});
