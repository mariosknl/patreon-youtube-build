"use client";

import useMembershipTier from "@/hooks/useMembershipTier";
import { useUser } from "@clerk/nextjs";
import Badge from "./Badge";
import { getTierFromLevel } from "@/types/types";

function CurrentTierBadge() {
  const membershipTier = useMembershipTier();

  console.log(membershipTier);

  const { user } = useUser();
  if (!user) return null;

  if (!membershipTier) return null;
  const tierAccess = getTierFromLevel(membershipTier);

  return <Badge variant="interactive" tier={tierAccess} link="/pricing" />;
}

export default CurrentTierBadge;
