import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import authService from "../services/auth.service";

const withAuth = (WrappedComponent) => {
    return (props) => {
      const router = useRouter();
      const [verify, setVerify] = useState(false);
  
      useEffect(() => {
        const token = localStorage.getItem("token");
        authService
          .verifyToken(token)
          .then((data) => {
            if (data.verify) {
              if (data.subscription != "") {
                setVerify(true);
              } else {
                router.push("/subscription");
              }
             
            } else {
              localStorage.removeItem("token");
              router.push("/");
            }
          })
          .catch((err) => {
            localStorage.removeItem("token");
            router.push("/");
          });
      }, []);
      
      if (verify) {
        return <WrappedComponent {...props}/>;
      } else {
        return null;
      }
    };
  };
  
  export default withAuth;
