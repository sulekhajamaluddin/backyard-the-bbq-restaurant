import emailjs from "@emailjs/browser";

export function sendEmail(e) {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_e7ik3i5",
      "template_bifkjkv",
      e.target,
      "S9-gpDMwGvAWVC6W2"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
