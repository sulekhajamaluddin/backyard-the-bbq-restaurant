export default function getAddedCategory(formRef) {
  return {
    title: formRef.current.title.value,
    thumbnailURL: "",
    short_description: formRef.current.info.value,
    long_description: formRef.current.details.value,
  };
}
