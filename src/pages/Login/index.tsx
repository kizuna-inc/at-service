import { useEffect, useState, type FormEvent } from "react";
import {
  CircleAlert,
  Eye,
  EyeOff,
  LogIn,
  TriangleAlert,
  UserPlus,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import loginMockup from "@/assets/login-mockup.svg";
import { login } from "@/modules/api/mock/login";

const LOGIN_STATUS_KEY = "isLoggedIn";

const checkLoginStatus = (): boolean => {
  const status = localStorage.getItem(LOGIN_STATUS_KEY);
  return Boolean(status && status !== "false");
};

export const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isLoggedIn = checkLoginStatus();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await login({ username: username.trim(), password });

      if (response.success && response.data) {
        localStorage.setItem(LOGIN_STATUS_KEY, "true");
        localStorage.setItem("userDetail", JSON.stringify(response.data));
        navigate("/dashboard", { replace: true });
      } else {
        setPassword("");
        setError(t("login.invalidCredentials"));
      }
    } catch {
      setPassword("");
      setError(t("login.invalidCredentials"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoggedIn) {
    return null;
  }

  return (
    <Layout>
      <div className="flex justify-center items-start md:items-center bg-bg-canvas px-4 py-8 min-h-[calc(100dvh-128px)]">
        <div className="items-stretch gap-8 grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl">
          <div className="hidden md:flex flex-col justify-center items-center bg-brand-navy shadow-card p-8 rounded-xl overflow-hidden">
            <img
              src={loginMockup}
              alt="AT Care Connect"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
          <div className="space-y-4 mx-auto w-full md:max-w-none max-w-md">
            <Alert className="bg-notice-bg border-warning-border text-notice-text">
              <TriangleAlert className="size-4 text-notice-icon" />
              <AlertTitle className="font-semibold text-notice-text">
                {t("login.mockAlertTitle")}
              </AlertTitle>
              <AlertDescription className="text-notice-text/90">
                {t("login.mockAlertDescription")}
              </AlertDescription>
            </Alert>
            <Card className="bg-bg-surface shadow-card border border-border w-full">
              <CardHeader>
                <CardTitle className="font-bold text-text-primary text-xl">
                  {t("login.title")}
                </CardTitle>
                <CardDescription className="text-text-muted">
                  {t("login.description")}
                </CardDescription>
              </CardHeader>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-(--card-spacing)"
              >
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-text-primary">
                      {t("login.username")}
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      autoComplete="username"
                      placeholder={t("login.usernamePlaceholder")}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="bg-bg-surface py-4 border-border-input h-auto"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-text-primary">
                      {t("login.password")}
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder={t("login.passwordPlaceholder")}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-bg-surface py-4 pr-9 border-border-input h-auto"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        className="top-1/2 right-1.5 absolute text-text-muted hover:text-text-primary -translate-y-1/2 cursor-pointer"
                      >
                        {showPassword ? (
                          <EyeOff className="size-4" />
                        ) : (
                          <Eye className="size-4" />
                        )}
                      </Button>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => navigate("/forgot-password")}
                        className="font-medium text-primary hover:text-primary-hover text-xs hover:underline cursor-pointer"
                      >
                        {t("login.forgotPassword")}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <Alert
                      variant="destructive"
                      className="bg-danger-bg-hover border-danger-border text-danger-text"
                    >
                      <CircleAlert className="size-4" />
                      <AlertDescription className="text-danger-text">
                        {error}
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
                <CardFooter className="flex-col gap-2 pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary-hover py-4 w-full h-auto text-text-inverse cursor-pointer"
                  >
                    <LogIn className="size-4" />
                    <span>
                      {isSubmitting ? t("login.submitting") : t("login.submit")}
                    </span>
                  </Button>
                  <div className="flex items-center gap-3 my-1 w-full">
                    <div className="flex-1 bg-border h-px" />
                    <span className="text-text-muted text-xs">
                      {t("common.or")}
                    </span>
                    <div className="flex-1 bg-border h-px" />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/register")}
                    className="hover:bg-primary-light py-4 border-border-input w-full h-auto text-text-primary cursor-pointer"
                  >
                    <UserPlus className="size-4" />
                    <span>{t("login.register")}</span>
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};
