const esbuild = require('esbuild');
const { execSync } = require('child_process');
const cssModulesPlugin = require('esbuild-css-modules-plugin');

execSync('node cleanup.js', { stdio: 'inherit' });

esbuild.build({
    entryPoints: ['./src/index.ts'],
    bundle: true, // Bundle all dependencies, including jquery
    splitting: true,
    format: 'esm',
    outdir: 'resources/dist',
    target: 'esnext',
    outbase: './src',
    loader: {
        '.ts': 'ts',
        '.css': 'css'
    },
    plugins: [cssModulesPlugin({
        inject: false, // Prevent inlining CSS; output as separate files
    })],
    resolveExtensions: ['.ts', '.js', '.css'],
    external: ['/resources/*'],
}).then(() => {
    console.log('Build successful');
}).catch(() => {
    process.exit(1);
});
