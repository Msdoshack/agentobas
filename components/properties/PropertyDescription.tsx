"use client";
import { useEffect, useState } from "react";
import createDOMPurify from "dompurify";

import styles from "@/components/admin/properties/PropertyDescriptionEditor.module.css";
import { cn } from "@/lib/utils";

const PropertyDescription = ({ description }: { description: string }) => {
  const [sanitizedHtml, setSanitizedHtml] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // create a DOMPurify instance
      const DOMPurify = createDOMPurify(window);
      const clean = DOMPurify.sanitize(description || "");
      setSanitizedHtml(clean);
    }
  }, [description]);

  return (
    <div>
      <div
        className={cn(styles.editorWrapper, "prose dark:prose-invert")}
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </div>
  );
};

export default PropertyDescription;
