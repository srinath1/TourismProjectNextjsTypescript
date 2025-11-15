import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const EmptyList = ({
  heading = "No items in the list",
  message = "keep exploring the properties",
  btnText = "Back Home",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) => {
  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold">{heading}</h1>
      <p className="text-lg">{message}</p>
      <Button asChild className="mt-4 capitalize" size="lg">
        <Link href="/">{btnText}</Link>
      </Button>
    </div>
  );
};

export default EmptyList;
