// Node modules
import { ref, uploadBytes } from "firebase/storage";

// Project files
import { cloudStorage } from "./cloudSetUp";

export async function uploadFile(file, filePath) {
  const reference = ref(cloudStorage, filePath);

  await uploadBytes(reference, file);

  return `File uploaded successfully to ${filePath}`;
}
