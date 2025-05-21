<ctrl60>"use client";

import { Button } from "@/components/ui/button";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (!session) {
      router.replace("/auth");
    }
  }, [session, router]);

  return (
    <div className="container flex h-screen w-screen items-center justify-center">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center space-y-6 sm:w-[350px]">
        <p>Dashboard</p>
        <Button
          onClick={async () => {
            await supabase.auth.signOut();
            router.replace("/auth");
          }}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
