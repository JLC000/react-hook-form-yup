import {useForm} from "react-hook-form"
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

export const Form = () => {


    const schema = yup.object({
        fullName: yup.string().required("campo requerido").default("Hola mundo"),
        email: yup.string().email("Formato no valido").required("campo requerido"),
        age: yup.number().positive("Debe ser positivo").integer("NUmero entero").min(18).required("campo requerido"),
        password: yup.string().required("campo requerido").min(4).max(8),
        confirmPasswod: yup.string().required("campo requerido").min(4).max(8),
    })

    const {register, handleSubmit,formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fullName: 'Hola mundo'
        }
    });


    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full name..." {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>

            <input type="text" placeholder="Email..." {...register("email")}/>
            <p>{errors.email?.message}</p>
            

            <input type="number" placeholder="Age..." {...register("age")}/>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
            <input type="submit"/>

        </form>
    )
}