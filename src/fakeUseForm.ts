import { useRef } from "react"

export const useForm=()=>{
    const form={
        register:(name:string)=>{
          const ref=useRef()
          console.log('register ',name)
          return {
            name,
            ref,
            onChange:()=>{},
            onBlur:()=>{}
          }
        }
    }
    return form
}