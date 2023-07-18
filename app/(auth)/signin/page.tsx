"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

function Signin() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    setLoading(true);
    try {
      const result = await signIn("credentials", { email, password, redirect: false });

      const { error, ok, status } = result as {
        error: string;
        ok: boolean;
        status: number;
      };

      setLoading(false);

      if (!error && ok) {
        router.push("/wod-list");
      } else {
        throw new Error(error);
      }
    } catch (err) {
      console.log(err);
      alert(err);
      // display error toast here
      setLoading(false);
    }
  };

  return (
    <section className="h-full">
      <div className="h-full">
        <div className="w-[90%] md:w-[65%] max-w-2xl mx-auto pt-10 flex flex-col gap-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full items-center justify-center"
          >
            <h1 className="font-medium uppercase text-3xl mb-5">Sign in</h1>

            <input
              className="outline-none w-[95%] py-2 px-1 mb-3 border-b border-gray-300"
              id="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter a valid email.",
                },
              })}
              placeholder="Email Address"
            />
            {errors.email && <span className="error-msg">{errors.email?.message}</span>}

            <input
              className="outline-none w-[95%] py-2 px-1 mb-3 border-b border-gray-300"
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password should be at least 5 characters long.",
                },
              })}
              placeholder="Password"
            />
            {errors.password && <span className="error-msg">{errors.password?.message}</span>}

            <button className="bg-black text-white w-[95%] py-2 rounded mt-2 hover:bg-[#333]">
              {loading ? "Please wait.." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signin;
