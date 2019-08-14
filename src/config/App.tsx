import React from "react";
import { Field, FieldSelect } from "./FieldSelect";
import { SaveButton } from "./SaveButton";

declare let KintoneConfigHelper: any;
declare let kintone: any;

type AppProps = {
  pluginId: string;
};

type AppState = {
  fields: Field[];
  currentValue: string;
};

export class App extends React.Component<AppProps, AppState> {
  constructor(props: Readonly<AppProps>) {
    super(props);

    this.state = {
      fields: [],
      currentValue: ""
    };
  }

  componentDidMount() {
    KintoneConfigHelper.getFields("SINGLE_LINE_TEXT").then((fields: any) => {
      const config = kintone.plugin.app.getConfig(this.props.pluginId);
      console.log(config);
      this.setState({ fields, currentValue: config.value || "" });
    });
  }

  onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("value changed:", e.target.value);
    this.setState({ currentValue: e.target.value });
  };

  onSave = () => {
    console.log("saving...", this.state.currentValue);
    kintone.plugin.app.setConfig({ value: this.state.currentValue });
  };

  render() {
    return (
      <div>
        <p className="kintoneplugin-row">
          <FieldSelect
            fields={this.state.fields}
            defaultValue={this.state.currentValue}
            onChange={this.onChange}
          />
        </p>
        <p className="kintoneplugin-row">
          <SaveButton onClick={this.onSave} />
        </p>
      </div>
    );
  }
}
