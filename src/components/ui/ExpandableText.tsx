"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableTextProps {
    html: string;
}

export function ExpandableText({ html }: ExpandableTextProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8">
            <div
                className={`text-lg text-text-light leading-relaxed [&_strong]:font-semibold md:line-clamp-none ${!isExpanded ? 'line-clamp-4' : ''} transition-all duration-300 ease-in-out`}
                dangerouslySetInnerHTML={{ __html: html }}
            />

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-accent flex items-center gap-1 font-medium hover:text-accent-light transition-colors md:hidden"
            >
                {isExpanded ? (
                    <>
                        Ler menos <ChevronUp className="w-4 h-4" />
                    </>
                ) : (
                    <>
                        Ler mais <ChevronDown className="w-4 h-4" />
                    </>
                )}
            </button>
        </div>
    );
}
