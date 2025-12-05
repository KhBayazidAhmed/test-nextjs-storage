import { Icon } from "../components/Icon";

export function generateStaticParams() {
  return new Array(1000).fill(0).map((_, i) => ({ id: i.toString() }));
}

export default function Page() {
  return (
    <div>
      {Array.from({ length: 1000 }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: Static list of icons, index is stable
        <p key={i}>
          <Icon />
        </p>
      ))}
    </div>
  );
}
