export function buildLaunch({ projectName, description = "", notes = "", ready = false }) {
  const version = notes.match(/v\d+\.\d+\.\d+/)?.[0] || "v1.0.0";
  const text = `${projectName} ${description}`.toLowerCase();
  const target = /mobile|iphone|android/.test(text) ? "mobile" : /desktop|terminal/.test(text) ? "desktop" : "web";
  const steps = target === "mobile"
    ? ["Paste EXPO_TOKEN. It is PLACEHOLDER until you do.", "npx eas-cli build --platform all"]
    : target === "desktop"
      ? [`Zip the folder as ${projectName}-${version}.zip.`]
      : ["Paste CLOUDFLARE_API_TOKEN. It is PLACEHOLDER until you do.", `npx wrangler pages deploy apps/web --project-name ${projectName}`];
  return {
    projectName,
    version,
    target,
    ready,
    github: process.env.GITHUB_TOKEN ? "saved" : "placeholder",
    done: [`Wrote the ${version} launch file for ${target}.`],
    steps,
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(buildLaunch({ projectName: process.argv[2] || "Notes", description: process.argv[3] || "web dashboard", notes: process.argv[4] || "" }), null, 2));
}
