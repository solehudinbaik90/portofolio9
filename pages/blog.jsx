import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Title from "../src/components/common/title";
import posts, { categories, tags } from "../src/data/blog";

export default function Blog() {
  const router = useRouter();
  const { category, tag } = router.query;
  const [query, setQuery] = useState("");

  const filtered = posts.filter((p) => {
    const matchesQuery = !query || (p.title || "").toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !category || p.category === category;
    const matchesTag = !tag || (p.tags || []).includes(tag);
    return matchesQuery && matchesCategory && matchesTag;
  });

  const activeFilterLabel = category ? `Kategori: ${category}` : tag ? `Tag: ${tag}` : null;

  return (
    <>
      <Title
        variant="section-title"
        pageName="Artikel"
        typingData={['<span class="typed-bread"><a href="/">Beranda</a> / Blog</span>']}
      />
      <div className="section blog">
        <div className="content">
          <div className="title">
            <div className="title_inner">
              {activeFilterLabel ? activeFilterLabel : "Artikel Terbaru"}
            </div>
          </div>

          {activeFilterLabel && (
            <p className="active-filter">
              Menampilkan {filtered.length} artikel — <Link href="/blog"><a>Reset filter</a></Link>
            </p>
          )}

          <div className="blog-items">
            {filtered.length === 0 && <p>Tidak ada artikel yang cocok dengan filter ini.</p>}
            {filtered.map((post) => (
              <div className="blog-col" key={post.slug}>
                <div className="blog-item content-box">
                  <div className="post">
                    <div className="image">
                      <Link href={`/blog_post?slug=${post.slug}`}>
                        <a className="post-thumbnail">
                          <img src={post.image} alt={post.title} />
                          <span className="info">
                            <span className="centrize full-width">
                              <span className="vertical-center">
                                <span className="icon fas fa-plus" />
                              </span>
                            </span>
                          </span>
                        </a>
                      </Link>
                    </div>
                    <div className="desc">
                      <div className="date">{post.date}</div>
                      <Link href={`/blog_post?slug=${post.slug}`}>
                        <a className="name">{post.title}</a>
                      </Link>
                      <div className="single-post-text"><p>{post.excerpt}</p></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="content-sidebar">
            <aside id="secondary" className="widget-area">
              <div id="search" className="widget widget_search">
                <form className="search-form" method="GET" onSubmit={(e) => e.preventDefault()}>
                  <div className="search-form-label">
                    <input
                      type="search"
                      className="search-field"
                      id="search-input"
                      placeholder="Search ..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                </form>
              </div>

              <section className="widget widget_recent_entries">
                <h2 className="widget-title">Artikel Terbaru</h2>
                <ul>
                  {posts.slice(0, 4).map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog_post?slug=${p.slug}`}><a>{p.title}</a></Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="widget widget_categories">
                <h2 className="widget-title">Kategori</h2>
                <ul>
                  {categories.map((c) => (
                    <li key={c.name} className={category === c.name ? "active" : ""}>
                      <Link href={`/blog?category=${encodeURIComponent(c.name)}`}>
                        <a>{c.name}</a>
                      </Link>{" "}
                      <small>({c.count})</small>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="widget widget_tags">
                <h2 className="widget-title">Tags</h2>
                <div className="tags">
                  {tags.map((t) => (
                    <Link key={t} href={`/blog?tag=${encodeURIComponent(t)}`}>
                      <a className={tag === t ? "active" : ""}>{t}</a>
                    </Link>
                  ))}
                </div>
              </section>
            </aside>
          </div>
          <div className="clear" />
        </div>
      </div>
    </>
  );
}

Blog.pageTitle = "Artikel";
