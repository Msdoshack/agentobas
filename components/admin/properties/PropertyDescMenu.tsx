// import AddLinkModal from "@/components/modals/AddLinkModal";
import { Editor, useEditorState } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Camera,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Palette,
  Redo,
  Strikethrough,
  UnderlineIcon,
  Undo,
} from "lucide-react";
import { useCallback, useState } from "react";

// ✅ Define types for Cloudinary widget
interface CloudinaryUploadInfo {
  secure_url: string;
  [key: string]: unknown;
}

interface CloudinaryUploadResult {
  event: string;
  info: CloudinaryUploadInfo;
  [key: string]: unknown;
}

interface CloudinaryWidget {
  open: () => void;
}

declare global {
  interface Window {
    cloudinary: {
      createUploadWidget: (
        config: Record<string, unknown>,
        callback: (
          error: string | null,
          result: CloudinaryUploadResult | null
        ) => void
      ) => CloudinaryWidget;
    };
  }
}

const MenuBar = ({ editor }: { editor: Editor }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      if (!ctx.editor) return;

      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        canBold: ctx.editor.can().chain().toggleBold().run() ?? false,

        isItalic: ctx.editor.isActive("italic") ?? false,
        canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,

        isStrike: ctx.editor.isActive("strike") ?? false,
        canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,

        isUnderline: ctx.editor.isActive("underline") ?? false,
        canUnderline: ctx.editor.can().chain().toggleUnderline().run() ?? false,

        isAlignLeft: ctx.editor.isActive({ textAlign: "left" }),
        isAlignCenter: ctx.editor.isActive({ textAlign: "center" }),
        isAlignRight: ctx.editor.isActive({ textAlign: "right" }),

        isCode: ctx.editor.isActive("code") ?? false,
        canCode: ctx.editor.can().chain().toggleCode().run() ?? false,

        canClearMarks: ctx.editor.can().chain().unsetAllMarks().run() ?? false,
        isParagraph: ctx.editor.isActive("paragraph") ?? false,
        isHeading1: ctx.editor.isActive("heading", { level: 1 }) ?? false,
        isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
        isHeading3: ctx.editor.isActive("heading", { level: 3 }) ?? false,
        isHeading4: ctx.editor.isActive("heading", { level: 4 }) ?? false,

        isBulletList: ctx.editor.isActive("bulletList") ?? false,

        isOrderedList: ctx.editor.isActive("orderedList") ?? false,

        canUndo: ctx.editor.can().chain().undo().run() ?? false,
        canRedo: ctx.editor.can().chain().redo().run() ?? false,
      };
    },
  });

  const addImage = useCallback(() => {
    if (!editor) return;

    if (typeof window !== "undefined" && window.cloudinary) {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
          sources: ["local", "url", "camera"],
          multiple: false,
          maxFileSize: 5000000, // 5MB
          clientAllowedFormats: ["jpg", "jpeg", "png", "gif", "webp"],
        },
        (error: string | null, result: CloudinaryUploadResult | null) => {
          if (!error && result && result.event === "success") {
            editor
              .chain()
              .focus()
              .setImage({ src: result.info.secure_url })
              .run();
          }
        }
      );

      widget.open();
    } else {
      alert("Cloudinary widget not loaded");
    }
  }, [editor]);

  const setColor = useCallback(
    (color: string) => {
      if (!editor) return;
      editor.chain().focus().setColor(color).run();
      setShowColorPicker(false);
    },
    [editor]
  );

  if (!editor) return null;

  const colors = [
    "#000000",
    "#e60000",
    "#ff9900",
    "#ffff00",
    "#008a00",
    "#0066cc",
    "#9933ff",
    "#ffffff",
    "#facccc",
    "#ffebcc",
    "#ffffcc",
    "#cce8cc",
    "#cce0f5",
    "#ebd6ff",
    "#bbbbbb",
    "#f06666",
    "#ffc266",
    "#ffff66",
    "#66b966",
    "#66a3e0",
    "#c285ff",
    "#888888",
    "#a10000",
    "#b26b00",
    "#b2b200",
    "#006100",
    "#0047b2",
    "#6b24b2",
    "#444444",
    "#5c0000",
  ];

  return (
    <>
      <div className="border-b border-gray-300 p-2 flex flex-wrap gap-1">
        {/* Text Formatting */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editorState?.canBold}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isBold
              ? "is-active bg-gray-800 text-white"
              : " hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-600 border border-gray-300"
          }`}
          title="Bold"
        >
          <Bold size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editorState?.canItalic}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isItalic
              ? "bg-gray-800 text-white"
              : " hover:bg-gray-100 border border-gray-300 dark:hover:bg-gray-800 dark:border-gray-600"
          }`}
          title="Italic"
        >
          <em>
            <Italic size={16} />
          </em>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editorState?.canUnderline}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isUnderline
              ? "bg-gray-800 text-white"
              : " hover:bg-gray-100 border border-gray-300 dark:hover:bg-gray-800 dark:border-gray-600"
          }`}
          title="Underline"
        >
          <UnderlineIcon size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editorState?.canStrike}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isStrike
              ? "bg-gray-800 text-white"
              : " hover:bg-gray-100 border border-gray-300 dark:hover:bg-gray-800 dark:border-gray-600"
          }`}
          title="Strikethrough"
        >
          <s>
            <Strikethrough size={16} />
          </s>
        </button>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        {/* Headings  and Paragraph*/}
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isParagraph
              ? "bg-gray-800 text-white"
              : " hover:bg-gray-100 border border-gray-300 dark:hover:bg-gray-800 dark:border-gray-600"
          }`}
          title="Paragraph"
        >
          P
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isHeading1
              ? "bg-gray-800 text-white"
              : " hover:bg-gray-100 border border-gray-300 dark:hover:bg-gray-800 dark:border-gray-600"
          }`}
          title="Heading 1"
        >
          <Heading1 size={16} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isHeading2
              ? "bg-gray-800 text-white"
              : " hover:bg-gray-100 border border-gray-300 dark:hover:bg-gray-800 dark:border-gray-600"
          }`}
          title="Heading 2"
        >
          <Heading2 size={16} />
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isHeading3
              ? "bg-gray-800 text-white"
              : " hover:bg-gray-100 border border-gray-300 dark:hover:bg-gray-800 dark:border-gray-600"
          }`}
          title="Heading 3"
        >
          <Heading3 size={16} />
        </button>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        {/* Text Alignment */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isAlignLeft
              ? "bg-gray-800 text-white"
              : " hover:bg-gray-100 border border-gray-300 dark:hover:bg-gray-800 dark:border-gray-600"
          }`}
          title="Align Left"
        >
          <AlignLeft size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isAlignCenter
              ? "bg-gray-800 text-white"
              : " hover:bg-gray-100 border border-gray-300 dark:hover:bg-gray-800 dark:border-gray-600"
          }`}
          title="Align Center"
        >
          <AlignCenter size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isAlignRight
              ? "bg-gray-800 text-white"
              : " hover:bg-gray-100 border border-gray-300 dark:hover:bg-gray-800 dark:border-gray-600"
          }`}
          title="Align Right"
        >
          <AlignRight size={16} />
        </button>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        {/* Lists */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isBulletList
              ? "bg-gray-800 text-white"
              : " hover:bg-gray-100 border border-gray-300 dark:hover:bg-gray-800 dark:border-gray-600"
          }`}
          title="Bullet List"
        >
          <List size={16} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
            editorState?.isOrderedList
              ? "bg-gray-800 text-white"
              : " hover:bg-gray-100 border border-gray-300 dark:hover:bg-gray-800 dark:border-gray-600"
          }`}
          title="Numbered List"
        >
          <ListOrdered size={16} />
        </button>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        {/* Color Picker */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="px-3 py-1.5 rounded text-sm font-medium  hover:bg-gray-100 border border-gray-300 transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            title="Text Color"
          >
            <Palette size={16} />
          </button>

          {showColorPicker && (
            <div className="absolute top-full w-max left-0 mt-1 p-2  border border-gray-300 rounded-lg shadow-lg z-50 grid grid-cols-10 gap-1">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setColor(color)}
                  className="w-6 h-6 rounded border border-gray-300 hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        <button
          type="button"
          onClick={addImage}
          className="px-3 py-1.5 rounded hover:bg-gray-100 border border-gray-300  transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
          title="Insert Image"
        >
          <Camera size={16} />
        </button>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        {/* Table */}
        <>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() =>
              editor
                .chain()
                .focus()
                .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                .run()
            }
          >
            Insert table
          </button>

          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().addColumnBefore().run()}
            disabled={!editor.can().addColumnBefore()}
          >
            Add column before
          </button>

          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().addColumnAfter().run()}
            disabled={!editor.can().addColumnAfter()}
          >
            Add column after
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().deleteColumn().run()}
            disabled={!editor.can().deleteColumn()}
          >
            Delete column
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().addRowBefore().run()}
            disabled={!editor.can().addRowBefore()}
          >
            Add row before
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().addRowAfter().run()}
            disabled={!editor.can().addRowAfter()}
          >
            Add row after
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().deleteRow().run()}
            disabled={!editor.can().deleteRow()}
          >
            Delete row
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().deleteTable().run()}
            disabled={!editor.can().deleteTable()}
          >
            Delete table
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().mergeCells().run()}
            disabled={!editor.can().mergeCells()}
          >
            Merge cells
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().splitCell().run()}
            disabled={!editor.can().splitCell()}
          >
            Split cell
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
            disabled={!editor.can().toggleHeaderColumn()}
          >
            ToggleHeaderColumn
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().toggleHeaderRow().run()}
            disabled={!editor.can().toggleHeaderRow()}
          >
            Toggle header row
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().toggleHeaderCell().run()}
            disabled={!editor.can().toggleHeaderCell()}
          >
            Toggle header cell
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().mergeOrSplit().run()}
            disabled={!editor.can().mergeOrSplit()}
          >
            Merge or split
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() =>
              editor
                .chain()
                .focus()
                .setCellAttribute("backgroundColor", "#FAF594")
                .run()
            }
            disabled={
              !editor.can().setCellAttribute("backgroundColor", "#FAF594")
            }
          >
            Set cell attribute
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().fixTables().run()}
            disabled={!editor.can().fixTables()}
          >
            Fix tables
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().goToNextCell().run()}
            disabled={!editor.can().goToNextCell()}
          >
            Go to next cell
          </button>
          <button
            type="button"
            className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
            onClick={() => editor.chain().focus().goToPreviousCell().run()}
            disabled={!editor.can().goToPreviousCell()}
          >
            Go to previous cell
          </button>
        </>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        <button
          type="button"
          className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          Break
        </button>

        <button
          className="px-3 py-1.5 rounded text-xs font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          H Line
        </button>

        {/* Undo/Redo */}
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="px-3 py-1.5 rounded text-sm font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
          title="Undo"
        >
          <Undo size={18} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="px-3 py-1.5 rounded text-sm font-medium  hover:bg-gray-100 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:hover:bg-gray-800 dark:border-gray-600"
          title="Redo"
        >
          <Redo size={18} />
        </button>
      </div>
    </>
  );
};

export default MenuBar;
