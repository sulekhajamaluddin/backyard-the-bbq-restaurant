export default function getEditedCategory(formRef, item, url) {
  return {
    id: item.id,
    title: formRef.current.title.value,
    thumbnailURL: url,
    short_description: formRef.current.info.value,
    long_description: formRef.current.details.value,
  };
}
