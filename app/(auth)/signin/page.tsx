"use client";

import React from "react";
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

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", { email, password, redirect: false });

      const { error, ok, status } = result as {
        error: string;
        ok: boolean;
        status: number;
      };

      if (!error && ok) {
        router.push("/wod-list");
      } else {
        throw new Error();
        // display error toast here
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/4">
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="border border-gray-500"
            id="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter a valid email.",
              },
            })}
          />
          {errors.email && <span className="error-msg">{errors.email?.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-500"
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required.",
              minLength: { value: 6, message: "Password should be at least 5 characters long." },
            })}
          />
          {errors.password && <span className="error-msg">{errors.password?.message}</span>}
        </div>
        <button>Sign In</button>
      </form>
    </section>
  );
}

export default Signin;
