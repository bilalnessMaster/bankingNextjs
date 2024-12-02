"use client";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import CustomInput from "./CustomInput";
import { Loader } from "lucide-react";
import { authFormSchema } from "@/lib/utils";
import { signIn, signUp } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";



const AuthForm = ({ type }: { type: "signIn" | "signUp" }) => {
  const router = useRouter()
  const [user, setUser] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const authForm = authFormSchema(type);
  const form = useForm<z.infer<typeof authForm>>({
    resolver: zodResolver(authForm),
    defaultValues: {
      email: "",
      password: "",
      firstName : '',
      lastName : '',
      state : '' , 
      address1 : '',
      ssn : '', 
      city : '',
      dateOfBirth : '',
      postalCode : ''
    },
  });
  const  onSubmit = async (data: z.infer<typeof authForm>) => {
            try{
              setIsloading(true)
             if(type === 'signUp'){
                const response = await signUp(data)
                setUser(response)
             }
             if(type === 'signIn'){
                const response = await signIn({
                email : data.email,
                password : data.password
                })
                if(response) router.push('/')
             }

            }catch(error){
                   console.log(error);
                   
            }finally{
                setIsloading(false);
            }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link
          href={""}
          className="mb-12 cursor-pointer items-center flex gap-2"
        >
          <Image
            src={"/icons/logo.svg"}
            alt="Horizon logo"
            width={30}
            height={30}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold  text-black-1">
            Horzin
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "signIn" ? "Sign In" : "Sign Up"}

            <p className="text-16 font-normal text-gray-600">
              {user
                ? " Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4 ">{/* plaidlink */}</div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {type === "signUp" && (
              <>
                <div className="flex gap-4 ">
                  <CustomInput
                    control={form.control}
                    name="firstName"
                    label="Fisrt Name"
                    placeholder="Enter your fisrt name
                "
                  />

                  <CustomInput
                    control={form.control}
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your fisrt name
                "
                  />
                </div>

                <CustomInput
                  control={form.control}
                  name="address1"
                  label="Address"
                  placeholder="Enter your specific address
                "
                />
                <CustomInput
                  control={form.control}
                  name="city"
                  label="City"
                  placeholder="Your City
                "
                />

                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="postalCode"
                    label="Postal Code"
                    placeholder="Example : 1130
                "
                  />
                  <CustomInput
                    control={form.control}
                    name="state"
                    label="State"
                    placeholder="Example : NY
                "
                  />
                </div>
                <CustomInput
                  control={form.control}
                  name="dateOfBirth"
                  label="Date of Birth"
                  placeholder="Example : YYYY-MM-DD
                "
                />
                <CustomInput
                  control={form.control}
                  name="ssn"
                  label="SSN"
                  placeholder="Example : 5124
                "
                />
              </>
            )}
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />

            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />

            <div className="flex flex-col gap-4 ">
              <Button disabled={isloading} type="submit" className="form-btn">
                {isloading ? (
                  <>
                    <Loader className="animate-spin"></Loader>
                    <span>loading...</span>
                  </>
                ) : type === "signIn" ? (
                  "Sign In"
                ) : (
                  "Sign up"
                )}
              </Button>
            </div>
          </form>
        </Form>
      )}
     {
      !user && (
        <footer className="flex justify-center items-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === "signIn"
            ? "don't have an account"
            : "Already have an account"}
        </p>
        <Link
          className="form-link"
          href={type === "signIn" ? "/sign-up" : "/sign-in"}
        >
          {" "}
          {type === "signIn" ? "Sign up" : "Log in"}
        </Link>
      </footer>
      )
     }
    </section>
  );
};

export default AuthForm;
