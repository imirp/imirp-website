import Layout from "../components/Layout";
import Link from "next/link"

export default props => {
  return (
    <Layout title="ImiRP">
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">ImiRP</h1>
            <h2 className="subtitle">Illegitimate microRNA Predictor</h2>
            <p className="content">
              Welcome to the Illegitimate microRNA Predictor (ImiRP), an open source Web
              application designed to selectively mutate predicted miRNA target
              sites while ensuring that predicted target sites for other miRNAs,
              termed illegitimate target sites, are not created in the process.
              Accidental creation of illegitimate target sites upon disruption of
              existing miRNA target sites can complicate analysis of miRNA-target
              regulation. Given the small size of miRNA recognition motifs and the
              abundance of identified miRNAs, the likelihood of generating an
              illegitimate site upon mutation of an existing site is high. This
              becomes even more problematic when trying to mutate multiple
              predicted target sites simultaneously.
            </p>

            <a className="button" href="http://app.imirp.org/">Get Started Now</a>
            <Link href="/about">
              <a className="button is-info" >Read more about ImiRP</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout >
  );
};
