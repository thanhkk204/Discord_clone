
import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    ConflictException,
    HttpStatus,
  } from '@nestjs/common';
  import { QueryFailedError } from 'typeorm';
  
  @Catch(QueryFailedError)
  export class DuplicateEntryFilter implements ExceptionFilter {
    catch(exception: QueryFailedError, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
  
      // Check for duplicate entry error (specific to MySQL)
      if ((exception as any).code === 'ER_DUP_ENTRY') {
        response.status(HttpStatus.CONFLICT).json({
          statusCode: HttpStatus.CONFLICT,
          message: 'A user with this email already exists.',
        });
      } else {
        // Generic fallback for other QueryFailedErrors
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'An unexpected error occurred.',
        });
      }
    }
  }
  