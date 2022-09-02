interface Props {
  icon: any
  children: any
}

const Badge = ({ icon, children }: Props) => {
  return (
    <span
      className="px-1.5 py-0.5"
      flex="~ row gap-1"
      items-center
      justify-center
      text-xs
      font-400
      border-rounded
      bg="[var(--brand-color)]"
      // dark:bg="#3E6B27"
      text="[var(--text-color)]"
    >
      {icon}
      {children}
    </span>
  )
}

export default Badge
