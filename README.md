# Typescript
Practice of typescript.

> ###### npm i typescript -D : 
        It is always advisable to install typescript as a dev-dependency.
> ###### tsc --init:
        Typescript compiler. Use it to indicate that it is a typescript project. This command tells compler that how to transform typescript file into javascript.
> ###### npm install @types/node -D:
        Modules that are written in JS and you want to include them in TS project , then install packages using @types to have the type information.
> ###### npm i ts-node-dev --save-dev:
        It restarts target node process when any of required files changes (as standard node-dev) but shares Typescript compilation process between restarts. 
> ###### "scripts": {
        "start": "ts-node-dev --respawn --transpile-only server.ts".
        this script restarts the server as soon as you save your file.