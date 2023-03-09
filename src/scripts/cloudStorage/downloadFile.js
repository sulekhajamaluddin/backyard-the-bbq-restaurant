// Node modules
import { ref, getDownloadURL } from "firebase/storage";

// Project files
import { cloudStorage } from "./cloudSetUp";

export async function downloadFile(filePath) {
  const reference = ref(cloudStorage, filePath);
  const result = await getDownloadURL(reference);

  return result;
}
