import { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  //가운데정렬위해
  return <main className="min-h-screen flex flex-col">{children}</main>;
}

export default Page;
