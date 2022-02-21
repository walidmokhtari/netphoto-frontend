import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import authService from "../services/auth.service";

const withAuthAdmin = (WrappedComponent) => {
    return (props) => {
      const router = useRouter();
      const [verify, setVerify] = useState(false);
  
      useEffect(() => {
        const token = localStorage.getItem("token");
        authService
          .verifyToken(token)
          .then((data) => {
            if (data.verify && data.admin) {
              setVerify(true);
            } else {
              localStorage.removeItem("token");
              router.push("/admin");
            }
          })
          .catch((err) => {
            localStorage.removeItem("token");
            router.push("/admin");
          });
      }, []);
      
      if (verify) {
        return <WrappedComponent {...props}/>;
      } else {
        return null;
      }
    };
  };
  
  export default withAuthAdmin;
