import React from "react";
import { Control, FieldPath } from "react-hook-form";
import { FormControl, FormField, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
const authForm = authFormSchema("signUp") 
interface CustomInput {
  control: Control<z.infer<typeof authForm>>;
  name: FieldPath<z.infer<typeof authForm>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name = {name}
      render={({ field }) => (
        <div className="form-item flex-1">
          <FormLabel>{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input className="input-class" placeholder={placeholder} {...field} type={name === 'password' ? 'password' : 'text' } />
            </FormControl>
            <FormMessage className="form-message" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
