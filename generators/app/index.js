const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    // yeoman 在询问用户环节会自动调用此方法
    prompting() {
        return this.prompt([{
                type: "input",
                name: 'name',
                message: "Your project name",
                default: this.appname
            }])
            .then(answers => {
                this.answers = answers
            })
    }
    // yeoman 自动在生成文件中调用此方法
    writing() {
        const templates = [".browserslistrc", ".editorconfig", ".eslintrc.js", ".gitignore", "README.md", "babel.config.js", "package.json", "public/favicon.ico", "public/index.html", "src/App.vue", "src/assets/logo.png", "src/components/HelloWorld.vue", "src/main.js", "src/router/index.js", "src/store/index.js", "src/views/About.vue", "src/views/Home.vue"]
        templates.forEach(filePath=>{
            this.fs.copyTpl(
                this.templatePath(filePath),
                this.destinationPath(filePath),
                this.answers
            )
        })
    }
}