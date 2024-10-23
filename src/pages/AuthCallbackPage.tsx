import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hashCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hashCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hashCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <div>Loading...</div>;
};

export default AuthCallbackPage;