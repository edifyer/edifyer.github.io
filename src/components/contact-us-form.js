/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Label, Flex, Input, Button } from 'theme-ui';

const ContactUsForm = ({ buttonLabel, ...props }) => {
  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Label htmlFor="name" variant="styles.srOnly">
        Name
      </Label>
      <Input type="text" id="name" placeholder="Enter Name" />
      <Label htmlFor="email" variant="styles.srOnly">
        Email
      </Label>
      <Input type="email" id="email" placeholder="Enter Email address" />
      <Label htmlFor="message" variant="styles.srOnly">
        Message
      </Label>
      <Input type="message" id="message" placeholder="Enter Message" />
      <Button>{buttonLabel ?? 'Submit'}</Button>
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
    },
    button: {
      ml: [3],
    },
  },
};
