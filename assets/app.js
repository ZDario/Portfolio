(function () {
  // encodeURI leaves "[" "]" "#" "?" untouched; encode each path segment fully instead.
  const url = (path) => path.split("/").map(encodeURIComponent).join("/");

  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    }
    children.forEach((c) => c && node.appendChild(c));
    return node;
  };

  const main = document.getElementById("projects");
  const nav = document.getElementById("nav-links");
  const gallery = []; // flat list of all images for the lightbox

  PROJECTS.forEach((p, i) => {
    nav.appendChild(el("li", {}, [el("a", { href: "#" + p.id, text: p.title })]));

    const section = el("section", { id: p.id, class: "project" + (i % 2 ? " alt" : "") });
    const inner = el("div", { class: "container" });

    inner.appendChild(el("p", { class: "eyebrow", text: p.type }));
    inner.appendChild(el("h2", { text: p.title }));
    inner.appendChild(el("p", { class: "desc", text: p.description }));
    inner.appendChild(el("ul", { class: "tags" }, p.tags.map((t) => el("li", { text: t }))));

    if (p.videos.length) {
      const grid = el("div", { class: "videos" + (p.videos.length === 1 ? " single" : "") });
      p.videos.forEach((v) => {
        const video = el("video", { controls: "", preload: "metadata", playsinline: "" });
        video.appendChild(el("source", { src: url(v.src) + "#t=0.5", type: "video/mp4" }));
        grid.appendChild(
          el("figure", { class: "video-card" + (v.portrait ? " portrait" : "") }, [
            video,
            v.caption ? el("figcaption", { text: v.caption }) : null
          ])
        );
      });
      inner.appendChild(grid);
    }

    if (p.images.length) {
      const grid = el("div", { class: "gallery" });
      p.images.forEach((img) => {
        const index = gallery.push({ src: url(img.src), caption: img.caption || p.title }) - 1;
        const thumb = el("img", { src: url(img.src), alt: img.caption || p.title, loading: "lazy" });
        const btn = el("button", { class: "thumb", "aria-label": "Open image" }, [thumb]);
        btn.addEventListener("click", () => openLightbox(index));
        grid.appendChild(btn);
      });
      inner.appendChild(grid);
    }

    if (p.links.length) {
      inner.appendChild(
        el("div", { class: "links" }, p.links.map((l) =>
          el("a", { class: "btn btn-outline small", href: url(l.href), target: "_blank", rel: "noopener", text: l.label })
        ))
      );
    }

    section.appendChild(inner);
    main.appendChild(section);
  });

  // Only one video plays at a time
  document.addEventListener("play", (e) => {
    document.querySelectorAll("video").forEach((v) => v !== e.target && v.pause());
  }, true);

  // Lightbox
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbCap = document.getElementById("lb-caption");
  let current = 0;

  function show(i) {
    current = (i + gallery.length) % gallery.length;
    lbImg.src = gallery[current].src;
    lbImg.alt = gallery[current].caption;
    lbCap.textContent = gallery[current].caption;
  }
  function openLightbox(i) {
    show(i);
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.hidden = true;
    document.body.style.overflow = "";
  }

  lb.querySelector(".lb-close").addEventListener("click", closeLightbox);
  lb.querySelector(".lb-prev").addEventListener("click", () => show(current - 1));
  lb.querySelector(".lb-next").addEventListener("click", () => show(current + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
