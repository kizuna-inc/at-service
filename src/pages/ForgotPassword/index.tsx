import { ArrowLeft, KeyRound } from "lucide-react";
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
import { mock_login_db } from "@/modules/api/mock/db/auth/login";

export const ForgotPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex justify-center items-start md:items-center bg-bg-canvas px-4 py-8 min-h-[calc(100dvh-128px)]">
        <Card className="bg-bg-surface shadow-card border border-border w-full max-w-lg">
          <CardHeader>
            <CardTitle className="font-bold text-text-primary text-xl">
              <h1>{t("forgotPassword.title")}</h1>
            </CardTitle>
            <CardDescription className="text-text-muted">
              {t("forgotPassword.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert className="bg-info-bg border-primary-border text-text-primary">
              <KeyRound className="size-4 text-primary" aria-hidden="true" />
              <AlertTitle className="font-semibold text-text-primary">
                {t("forgotPassword.testAccountsTitle")}
              </AlertTitle>
              <AlertDescription className="space-y-3 mt-1 text-text-body">
                <p>{t("forgotPassword.testAccountsDesc")}</p>
                <div className="space-y-2 w-full">
                  {mock_login_db.map((account) => (
                    <div
                      key={account.username}
                      className="flex flex-wrap justify-between items-center gap-2 bg-bg-surface px-3 py-2 border border-border rounded-lg text-xs"
                    >
                      <div>
                        <p className="font-semibold text-text-primary">
                          {account.detail.name}
                        </p>
                        <p className="text-text-muted">
                          {t(`roles.${account.detail.role}`)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-bg-subtle px-2 py-1 rounded font-mono text-text-primary">
                          {t("forgotPassword.username")}: {account.username}
                        </span>
                        <span className="bg-bg-subtle px-2 py-1 rounded font-mono text-text-primary">
                          {t("forgotPassword.password")}: {account.password}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter className="pt-2">
            <Button
              type="button"
              onClick={() => navigate("/login")}
              className="bg-primary hover:bg-primary-hover py-4 w-full h-auto text-text-inverse cursor-pointer"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              <span>{t("forgotPassword.backToLogin")}</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};
