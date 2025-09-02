import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import VerificationPage from "../pages/VerificationPage";
import med from "../assets/image/_.jpeg";

interface AuthContainerProps {
  clickedModal: string;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ clickedModal }) => {
  const renderAuthPage = () => {
    switch (clickedModal) {
      case "login":
        return <LoginPage />;
      case "signUp":
        return <SignUpPage />;
      case "verification":
        return <VerificationPage />;
      default:
        return <div className="text-center text-gray-500">Select a page to continue.</div>;
    }
  };

  return (
    <div className="flex overflow-hidden rounded-lg justify-center items-center w-full ">
      <div className="flex-shrink-0">{renderAuthPage()}</div>
      <img src={med} alt="Authentication Visual" className="h-[550px]" />
    </div>
  );
};

export default AuthContainer;
