module.exports = (plop) => {
	plop.setGenerator("component", {
		description: "Generate component files",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "Component name",
			},
		],
		actions: [
			{
				type: "add",
				path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
				templateFile: "plop-templates/component.tsx.hbs",
			},
			{
				type: "add",
				path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
				templateFile: "plop-templates/component.module.scss.hbs",
			},
			{
				type: "add",
				path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
				templateFile: "plop-templates/component.stories.tsx.hbs",
			},
		],
	});
};
