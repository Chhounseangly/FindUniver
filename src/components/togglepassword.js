import  { useState } from "react";

function usePasswordToggle() {
  const [passwordType, setPasswordType] = useState("password");
  const [isShowPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!isShowPassword);
    {
      passwordType === "password"
        ? (() => {
            setPasswordType("text");
            setTimeout(() => {
              setPasswordType("password");
              setShowPassword(isShowPassword);
            }, 2000);
          })()
        : "password";
    }
  };

  return { isShowPassword, passwordType, togglePassword };
}

export default usePasswordToggle;
