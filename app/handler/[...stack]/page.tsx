import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";

interface HandlerProps {
  params: Promise<Record<string, string | string[]>>;
  searchParams: Promise<Record<string, string | string[]>>;
}

export default function Handler(props: HandlerProps) {
  return <StackHandler fullPage app={stackServerApp} routeProps={props} />;
}
