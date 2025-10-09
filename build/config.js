import pkg from "../package.json" with { type: "json" };
export const config = {
    api_version: pkg.version,
};
