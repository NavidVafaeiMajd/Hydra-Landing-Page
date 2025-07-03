import { ButtonSecondary } from "./Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Lirst Name is required"),
    email: yup.string().required("Email is required").email("Email is not correct"),
    phone: yup.string().required("Phone is required").matches(/^09\d{9}$/, "Phone shoulde be start with 09 and 11 digits"),
    subject: yup.string().required("subject Name is required"),
    message: yup.string().required("Message Name is required"),


}) 
export default function Form() {

const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange' 
  });

  const onSubmit = data => {
      alert("Dear" + data.firstName + ", your request is submited.")
      console.log(data)
      
  };

    return (<>
        <div id="form" onSubmit={handleSubmit(onSubmit)} className="md:p-20 p-5 shadow shadow-md">
            <div className="font-bold text-center"><h2>JOIN HYDRA</h2></div>
            <div className="h-[1px] w-[50%] m-auto bg-linear-to-r from-back via-primary to-back my-5"></div>
            <div className="text-center"><h2>Let’s Build Your VR Experience</h2></div>

            <form className="mt-10">
                <div className="grid md:grid-cols-2 gap-2">
                    <div>
                        <input {...register("firstName")} placeholder="First Name" className={`border ${errors.firstName && `border-red-500!`}` } id="first-name" />
                        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                    </div>
                    <div>
                        <input {...register("lastName")} type="text" placeholder="Last Name" className={`border ${errors.lastName && `border-red-500!`}` }  id="last-name" />
                        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                    </div>
                    <div>
                        <input {...register("email")} type="email" placeholder="Email" className={`border ${errors.email && `border-red-500!`}` }  id="email" />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                                        <div>
                        <input {...register("phone")} type="text" placeholder="Phone Number" className={`border ${errors.phone && `border-red-500!`}` }  id="phone-number" />
                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                    </div>

                </div>
                <div>
                    <input {...register("subject")} type="text" placeholder="Subject" className={`border ${errors.subject && `border-red-500!`}` }  id="subject" />
                    {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
                </div>
                <div>
                    <textarea {...register("message")} placeholder="Tell Us Something..." className={`min-h-[200px] border ${errors.firstName && `border-red-500!`}` } ></textarea>
                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                </div>
                <div className="flex justify-center mt-5">
                    <ButtonSecondary type="submit" content="SEND TO HYDRA"/>
                </div>
            </form>
        </div>
    </>)
}