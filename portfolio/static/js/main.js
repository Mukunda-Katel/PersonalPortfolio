/**
 * Portfolio Website - Mukunda Jamar Katel
 * Enhanced Linux Terminal Implementation
 */

// Enhanced Linux Terminal File System
class LinuxTerminalFS {
    constructor() {
        this.currentPath = '/home/mukunda';
        this.user = 'mukunda';
        this.hostname = 'portfolio-server';
        this.fileSystem = {
            '/': {
                type: 'directory',
                permissions: 'drwxr-xr-x',
                owner: 'root',
                group: 'root',
                size: 4096,
                modified: new Date('2024-01-01'),
                contents: {
                    'bin': {
                        type: 'directory',
                        permissions: 'drwxr-xr-x',
                        owner: 'root',
                        group: 'root',
                        size: 4096,
                        modified: new Date('2024-01-01'),
                        contents: {
                            'bash': { type: 'file', permissions: '-rwxr-xr-x', owner: 'root', group: 'root', size: 1234567, modified: new Date('2024-01-01'), content: '#!/bin/bash\n# Bash shell executable' },
                            'ls': { type: 'file', permissions: '-rwxr-xr-x', owner: 'root', group: 'root', size: 98765, modified: new Date('2024-01-01'), content: '#!/bin/bash\n# List directory contents' },
                            'cat': { type: 'file', permissions: '-rwxr-xr-x', owner: 'root', group: 'root', size: 54321, modified: new Date('2024-01-01'), content: '#!/bin/bash\n# Display file contents' }
                        }
                    },
                    'etc': {
                        type: 'directory',
                        permissions: 'drwxr-xr-x',
                        owner: 'root',
                        group: 'root',
                        size: 4096,
                        modified: new Date('2024-01-01'),
                        contents: {
                            'passwd': { type: 'file', permissions: '-rw-r--r--', owner: 'root', group: 'root', size: 1024, modified: new Date('2024-01-01'), content: 'root:x:0:0:root:/root:/bin/bash\nmukunda:x:1000:1000:Mukunda Jamar Katel:/home/mukunda:/bin/bash' },
                            'hostname': { type: 'file', permissions: '-rw-r--r--', owner: 'root', group: 'root', size: 16, modified: new Date('2024-01-01'), content: 'portfolio-server' },
                            'os-release': { type: 'file', permissions: '-rw-r--r--', owner: 'root', group: 'root', size: 512, modified: new Date('2024-01-01'), content: 'NAME="Ubuntu"\nVERSION="22.04.3 LTS (Jammy Jellyfish)"\nID=ubuntu\nID_LIKE=debian' }
                        }
                    },
                    'home': {
                        type: 'directory',
                        permissions: 'drwxr-xr-x',
                        owner: 'root',
                        group: 'root',
                        size: 4096,
                        modified: new Date('2024-01-01'),
                        contents: {
                            'mukunda': {
                                type: 'directory',
                                permissions: 'drwxr-xr-x',
                                owner: 'mukunda',
                                group: 'mukunda',
                                size: 4096,
                                modified: new Date('2024-12-01'),
                                contents: {
                                    'projects': {
                                        type: 'directory',
                                        permissions: 'drwxr-xr-x',
                                        owner: 'mukunda',
                                        group: 'mukunda',
                                        size: 4096,
                                        modified: new Date('2024-12-01'),
                                        contents: {
                                            'portfolio-website': { type: 'file', permissions: '-rw-r--r--', owner: 'mukunda', group: 'mukunda', size: 2048, modified: new Date('2024-12-01'), content: '# Django Portfolio Website\n\nA modern portfolio website built with Django and JavaScript.\n\n## Features\n- Interactive Linux terminal\n- Contact form\n- Responsive design\n- Project showcase' },
                                            'cybersecurity-tools': { type: 'file', permissions: '-rwxr-xr-x', owner: 'mukunda', group: 'mukunda', size: 1536, modified: new Date('2024-11-15'), content: '#!/bin/bash\n# Cybersecurity Tools Collection\n\necho "=== Cybersecurity Toolkit ==="\necho "1. Network Scanner"\necho "2. Vulnerability Assessment"\necho "3. Penetration Testing Tools"\necho "4. Security Audit Scripts"' },
                                            'web-scraper.py': { type: 'file', permissions: '-rw-r--r--', owner: 'mukunda', group: 'mukunda', size: 3072, modified: new Date('2024-11-20'), content: '#!/usr/bin/env python3\n# Advanced Web Scraper\n\nimport requests\nfrom bs4 import BeautifulSoup\nimport json\nimport time\n\nclass WebScraper:\n    def __init__(self):\n        self.session = requests.Session()\n        \n    def scrape_data(self, url):\n        response = self.session.get(url)\n        soup = BeautifulSoup(response.content, "html.parser")\n        return soup' },
                                            'README.md': { type: 'file', permissions: '-rw-r--r--', owner: 'mukunda', group: 'mukunda', size: 1024, modified: new Date('2024-12-01'), content: '# My Development Projects\n\nWelcome to my project repository!\n\n## Current Projects\n- Portfolio Website (Django)\n- Cybersecurity Tools\n- Web Scraping Applications\n- Network Security Scripts\n\n## Skills Demonstrated\n- Full-Stack Development\n- Cybersecurity\n- Python Programming\n- Linux System Administration' }
                                        }
                                    },
                                    'documents': {
                                        type: 'directory',
                                        permissions: 'drwxr-xr-x',
                                        owner: 'mukunda',
                                        group: 'mukunda',
                                        size: 4096,
                                        modified: new Date('2024-11-01'),
                                        contents: {
                                            'resume.pdf': { type: 'file', permissions: '-rw-r--r--', owner: 'mukunda', group: 'mukunda', size: 245760, modified: new Date('2024-11-01'), content: 'PDF Document - Resume of Mukunda Jamar Katel\n\nCybersecurity Professional & Full-Stack Developer\n\nContact: mukunda@example.com\nLinkedIn: linkedin.com/in/mukunda-katel' },
                                            'certifications.txt': { type: 'file', permissions: '-rw-r--r--', owner: 'mukunda', group: 'mukunda', size: 512, modified: new Date('2024-10-15'), content: 'Professional Certifications:\n\n• CompTIA Security+ (2024)\n• Certified Ethical Hacker (CEH)\n• Network Security Specialist\n• Python Programming Certificate\n• Django Web Development\n• Linux System Administration' },
                                            'cover-letter.txt': { type: 'file', permissions: '-rw-r--r--', owner: 'mukunda', group: 'mukunda', size: 1536, modified: new Date('2024-11-01'), content: 'Dear Hiring Manager,\n\nI am writing to express my strong interest in joining your cybersecurity team. With extensive experience in both cybersecurity and full-stack development, I bring a unique perspective to protecting digital assets.\n\nMy expertise includes:\n- Penetration testing and vulnerability assessment\n- Secure web application development\n- Network security implementation\n- Python automation and scripting\n\nI would welcome the opportunity to discuss how my skills can contribute to your organization\'s security objectives.\n\nBest regards,\nMukunda Jamar Katel' }
                                        }
                                    },
                                    'skills.txt': { type: 'file', permissions: '-rw-r--r--', owner: 'mukunda', group: 'mukunda', size: 1024, modified: new Date('2024-12-01'), content: '=== Technical Skills ===\n\nProgramming Languages:\n• Python (Advanced)\n• JavaScript (Advanced)\n• Bash/Shell Scripting\n• SQL\n• HTML/CSS\n\nFrameworks & Technologies:\n• Django & Django REST Framework\n• React.js\n• Node.js\n• PostgreSQL, MySQL, SQLite\n• Git & GitHub\n\nCybersecurity:\n• Penetration Testing\n• Vulnerability Assessment\n• Network Security\n• Security Auditing\n• Incident Response\n• OWASP Top 10\n\nSystem Administration:\n• Linux (Ubuntu, CentOS, Kali)\n• Docker & Containerization\n• AWS Cloud Services\n• Network Configuration\n• Server Management' },
                                    'contact.sh': { type: 'file', permissions: '-rwxr-xr-x', owner: 'mukunda', group: 'mukunda', size: 512, modified: new Date('2024-12-01'), content: '#!/bin/bash\n\necho "=== Contact Information ==="\necho "Name: Mukunda Jamar Katel"\necho "Email: mukunda.katel@example.com"\necho "Phone: +977-XXXXXXXXX"\necho "LinkedIn: linkedin.com/in/mukunda-katel"\necho "GitHub: github.com/mukunda-katel"\necho "Location: Kathmandu, Nepal"\necho ""\necho "Available for:"\necho "• Cybersecurity Consulting"\necho "• Full-Stack Development"\necho "• Penetration Testing"\necho "• Security Audits"' },
                                    '.bashrc': { type: 'file', permissions: '-rw-r--r--', owner: 'mukunda', group: 'mukunda', size: 1024, modified: new Date('2024-01-01'), content: '# ~/.bashrc: executed by bash(1) for non-login shells\n\n# Prompt customization\nexport PS1="\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]$ "\n\n# Aliases\nalias ll="ls -alF"\nalias la="ls -A"\nalias l="ls -CF"\nalias grep="grep --color=auto"\nalias fgrep="fgrep --color=auto"\nalias egrep="egrep --color=auto"\n\n# History settings\nHISTCONTROL=ignoreboth\nHISTSIZE=1000\nHISTFILESIZE=2000' },
                                    '.profile': { type: 'file', permissions: '-rw-r--r--', owner: 'mukunda', group: 'mukunda', size: 512, modified: new Date('2024-01-01'), content: '# ~/.profile: executed by the command interpreter for login shells\n\n# Set PATH\nexport PATH="$HOME/bin:$HOME/.local/bin:$PATH"\n\n# Default editor\nexport EDITOR=nano\n\n# Python path\nexport PYTHONPATH="$HOME/projects:$PYTHONPATH"' }
                                }
                            }
                        }
                    },
                    'var': {
                        type: 'directory',
                        permissions: 'drwxr-xr-x',
                        owner: 'root',
                        group: 'root',
                        size: 4096,
                        modified: new Date('2024-01-01'),
                        contents: {
                            'log': {
                                type: 'directory',
                                permissions: 'drwxr-xr-x',
                                owner: 'root',
                                group: 'root',
                                size: 4096,
                                modified: new Date('2024-12-01'),
                                contents: {
                                    'system.log': { type: 'file', permissions: '-rw-r--r--', owner: 'root', group: 'root', size: 2048, modified: new Date('2024-12-01'), content: '[2024-12-01 10:00:01] INFO: System boot completed\n[2024-12-01 10:00:02] INFO: Network interfaces initialized\n[2024-12-01 10:00:03] INFO: SSH daemon started\n[2024-12-01 10:00:04] INFO: Web server started\n[2024-12-01 10:00:05] INFO: Portfolio terminal loaded\n[2024-12-01 10:00:06] INFO: All services running normally' },
                                    'auth.log': { type: 'file', permissions: '-rw-r--r--', owner: 'root', group: 'root', size: 1024, modified: new Date('2024-12-01'), content: '[2024-12-01 10:00:10] INFO: User mukunda logged in\n[2024-12-01 10:05:23] INFO: Terminal session started\n[2024-12-01 10:15:45] INFO: Command executed: ls\n[2024-12-01 10:16:12] INFO: Command executed: cd projects' }
                                }
                            }
                        }
                    },
                    'tmp': {
                        type: 'directory',
                        permissions: 'drwxrwxrwt',
                        owner: 'root',
                        group: 'root',
                        size: 4096,
                        modified: new Date('2024-12-01'),
                        contents: {}
                    }
                }
            }
        };
        
        this.commandHistory = JSON.parse(localStorage.getItem('linuxTerminalHistory') || '[]');
        this.historyIndex = -1;
        this.aliases = {
            'll': 'ls -la',
            'la': 'ls -a',
            'l': 'ls -CF'
        };
    }

