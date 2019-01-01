import Layout from "../../components/Layout";

export default props => {
  return (
    <Layout title="Documentation">
      <section className="section">
        <div className="container">
          <h1 className="title is-2">ImiRP User Guide</h1>
          <h2 className="subtitle is-3">Create a new project</h2>
          <div className="content">
            <p>
              ImiRP can be used to generate mutants for microRNA recognition
              elements (MRE) in a nucleotide sequence of interest while ensuring
              that new MREs are not introduced in the process. To do this, it is
              first necessary to create a new project, input a sequence of
              interest, specify the species of interest, and specify the MREs to
              be mutated.
            </p>
            <h3 className="subtitle is-5">Project description</h3>
            <p>
              To use the ImiRP web application, go to imirp.org. Click on the
              Launch ImiRP tool at the top of the screen, and then select
              “Create New Project” from the Projects drop-down menu. To create a
              new project, first provide a project name (mandatory) and a
              description of the project (optional).
            </p>
          </div>
          <figure
            className="content"
            style={{
              marginTop: "24px"
            }}
          >
            <img
              style={{
                maxWidth: "50%"
              }}
              src="/static/images/guide/imirp_project_description.PNG"
              alt="Create sample project"
            />
            <figcaption>
              <strong>
                Creation of “Sample project”, with the goal of mutating 6 MREs
                in a mouse 3’UTR sequence.
              </strong>
            </figcaption>
          </figure>
          <div className="content">
            <h3 className="subtitle is-5">Sequence input</h3>
            <p>
              Next, click on the “Sequence Input” tab of the “Create Project”
              menu, input the sequence to be mutated and select the species of
              interest. ImiRP will accept DNA or RNA sequences, and the input
              sequence is then displayed above the create project tabs. To
              indicate the species, begin typing the scientific name or three
              letter organism code into the “Species” text box. All species
              having miRNA sequences available in <a href="http://www.mirbase.org/">miRBase version 22</a>
              are available for selection.
              </p>
          </div>
          <figure
            className="content"
            style={{
              marginTop: "24px"
            }}
          >
            <img
              style={{
                maxWidth: "50%"
              }}
              src="/static\images\guide\imirp_sequence_input.PNG"
              alt="Input sequence"
            />
            <figcaption>
              <strong>
                A 150-nucleotide sequence copied into the sequence textbox and displayed for viewing.
                Beginning to type “mmu”, the 3-letter code for mouse, into the species textbox reveals
                Mus musculus as one of the species options.
              </strong>
            </figcaption>
          </figure>
          <div className="content">
            <h3 className="subtitle is-5">Target sites</h3>
            <p>Use the “Target sites” tab of the “Create Project” menu to specify the MREs into which
              nucleotide substitutions will be introduced. Identify the nucleotide start positions of
              the 6mer “core” for each MRE to be mutated within the input sequence. For each MRE, this
              represents the nucleotide that is complementary to position 7 of the targeting miRNA. </p>
          </div>
          <table>
            <tr>
              <th>miRNA</th>
              <th>Site type</th>
              <th>MRE sequence</th>
              <th>3'UTR positions</th>
            </tr>
            <tr>
              <td>mmu-miR-7-5p</td>
              <td>8mer+G:U</td>
              <td>GTTTTCCA</td>
              <td>17-22</td>
            </tr>
            <tr>
              <td>mmu-miR-9</td>
              <td>6mer</td>
              <td>CCAAAG</td>
              <td>21-26</td>
            </tr>
            <tr>
              <td>mmu-miR-376c</td>
              <td>7mer-m8+G:U</td>
              <td>TTAACAGA</td>
              <td>45-50</td>
            </tr>
            <tr>
              <td>mmu-miR-450b-5p</td>
              <td>7mer-A1</td>
              <td>TGCAAAA</td>
              <td>50-55</td>
            </tr>
            <tr>
              <td>mmu-miR-129-5p</td>
              <td>8mer</td>
              <td>GCAAAAAA</td>
              <td>52-57</td>
            </tr>
            <tr>
              <td>mmu-miR-329</td>
              <td>6mer</td>
              <td>GTGTGT</td>
              <td>104-109</td>
            </tr>
          </table>
          <figure
            className="content"
            style={{
              marginTop: "24px"
            }}
          >
            <img
              style={{
                maxWidth: "50%"
              }}
              src="/static\images\guide\imirp_sample_sequence.PNG"
              alt="Sample sequence"
            />
            <figcaption>
              <strong>
                Sample sequence showing predicted MREs to be mutated. Highlight indicates
                the 3’UTR region predicted to interact with the miRNA. Underline indicates
                the 6mer “core” of each MRE, the region into which substitution mutations
                will be introduced.
              </strong>
            </figcaption>
          </figure>
          <div className="content">
            <p>Type the MRE start positions into the “mutation sites” text box to specify the sites to mutate. The
              region of the predicted MRE complementary to miRNA positions 2-7, called the mutation site, will be
              bolded in the displayed input sequence.  Also, the input sequence position of the start and end of the
              defined mutation site will be represented in (x, y) format, where x is the first and y is the last
              nucleotide of the mutation site.  This process can be repeated to specify multiple mutation sites per
              input sequence. Mutation sites can be removed by clicking the X. Click the “Create project” button to
            begin specifying mutation parameters.</p>
          </div>
          <figure
            className="content"
            style={{
              marginTop: "24px"
            }}
          >
            <img
              style={{
                maxWidth: "50%"
              }}
              src="/static\images\guide\imirp_specify_mre.PNG"
              alt="Define MREs"
            />
            <figcaption>
              <strong>
                6 mutation sites are defined in the sample sequence. In this example, the mutation site for miR-7 is listed
                as (17,22), and is defined in the display sequence as |TTTTCC|. The mutation site for miR-329, starting at
                position 104, is in the process of being entered.
              </strong>
            </figcaption>
          </figure>
        </div>
      </section>
    </Layout>
  );
};
