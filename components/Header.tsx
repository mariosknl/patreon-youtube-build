import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import { getSiteSettings } from "@/sanity/lib/siteSettings/getSiteSettings";

async function Header() {
  const siteSettings = await getSiteSettings();
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      {/* Left Side */}
      <div>
        <Link href="/">
          <h2>Creator site</h2>
        </Link>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <SignedIn>
          <div className="flex items-center gap-2 hover:gap-4 px-2 py-2 hover:px-4 hover:bg-gray-100 transition-all duration-200 border border-gray-200 rounded-full">
            {/* <CurrentTierBadge /> */}

            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          <Button
            variant="outline"
            asChild
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            <div>
              <SignInButton mode="modal" />
              <HeartIcon className="w-4 h-4" />
            </div>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
