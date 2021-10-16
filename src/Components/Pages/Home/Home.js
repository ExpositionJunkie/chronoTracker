import React from "react";
import { useForm } from "react-hook-form";
import { DateTimePicker, MuiPickersUtilsProvider } from "@mui/lab";

export default function Home() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  const dtPicker = (data) => console.log("got to date time picker", data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue="Tracker Name"
          {...register("trackerName", { required: true })}
        />
        {errors.trackerName && <span>This field is required</span>}
        <input
          defaultValue="Description of Tracker"
          {...register("description")}
        />
          <DateTimePicker
            onChange={dtPicker}
            {...register("time")}
          ></DateTimePicker>
        <input type="submit" />
      </form>
    </div>
  );
}