    getPrompt() {
        const pathDisplay = this.currentPath === `/home/${this.user}` ? '~' : this.currentPath;
        return `${this.user}@${this.hostname}:${pathDisplay}$ `;
    }

    getCurrentDirectory() {
        const parts = this.currentPath.split('/').filter(p => p);
        let current = this.fileSystem['/'];
        
        for (const part of parts) {
            if (current.contents && current.contents[part]) {
                current = current.contents[part];
            } else {
                return null;
            }
        }
        return current;
    }

    resolvePath(path) {
        if (!path) return this.currentPath;
        
        if (path.startsWith('/')) {
            return path;
        } else if (path === '..') {
            const parts = this.currentPath.split('/').filter(p => p);
            if (parts.length > 0) {
                parts.pop();
                return '/' + parts.join('/');
            }
            return '/';
        } else if (path === '.') {
            return this.currentPath;
        } else if (path === '~') {
            return `/home/${this.user}`;
        } else {
            return this.currentPath === '/' ? '/' + path : this.currentPath + '/' + path;
        }
    }

    executeCommand(command) {
        const trimmedCommand = command.trim();
        if (!trimmedCommand) return { output: '', type: 'normal' };

        // Handle aliases
        let processedCommand = trimmedCommand;
        for (const [alias, expansion] of Object.entries(this.aliases)) {
            if (trimmedCommand.startsWith(alias + ' ') || trimmedCommand === alias) {
                processedCommand = trimmedCommand.replace(alias, expansion);
                break;
            }
        }

        const parts = processedCommand.split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        // Add to history
        if (trimmedCommand) {
            this.commandHistory.push(trimmedCommand);
            if (this.commandHistory.length > 100) {
                this.commandHistory.shift();
            }
            localStorage.setItem('linuxTerminalHistory', JSON.stringify(this.commandHistory));
        }

        // Execute command
        switch (cmd) {
            case 'ls':
                return this.ls(args);
            case 'cd':
                return this.cd(args[0] || '~');
            case 'pwd':
                return this.pwd();
            case 'cat':
                return this.cat(args[0]);
            case 'mkdir':
                return this.mkdir(args[0]);
            case 'touch':
                return this.touch(args[0]);
            case 'rm':
                return this.rm(args);
            case 'rmdir':
                return this.rmdir(args[0]);
            case 'cp':
                return this.cp(args[0], args[1]);
            case 'mv':
                return this.mv(args[0], args[1]);
            case 'find':
                return this.find(args);
            case 'grep':
                return this.grep(args);
            case 'tree':
                return this.tree(args[0]);
            case 'whoami':
                return { output: this.user, type: 'success' };
            case 'date':
                return { output: new Date().toString(), type: 'info' };
            case 'uname':
                return this.uname(args);
            case 'clear':
                return { output: '', type: 'clear' };
            case 'help':
                return this.help();
            case 'history':
                return this.history();
            case 'echo':
                return { output: args.join(' '), type: 'success' };
            case 'man':
                return this.man(args[0]);
            case 'ps':
                return this.ps();
            case 'top':
                return this.top();
            case 'df':
                return this.df();
            case 'free':
                return this.free();
            case 'uptime':
                return this.uptime();
            case 'which':
                return this.which(args[0]);
            case 'alias':
                return this.aliasCmd(args);
            case 'env':
                return this.env();
            case 'contact':
                return { output: 'Opening contact form... (Press ESC to exit)', type: 'success', action: 'show-contact' };
            case 'exit':
                return { output: 'Exiting contact mode...', type: 'info', action: 'hide-contact' };
            case 'skills':
                return this.cat('skills.txt');
            case 'projects':
                const result = this.cd('projects');
                if (result.type === 'success') {
                    const lsResult = this.ls([]);
                    return { output: result.output + '\n' + lsResult.output, type: 'success' };
                }
                return result;
            default:
                return { output: `bash: ${cmd}: command not found`, type: 'error' };
        }
    }

