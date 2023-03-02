"use client";

import { useRouter } from "next/navigation";
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

  const router = useRouter();

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

    router.push("/signin");
  };

  return (
    <section className="h-full">
      <div className="h-full">
        <div className="w-[90%] md:w-[65%] max-w-2xl mx-auto pt-10 flex flex-col gap-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full items-center justify-center"
          >
            <h1 className="font-medium uppercase text-3xl mb-5">Sign up</h1>

            <input
              className="outline-none w-[95%] py-2 px-1 mb-3 border-b border-gray-300"
              id="name"
              {...register("name", {
                required: "Name is required.",
              })}
              placeholder="Name"
            />
            {errors.name && <div className="error-msg">{errors.name.message}</div>}

            <input
              className="outline-none w-[95%] py-2 px-1 mb-3 border-b border-gray-300"
              id="email"
              {...register("email", {
                required: "Please valid email.",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter valid email",
                },
              })}
              placeholder="Email"
            />
            {errors.email && <div className="error-msg">{errors.email.message}</div>}

            <input
              className="outline-none w-[95%] py-2 px-1 mb-3 border-b border-gray-300"
              id="password"
              type="password"
              {...register("password", {
                required: "Please enter password",
                minLength: { value: 6, message: "Must be more than 5 characters." },
              })}
              placeholder="Password"
            />
            {errors.password && <div className="error-msg">{errors.password.message}</div>}
            {errors.confirm && errors.confirm.type === "validate" && (
              <div className="error-msg">Passwords do not match</div>
            )}

            <input
              className="outline-none w-[95%] py-2 px-1 mb-3 border-b border-gray-300"
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
              placeholder="Confirm Password"
            />
            {errors.confirm && <div className="error-msg">{errors.confirm.message}</div>}
            {errors.confirm && errors.confirm.type === "validate" && (
              <div className="error-msg">Passwords do not match</div>
            )}

            <button className="bg-black text-white w-[95%] py-2 rounded mt-2 hover:bg-[#333]">
              Signup
            </button>
            {/* {loading ? "Please wait..." : "Register"} */}
          </form>
        </div>
      </div>
    </section>
  );
}
export default Signup;
