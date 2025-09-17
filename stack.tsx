import "server-only";

import { StackServerApp } from "@stackframe/stack";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  projectId: "27df63d5-6785-4924-81f6-836d4cc136cd",
  publishableClientKey: "pck_6172px39nyqmys7786yfab5qjry157azyn1k876c9ddwg",
  secretServerKey: "ssk_4tj7hzxy4qx6gy986sy00xnyn1ee5nfb18wr0khzs1df8",
});
