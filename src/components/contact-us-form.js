/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Label, Flex, Input, Button } from 'theme-ui';
import emailjs from '@emailjs/browser';

const ContactUsForm = ({ buttonLabel, ...props }) => {
  const onSubmit = (event) => {
    event.preventDefault(); // Prevents default refresh by the browser

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        data,
        process.env.USER_ID
      )
      .then(
        (response) => {
          alert("Message Sent, I'll get back to you shortly");
        },
        (err) => {
          alert('An error occured, Plese try again');
        }
      );
  };
  return (
    <Flex as="form" sx={styles.form} {...props} onSubmit={onSubmit}>
      <Label htmlFor="name" variant="styles.srOnly">
        Name
      </Label>
      <Input type="text" id="name" placeholder="Enter Name" required />
      <Label htmlFor="email" variant="styles.srOnly">
        Email
      </Label>
      <Input
        type="email"
        id="email"
        placeholder="Enter Email address"
        required
      />
      <Label htmlFor="message" variant="styles.srOnly">
        Message
      </Label>
      <Input type="message" id="message" placeholder="Enter Message" required />
      <Button sx={styles.button}> {buttonLabel ?? 'Submit'}</Button>
    </Flex>
  );
};

export default ContactUsForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
      ml: [3],
      my: [2],
    },
    button: {
      ml: [3],
      mt: 'auto',
      mb: 'auto',
    },
  },
};
