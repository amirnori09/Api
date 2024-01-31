import React from 'react';
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const validateContact = (value) => {
    if (value.match(/^\S+@\S+$/i)) {
      return true; // Valid email
    } else if (value.match(/^[0-9]{11}$/)) {
      return true; // Valid mobile number
    } else {
      return false; // Invalid input
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email or Mobile Number"
        {...register("contactOrEmail", {
          required: "Email or Mobile Number is required",
          validate: validateContact
        })}
      />
      {errors.contactOrEmail && <span>
        {errors.contactOrEmail.type === "validate" && "Invalid email address or mobile number"}
      </span>}

      <input type="submit" />
    </form>
  );
}

export default MyForm;
