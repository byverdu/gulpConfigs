import Handlebars from "handlebars";

// content inside partial
const indexBoxHtml = `<h2>Awesome Dangerous Conent</h2>
<span>
  <a class="btn btn-primary" href="contact.html">
    Get A Quote
  </a>
</span>`;

// Parser fot html tags
const safeString = (content) => {
  return new Handlebars.SafeString(content);
}

export {
  indexBoxHtml,
  safeString
}
