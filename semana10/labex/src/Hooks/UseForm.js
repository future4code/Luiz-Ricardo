import { useState } from "react";

export const useForm = (initialState) => {
  
  const [form, setForm] = useState(initialState)

  const onChange = (event) => {
    const { value, name } = event.target
    setForm({ ...form, [name]: value })
  }

  const clearFields = () => {
    setForm(initialState)
  }

  return [form, onChange, clearFields]
}