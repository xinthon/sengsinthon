"use client";

import React, { useState } from "react";
import SingleSelect, { SingleSelectItem } from "../containers/singleSelect";

interface BlogPostLangFilter extends SingleSelectItem {
  title: string;
}

export default function BlogPost() {
  const langSources: BlogPostLangFilter[] = [
    { title: "Khmer", value: "khmer" },
    { title: "English", value: "english" },
  ];

  const [selectedItem, setSelectedItem] = useState<
    BlogPostLangFilter | undefined
  >(undefined);

  return (
    <>
      <SingleSelect
        selectedItem={selectedItem}
        selectedItemChanged={setSelectedItem}
        itemsSource={langSources}
      />
      <div className="my-6">
        {selectedItem
          ? `Selected Language: ${selectedItem.title}`
          : "No Language Selected"}
      </div>
    </>
  );
}
