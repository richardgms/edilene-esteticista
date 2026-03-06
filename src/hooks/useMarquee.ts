import { useEffect, useRef } from "react";

interface UseMarqueeProps {
    direction: "left" | "right";
    speedPx: number;
}

export function useMarquee({ direction, speedPx }: UseMarqueeProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef(0);
    const halfWidthRef = useRef(0);
    const isDraggingRef = useRef(false);
    const lastXRef = useRef(0);
    const actualSpeedRef = useRef(speedPx);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const updateSpeed = () => {
            actualSpeedRef.current = window.innerWidth < 768 ? speedPx * 0.45 : speedPx;
        };
        updateSpeed();
        window.addEventListener("resize", updateSpeed);

        const normalize = (o: number, hw: number) =>
            ((o % hw) + hw) % hw - hw;

        const updateHalfWidth = () => {
            const hw = track.scrollWidth / 2;
            halfWidthRef.current = hw;
            if (direction === "right" && offsetRef.current === 0) {
                offsetRef.current = -hw;
            }
        };
        updateHalfWidth();

        const ro = new ResizeObserver(updateHalfWidth);
        ro.observe(track);

        let rafId: number;
        const animate = () => {
            const hw = halfWidthRef.current;
            if (hw > 0) {
                if (!isDraggingRef.current) {
                    offsetRef.current += direction === "left" ? -actualSpeedRef.current : actualSpeedRef.current;
                    offsetRef.current = normalize(offsetRef.current, hw);
                }
            }
            track.style.transform = `translateX(${offsetRef.current}px)`;
            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(rafId);
            ro.disconnect();
            window.removeEventListener("resize", updateSpeed);
        };
    }, [direction, speedPx]);

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        isDraggingRef.current = true;
        lastXRef.current = e.clientX;
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDraggingRef.current) return;
        offsetRef.current += e.clientX - lastXRef.current;
        lastXRef.current = e.clientX;
    };

    const stopDrag = () => {
        const hw = halfWidthRef.current;
        if (hw > 0) {
            offsetRef.current = ((offsetRef.current % hw) + hw) % hw - hw;
        }
        isDraggingRef.current = false;
    };

    return {
        trackRef,
        onPointerDown,
        onPointerMove,
        onPointerUp: stopDrag,
        onPointerCancel: stopDrag,
    };
}
