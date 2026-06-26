"use client";
import { useMomentumScroll } from "@/components/ui/hooks/useMomentumScroll";

export default function MomentumScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useMomentumScroll();
  return <>{children}</>;
}
