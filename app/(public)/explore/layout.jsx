"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExploreLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isMainExplore = pathname === "/explore";

  return (
    <div className="pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button for nested routes */}
        {!isMainExplore && (
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => router.push("/explore")}
              className="gap-2 -ml-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Explore
            </Button>
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
