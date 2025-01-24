import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MdOutlineSend } from "react-icons/md";

interface ContactFormInputs {
  name: string;
  email: string;
  inquiry: string;
  message: string;
}

const Contact: React.FC = () => {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit: SubmitHandler<ContactFormInputs> = (
    data: ContactFormInputs
  ) => {
    try {
      setSubmitError(null);
      console.log("Form submitted successfully:", data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        "Something went wrong. Please email me directly at jscolbe9675@gmail.com"
      );
      reset();
    }
  };

  return (
    <div className="md:my-5 my-28 md:py-4 px-10">
      <h1 className="md:text-3xl text-lg md:my-5 my-20 text-center">
        Stay in touch with me!
      </h1>
      {submitError && (
        <p className="text-red-500 text-center mb-4">{submitError}</p>
      )}
      <div className="w-full max-w-lg mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <br />
            <input
              {...register("name", { required: "Name is required" })}
              id="name"
              type="text"
              className="w-full rounded-lg p-1"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <br />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              id="email"
              type="email"
              className="w-full rounded-lg p-1"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="topic">What would you like to talk about?</label>
            <br />
            <input
              {...register("inquiry", { required: "This field is required" })}
              type="text"
              id="inquiry"
              className="w-full rounded-lg p-1"
            />
            {errors.inquiry && (
              <p className="text-red-500 text-sm mt-1">
                {errors.inquiry.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message">Your Message</label>
            <br />
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              className="w-full h-[30vh] rounded-lg p-1"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="p-2 bg-blue-400 rounded-xl text-center flex items-center gap-2"
            >
              Send <MdOutlineSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
