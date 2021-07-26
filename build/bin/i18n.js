'use strict';

var fs = require('fs');
var path = require('path');
var langConfig = [{
  lang: 'zh-CN',
  pages: {
    component: {}
  }
}];

langConfig.forEach(lang => {
  try {
    fs.statSync(path.resolve(__dirname, `../../src/pages/${ lang.lang }`));
  } catch (e) {
    fs.mkdirSync(path.resolve(__dirname, `../../src/pages/${ lang.lang }`));
  }

  Object.keys(lang.pages).forEach(page => {
    var templatePath = path.resolve(__dirname, `../../src/pages/template/${ page }.tpl`);
    var outputPath = path.resolve(__dirname, `../../src/pages/${ lang.lang }/${ page }.vue`);
    var content = fs.readFileSync(templatePath, 'utf8');
    var pairs = lang.pages[page];

    Object.keys(pairs).forEach(key => {
      content = content.replace(new RegExp(`<%=\\s*${ key }\\s*>`, 'g'), pairs[key]);
    });

    fs.writeFileSync(outputPath, content);
  });
});