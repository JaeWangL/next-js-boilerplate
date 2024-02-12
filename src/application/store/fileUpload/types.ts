export interface ReduxFileUploadState {
  file: Blob | null;
  errorMessage: string | null;
  progress: number;
}
