import type { FieldError, FieldErrors, FieldValues, Path } from 'react-hook-form'

export function getFieldErrorMessage<T extends FieldValues>(
  errors: FieldErrors<T>,
  name: Path<T>,
): string | undefined {
  const fieldError = errors[name] as FieldError | undefined
  const message = fieldError?.message
  return typeof message === 'string' ? message : undefined
}
