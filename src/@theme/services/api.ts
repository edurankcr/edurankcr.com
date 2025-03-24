import axios from 'axios';

export class ApiError extends Error {
  type: string;
  status: number;
  traceId?: string | any;
  errorCodes?: string[] | any;

  constructor(data: {
    type: string;
    title: string;
    status: number;
    traceId?: string;
    errorCodes?: string[];
  }) {
    super(data.title);
    this.name = 'ApiError';
    this.type = data.type;
    this.status = data.status;
    this.traceId = data.traceId;
    this.errorCodes = data.errorCodes;
  }
}

async function postAuthentication(Identifier: string, Password: string) {
  return await axios.post('https://localhost:7242/auth/login', {
    Identifier,
    Password,
  });
}

export { postAuthentication };
