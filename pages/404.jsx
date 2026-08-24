import Link from "next/link";

export default function Custom404() {
  return (
    <div className="section started section-title" id="section-started">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <h1 className="h-title">404</h1>
            <p>Halaman yang Anda cari tidak ditemukan.</p>
            <Link href="/">
              <a className="btn hover-animated"><span className="circle" /><span className="lnk">Kembali ke Beranda</span></a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Custom404.pageTitle = "404 Not Found";