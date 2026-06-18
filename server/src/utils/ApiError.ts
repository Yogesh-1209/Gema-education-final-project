export class ApiError extends Error {
  readonly statusCode: number
  readonly code?: string
  readonly details?: unknown

  constructor(statusCode: number, message: string, code?: string, details?: unknown) {
    super(message)
    this.name = 'ApiError'
    this.statusCode = statusCode
    this.code = code
    this.details = details
  }
}

export class NotFoundError extends ApiError {
  constructor(message = 'Resource not found') {
    super(404, message, 'NOT_FOUND')
  }
}

export class ValidationError extends ApiError {
  constructor(message = 'Validation failed', details?: unknown) {
    super(400, message, 'VALIDATION_ERROR', details)
  }
}

export class ConflictError extends ApiError {
  constructor(message = 'Conflict') {
    super(409, message, 'CONFLICT')
  }
}
