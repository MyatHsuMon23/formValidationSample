import React, { useState } from "react";
import { useField } from "formik";
import styles from "./CustomInput.module.scss";

type CustomInputProps = {
	label?: string;
	labelColor?: string;
	onChange?: (e: any) => void;
	customError?: string;
	customClass?: string;
	name: string;
	disable?: boolean;
	type?: string;
	placeholder?: string;
	hintText?: string;
	format?: (data: string) => string | undefined;
	initialValue?: any;
	disabled?: boolean;
	height?: string;
	font_size?: string;
};
const CustomInput: React.FC<CustomInputProps> = ({
	label,
	labelColor = "#333",
	onChange,
	customError,
	customClass,
	disable,
	hintText,
	format,
	initialValue,
	disabled = false,
	height,
	font_size,
	...props
}) => {
	const [field, meta, helpers] = useField(props);
	const hasError = meta.touched && meta.error;
	const { value } = meta;
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div
			className={`${styles.input_wrapper} ${
				hasError ? styles["input_wrapper--has_error"] : ""
			}	${customClass} `}
		>
			{label && (
				<label
					style={{ color: labelColor }}
					className={styles.label}
					htmlFor={props.name}
				>
					{label}
				</label>
			)}

			<div className={`${styles.input} ${styles.overflowHidden}`}>
				<input
					disabled={disable ? disable : disabled}
					{...field}
					{...props}
					onChange={(e) => {
						var value = e.target.value;
						if (onChange) onChange(value);
						helpers.setValue(value);
					}}
					min={0}
					value={value ? value : initialValue}
					id={props.name}
					type={showPassword ? "text" : props.type}
					style={{
						paddingRight: "70px",
						height: `${height ? height : ""}`,
						fontSize: `${font_size ? font_size : ""}`,
					}}
					autoComplete="off"
				/>
			</div>
			{hasError ? (
				<div className={styles.error__text}>
					{customError || meta.error}
				</div>
			) : null}
		</div>
	);
};

export default CustomInput;
