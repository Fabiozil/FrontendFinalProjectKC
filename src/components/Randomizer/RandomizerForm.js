import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useForm, FormProvider } from "react-hook-form";

import { SelectInput } from "../SelectInput";
import { getGod } from "./randomizerUtil";

function RandomizerForm({ setResult }) {
    const godTypes = [
        { text: "Physical", value: "Physical" },
        { text: "Magical", value: "Magical" },
        { text: "", value: "" },
    ];
    const godClass = [
        { text: "Mage", value: "Mage" },
        { text: "Warrior", value: "Warrior" },
        { text: "", value: "" },
    ];
    const godPantheon = [
        { text: "Maya", value: "Maya" },
        { text: "Chinese", value: "Chinese" },
        { text: "", value: "" },
    ];

    const form = useForm({
        defaultValues: {
            damageType: "",
            godClass: "",
            godPantheon: "",
        },
    });

    const onSubmit = async (data) => {
        alert(JSON.stringify(data));
        const gods = await getGod(data);
        const resultGods = await randomizeGods(1, gods.data.gods);
        console.log(resultGods);
        setResult(resultGods);
    };

    const randomizeGods = (numberOfGods, gods) => {
        let result = [];
        let randomNumber;
        for (let i = 0; i < numberOfGods; i++) {
            randomNumber = Math.floor(Math.random() * gods.length);
            result.push(gods[randomNumber]);
            gods = gods.slice(randomNumber, 1);
        }
        return result;
    };

    const onError = (error) => {
        console.error(error);
    };
    return (
        <>
            <FormProvider {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit, onError)}
                    noValidate
                >
                    <Grid container spacing={3} sx={{ padding: 2 }}>
                        <Grid item xs={4}>
                            <SelectInput
                                listItems={godTypes}
                                label="Damage Type"
                                name="damageType"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectInput
                                listItems={godClass}
                                label="God Class"
                                name="godClass"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <SelectInput
                                listItems={godPantheon}
                                label="God Pantheon"
                                name="godPantheon"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{ display: "flex", justifyContent: "end" }}
                        >
                            <Button variant="contained" type="submit">
                                Randomize
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    );
}

export { RandomizerForm };
