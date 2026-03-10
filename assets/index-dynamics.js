document.addEventListener("DOMContentLoaded", function () {
  var isHome = window.location.pathname === "/" || window.location.pathname.endsWith("/index.html");
  if (!isHome) return;

  document.body.classList.add("home-dynamic");
  var main = document.querySelector("main");
  if (!main) return;

  var promptParagraphs = Array.prototype.slice.call(main.querySelectorAll(":scope > p")).filter(function (p) {
    return p.querySelector(".shell-prompt");
  });
  var clockNodes = [];

  function splitCommandAndOutput(promptLine, promptSpan) {
    // In the rendered HTML, the command and output are typically in one <p>:
    // [prompt] cmd\noutput... (where output may include <a>, <strong>, etc.)
    var commandText = "";
    var outputFragment = document.createDocumentFragment();
    var inCommand = true;
    var seenAnyOutput = false;

    // Only consider nodes after the prompt span.
    var nodes = [];
    for (var n = promptSpan.nextSibling; n; n = n.nextSibling) nodes.push(n);

    nodes.forEach(function (node) {
      if (!inCommand) {
        outputFragment.appendChild(node);
        seenAnyOutput = true;
        return;
      }

      if (node.nodeType === Node.TEXT_NODE) {
        var text = node.nodeValue || "";
        var newlineIndex = text.indexOf("\n");
        if (newlineIndex === -1) {
          commandText += text;
          node.remove();
          return;
        }

        commandText += text.slice(0, newlineIndex);
        var rest = text.slice(newlineIndex + 1);
        node.remove();

        if (rest) {
          outputFragment.appendChild(document.createTextNode(rest));
          seenAnyOutput = true;
        }
        inCommand = false;
        return;
      }

      // If we encounter an element while still "in command", treat it as output to
      // avoid flattening links/markup into plain text.
      inCommand = false;
      outputFragment.appendChild(node);
      seenAnyOutput = true;
    });

    commandText = commandText.replace(/^\s+/, "").replace(/\s+$/, "");

    // If output starts empty but the original paragraph had additional lines,
    // there may be leading whitespace/newlines still in the paragraph.
    var remaining = promptLine.textContent || "";
    if (!seenAnyOutput && remaining.indexOf("\n") !== -1) {
      // fallback: keep paragraph as-is (minus prompt span); don't risk losing markup
      seenAnyOutput = true;
    }

    return { commandText: commandText, outputFragment: outputFragment, hasOutput: seenAnyOutput };
  }

  promptParagraphs.forEach(function (startParagraph, idx) {
    var section = document.createElement("section");
    section.className = "terminal-section";
    section.style.setProperty("--reveal-order", String(idx + 2));
    main.insertBefore(section, startParagraph);

    var cursor = startParagraph;
    while (cursor) {
      var next = cursor.nextElementSibling;
      var nextIsPrompt = !!(next && next.matches("p") && next.querySelector(".shell-prompt"));
      section.appendChild(cursor);
      if (nextIsPrompt) break;
      cursor = next;
    }

    var prompt = section.querySelector(".shell-prompt");
    if (!prompt) return;

    var promptLine = prompt.closest("p");
    var split = promptLine ? splitCommandAndOutput(promptLine, prompt) : { commandText: "", outputFragment: document.createDocumentFragment(), hasOutput: false };

    var header = document.createElement("div");
    header.className = "terminal-header";
    header.innerHTML =
      "<div class=\"terminal-header-line\">┬─[k@kkws:~]─[<span class=\"dynamic-prompt-time\"></span>]</div>" +
      "<div class=\"terminal-header-line\">╰─&gt;$ " +
      (split.commandText ? "<span class=\"terminal-command\"></span>" : "<span class=\"dynamic-caret\" aria-hidden=\"true\"></span>") +
      "</div>";

    var cmdNode = header.querySelector(".terminal-command");
    if (cmdNode) cmdNode.textContent = split.commandText;

    var timeNode = header.querySelector(".dynamic-prompt-time");
    if (timeNode) clockNodes.push(timeNode);

    section.insertBefore(header, section.firstChild);

    if (promptLine) {
      // Turn the original prompt <p> into the output <p> so links remain clickable.
      prompt.remove();
      promptLine.classList.add("terminal-output");

      // If we successfully split output: replace contents with output fragment.
      // Otherwise, leave the paragraph content intact (minus prompt) to avoid data loss.
      if (split.hasOutput) {
        while (promptLine.firstChild) promptLine.removeChild(promptLine.firstChild);
        promptLine.appendChild(split.outputFragment);
      }

      // If it's empty after transform, remove it.
      if (!promptLine.textContent || !promptLine.textContent.trim()) {
        promptLine.remove();
      }
    }
  });

  var emptySection = document.createElement("section");
  emptySection.className = "terminal-section terminal-empty";
  emptySection.style.setProperty("--reveal-order", String(promptParagraphs.length + 2));
  emptySection.innerHTML =
    "<div class=\"terminal-header\">" +
    "<div class=\"terminal-header-line\">┬─[k@kkws:~]─[<span class=\"dynamic-prompt-time\"></span>]</div>" +
    "<div class=\"terminal-header-line\">╰─&gt;$ <span class=\"dynamic-caret\" aria-hidden=\"true\"></span></div>" +
    "</div>";
  main.appendChild(emptySection);
  var emptyTime = emptySection.querySelector(".dynamic-prompt-time");
  if (emptyTime) clockNodes.push(emptyTime);

  function updateClock() {
    var now = new Date();
    var value = now.toLocaleString("zh-CN", { hour12: false });
    clockNodes.forEach(function (node) {
      node.textContent = value;
    });
  }

  updateClock();
  window.setInterval(updateClock, 1000);

  var blocks = Array.prototype.slice.call(main.querySelectorAll(":scope > blockquote, :scope > pre.hero-logo, :scope > .terminal-section"));
  blocks.forEach(function (block, i) {
    block.classList.add("reveal-item");
    block.style.setProperty("--reveal-order", String(i));
  });

  window.requestAnimationFrame(function () {
    document.body.classList.add("reveal-ready");
  });
});
