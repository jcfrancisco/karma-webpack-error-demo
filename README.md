# karma-webpack-error-demo

To reproduce this, pull down this repo, `npm install`, then run `gulp test`.

Conditions to reproduce:

0. You must be running Karma through gulp 4.0.
1. There must be more than one spec file being run by Karma.
2. You must be using Webpack as a preprocessor for your spec files. (`karma-webpack`)
3. One or more of these spec files must have either a syntax error, or an import statement that resolves to a nonexistent file.

You should see an error message (generated by the syntax error in
`spec/has_syntax_error.js`) that does not point to where the syntax error is.
