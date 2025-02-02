declare module "formidable" {
  export interface File {
    filepath: string
    originalFilename?: string | null
    mimetype?: string | null
    hash?: string | "sha1" | "md5" | "sha256" | null
    size: number
  }

  export interface Files {
    [key: string]: File | File[]
  }

  export interface Fields {
    [key: string]: string | string[]
  }

  export class IncomingForm {
    uploadDir: string
    maxFileSize: number
    keepExtensions: boolean

    parse(req: Request, callback: (err: any, fields: Fields, files: Files) => void): void
  }
}
