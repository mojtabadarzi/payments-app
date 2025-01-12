import { IconCheck, IconCopy } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';

export const CopyToClipboard = ({ text }: { text: string | undefined }) => {
    const [copied, setCopied] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const handleCopy = (text: string | undefined) => {
        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                setCopied(true);

                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }

                timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
            }).catch((err) => {
                console.error('Failed to copy text: ', err);
            });
        }
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="flex items-center relative">
            <button
                onClick={() => handleCopy(text)}
                className="px-4 py-2 rounded"
            >
                <IconCopy />
            </button>
            {copied
                && <span className="flex items-center absolute right-12 text-xs text-blue-500 ml-2">
                    Copied <IconCheck size={14} stroke={2} className="text-blue-500" />
                </span>
            }
        </div>
    );
};
