# Launch

Seventh agent for Logically Done. Open this folder in Visual Studio Code or Visual Studio.

It reads the project and writes the launch steps:

- Web: Cloudflare Pages
- Phone: Expo
- Desktop: a zip you can hand out

Missing keys stay PLACEHOLDER. The box prints the exact commands instead of crashing. The live page calls `/api/owner/logically-done/launch`.

```text
npm start -- "Notes" "A web notes dashboard" "Push a new version v1.0.2"
```
