'use client'

import CodeMirror from '@uiw/react-codemirror'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { githubLight, githubDark } from '@uiw/codemirror-theme-github'
import { keymap } from '@codemirror/view'
import { Prec } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import { obsidianExtensions } from '@/lib/wikilinks'

interface Props {
  value: string
  onChange: (value: string) => void
  onSave: () => void
  isDark: boolean
  files?: string[]
}

const wordWrap = EditorView.lineWrapping

export default function Editor({ value, onChange, onSave, isDark, files = [] }: Props) {
  const extensions = [
    markdown({ base: markdownLanguage, codeLanguages: languages }),
    wordWrap,
    Prec.highest(
      keymap.of([{ key: 'Mod-s', run: () => { onSave(); return true } }]),
    ),
    ...obsidianExtensions(files),
  ]

  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      extensions={extensions}
      theme={isDark ? githubDark : githubLight}
      height="100%"
      style={{
        height: '100%',
        fontSize: '14px',
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      }}
      basicSetup={{
        lineNumbers: true,
        highlightActiveLineGutter: true,
        highlightSpecialChars: true,
        history: true,
        foldGutter: false,
        drawSelection: true,
        dropCursor: true,
        allowMultipleSelections: false,
        indentOnInput: true,
        syntaxHighlighting: true,
        bracketMatching: true,
        closeBrackets: true,
        autocompletion: false, // we use our own via obsidianExtensions
        rectangularSelection: false,
        crosshairCursor: false,
        highlightActiveLine: true,
        highlightSelectionMatches: true,
        closeBracketsKeymap: true,
        defaultKeymap: true,
        searchKeymap: true,
        historyKeymap: true,
        foldKeymap: false,
        completionKeymap: true,
        lintKeymap: false,
      }}
    />
  )
}
