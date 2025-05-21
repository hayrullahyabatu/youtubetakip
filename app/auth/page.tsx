"use client";

import { AuthForm } from "@/components/auth-form";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Auth() {
  const session = useSession();
  const router = useRouter();
  const { toast } = useToast();
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (session) {
      router.replace("/dashboard");
    }
  }, [session, router]);

  async function handleSignUp(email: string) {
    const { error } = await supabase.auth.signUp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      toast({
        title: "Error",
        description: "There was an error signing up.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Check your email to continue signing in.",
      });
    }
  }

  async function handleSignIn(email: string) {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      toast({
        title: "Error",
        description: "There was an error signing in.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Check your email to continue signing in.",
      });
    }
  }

  return (
    <div className="container flex h-screen w-screen items-center justify-center">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Logo />
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <AuthForm
          onSignUp={handleSignUp}
          onSignIn={handleSignIn}
          providers={[]}
        />
        <Separator />
      </div>
    </div>
  );
}
