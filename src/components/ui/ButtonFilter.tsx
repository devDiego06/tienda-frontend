export interface ButtonFilterProps {
    label: string;
    onClick?: () => void;
    active?: boolean;
}


export default function ButtonFilter({ label, active}: ButtonFilterProps) {
  return (
    <button className={` ${active === true ? 'bg-primary-container text-on-primary-fixed px-5 py-2.5 rounded-full font-bold text-label-md' : 'bg-surface-container-high text-on-surface-variant px-5 py-2.5 rounded-full font-medium text-label-md hover:text-primary transition-colors'} `}>{label}</button>
  )
}
