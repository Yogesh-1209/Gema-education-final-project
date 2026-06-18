import type { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import { getFieldErrorMessage } from '@/lib/form'
import { Input } from './Input'
import { Textarea } from './Textarea'

interface FormFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>
  name: Path<T>
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'password'
  placeholder?: string
  hint?: string
}

export function FormField<T extends FieldValues>({
  form,
  name,
  label,
  type = 'text',
  placeholder,
  hint,
}: FormFieldProps<T>) {
  const error = getFieldErrorMessage(form.formState.errors, name)
  const fieldProps = form.register(name)

  if (type === 'textarea') {
    return (
      <Textarea
        label={label}
        placeholder={placeholder}
        hint={hint}
        error={error}
        {...fieldProps}
      />
    )
  }

  return (
    <Input
      type={type}
      label={label}
      placeholder={placeholder}
      hint={hint}
      error={error}
      {...fieldProps}
    />
  )
}
