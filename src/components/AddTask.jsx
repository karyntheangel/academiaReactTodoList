import { useState } from "react";
import { Button } from "react-bootstrap";
import useActions from "../hooks/useActions";
import { useForm } from "react-hook-form";

const AddTask = () => {
  const { addHandler } = useActions();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  const onSubmit = (data) => addHandler(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDoText", { required: true, maxLength: 50 })}
        className="w-100 mt-3 mb-3"
      />
      <div className="text-danger mx-1 mb-3">
        {errors.toDoText?.type === "required" &&
          "Text is required in this field"}
      </div>
      <Button type="submit" variant="info" className="text-white">
        Add Task
      </Button>
    </form>
  );
};

export default AddTask;
