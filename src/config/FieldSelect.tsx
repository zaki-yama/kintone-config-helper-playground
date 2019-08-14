import React from "react";

export type Field = {
  code: string;
  label: string;
  type: string;
};

type FieldSelectProps = {
  fields: Field[];
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const FieldSelect = (props: FieldSelectProps) => {
  return (
    <div className="kintoneplugin-select-outer">
      <div className="kintoneplugin-select">
        <select onChange={props.onChange}>
          {props.fields.map(field => {
            const selected = field.code === props.defaultValue;
            return (
              <option key={field.code} value={field.code} selected={selected}>
                {field.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
