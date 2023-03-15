import Link from "next/link";
import React from "react";

export default function RouteDemo() {
  return (
    <div>
      RouteDemo
      <li>
        <Link href="/blog/hello">Nested link: pages/blog/hello </Link>
      </li>
      <li>
        <Link href="/blog/xyz?foo=test5555555">
          Route params: /blog/abc?foo=bar
        </Link>
      </li>
      <li>
        <Link href="/blog/abc/a-comment">
          Go to pages/post/[pid]/[comment].tsx
        </Link>
      </li>
      <li>
        <Link href="/posts/c-comment/zzzz">
          /post/c-comment/zzzz go to /post/[...slug].tsx
        </Link>
      </li>
      <li>
        <Link href="/posts/pushRoute">
          /posts/pushRoute.tsx (High priority than [...slug].tsx)
        </Link>
      </li>
    </div>
  );
}
