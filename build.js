const esbuild = require('esbuild');
const { globSync } = require('glob');
const { execSync } = require('child_process');

execSync('node cleanup.js', { stdio: 'inherit' });

esbuild.build({
    entryPoints: globSync('./src/**/*.ts'),
    bundle: true, // Bundle all dependencies, including jquery
    splitting: true,
    format: 'esm',
    outdir: 'resources/javaScript',
    target: 'esnext',
    outbase: './src',
    loader: {
        '.ts': 'ts',
    },
    external: [], // Ensure no libraries are excluded
}).then(() => {
    console.log('Build successful');
}).catch(() => {
    process.exit(1);
});