    ls(args) {
        const showAll = args.includes('-a') || args.includes('-la') || args.includes('-al');
        const longFormat = args.includes('-l') || args.includes('-la') || args.includes('-al');
        
        const current = this.getCurrentDirectory();
        if (!current || !current.contents) {
            return { output: '', type: 'normal' };
        }

        let items = Object.keys(current.contents);
        
        if (!showAll) {
            items = items.filter(item => !item.startsWith('.'));
        }

        if (longFormat) {
            const lines = items.map(item => {
                const file = current.contents[item];
                const date = file.modified.toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: '2-digit', 
                    hour: '2-digit', 
                    minute: '2-digit' 
                });
                return `${file.permissions} 1 ${file.owner} ${file.group} ${file.size.toString().padStart(8)} ${date} ${item}`;
            });
            return { output: lines.join('\n'), type: 'normal' };
        } else {
            return { output: items.join('  '), type: 'normal' };
        }
    }

    cd(path) {
        const newPath = this.resolvePath(path);
        const parts = newPath.split('/').filter(p => p);
        let current = this.fileSystem['/'];
        
        for (const part of parts) {
            if (current.contents && current.contents[part] && current.contents[part].type === 'directory') {
                current = current.contents[part];
            } else {
                return { output: `bash: cd: ${path}: No such file or directory`, type: 'error' };
            }
        }
        
        this.currentPath = newPath || '/';
        return { output: '', type: 'success' };
    }

    pwd() {
        return { output: this.currentPath, type: 'normal' };
    }

    cat(filename) {
        if (!filename) {
            return { output: 'cat: missing file operand', type: 'error' };
        }

        const current = this.getCurrentDirectory();
        if (!current || !current.contents || !current.contents[filename]) {
            return { output: `cat: ${filename}: No such file or directory`, type: 'error' };
        }

        const file = current.contents[filename];
        if (file.type === 'directory') {
            return { output: `cat: ${filename}: Is a directory`, type: 'error' };
        }

        return { output: file.content, type: 'normal' };
    }

    help() {
        const commands = [
            '=== Available Linux Commands ===',
            '',
            'File Operations:',
            '  ls [-la]         List directory contents',
            '  cd [directory]   Change directory',
            '  pwd              Print working directory',
            '  cat [file]       Display file contents',
            '  mkdir [dir]      Create directory',
            '  touch [file]     Create empty file',
            '  rm [file]        Remove file',
            '  rmdir [dir]      Remove empty directory',
            '  cp [src] [dest]  Copy file',
            '  mv [src] [dest]  Move/rename file',
            '  find [path]      Find files and directories',
            '  tree             Display directory tree',
            '',
            'System Information:',
            '  whoami           Display current user',
            '  date             Display current date/time',
            '  uname [-a]       Display system information',
            '  ps               Show running processes',
            '  top              Display running processes',
            '  df               Display filesystem usage',
            '  free             Display memory usage',
            '  uptime           Show system uptime',
            '  env              Display environment variables',
            '',
            'Utilities:',
            '  clear            Clear terminal screen',
            '  history          Show command history',
            '  echo [text]      Display text',
            '  man [command]    Display manual page',
            '  which [command]  Locate command',
            '  alias            Show/set command aliases',
            '',
            'Portfolio Commands:',
            '  contact          Open contact form',
            '  skills           View my technical skills',
            '  projects         Navigate to projects directory',
            '',
            'Navigation Tips:',
            '  Use Tab for autocompletion',
            '  Use ↑/↓ arrows for command history',
            '  Use Ctrl+C to cancel current command',
            '  Type "exit" to close contact form'
        ];
        return { output: commands.join('\n'), type: 'info' };
    }

    // Additional command implementations...
    history() {
        const lines = this.commandHistory.map((cmd, i) => `${(i + 1).toString().padStart(4)} ${cmd}`);
        return { output: lines.join('\n'), type: 'info' };
    }

    uname(args) {
        if (args.includes('-a')) {
            return { output: 'Linux portfolio-server 5.15.0-91-generic #101-Ubuntu SMP Tue Nov 14 13:30:08 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux', type: 'info' };
        }
        return { output: 'Linux', type: 'info' };
    }

    ps() {
        const processes = [
            'PID TTY          TIME CMD',
            '  1 ?        00:00:01 systemd',
            '  2 ?        00:00:00 kthreadd',
            '123 pts/0    00:00:00 bash',
            '456 pts/0    00:00:00 node',
            '789 pts/0    00:00:00 python3',
            '999 pts/0    00:00:00 ps'
        ];
        return { output: processes.join('\n'), type: 'info' };
    }

    df() {
        const diskUsage = [
            'Filesystem     1K-blocks      Used Available Use% Mounted on',
            '/dev/sda1       20971520   8388608  12582912  40% /',
            'tmpfs            4194304         0   4194304   0% /dev/shm',
            '/dev/sda2       10485760   3145728   7340032  30% /home',
            'tmpfs            2097152      1024   2096128   1% /tmp'
        ];
        return { output: diskUsage.join('\n'), type: 'info' };
    }

    free() {
        const memInfo = [
            '               total        used        free      shared  buff/cache   available',
            'Mem:         8388608     2097152     4194304      524288     2097152     5767168',
            'Swap:        2097152           0     2097152'
        ];
        return { output: memInfo.join('\n'), type: 'info' };
    }

    uptime() {
        const uptime = Math.floor(Math.random() * 86400); // Random uptime in seconds
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const load = (Math.random() * 2).toFixed(2);
        
        return { 
            output: ` ${new Date().toTimeString().split(' ')[0]} up ${hours}:${minutes.toString().padStart(2, '0')}, 1 user, load average: ${load}, ${load}, ${load}`, 
            type: 'info' 
        };
    }

    env() {
        const envVars = [
            'USER=mukunda',
            'HOME=/home/mukunda',
            'SHELL=/bin/bash',
            'PATH=/usr/local/bin:/usr/bin:/bin',
            'PWD=' + this.currentPath,
            'LANG=en_US.UTF-8',
            'TERM=xterm-256color',
            'EDITOR=nano'
        ];
        return { output: envVars.join('\n'), type: 'info' };
    }

    which(command) {
        if (!command) return { output: 'which: missing argument', type: 'error' };
        
        const binCommands = ['bash', 'ls', 'cat', 'grep', 'find', 'ps', 'top', 'df', 'free'];
        if (binCommands.includes(command)) {
            return { output: `/bin/${command}`, type: 'normal' };
        }
        
        return { output: `which: no ${command} in (/usr/local/bin:/usr/bin:/bin)`, type: 'error' };
    }

    aliasCmd(args) {
        if (args.length === 0) {
            const aliases = Object.entries(this.aliases).map(([alias, cmd]) => `alias ${alias}='${cmd}'`);
            return { output: aliases.join('\n'), type: 'info' };
        }
        return { output: 'alias: setting aliases not implemented in this demo', type: 'error' };
    }

    // Implement remaining commands (mkdir, touch, rm, etc.) with similar Linux-like behavior
    mkdir(dirname) {
        if (!dirname) return { output: 'mkdir: missing operand', type: 'error' };
        
        const current = this.getCurrentDirectory();
        if (!current || !current.contents) {
            return { output: 'mkdir: cannot create directory', type: 'error' };
        }
        
        if (current.contents[dirname]) {
            return { output: `mkdir: cannot create directory '${dirname}': File exists`, type: 'error' };
        }
        
        current.contents[dirname] = {
            type: 'directory',
            permissions: 'drwxr-xr-x',
            owner: this.user,
            group: this.user,
            size: 4096,
            modified: new Date(),
            contents: {}
        };
        
        return { output: '', type: 'success' };
    }

    touch(filename) {
        if (!filename) return { output: 'touch: missing file operand', type: 'error' };
        
        const current = this.getCurrentDirectory();
        if (!current || !current.contents) {
            return { output: 'touch: cannot create file', type: 'error' };
        }
        
        if (!current.contents[filename]) {
            current.contents[filename] = {
                type: 'file',
                permissions: '-rw-r--r--',
                owner: this.user,
                group: this.user,
                size: 0,
                modified: new Date(),
                content: ''
            };
        } else {
            current.contents[filename].modified = new Date();
        }
        
        return { output: '', type: 'success' };
    }

    tree(path = '.') {
        const buildTree = (node, prefix = '', isLast = true) => {
            if (!node || !node.contents) return '';
            
            let result = '';
            const items = Object.keys(node.contents).sort();
            
            items.forEach((item, index) => {
                const isLastItem = index === items.length - 1;
                const connector = isLastItem ? '└── ' : '├── ';
                const nextPrefix = prefix + (isLastItem ? '    ' : '│   ');
                
                result += prefix + connector + item;
                if (node.contents[item].type === 'directory') {
                    result += '/';
                }
                result += '\n';
                
                if (node.contents[item].type === 'directory') {
                    result += buildTree(node.contents[item], nextPrefix, isLastItem);
                }
            });
            
            return result;
        };
        
        const current = this.getCurrentDirectory();
        const output = this.currentPath + '\n' + buildTree(current);
        return { output: output.trim(), type: 'info' };
    }

    man(command) {
        const manPages = {
            'ls': 'NAME\n       ls - list directory contents\n\nSYNOPSIS\n       ls [OPTION]... [FILE]...\n\nDESCRIPTION\n       List  information  about  the FILEs (the current directory by default).\n       Sort entries alphabetically if none of -cftuvSUX nor --sort is specified.\n\n       -a, --all\n              do not ignore entries starting with .\n\n       -l     use a long listing format',
            'cd': 'NAME\n       cd - change the shell working directory\n\nSYNOPSIS\n       cd [-L|[-P [-e]] [-@]] [dir]\n\nDESCRIPTION\n       Change the current directory to DIR.  The default DIR is the value of the\n       HOME shell variable.',
            'cat': 'NAME\n       cat - concatenate files and print on the standard output\n\nSYNOPSIS\n       cat [OPTION]... [FILE]...\n\nDESCRIPTION\n       Concatenate FILE(s) to standard output.\n\n       With no FILE, or when FILE is -, read standard input.',
            'pwd': 'NAME\n       pwd - print name of current/working directory\n\nSYNOPSIS\n       pwd [OPTION]...\n\nDESCRIPTION\n       Print the full filename of the current working directory.'
        };
        
        if (!command) return { output: 'What manual page do you want?', type: 'error' };
        if (!manPages[command]) return { output: `No manual entry for ${command}`, type: 'error' };
        
        return { output: manPages[command], type: 'info' };
    }
}

