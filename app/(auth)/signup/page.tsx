"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  name: string;
  password: string;
  confirm: string;
};

function Signup() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, name, password, confirm }) => {
    const result = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, password, confirm }),
    });

    const data = await result.json();

    console.log(data);
  };

  return (
    <section>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="border border-gray-500"
            id="name"
            {...register("name", {
              required: "Name is required.",
            })}
          />
          {errors.name && <div className="error-msg">{errors.name.message}</div>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            className="border border-gray-500"
            id="email"
            {...register("email", {
              required: "Please valid email.",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email",
              },
            })}
          />
          {errors.email && <div className="error-msg">{errors.email.message}</div>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-500"
            id="password"
            type="password"
            {...register("password", {
              required: "Please enter password",
              minLength: { value: 6, message: "Must be more than 5 characters." },
            })}
          />
          {errors.password && <div className="error-msg">{errors.password.message}</div>}
          {errors.confirm && errors.confirm.type === "validate" && (
            <div className="error-msg">Passwords do not match</div>
          )}
        </div>

        <div>
          <label htmlFor="confirm">Confirm Password</label>
          <input
            className="border border-gray-500"
            id="confirm"
            type="password"
            {...register("confirm", {
              required: "Please enter confirm password",
              validate: (value) => value === getValues("password"),
              minLength: {
                value: 6,
                message: "Must be more than 5 characters.",
              },
            })}
          />
          {errors.confirm && <div className="error-msg">{errors.confirm.message}</div>}
          {errors.confirm && errors.confirm.type === "validate" && (
            <div className="error-msg">Passwords do not match</div>
          )}
        </div>
        <button className="primary-button mb-4">Signup</button>
        {/* {loading ? "Please wait..." : "Register"} */}
      </form>
    </section>
  );
}
export default Signup;
