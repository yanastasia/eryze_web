interface Params { slug: string }

export default function WorkDetail({ params }: { params: Params }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-header text-3xl">{params.slug.replace(/-/g, " ")}</h1>
      <p className="mt-3 text-muted-foreground">Full case study coming soon.</p>
      <div className="mt-6 rounded-xl border border-border bg-card/60 p-6">
        <p className="text-sm text-muted-foreground">
          This page will contain deep-dive content, media, and outcomes for {params.slug}.
        </p>
      </div>
    </div>
  );
}