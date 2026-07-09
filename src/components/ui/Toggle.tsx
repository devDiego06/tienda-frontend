interface ToggleProps {
    defaultChecked?: boolean;
    label?: string;
}

export function Toggle({ defaultChecked = false, label }: ToggleProps) {
    return (
        <label className="group relative inline-flex cursor-pointer items-center">
            <input type="checkbox" defaultChecked={defaultChecked} className="sr-only" />
            <div className="relative h-6 w-11 shrink-0 rounded-full bg-surface-container-highest transition-colors duration-300 group-has-[:checked]:bg-primary-container">
                <span className="absolute left-1 top-1 block h-4 w-4 rounded-full bg-on-surface-variant transition-all duration-300 group-has-[:checked]:translate-x-full group-has-[:checked]:bg-[#283500]" />
            </div>
            {label && <span className="ml-3 text-xs text-on-surface-variant">{label}</span>}
        </label>
    );
}
