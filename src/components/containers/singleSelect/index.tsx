"use client";

import React, { useState, useCallback, useMemo } from "react";
import "./with-single-select.module.css";
import WithSingleSelectButton from "./withSingleSelectButton";
import WithSingleSelectCancelButton from "./withSingleSelectCancelButton";

export interface SingleSelectItem {
  value: string;
}

export interface SingleSelectProp<T extends SingleSelectItem> {
  selectedItem?: T;
  selectedItemChanged?: (item: T | undefined) => void;
  itemsSource: T[];
}

export default function SingleSelect<T extends SingleSelectItem>({
  selectedItem,
  selectedItemChanged,
  itemsSource,
}: SingleSelectProp<T>) {
  const [currentSelectedItem, setCurrentSelectedItem] = useState<T | undefined>(
    selectedItem
  );

  const isSelected = useMemo(
    () => currentSelectedItem != null,
    [currentSelectedItem]
  );

  const cancelSelect = useCallback(() => {
    setCurrentSelectedItem(undefined);
    selectedItemChanged?.(undefined); // Use optional chaining to avoid redundant checks
  }, [selectedItemChanged]);

  const selectItem = useCallback(
    (item: T) => {
      setCurrentSelectedItem(item);
      selectedItemChanged?.(item);
    },
    [selectedItemChanged]
  );

  return (
    <div className="flex space-x-1.5">
      {isSelected && currentSelectedItem ? (
        <>
          <WithSingleSelectCancelButton onClick={cancelSelect} />
          <WithSingleSelectButton variant="default" onClick={cancelSelect}>
            {currentSelectedItem.value}
          </WithSingleSelectButton>
        </>
      ) : (
        itemsSource.map((item) => (
          <WithSingleSelectButton
            variant="outline"
            onClick={() => selectItem(item)}
            key={item.value}
          >
            {item.value}
          </WithSingleSelectButton>
        ))
      )}
    </div>
  );
}
