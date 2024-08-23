"use client";
import { NotionRenderer } from "react-notion-x";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ExtendedRecordMap } from "notion-types";

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);

interface NotionPageProps {
  recordMap: ExtendedRecordMap;
  rootPageId: string;
}

export const NotionPage = ({ recordMap, rootPageId }: NotionPageProps) => {
  if (!recordMap) {
    return null;
  }

  return (
    <div className="notion__container">
      <NotionRenderer
        recordMap={recordMap}
        rootPageId={rootPageId}
        components={{
          nextLink: Link,
          Collection
        }}
      />
    </div>
  );
};
