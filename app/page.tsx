'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [terminalInput, setTerminalInput] = useState('')
  const [showWeChatModal, setShowWeChatModal] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = ['AI Agent', 'Full-stack development']
  
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '$ help',
    'Available commands:',
    '  ls        - List available routes',
    '  cd <route> - Navigate to route',
    '  clear     - Clear terminal',
    '  help      - Show this message',
    '$'
  ])

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentTextIndex, texts])

  const handleTerminalCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = terminalInput.trim()
      let output = [...terminalOutput]
      output[output.length - 1] = `$ ${command}`
      
      if (command === 'ls') {
        output.push('github/', 'blog/', 'email/', 'wechat/')
      } else if (command === 'clear') {
        output = []
      } else if (command === 'help') {
        output.push('Available commands:', '  ls        - List available routes', '  cd <route> - Navigate to route', '  clear     - Clear terminal', '  help      - Show this message')
      } else if (command.startsWith('cd ')) {
        const route = command.substring(3)
        if (route === 'github') window.open('https://github.com/peng-yin', '_blank')
        else if (route === 'blog') window.open('https://github.com/peng-yin/note/issues', '_blank')
        else if (route === 'email') window.location.href = 'mailto:674891229@qq.com'
        else if (route === 'wechat') setShowWeChatModal(true)
        else output.push(`cd: ${route}: No such route`)
      } else if (command) {
        output.push(`command not found: ${command}`)
      }
      
      output.push('$')
      setTerminalOutput(output)
      setTerminalInput('')
    }
  }

  return (
    <main className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Shooting Stars Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* WeChat Modal */}
      {showWeChatModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setShowWeChatModal(false)}
        >
          <div 
            className="bg-gray-900 rounded-lg shadow-2xl max-w-md w-full p-8 relative border border-green-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowWeChatModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-green-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold font-mono">
                PY
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-100 font-mono">Peng Yin</h3>
                <p className="text-sm text-gray-400 font-mono">°Panta.Q | 阿联酋 Dubayy</p>
              </div>
            </div>

            <div className="border-t border-green-500/30 mb-6"></div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                </svg>
                <span className="text-lg font-semibold text-gray-100 font-mono">WeChat</span>
              </div>
              
              <div className="bg-white p-4 rounded-lg inline-block mb-4">
                <Image
                  src="/wechat-qr.jpg"
                  alt="WeChat QR Code"
                  width={280}
                  height={280}
                  className="w-full h-auto"
                />
              </div>
              
              <p className="text-sm text-gray-400 font-mono">
                扫一扫上面的二维码图案，加我为朋友。
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6 md:py-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto w-full">
          {/* Left Section - Profile */}
          <div className="flex flex-col justify-center">
            <div>
              <div className="mb-4">
                <span className="text-green-500 font-mono text-sm">~/portfolio</span>
                <span className="text-gray-500 font-mono text-sm"> $ cat intro.txt</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono">
                <span className="text-gray-400">&gt; </span>
                <span className="text-green-500">Peng Yin</span>
              </h1>
              
              <div className="space-y-2 mb-6 font-mono text-sm md:text-base">
                <p className="text-gray-400">
                  <span className="text-purple-400">interface</span> <span className="text-blue-400">Developer</span> {'{'}
                </p>
                <p className="text-gray-400 pl-4">
                  <span className="text-blue-400">role</span>: <span className="text-yellow-400">&quot;Frontend Engineer&quot;</span>;
                </p>
                <p className="text-gray-400 pl-4">
                  <span className="text-blue-400">company</span>: <span className="text-yellow-400">&quot;Tencent CDG-AMS&quot;</span>;
                </p>
                <p className="text-gray-400 pl-4">
                  <span className="text-blue-400">location</span>: <span className="text-yellow-400">&quot;Beijing, China&quot;</span>;
                </p>
                <p className="text-gray-400 pl-4">
                  <span className="text-blue-400">focus</span>: <span className="text-yellow-400">&quot;</span>
                  <span className="text-yellow-400 inline-block min-w-[200px]">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                  <span className="text-yellow-400">&quot;</span>;
                </p>
                <p className="text-gray-400">{'}'}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="https://github.com/peng-yin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-500 rounded border border-green-500/30 hover:border-green-500 transition-all font-mono text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="group-hover:translate-x-0.5 transition-transform">Github</span>
                </a>
                <a
                  href="https://github.com/peng-yin/note/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded border border-gray-700 hover:border-gray-600 transition-all font-mono text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
                  </svg>
                  <span className="group-hover:translate-x-0.5 transition-transform">Blog</span>
                </a>
                <a
                  href="mailto:674891229@qq.com"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded border border-gray-700 hover:border-gray-600 transition-all font-mono text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="group-hover:translate-x-0.5 transition-transform">Email</span>
                </a>
                <button
                  onClick={() => setShowWeChatModal(true)}
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded border border-gray-700 hover:border-gray-600 transition-all font-mono text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                  </svg>
                  <span className="group-hover:translate-x-0.5 transition-transform">WeChat</span>
                </button>
              </div>

              {/* Additional Info */}
              <div className="text-xs font-mono text-gray-500 space-y-1">
                <p><span className="text-gray-600">// </span>Open to collaboration and new opportunities</p>
                <p><span className="text-gray-600">// </span>Building the future with AI and modern web tech</p>
              </div>
            </div>
          </div>

          {/* Right Section - Terminal */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-xl">
              <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-green-500/30">
                <div className="bg-gray-800 px-4 py-2.5 flex items-center justify-between border-b border-green-500/30">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400 font-mono flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Terminal
                  </div>
                </div>

                <div className="bg-black p-5 font-mono text-sm">
                  <div className="text-green-500 mb-3">
                    $ help
                  </div>
                  <div className="text-gray-400 space-y-1 mb-3">
                    <div className="text-gray-500 text-xs">Available commands:</div>
                    <div className="pl-4 text-xs space-y-0.5">
                      <div><span className="text-green-500">ls</span> - List available routes</div>
                      <div><span className="text-green-500">cd &lt;route&gt;</span> - Navigate to route</div>
                      <div><span className="text-green-500">clear</span> - Clear terminal</div>
                      <div><span className="text-green-500">help</span> - Show this message</div>
                    </div>
                  </div>
                  
                  <div className="space-y-1 mb-2 max-h-40 overflow-y-auto text-xs">
                    {terminalOutput.slice(7, -1).map((line, i) => (
                      <div key={i} className={line.startsWith('$') ? 'text-green-500' : 'text-gray-400'}>
                        {line}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyDown={handleTerminalCommand}
                      className="flex-1 bg-transparent outline-none text-gray-100 caret-green-500"
                      placeholder="Type a command..."
                      autoFocus
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
