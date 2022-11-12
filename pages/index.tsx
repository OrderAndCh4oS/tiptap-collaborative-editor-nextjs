import Head from 'next/head'
import {EditorWrapper} from "../components/editor/editor";

export default function Home() {
    return (
        <div className="flex flex-col p-4 h-full">
            <Head>
                <title>Collaborative Editor</title>
                <meta name="description" content="Collaborative Editor"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="flex flex-col h-full">
                <h1 className="text-3xl mb-4 font-bold underline">
                    Collaborative Editor
                </h1>
                <EditorWrapper/>
            </main>
            <footer className="mt-auto">
                Created by Order & Chaos
            </footer>
        </div>
    )
}
