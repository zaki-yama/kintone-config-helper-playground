import React from "react";
import { render } from "react-dom";
import { App } from "./App";

declare let kintone: any;

(function(PLUGIN_ID) {
  console.log(PLUGIN_ID);
  render(<App pluginId={PLUGIN_ID} />, document.getElementById("main"));
})(kintone.$PLUGIN_ID);
