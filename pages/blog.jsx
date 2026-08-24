import Link from "next/link";
import { useState } from "react";
import Title from "../src/components/common/title";
import posts, { categories, tags } from "../src/data/blog";

export default function Blog() {
  const [query, setQuery] = useState("");
  const filtered = posts.filter((p) => (p?.title || "").toLowerCase().includes((query || "").toLowerCase()));
  return (
    <>
      <Title variant="section-title" pageName="Artikel" typingData={['<span class="typed-bread"><a href="/">Beranda</a> / Blog</span>']} />
      <div className="section blog">
        <div className="content">
          <div className="title"><div className="title_inner">Artikel Terbaru</div></div>
          <div className="blog-items">
            {filtered.map((post) => (
              <div className="blog-col" key={post.slug}>
                <div className="blog-item content-box">
                  <div className="post">
                    <div className="image">
                      <Link href={`/blog_post?slug=${post.slug}`}>
                        <a className="post-thumbnail">
                          <img src={post.image} alt={post.title} />
                          <span className="info"><span className="centrize full-width"><span className="vertical-center"><span className="icon fas fa-plus" /></span></span></span>
                        </a>
                      </Link>
                    </div>
                    <div className="desc">
                      <div className="date">{post.date}</div>
                      <Link href={`/blog_post?slug=${post.slug}`}><a className="name">{post.title}</a></Link>
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
                <form class="search-form" method="GET">
                <div class="search-form-label">
                <input type="search" class="search-field" id="search-input" placeholder="Search ..." value=""/>
                <input type="submit" class="search-submit" value="Search ..."/>
                </div>
                <ul id="results-container"></ul>
                </form>
              </div>
              <section className="widget widget_recent_entries">
                <h2 className="widget-title">Artikel Terbaru</h2>
                <ul>{posts.slice(0, 4).map((p) => <li key={p.slug}><Link href={`/blog_post?slug=${p.slug}`}><a>{p.title}</a></Link></li>)}</ul>
              </section>
              <section className="widget widget_categories">
                <h2 className="widget-title">Kategori</h2>
                <ul>{categories.map((c) => <li key={c.name}><a href="#">{c.name}</a> <small>({c.count})</small></li>)}</ul>
              </section>
              <section className="widget widget_tags">
                <h2 className="widget-title">Tags</h2>
                <div className="tags">{tags.map((t) => <a key={t} href="#">{t}</a>)}</div>
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
