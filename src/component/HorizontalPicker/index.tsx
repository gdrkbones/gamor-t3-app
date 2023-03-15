"use client";
import clsx from "clsx";
import { useState } from "react";
import styles from "./styles.module.css";

type OptionProp = {
  value: string;
  text: string;
  decorator?: string;
};

type PickerProps = {
  values: [OptionProp, ...OptionProp[]];
  onChange?: (selected: string) => void;
};

const HorizontalPicker = ({ values, onChange }: PickerProps) => {
  const [selected, setSelected] = useState(values[0].value);

  const handleChange = (selected: string) => () => {
    setSelected(selected);
    onChange && onChange(selected);
  };

  return (
    <div className={styles["picker-wrapper"]}>
      <div className={styles["picker"]}>
        <div
          className={styles["bg-decorator"]}
          style={{
            left: `${
              values.findIndex((el) => el.value === selected) *
              (100 / values.length)
            }%`,
            width: `${100 / values.length}%`,
          }}
        />
        {values.map(({ value, text, decorator }) => (
          <div
            className={clsx(
              styles["picker-option"],
              selected === value && styles["selected"]
            )}
            style={{ width: `${100 / values.length}%` }}
            key={`${value}`}
            onClick={handleChange(value)}
          >
            {decorator && <span className={styles["emoji"]}>{decorator}</span>}
            <span className={styles["option-text"]}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HorizontalPicker;