// Terminal variables
let linuxTerminal;
let commandInput;
let terminalOutput;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Mobile navigation toggle
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbar-nav');
    
    if (navbarToggler && navbarNav) {
        navbarToggler.addEventListener('click', function() {
            navbarNav.classList.toggle('show');
        });
    }

    // Don't initialize terminal automatically
    // initLinuxTerminal();

    // Initialize other components
    initOtherComponents();
    
    // Add terminal toggle functionality
    initTerminalToggle();
});

function initLinuxTerminal() {
    linuxTerminal = new LinuxTerminalFS();
    terminalOutput = document.getElementById('terminalOutput');
    
    if (!terminalOutput) return;

    // Clear terminal and show boot sequence
    clearLinuxTerminal();
    
    // Hide contact form if showing
    const contactForm = document.getElementById('terminalForm');
    if (contactForm) {
        contactForm.style.display = 'none';
    }

    // Create command input
    createLinuxCommandInput();
    
    // Linux-style boot sequence
    setTimeout(() => {
        addTerminalLine('[ OK ] Started Terminal Interface Service', 'success');
        addTerminalLine('[ OK ] Reached target Multi-User System', 'success');
        addTerminalLine('', 'normal');
        addTerminalLine('Ubuntu 22.04.3 LTS portfolio-server tty1', 'info');
        addTerminalLine('', 'normal');
        addTerminalLine('mukunda login: mukunda', 'normal');
        addTerminalLine('Password: ********', 'normal');
        addTerminalLine('Last login: ' + new Date().toDateString() + ' on tty1', 'info');
        addTerminalLine('', 'normal');
        addTerminalLine('Welcome to Ubuntu 22.04.3 LTS (GNU/Linux 5.15.0-91-generic x86_64)', 'info');
        addTerminalLine('', 'normal');
        addTerminalLine(' * Documentation:  https://help.ubuntu.com', 'info');
        addTerminalLine(' * Management:     https://landscape.canonical.com', 'info');
        addTerminalLine(' * Support:        https://ubuntu.com/advantage', 'info');
        addTerminalLine('', 'normal');
        addTerminalLine('System information as of ' + new Date().toDateString(), 'info');
        addTerminalLine('', 'normal');
        addTerminalLine('  System load:  0.08              Processes:           123', 'info');
        addTerminalLine('  Usage of /:   40.0% of 19.56GB  Users logged in:     1', 'info');
        addTerminalLine('  Memory usage: 25%               IPv4 address:        192.168.1.100', 'info');
        addTerminalLine('  Swap usage:   0%                IPv6 address:        ::1', 'info');
        addTerminalLine('', 'normal');
        addTerminalLine('Type "help" to see available commands or "contact" to get in touch.', 'info');
        addTerminalLine('──────────────────────────────────────────────────────────────', 'normal');
        showLinuxCommandPrompt();
    }, 2000);
}

