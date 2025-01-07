interface ShowProps {
  when: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export default function Show(props: ShowProps) {
  const { when, fallback = null, children } = props;
  return when ? children : fallback;
}
