import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import PasswordInput from "./PasswordInput";

const Form = () => {
  const methods = useForm({ mode: "onChange" });
  const { handleSubmit, formState, register } = methods;
  const { isValid } = formState;

  const onSubmit = (data) => {
    console.log("submit", data);
  };

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="mb-12"
    >
      <Input
        type="text"
        name="name"
        label="Your name"
        methods={methods}
        rules={{ required: "Please enter your name" }}
      />
      <Input
        type="email"
        name="email"
        label="Email address"
        methods={methods}
        rules={{
          required: "Please enter a valid email address",
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter a valid email address",
          },
        }}
        autoComplete="off"
      />

      <div className="relative z-0 w-full mb-5 form-select">
        <select
          defaultValue=""
          className="form-control text-gray-500"
          {...register("type")}
        >
          <option value="" disabled hidden>
            I would describe my user type as
          </option>
          <option value="developer">Developer</option>
        </select>
      </div>

      <PasswordInput
        name="password"
        label="Password"
        helpText="Minimum 8 characters"
        methods={methods}
        rules={{ required: "Please enter your password" }}
      />
      <button
        className="bg-blue-600 p-4 w-full rounded text-white text-sm"
        type="submit"
        disabled={!isValid}
      >
        Next
      </button>
    </form>
  );
};

export default Form;
