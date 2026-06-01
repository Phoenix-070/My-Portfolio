"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal as TerminalIcon } from "lucide-react";

type HistoryItem = {
  id: number;
  type: "command" | "output" | "error";
  content: React.ReactNode | string;
};

export function TerminalMode() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isTerminalMode = searchParams.get("mode") === "terminal";

  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 0,
      type: "output",
      content: (
        <div className="mb-4">
          <div className="text-primary font-bold">Welcome to Aravindh's Terminal v1.0.0</div>
          <div className="text-gray-400">Type 'help' to see a list of available commands.</div>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Lock body scroll and focus input when opened
  useEffect(() => {
    if (isTerminalMode) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isTerminalMode]);

  if (!isTerminalMode) return null;

  const closeMode = () => {
    router.push("/", { scroll: false });
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const fullInput = input.trim();
    if (!fullInput) return;

    const parts = fullInput.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(" ");

    // Add command to history
    const newHistory = [...history, { id: Date.now(), type: "command" as const, content: fullInput }];
    
    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1">
            <div className="text-gray-300">Available commands:</div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="text-primary">about</span><span>Read a brief bio</span>
              <span className="text-primary">projects</span><span>List of selected works</span>
              <span className="text-primary">skills</span><span>View technical skills</span>
              <span className="text-primary">contact</span><span>Show contact information</span>
              <span className="text-primary">clear</span><span>Clear the terminal</span>
              <span className="text-primary">exit</span><span>Close terminal mode</span>
            </div>
          </div>
        );
        break;
      case "about":
        output = (
          <div className="space-y-2 text-gray-300 max-w-2xl">
            <p>Hi, I'm Aravindh.</p>
            <p>I'm an AI Research Engineer and Full Stack Developer focused on building modern AI-powered applications.</p>
            <p>My expertise lies in Generative AI, Multimodal Deep Learning, and crafting immersive web experiences using Next.js and Three.js.</p>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="space-y-4">
            <div>
              <div className="text-primary font-bold">1. Explainable Multimodal Organ-Level Score Analysis</div>
              <div className="text-gray-400 text-sm">AI framework to analyze diabetes-related systemic effects across retina, kidney, and heart.</div>
              <a href="https://github.com/Phoenix-070/Mutilmodal-Diabetes-Complication-Prediction" target="_blank" className="text-blue-400 hover:underline text-sm">[View Source]</a>
            </div>
            <div>
              <div className="text-primary font-bold">2. Watchly</div>
              <div className="text-gray-400 text-sm">Movie and TV discovery platform with personalized recommendations.</div>
              <a href="https://github.com/Phoenix-070/Watchly" target="_blank" className="text-blue-400 hover:underline text-sm">[View Source]</a>
            </div>
            <div>
              <div className="text-primary font-bold">3. EduTranscribe</div>
              <div className="text-gray-400 text-sm">AI-powered transcription and multilingual education platform.</div>
              <a href="https://github.com/Phoenix-070/Edutranscribe" target="_blank" className="text-blue-400 hover:underline text-sm">[View Source]</a>
            </div>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="space-y-2">
            <div><span className="text-primary w-32 inline-block">AI / ML:</span> <span className="text-gray-300">Large Language Models, Generative AI, PyTorch, HuggingFace</span></div>
            <div><span className="text-primary w-32 inline-block">Languages:</span> <span className="text-gray-300">Python, TypeScript, JavaScript, SQL</span></div>
            <div><span className="text-primary w-32 inline-block">Frontend:</span> <span className="text-gray-300">Next.js, React, TailwindCSS, Three.js, WebGL</span></div>
            <div><span className="text-primary w-32 inline-block">Backend:</span> <span className="text-gray-300">Node.js, FastAPI, Flask, PostgreSQL, GraphQL</span></div>
            <div><span className="text-primary w-32 inline-block">Tools:</span> <span className="text-gray-300">Docker, AWS, Git, CUDA</span></div>
          </div>
        );
        break;
      case "contact":
        const email = atob("bWFyYXZpbmRoMDEwQGdtYWlsLmNvbQ==");
        output = (
          <div className="space-y-2">
            <div><span className="text-gray-400 w-24 inline-block">Email:</span> <a href={`mailto:${email}`} className="text-blue-400 hover:underline">{email}</a></div>
            <div><span className="text-gray-400 w-24 inline-block">GitHub:</span> <a href="https://github.com/Phoenix-070" target="_blank" className="text-blue-400 hover:underline">github.com/Phoenix-070</a></div>
            <div><span className="text-gray-400 w-24 inline-block">LinkedIn:</span> <a href="https://www.linkedin.com/in/aravindhm010/" target="_blank" className="text-blue-400 hover:underline">linkedin.com/in/aravindhm010</a></div>
          </div>
        );
        break;
      // EASTER EGGS
      case "sudo":
        output = <div className="text-red-500 font-bold">aravindh is not in the sudoers file. This incident will be reported.</div>;
        break;
      case "whoami":
        output = <div className="text-gray-300">You are a brilliant recruiter/engineer looking at an awesome portfolio.</div>;
        break;
      case "ls":
        output = (
          <div className="text-gray-300 font-mono">
            <div>drwxr-xr-x  14 aravindh  staff   448 May 28 10:00 .</div>
            <div>drwxr-xr-x   5 aravindh  staff   160 May 28 09:59 ..</div>
            <div>-rw-r--r--   1 aravindh  staff    42 May 28 10:05 .secrets</div>
            <div>-rw-r--r--   1 aravindh  staff  145K May 28 10:10 Aravinndh_New.pdf</div>
          </div>
        );
        break;
      case "cat":
        if (args === ".secrets") {
          output = <div className="text-yellow-400">The secret is 90% coffee, 10% debugging, and a sprinkle of AI.</div>;
        } else if (args) {
          output = <div className="text-red-400">cat: {args}: No such file or directory</div>;
        } else {
          output = <div className="text-red-400">usage: cat [file]</div>;
        }
        break;
      case "coffee":
        output = (
          <pre className="text-yellow-600 leading-tight">
{`    (  )   (   )  )
     ) (   )  (  (
     ( )  (    ) )
     _____________
    <_____________> ___
    |             |/ _ \\
    |               | | |
    |               |_| |
 ___|             |\\___/
/    \\___________/    \\
\\_____________________/`}
          </pre>
        );
        break;
      case "hire":
        const hireEmail = atob("bWFyYXZpbmRoMDEwQGdtYWlsLmNvbQ==");
        window.location.href = `mailto:${hireEmail}?subject=Job Offer!`;
        output = <div className="text-green-400 font-bold text-lg animate-pulse">🎉 Excellent choice! Opening your email client...</div>;
        break;
      case "matrix":
        output = <div className="text-green-500 font-bold animate-pulse">Wake up, Neo... The matrix has you.</div>;
        break;
      case "clear":
        setHistory([
          {
            id: Date.now(),
            type: "output",
            content: <div className="text-gray-400 italic">Terminal cleared.</div>
          }
        ]);
        setInput("");
        return;
      case "exit":
        closeMode();
        return;
      default:
        output = <div className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</div>;
    }

    setHistory([...newHistory, { id: Date.now() + 1, type: "output", content: output }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isTerminalMode && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8"
          onClick={closeMode}
        >
          {/* Terminal Window */}
          <div 
            className="w-full max-w-4xl h-[80vh] bg-[#0c0c0c] border border-white/20 rounded-xl overflow-hidden flex flex-col shadow-2xl font-mono text-sm md:text-base relative"
            onClick={(e) => {
              e.stopPropagation();
              inputRef.current?.focus();
            }}
          >
            {/* Terminal Header */}
            <div className="bg-[#1a1a1a] border-b border-white/10 px-4 py-3 flex items-center justify-between select-none">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500" onClick={closeMode}></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-gray-400 text-xs flex items-center gap-2">
                <TerminalIcon className="w-3 h-3" /> aravindh@portfolio:~
              </div>
              <div className="w-12"></div> {/* Spacer to center title */}
            </div>

            {/* Terminal Body */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 text-gray-200">
              {history.map((item) => (
                <div key={item.id}>
                  {item.type === "command" ? (
                    <div className="flex gap-2 text-gray-300">
                      <span className="text-green-400">➜</span>
                      <span className="text-blue-400">~</span>
                      <span>{item.content}</span>
                    </div>
                  ) : (
                    <div className="ml-0 md:ml-6 mt-2">{item.content}</div>
                  )}
                </div>
              ))}
              
              {/* Active Input Line */}
              <form onSubmit={handleCommand} className="flex gap-2 mt-4 items-center">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none border-none text-gray-200 focus:ring-0 p-0 m-0"
                  spellCheck={false}
                  autoComplete="off"
                  autoFocus
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
