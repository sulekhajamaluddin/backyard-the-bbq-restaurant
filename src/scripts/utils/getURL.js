import { uploadFile } from "../cloudStorage/uploadFile";
import { downloadFile } from "../cloudStorage/downloadFile";

export async function getURL(file, filePath) {
  await uploadFile(file, filePath);
  const url = await downloadFile(filePath);
  return url;
}
