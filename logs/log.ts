import * as fs from 'fs';
import * as path from 'path';

const logFilePath = path.join(__dirname, 'test-logs.log'); // Adjust path as needed

export class Logger {
    private static instance: Logger;

    private constructor() {
        // Ensure the log file exists or create it
        if (!fs.existsSync(logFilePath)) {
            fs.writeFileSync(logFilePath, '', 'utf8');
        }
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string, level: 'info' | 'warn' | 'error' = 'info'): void {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level.toUpperCase()}]: ${message}\n`;

        fs.appendFileSync(logFilePath, logEntry, 'utf8');
        console.log(logEntry.trim()); // Also log to console for immediate feedback
    }

    public info(message: string): void {
        this.log(message, 'info');
    }

    public warn(message: string): void {
        this.log(message, 'warn');
    }

    public error(message: string): void {
        this.log(message, 'error');
    }
}