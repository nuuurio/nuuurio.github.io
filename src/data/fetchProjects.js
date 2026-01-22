const NETLIFY_BASE_URL = "https://wondrous-crisp-f58655.netlify.app";

export async function fetchProjects() {
  // const res = await fetch(`${NETLIFY_BASE_URL}/.netlify/functions/get-projects`);
  const res = await fetch(`../.netlify/functions/get-projects`);
  const data = await res.json();

  const pages = data.projects || [];

  const projects = pages.map((page) => {
    const props = page.properties || {};

    const title = props.Title?.title?.[0]?.plain_text ?? "Untitled";

    const subtitle = props.Subtitle?.rich_text?.[0]?.plain_text ?? "";

    const description = props.Description?.rich_text?.[0]?.plain_text ?? "";

    const slug = props.Slug?.rich_text?.[0]?.plain_text ?? page.id;

    const thumbFile = props.Thumbnail?.files?.[0];
    const imageUrl = thumbFile?.file?.url || thumbFile?.external?.url || "";

    const problem = (props.Problem?.rich_text || [])
      .map((r) => r.plain_text)
      .join("\n\n");

    const approach = (props.Approach?.rich_text || [])
      .map((r) => r.plain_text)
      .join("\n\n");

    const outcome = (props.Outcome?.rich_text || [])
      .map((r) => r.plain_text)
      .join("\n\n");

    const timeline =
      props.Duration?.rich_text?.[0]?.plain_text ?? "";

    const roles = (props.Role?.multi_select || []).map(
      (o) => o.name
    );

    const tags = (props.Tags?.multi_select || []).map(
      (o) => o.name
    );

    const tools = (props.Tools?.multi_select || []).map(
      (o) => o.name
    );

    const context = props.Context?.select?.name ?? "";

    const projectLink = page.public_url || page.url || "";
    const prototypeLink = props.Prototype_Link?.url ?? null;

    return {
      id: page.id,
      slug,
      title,
      subtitle,
      thumbnail: subtitle,
      imageUrl,
      heroImage: imageUrl,
      description,
      problem,
      approach,
      outcome,
      roles,
      tags,
      tools,
      context,
      timeline,
      projectLink,
      prototypeLink,
      gallery: [],
    };
  });

  return projects;
}
