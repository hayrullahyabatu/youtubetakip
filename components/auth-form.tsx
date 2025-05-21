"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface AuthFormProps {
  onSignUp: (email: string) => void;
  onSignIn: (email: string) => void;
  providers: {
    name: string;
    logo: React.ReactNode;
  }[];
}

export function AuthForm({ onSignUp, onSignIn, providers }: AuthFormProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (isSignUp) {
      await onSignUp(email);
    } else {
      await onSignIn(email);
    }
    setIsLoading(false);
  };

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>{isSignUp ? "Sign Up" : "Sign In"}</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {providers.map((provider) => (
          <Button key={provider.name} variant="outline" disabled>
            {provider.logo}
            {provider.name}
          </Button>
        ))}
      </div>
      <div className="text-center text-sm text-muted-foreground">
        {isSignUp ? (
          <>
            Already have an account?{" "}
            <button
              className="underline underline-offset-4 hover:text-foreground"
              onClick={() => setIsSignUp(false)}
              type="button"
            >
              Sign in
            </button>
          </>
        ) : (
          <>
            New to us?{" "}
            <button
              className="underline underline-offset-4 hover:text-foreground"
              onClick={() => setIsSignUp(true)}
              type="button"
            >
              Create an account
            </button>
          </>
        )}
      </div>
    </div>
  );
}
