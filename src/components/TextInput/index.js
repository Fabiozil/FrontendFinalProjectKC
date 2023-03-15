import React from "react";
import { Controller, useFormState } from "react-hook-form";
import TextField from "@mui/material/TextField";

function TextInput({
    name,
    control,
    onChange,
    margin = "normal",
    variant = "outlined",
    fullWidth = true,
    required = false,
    rules,
    ...restProps
}) {
    const formState = useFormState();
    return (
        <Controller
            name={name}
            render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                    margin={margin}
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    onBlur={onBlur}
                    required={required}
                    fullWidth={fullWidth}
                    error={Boolean(formState.errors && formState.errors[name])}
                    helperText={
                        formState.errors && formState.errors[name]?.message
                    }
                    id="email"
                    label="Username"
                    autoComplete="username"
                    variant={variant}
                    {...restProps}
                />
            )}
            rules={rules}
        />
    );
}

export { TextInput };
