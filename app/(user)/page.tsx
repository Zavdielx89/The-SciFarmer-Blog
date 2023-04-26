import { previewData } from "next/headers";

export default function HomePage() {
  if (previewData()) {
    return <div>Preview mode is enabled</div>;
  }

  return (
    <div>
      <h1>Not in Preview Mode</h1>
    </div>
  );
}
