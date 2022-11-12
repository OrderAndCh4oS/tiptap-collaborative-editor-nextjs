import {FC} from "react";
import {Editor} from "@tiptap/react";
import ToolbarButton from "./toolbar-button";

const Toolbar: FC<{ editor: Editor | null }> = ({editor}) => {
    if (!editor) {
        return null
    }

    return (
        <div className="flex flex-wrap gap-2 pb-5 border-b">
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                isActive={editor.isActive('bold')}
            >
                bold
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                isActive={editor.isActive('italic')}
            >
                italic
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
                isActive={editor.isActive('strike')}
            >
                strike
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleCode()
                        .run()
                }
                isActive={editor.isActive('code')}
            >
                code
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                clear marks
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().clearNodes().run()}>
                clear nodes
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().setParagraph().run()}
                isActive={editor.isActive('paragraph')}
            >
                paragraph
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                isActive={editor.isActive('heading', {level: 1})}
            >
                h1
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                isActive={editor.isActive('heading', {level: 2})}
            >
                h2
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                isActive={editor.isActive('heading', {level: 3})}
            >
                h3
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({level: 4}).run()}
                isActive={editor.isActive('heading', {level: 4})}
            >
                h4
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({level: 5}).run()}
                isActive={editor.isActive('heading', {level: 5})}
            >
                h5
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleHeading({level: 6}).run()}
                isActive={editor.isActive('heading', {level: 6})}
            >
                h6
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                isActive={editor.isActive('bulletList')}
            >
                bullet list
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                isActive={editor.isActive('orderedList')}
            >
                ordered list
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                isActive={editor.isActive('codeBlock')}
            >
                code block
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                isActive={editor.isActive('blockquote')}
            >
                blockquote
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                horizontal rule
            </ToolbarButton>
            <ToolbarButton onClick={() => editor.chain().focus().setHardBreak().run()}>
                hard break
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }
            >
                undo
            </ToolbarButton>
            <ToolbarButton
                onClick={() => editor.chain().focus().redo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }
            >
                redo
            </ToolbarButton>
        </div>
    )
}

export default Toolbar;
