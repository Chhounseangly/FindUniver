import { useState } from "react";

//show and hide password
function usePasswordToggle() {
  const [passwordType, setPasswordType] = useState("password");
  const [isShowPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setPasswordType("text");
    setShowPassword(!isShowPassword);
    setTimeout(() => {
      setPasswordType("password");
      setShowPassword(false);
    }, 1500);
  };

  return { isShowPassword, passwordType, togglePassword };
}

export default usePasswordToggle;
