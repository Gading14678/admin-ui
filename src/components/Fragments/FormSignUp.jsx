import Button from "../Elements/Button/index";
import LabeledInput from '../Elements/LabeledInput/Index'; 

const FormSignUp = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Name"
          type="text"
          placeholder="Doe John Lee"
          name="name"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
        />
      </div>
      <Button variant="bg-primary w-full text-white" type="submit">
        Create
      </Button>
    </form>
  );
};

export default FormSignUp;
