"use client";
import styles from "./PropertyDescriptionEditor.module.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyleKit } from "@tiptap/extension-text-style";

import { TableCell, TableKit } from "@tiptap/extension-table";

import MenuBar from "./PropertyDescMenu";
import { useEffect } from "react";

const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      // extend the existing attributes …
      ...this.parent?.(),

      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-background-color"),
        renderHTML: (attributes) => {
          return {
            "data-background-color": attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`,
          };
        },
      },
    };
  },
});

interface ProductDescriptionEditorProps {
  value?: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export default function ProductDescriptionEditor({
  value,
  onChange,
  placeholder = "Write your product description here...",
}: ProductDescriptionEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,

    extensions: [
      StarterKit,

      Image.configure({
        inline: true,
        allowBase64: true,
      }),

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),

      TextStyleKit,
      Highlight,

      TableKit.configure({
        table: { resizable: true },
        tableCell: false,
      }),

      CustomTableCell,
    ],

    content: value,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },

    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-lg max-w-none p-4 focus:outline-none min-h-[300px] ",
      },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value!);
    }
  }, [value, editor]);

  return (
    <div
      className={`${styles.editorWrapper} border border-gray-300 rounded-lg overflow-hidden  shadow-sm`}
    >
      <MenuBar editor={editor!} />

      <div className="h-125 overflow-y-scroll">
        <EditorContent editor={editor} placeholder={placeholder} />
      </div>

      {editor && (
        <div className="px-4 py-2 bg-primary-foreground text-xs text-accent-foreground border-t border-gray-300 flex justify-between items-center">
          <span>{editor?.getText().length || 0} words</span>
        </div>
      )}
    </div>
  );
}
