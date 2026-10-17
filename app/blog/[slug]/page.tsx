import workslist from "../../../public/workslist.json";
import WorkDetail from "./WorkDetail";

// Static export: build one page per project at build time; any other slug is a 404 on the static host.
// No `dynamicParams = false` here: Next 14.1's dev server misreads it under output: "export" and claims
// generateStaticParams() is missing.
export function generateStaticParams() {
  return (workslist as { slug: string }[]).map((work) => ({ slug: work.slug }));
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  return <WorkDetail slug={params.slug} />;
}
