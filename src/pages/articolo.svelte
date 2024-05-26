<script>
  import Download from '../components/download.svelte';

  import { Navbar, Page, Block, Tabs, Tab, Link, Toolbar, NavRight, BlockTitle, Card, CardHeader, CardContent, CardFooter, List, ListItem, } from 'framework7-svelte';
  import immaginedonne from '../img/noi-donne.jpg';
  import emancipazione_femm from '../img/emancipazione.jpg';
  import merini from '../img/merini.jpg';
  import stragi_italia from '../img/stragi.jpg';
  import depistaggioo from '../img/depistaggio.jpg';
  import maxi_processo from '../img/maxi.jpg';
  import pena_di_muerte from '../img/pena_di_mortee.jpg';
  import carcerieri from '../img/carceri_italia.jpg';
  import PdfViewer from '../components/pdfviewer.svelte';
  let toolbarPosition = 'bottom';

  function toggleToolbarPosition() {
    toolbarPosition = toolbarPosition === 'top' ? 'bottom' : 'top';
  }



</script>

<Page pageContent={false}>
  <Navbar title="Italiano & Storia">
    <NavRight>
      <Link
        iconMd="material:compare_arrows"
        iconIos="f7:arrow_up_arrow_down_circle_fill"
        icon="f7:arrow_up_arrow_down_circle_fill"
        onClick={toggleToolbarPosition}
      />
    </NavRight>
  </Navbar>
  <Toolbar tabbar position={toolbarPosition}>
    <Link tabLink="#tab-1" tabLinkActive>Pag. 1</Link>
    <Link tabLink="#tab-2">Pag. 2</Link>
    <Link tabLink="#tab-3">Pag. 3</Link>
    <Link tabLink="#tab-4">Pag. 4</Link>
    <Link tabLink="#tab-5">Pag. 5</Link>
    <Link tabLink="#tab-6">Pag. 6</Link>
    <Link tabLink="#tab-7">Pag. 7</Link>
    <Link tabLink="#tab-8">Pag. 8</Link>
    
  </Toolbar>

  <Tabs>
    <Tab id="tab-1" class="page-content" tabActive>
      <Block>
        <p>Contenuto Pag. 1</p>

        <div class="container">
          <div class="text">
            <h1>Diritti delle Donne<small>(2020/21)</small></h1>
            <p>
              <PdfViewer href="diritti_donne.pdf"/>
            </p>
          </div>
          <img src={immaginedonne} alt="Foto Donne">
        </div>

        <Navbar title="Indietro" backLink="Back" />
      </Block>
    </Tab>
    
    <!-- tab 2 -->

    <Tab id="tab-2" class="page-content">
      <Block>
        <!-- <p>descrizione</p> -->
        <p>
          Contenuto Pag. 2
        </p>
        <div class="container">
          <div class="text">
            <h1>Emancipazione Femminile<small>(2020/21)</small></h1>
            <p>
              <PdfViewer href="emancipazione_femminile.pdf"/>
            </p>
          </div>
          <img src={emancipazione_femm} alt="Foto Donne">
        </div>
        <Navbar title="Indietro" backLink="Back" />
      </Block>
    </Tab>

    <!-- tab 3 -->

    <Tab id="tab-3" class="page-content">
      <Block>
        <p>Contenuto Pag. 3</p>
        <div class="container">
          <div class="text">
            <h1>Alda Merini<small>(2020/21)</small></h1>
            <p>
              <PdfViewer href="alda_merini.pdf"/>
            </p>
          </div>
          <img src={merini} alt="Foto Donne">
        </div>
        <Navbar title="Indietro" backLink="Back" />
      </Block>
    </Tab>


    <Tab id="tab-4" class="page-content" tabActive>
      <Block>
        <p>Contenuto Pag. 4</p>
        <div class="container">
          <div class="text">
            <h1>Stragi in Italia<small>(2020/21)</small></h1>
            <p>
              <PdfViewer href="stragi_in_italia.pdf"/>
            </p>
          </div>
          <img src={stragi_italia} alt="Foto Donne">
        </div>
        <Navbar title="Indietro" backLink="Back" />
      </Block>
    </Tab>
    
    <!-- tab 2 -->

    <Tab id="tab-5" class="page-content">
      <Block>
        <!-- <p>descrizione</p> -->
        <p>
          Contenuto Pag. 5
        </p>
        <div class="container">
          <div class="text">
            <h1>Depistaggio<small>(2020/21)</small></h1>
            <p>
              <PdfViewer href="depistaggio.pdf"/>
            </p>
          </div>
          <img src={depistaggioo} alt="Foto Donne">
        </div>
        <Navbar title="Indietro" backLink="Back" />
      </Block>
    </Tab>

    <!-- tab 3 -->

    <Tab id="tab-6" class="page-content">
      <Block>
        <p>Contenuto Pag. 6</p>
        <div class="container">
          <div class="text">
            <h1>Il Maxiprocesso di Palermo<small>(2020/21)</small></h1>
            <p>
              <PdfViewer href="processo_palermo.pdf"/>
            </p>
          </div>
          <img src={maxi_processo} alt="Foto Donne">
        </div>
        <Navbar title="Indietro" backLink="Back" />
      </Block>
    </Tab>

    <Tab id="tab-7" class="page-content">
      <Block>
        <p>Contenuto Pag. 7</p>
        <div class="container">
          <div class="text">
            <h1>Pena di Morte<small>(2020/21)</small></h1>
            <p>
              <PdfViewer href="pena_di_morte.pdf"/>
            </p>
          </div>
          <img src={pena_di_muerte} alt="Foto Donne">
        </div>
        <Navbar title="Indietro" backLink="Back" />
      </Block>
    </Tab>

    <Tab id="tab-8" class="page-content">
      <Block>
        <p>Contenuto Pag. 8</p>
        <div class="container">
          <div class="text">
            <h1>Situazione Carceraria in Italia<small>(2020/21)</small></h1>
            <p>
              <PdfViewer href="prigioni.pdf"/>
            </p>
          </div>
          <img src={carcerieri} alt="Foto Donne">
        </div>
        
        <Navbar title="Indietro" backLink="Back" />
      </Block>
    </Tab>
    


  </Tabs>
</Page>

<style>
.container {
  display: flex;
    flex-direction: row;
  margin-top: 2.5em;

}

  .text {
    flex: 1.0;
  text-align:start;
}

  img {
    margin-top: 4.5%;
    width: 40%;
  height: 1000px;
}
</style>
