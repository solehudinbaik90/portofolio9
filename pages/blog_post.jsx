import { useRouter } from "next/router";
import Link from "next/link";
import Title from "../src/components/common/title";
import postDetail from "../src/data/blog_post";
import posts from "../src/data/blog";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const meta = posts.find((p) => p.slug === slug) || posts[0];
  const post = slug && slug !== postDetail.slug ? { ...postDetail, ...meta } : postDetail;

  return (
    <>
      <Title
        variant="jarallax"
        pageName={meta.title}
        bannerImg={meta.image}
        typingData={[`<span class="typed-bread"><a href="/blog">${meta.category}</a> / ${meta.date}</span>`]}
      />
      <div className="section blog">
        <div className="content">
          <div className="post">
            <div className="content-box">
              <div className="single-post-text">
                {post.body.map((block, i) => {

                  if (block.type === "quote") {
                    return <blockquote key={i}><p>{block.text}</p></blockquote>;
                  }

                  if (block.type === "list") {
                    return <ul key={i}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
                  }

                  if (block.type === "p" && block.parts) {
                    return (
                      <p key={i}>
                        {block.parts.map((part, j) =>
                          typeof part === "string" ? (
                            part
                          ) : (
                            <Link key={j} href={part.href} legacyBehavior>
                              <a>{part.text}</a>
                            </Link>
                          )
                        )}
                      </p>
                    );
                  }
                  
                  return <p key={i}>{block.text}</p>;
                })}
              </div>
              <div className="post-text-bottom">
                <div className="social-share">
                  <span>Share:</span>
                  <a className="share-btn share-btn-facebook share-btn-1" title="Share on Facebook"><i className="fab fa-facebook" /></a>
                  <a className="share-btn share-btn-twitter share-btn-2" title="Share on Twitter"><i className="fab fa-twitter" /></a>
                  <a className="share-btn share-btn-linkedin share-btn-3" title="Share on Linkedin"><i className="fab fa-linkedin" /></a>
                  <a className="share-btn share-btn-reddit share-btn-4" title="Share on Reddit"><i className="fab fa-reddit" /></a>
                  <a className="share-btn share-btn-pinterest share-btn-5" title="Share on Pinterest"><i className="fab fa-pinterest" /></a>
                </div>
                <div className="cat-links">
                  <span>Posted in </span>
                  <a href={`/categories/${post.categorySlug}`}>{post.category}</a>
                  <span className="byline"> / by <span className="author">{post.author}</span></span>
                </div>
                <div className="tags-links">
                  <span>Tags:</span>
                  {post.tags.map((t) => <a key={t} href={`/tags/${t}`} rel="tag">{t}</a>)}
                </div>
              </div>
            </div>
          </div>
          <nav className="navigation post-navigation">
            <div className="nav-links">
              <div className="nav-previous">
                <Link href={`/blog_post?slug=${post.navigation.prev.slug}`} legacyBehavior>
                  <a title={post.navigation.prev.title}><span className="post-nav-next post-nav-text">Prev</span></a>
                </Link>
              </div>
              <div className="nav-next">
                <Link href={`/blog_post?slug=${post.navigation.next.slug}`} legacyBehavior>
                  <a title={post.navigation.next.title}><span className="post-nav-prev post-nav-text">Next</span></a>
                </Link>
              </div>
            </div>
          </nav>
          <div className="clear" />
        </div>
      </div>
    </>
  );
}

BlogPost.pageTitle = "Blog Post";