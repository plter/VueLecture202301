import nodeResolve from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";
import vuePlugin from 'rollup-plugin-vue';
import * as path from "path"

const isProduction = process.env.MODE == 'production';
const PROJECT_ROOT = path.dirname(import.meta.url.replace("file://", ""));
const FRONT_PROJECTS_SOURCE_ROOT = path.join(PROJECT_ROOT, "src", "front", "projects");
const FRONT_PROJECTS_OUTPUT_DIR = path.join(PROJECT_ROOT, "src", "main", "resources", "static", "public", "frontoutput");
const FRONT_PROJECTS_DEV_OUTPUT_DIR = path.join(PROJECT_ROOT, "build", "resources", "main", "static", "public", "frontoutput");

function createConfig(frontProjectName, mainFileExt = "ts") {
    return {
        input: path.join(FRONT_PROJECTS_SOURCE_ROOT, frontProjectName, "Main." + mainFileExt),
        external: ["vue"],
        output: {
            file: path.join(isProduction ? FRONT_PROJECTS_OUTPUT_DIR : FRONT_PROJECTS_DEV_OUTPUT_DIR, frontProjectName + ".js"),
            format: "iife",
            sourcemap: isProduction ? false : "inline",
            name: frontProjectName,
            globals: {
                vue: "Vue"
            }
        },
        plugins: [vuePlugin(), nodeResolve(), terser({compress: true})]
    }
}

export default [
    createConfig("index", "vue"),
    createConfig("FirstView", "vue")
]