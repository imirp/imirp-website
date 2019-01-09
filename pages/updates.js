import Layout from "../components/Layout";

export default props => {
  return (
    <Layout title="Project Updates">
      <section className="section">
        <div className="container">
          <h1 className="title">Project Updates</h1>

          <div className="container" style={{ marginBottom: "50px" }}>
            <h2 className="subtitle">Jan 8, 2019</h2>
            <article>
              <p className="content">
                Added "ImiRP User Guide" in documentation
            </p>
              <p>BR&TW</p>
            </article>
          </div>

          <div className="container" style={{ marginBottom: "50px" }}>
            <h2 className="subtitle">Dec 26, 2018</h2>
            <article>
              <p className="content">
                The ImiRP website and application are currently undergoing
                upgrades. As we make changes, important information about project
                updates will be included here.
            </p>
              <p>BR&TW</p>
            </article>
          </div>


        </div>
      </section>
    </Layout>
  );
};