function createLinuxCommandInput() {
    // Remove existing command line
    const existingCommandLine = document.querySelector('.terminal-command-line');
    if (existingCommandLine) {
        existingCommandLine.remove();
    }

    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-command-line';
    commandLine.innerHTML = `
        <span class="terminal-prompt" id="commandPrompt">${linuxTerminal.getPrompt()}</span>
        <input type="text" id="commandInput" class="terminal-command-input" autocomplete="off" spellcheck="false">
    `;
    
    const terminalBody = document.querySelector('.terminal-body') || terminalOutput.parentElement;
    terminalBody.appendChild(commandLine);
    
    commandInput = document.getElementById('commandInput');
    commandInput.addEventListener('keydown', handleLinuxCommandInput);
}

function handleLinuxCommandInput(event) {
    if (event.key === 'Enter') {
        const command = commandInput.value;
        const prompt = document.getElementById('commandPrompt').textContent;
        
        // Show command in terminal
        addTerminalLine(prompt + command, 'command');
        
        // Execute command
        const result = linuxTerminal.executeCommand(command);
        
        if (result.type === 'clear') {
            clearLinuxTerminal();
            createLinuxCommandInput();
            showLinuxCommandPrompt();
        } else if (result.action === 'show-contact') {
            showContactForm();
        } else if (result.action === 'hide-contact') {
            hideContactForm();
        } else if (result.output) {
            addTerminalLine(result.output, result.type);
        }
        
        // Clear input and update prompt
        commandInput.value = '';
        document.getElementById('commandPrompt').textContent = linuxTerminal.getPrompt();
        
        // Reset history index
        linuxTerminal.historyIndex = -1;
        
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (linuxTerminal.commandHistory.length > 0) {
            if (linuxTerminal.historyIndex === -1) {
                linuxTerminal.historyIndex = linuxTerminal.commandHistory.length - 1;
            } else if (linuxTerminal.historyIndex > 0) {
                linuxTerminal.historyIndex--;
            }
            commandInput.value = linuxTerminal.commandHistory[linuxTerminal.historyIndex];
        }
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (linuxTerminal.historyIndex !== -1) {
            if (linuxTerminal.historyIndex < linuxTerminal.commandHistory.length - 1) {
                linuxTerminal.historyIndex++;
                commandInput.value = linuxTerminal.commandHistory[linuxTerminal.historyIndex];
            } else {
                linuxTerminal.historyIndex = -1;
                commandInput.value = '';
            }
        }
    } else if (event.key === 'Tab') {
        event.preventDefault();
        // Basic tab completion could be implemented here
    }
}

