
$DOC.mod('theme-switcher');

// example of using $DOC.parseContent function to create sections
$DOC.parseContent(function(){/*



<!--header-panel

# Markdown webdocs
### Simple Markdown site template

-->

*/});

// another example of creating a named section
$DOC.sections['footer-panel'] =
'[footer-layout scheme=line]\
* © 2013 [aplib on GitHub](https://github.com/aplib/markdown-site-template) MIT\n\
***\n\
* [Free download template from GitHub](http://aplib.github.io/markdown-site-template/markdown-site-template.zip)\
[/footer-layout]';
