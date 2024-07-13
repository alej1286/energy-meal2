// components/Login.js
import { useEffect } from "react";

import { Authenticator, useAuthenticator, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { useNavigate, useLocation } from "react-router";
import { Helmet } from "react-helmet";

export function Login() {
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (route === "authenticated") {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);
  return (
    <View className="auth-wrapper">
      <Helmet>
        <title>Login to Energy Meal</title>
        <meta
          name="description"
          content="Login to Energy Meal to access your personalized meal plans and training programs. Start your journey to a healthier lifestyle today!"
        />
        <meta
          name="keywords"
          content="login, Energy Meal, healthy meals, diet meals, organic meals, vegan meals, gluten-free meals, personal training, weight loss advice"
        />
      </Helmet>
      <Authenticator></Authenticator>
    </View>
  );
}
