"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { usePageTransition } from "@/app/Providers/TransitionProvider";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function TransitionLink({ href, children, className }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { startClosing } = usePageTransition();
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const targetPathname = new URL(href, window.location.origin).pathname;
    const isSamePage = targetPathname === pathname;

    if (!isSamePage) {
      startClosing();
    }

    startTransition(() => {
      router.push(href);
    });
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

// export default function TransitionLink({ href, children, className }: Props) {
//   const router = useRouter();

//   const [isPending, startTransition] = useTransition();

//   const { startClosing } = usePageTransition();

//   function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
//     e.preventDefault();

//     // close door immediately
//     startClosing();

//     // navigation starts immediately too
//     startTransition(() => {
//       router.push(href);
//     });
//   }

//   return (
//     <Link href={href} className={className} onClick={handleClick}>
//       {children}
//     </Link>
//   );
// }

// TransitionLink.tsx