function clearLinuxTerminal() {
    if (terminalOutput) {
        terminalOutput.innerHTML = '';
        addTerminalLine('╔══════════════════════════════════════════════════════════════╗', 'normal');
        addTerminalLine('║           MUKUNDA PORTFOLIO LINUX TERMINAL v3.0             ║', 'normal');
        addTerminalLine('║         Secure Shell Access - Authenticated Session         ║', 'normal');
        addTerminalLine('║      Copyright (c) 2024 Mukunda Jamar Katel                 ║', 'normal');
        addTerminalLine('╚══════════════════════════════════════════════════════════════╝', 'normal');
        addTerminalLine('', 'normal');
    }
}

function addTerminalLine(text, type = 'normal') {
    const line = document.createElement('div');
    line.classList.add('terminal-line');
    if (type !== 'normal') line.classList.add(`terminal-${type}`);
    
    // Handle multi-line output
    if (text.includes('\n')) {
        const lines = text.split('\n');
        lines.forEach((lineText, index) => {
            if (index > 0) {
                const newLine = document.createElement('div');
                newLine.classList.add('terminal-line');
                if (type !== 'normal') newLine.classList.add(`terminal-${type}`);
                newLine.textContent = lineText;
                terminalOutput.appendChild(newLine);
            } else {
                line.textContent = lineText;
            }
        });
    } else {
        line.textContent = text;
    }
    
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function showLinuxCommandPrompt() {
    commandInput.focus();
}

function showContactForm() {
    const contactForm = document.getElementById('terminalForm');
    if (contactForm) {
        contactForm.style.display = 'block';
        addTerminalLine('Contact form activated. Press ESC to return to terminal.', 'info');
    }
}

function hideContactForm() {
    const contactForm = document.getElementById('terminalForm');
    if (contactForm) {
        contactForm.style.display = 'none';
        addTerminalLine('Returned to terminal mode.', 'info');
        showLinuxCommandPrompt();
    }
}

// Handle ESC key to exit contact form
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const contactForm = document.getElementById('terminalForm');
        if (contactForm && contactForm.style.display === 'block') {
            hideContactForm();
        }
    }
});

function initOtherComponents() {
    // Initialize Typed.js if element exists
    if (document.querySelector('.typed-text')) {
        let typed_strings = document.querySelector('.typed-text').getAttribute('data-typed-items');
        if (typed_strings) {
            typed_strings = typed_strings.split(', ');
            
            new Typed('.typed-text', {
                strings: typed_strings,
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000
            });
        }
    }
}

function initTerminalToggle() {
    // Add click handler for terminal access (you can add a button or link)
    const terminalTrigger = document.getElementById('terminal-trigger');
    if (terminalTrigger) {
        terminalTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            if (!linuxTerminal) {
                initLinuxTerminal();
            }
            // Show terminal section
            const terminalSection = document.getElementById('terminal-section');
            if (terminalSection) {
                terminalSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}




