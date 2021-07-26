const { compileTemplate } = require('@vue/component-compiler-utils');
const compiler = require('vue-template-compiler');

function stripTemplate(content) {
  content = content.trim();
  if (!content) {
    return content;
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

function pad(source) {
  return source
    .split(/\r?\n/)
    .map(line => `  ${line}`)
    .join('\n');
}

function genInlineComponentText(template, script) {
  const options = {
    source: `<div>${template}</div>`,
    filename: 'inline-component',
    compiler
  };

  const compiledTemplate = compileTemplate(options);
  if (compiledTemplate.tips && compiledTemplate.tips.length) {
    compiledTemplate.tips.forEach(tip => {
      console.warn(tip);
    });
  }
  if (compiledTemplate.errors && compiledTemplate.errors.length) {
    console.error(
      `\n  Error compiling template:\n${pad(compiledTemplate.source)}\n` +
        compiledTemplate.errors.map(e => `  - ${e}`).join('\n') +
        '\n'
    );
  }

  let demoComponentContent = `${compiledTemplate.code}`;
  let scriptTrimed = script.trim();
  if (scriptTrimed) {
    scriptTrimed = scriptTrimed.replace(/export\s+default/, 'const democomponentExport =');
  } else {
    scriptTrimed = 'const democomponentExport = {}';
  }
  demoComponentContent = `(function() {
    ${demoComponentContent}
    ${scriptTrimed}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })()`;
  return demoComponentContent;
}

module.exports = {
  stripScript,
  stripStyle,
  stripTemplate,
  genInlineComponentText
};
