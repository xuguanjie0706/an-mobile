// plopfile.mjs
export default function(plop) {
  // Define a generator for creating components
  plop.setGenerator('component', {
    description: 'create a new component with .less, .tsx, and index.ts files',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: data => {
      const folderName = data.name.toLowerCase();
      console.log(folderName);
      return [
        {
          type: 'add',
          path: `src/{{pascalCase name}}/{{pascalCase name}}.less`,
          templateFile: 'plop-templates/less.hbs',
        },
        {
          type: 'add',
          path: `src/{{pascalCase name}}/index.md`,
          templateFile: 'plop-templates/md.hbs',
        },
        {
          type: 'add',
          path: `src/{{pascalCase name}}/demos/demo1.tsx`,
          templateFile: 'plop-templates/demo1.hbs',
        },
        {
          type: 'add',
          path: `src/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: 'plop-templates/tsx.hbs',
        },
        {
          type: 'add',
          path: `src/{{pascalCase name}}/index.ts`,
          templateFile: 'plop-templates/index.hbs',
        },
      ];
    },
  });
}