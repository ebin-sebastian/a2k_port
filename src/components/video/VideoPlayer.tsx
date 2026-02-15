"use client";

import { Plyr } from "plyr-react";
import "plyr-react/plyr.css";

interface VideoPlayerProps {
    source: string;
    poster?: string;
}

export default function VideoPlayer({ source, poster }: VideoPlayerProps) {
    return (
        <div className="video-player-wrapper overflow-hidden rounded-xl shadow-2xl bg-black">
            <Plyr
                source={{
                    type: 'video',
                    sources: [
                        {
                            src: source,
                            provider: 'html5',
                        },
                    ],
                    poster: poster,
                }}
                options={{
                    controls: [
                        'play-large',
                        'play',
                        'progress',
                        'current-time',
                        'mute',
                        'volume',
                        'fullscreen',
                    ],
                    settings: ['quality', 'speed'],
                    speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] },
                }}
            />
        </div>
    );
}
