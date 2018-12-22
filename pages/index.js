import Layout from "../components/Layout";

export default props => {
  return (
    <Layout title="ImiRP">
      <div className="jumbotron">
        <div className="container">
          <h1>
            ImiRP <small>Illegitimate microRNA Predictor</small>
          </h1>
          <p>
            Welcome to the Illegitimate microRNA Predictor (ImiRP), a Web
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
          <p className="text-center">
            <img
              width="75%"
              height="75%"
              src="static/images/ImiRP_Homepage_Illegitimate_sites.jpg"
              alt="ImiRP Illegitimate Sites"
              className="img-rounded"
            />
          </p>
          <p>
            ImiRP is a tool that enables researches to input their favourite
            3’UTR DNA or mRNA sequence and specify the species of interest and
            locations of miRNA target sites they wish to mutate. ImiRP automates
            the process of specified target site mutagenesis, and identifies and
            displays up to five mutations that do not generate illegitimate
            sites. This tool is especially powerful when investigating
            cooperative regulation of a single transcript by multiple miRNAs,
            where multi-site mutagenesis may be necessary.
          </p>
          <p>
            All mature miRNA sequence information was provided by the miRBase
            version 21 high confidence miRNA dataset.{" "}
          </p>
        </div>
      </div>
    </Layout>
  );
};
