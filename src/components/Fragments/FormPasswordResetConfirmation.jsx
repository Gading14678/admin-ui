import Button from "../Elements/Button/index";
import LabeledInput from "../Elements/LabeledInput/Index";
import { Link } from 'react-router-dom'
import Logo from '../Elements/Logo/index'

const PasswordResetConfirmation = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
        <div className=" p-8 rounded-lg max-w-md w-full">
            <Logo />
            <h2 className="text-xl font-bold text-center mt-6">Password Changed!</h2>
            <p className="text-center text-gray-500 mt-2">
            Please go back to Login pages!
            </p>
            <div className="text-center mt-6 font-semibold">
            <Link to="/login">
                    <Button variant="bg-primary w-full text-white" type="submit" >
                    Back to Login page
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PasswordResetConfirmation;