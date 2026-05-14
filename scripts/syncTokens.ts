import * as fs from "node:fs";
import * as path from "node:path";

const checkMode = process.argv.includes("--check");
const distDir = path.resolve(
	import.meta.dirname,
	"..",
	"packages",
	"tokens",
	"dist",
);

function checkArtifact(relativePath: string, label: string): boolean {
	const fullPath = path.join(distDir, relativePath);
	if (!fs.existsSync(fullPath)) {
		console.error(`missing ${label}: ${relativePath}`);
		return false;
	}
	const stat = fs.statSync(fullPath);
	if (stat.size === 0) {
		console.error(`empty ${label}: ${relativePath}`);
		return false;
	}
	return true;
}

function main(): void {
	const artifacts: [string, string][] = [
		["css/variables.css", "CSS variables"],
		["tailwind/preset.js", "Tailwind preset"],
		["native/tokens.js", "Native token map"],
	];

	if (checkMode) {
		let allOk = true;
		for (const [relPath, label] of artifacts) {
			if (!checkArtifact(relPath, label)) {
				allOk = false;
			}
		}

		if (!allOk) {
			console.error(
				"token artifacts incomplete — run npm run build -w packages/tokens",
			);
			process.exit(1);
		}
		console.log(
			"all token artifacts verified: CSS variables, Tailwind preset, Native token map",
		);
		return;
	}

	console.log("sync tokens: use npm run build -w packages/tokens to generate");
}

main();
