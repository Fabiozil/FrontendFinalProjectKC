import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Controller, useFormState } from "react-hook-form";

function SelectInput({
    name,
    onChange,
    control,
    listItems,
    label,
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
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
                <TextField
                    id={`${value}SelectInput`}
                    ref={ref}
                    value={value}
                    select
                    onBlur={onBlur}
                    label={label}
                    onChange={onChange}
                    fullWidth
                    error={Boolean(formState.errors && formState.errors[name])}
                    helperText={
                        formState.errors && formState.errors[name]?.message
                    }
                    variant={variant}
                    {...restProps}
                >
                    {listItems.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.text}
                        </MenuItem>
                    ))}
                </TextField>
            )}
            rules={rules}
        />
    );
}

export { SelectInput };
