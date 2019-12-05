export interface ContentObject {
    type: string,
    content: string,
    file: File | null,
    preview: string,
}

export interface DetailObject {
    commentsAllow: boolean,
    ccl: string,
    field: string,
    public: boolean,
  }
