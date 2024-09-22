import React from "react";

export type HeaderProp = {
  title: string;
  description?: string;
};

export default function WithPageHeader({ title, description }: HeaderProp) {
  return (
    <header className="py-6">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2">{description}</p>
      </div>
    </header>
  );
}
