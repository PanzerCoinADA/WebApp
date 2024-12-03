import {
	PropsWithChildren,
	ReactNode,
	Suspense,
	useEffect,
	useState,
} from "react";

export function canUseDOM() {
	return (
		typeof window !== "undefined" &&
		window.document &&
		window.document.createElement
	);
}

/**
 * Check if in SSR context or return window
 */
export function useWindow() {
	if (!canUseDOM()) {
		return null;
	}
	return window;
}

/**
 * Only render children on the client
 */
export function ClientOnly({
	fallback,
	children,
}: {
	fallback?: ReactNode;
} & PropsWithChildren) {
	const [Component, setComponent] = useState<any>(() => fallback);

	useEffect(() => {
		// @ts-ignore
		setComponent(() => lazy(children));
	}, []);

	return (
		<Suspense fallback={fallback}>
			<Component />
		</Suspense>
	);
}
