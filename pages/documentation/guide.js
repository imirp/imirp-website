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
        <div className="container">
          <h2 className="subtitle is-3">Define mutation parameters</h2>
          <div className="content">
            <p>
              Once a project has been created, the user is directed to the project page where a mutation request can be submitted.
              The navigation menu on the left side of the project page presents “Overview”, “Mutate” and “Results” options.
          </p>
            <p>
              The “Overview” option on the project page provides a summary of the information that was input when the project was
              created.  It also provides information about any mutation requests that have been submitted.  If a mutation request
              has not been submitted yet, the number “0” appears on the mutation request tab and no information will be available
              for viewing.
          </p>
            <p>
              The “Mutate” menu option can be used to submit a mutation request for the created project. Once a mutation request
              has been submitted, results can be accessed using the “Results” menu.
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
              src="/static\images\guide\imirp_project_overview.PNG"
              alt="Project overview"
            />
            <figcaption>
              <strong>
                Overview of the Sample project showing the navigation side bar on the left-hand side of the page.
              </strong>
            </figcaption>
          </figure>
          <div className="content">
            <h3 className="subtitle is-5">Create a mutation request</h3>
            <p>
              In the “Mutate” menu, the desired mutation strategy and the invalid MRE site types can be defined. The
              “Mutation strategy” tab allows the user to define the nucleotides that can be used for introducing
              substitutions into the mutation sites.  Using the drop-down menu, the user can also specify the number of
              consecutive nucleotide changes required per mutation site. The program defaults to introducing 2 consecutive
              nucleotide substitutions per mutation site, using only the nucleobase “G”.
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
              src="/static\images\guide\imirp_mutation_strategy.PNG"
              alt="Mutation strategy"
            />
            <figcaption>
              <strong>
                Sample project mutation strategy.  This will ensure that three adjacent nucleotide substitutions will be
                introduced per mutation site using any of the four available nucleotides.
              </strong>
            </figcaption>
          </figure>
          <div className="content">
            <p>
              Next, the “Define Invalid Sites” tab enables the user to specify the MRE types that they want to avoid creating
              upon mutation of the defined mutation sites.  By clicking on the target site classes listed in the “Invalid site
              types” and “Valid site types” lists, and using the arrow buttons, users can move target site types between the
              two lists. Only mutations that do not create new invalid MRE types will be output in the results. However, any MRE
              types listed as valid may be created upon mutation.
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
              src="/static\images\guide\imirp_invalid_sites.PNG"
              alt="Define invalid sites"
            />
            <figcaption>
              <strong>
                In the Sample project, 7mer-A1, 8mer and 7mer-m8 MRE types have been defined as invalid.
              </strong>
            </figcaption>
          </figure>
          <div className="content">
            <p>
              Once mutation parameters have been defined, clicking the “Submit Mutation Request” button will begin the generation of
              mutant sequences that satisfy the input criteria.  The user will be directed to the results menu within the project page.
          </p>
          </div>
          <div className="content">
            <h2 className="subtitle is-3">Construct a final mutant sequence</h2>
            <p>Mutation sites and corresponding mutations are displayed in the results menu.</p>
            <h3 className="subtitle is-5">Select desired mutation(s)</h3>
            <p>
              Mutation sites are grouped based on inter-site spacing, with sites spaced less than 7 nucleotides apart being grouped into a
              single “Region”.  This is performed because 8mer MREs are the largest recognized sites. Therefore, MREs spaced more than 7
              nucleotides apart can be mutated without generating a new MRE that spans both mutations. The nucleotide position of each region
              is defined based on the start and end positions of the first and last sites in the region, and the mutation sites are displayed
              in square brackets.
          </p>
            <p>
              A maximum of five mutations that satisfy the input mutation criteria will be displayed per region.  For each region display box,
              the original input sequence is displayed above, and the mutated sequences are listed below.
          </p>
            <p>
              To select the desired mutant sequence for each region from the list, click on the select bubble to the left of the mutant sequence.
              One mutant sequence can be selected per region.  As mutant sequences are selected for each region the region display box will change
              green and the “Assembled Mutant Sequence” displayed below will be updated to include the specified nucleotide substitutions.
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
                maxWidth: "100%"
              }}
              src="/static\images\guide\imirp_results.png"
              alt="Output results"
            />
            <figcaption>
              <strong>
                The 5 mutation sites for the Sample project are divided into three regions based on inter-site spacing. Desired mutants are selected
                for each region, producing an assembled mutant sequence.
              </strong>
            </figcaption>
          </figure>
          <div className="content">
            <p>Once one mutant sequence has been selected per region, clicking the “Download Sequence Analysis” button will enable the user to download
              a ZIP folder, entitled mutant_analysis.zip, containing a single TXT file and three CSV files.  The TXT file contains the project information,
              input sequence and final mutant sequence.  The CSV files contain information about the predicted MREs in the input sequence, predicted MREs
              in the mutant sequence, and all predicted MREs that have been newly created in the mutant sequence.
            </p>
            <h3 className="subtitle is-5">Summary and submit new request</h3>
            <p>
              Returning to the overview menu reveals that one mutation request has now been submitted, and provides information about the mutation parameters,
              the total number of mutants generated, and the number of valid mutants generated.
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
              src="/static\images\guide\imirp_mutation_requests.PNG"
              alt="Mutation request summary"
            />
            <figcaption>
              <strong>
                Summary of the mutation request for the Sample project. A total of 2550 mutants were generated, 33 of which did not create new 7mer-A1, 8mer
                and 7mer-m8 MRE types.
              </strong>
            </figcaption>
          </figure>
          <div className="content">
            <p>
              If the mutation criteria are too stringent and successful (i.e. valid) mutations are not generated, returning to the mutate menu within the project
              page will enable to user to specify new mutation parameters and submit a new mutation request.
          </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
