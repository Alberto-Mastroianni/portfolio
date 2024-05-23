<script>
    import { Navbar, Page, Block, Tabs, Tab, Link, Toolbar, NavRight, BlockTitle, Card, CardHeader, CardContent, CardFooter, List, ListItem, } from 'framework7-svelte';
    import telefon from '../img/telefoni.jpg';
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
      <Link tabLink="#tab1" tabLinkActive>Pag. 1</Link>
    </Toolbar>
  
    <Tabs>
      <Tab id="tab1" class="page-content" tabActive>
        <Block>
          <p>Contenuto Pag. 1</p>
  
          <div class="container">
            <div class="text">
              <h1>Risks and Dangers for mobile phones<small>(2020/21)</small></h1>
              <p>
                <PdfViewer href="/risk_phones.pdf"/>
              </p>
            </div>
            <img src={telefon} alt="Foto Donne">
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
      width: 50%;
    height: 150px;
  }
  </style>
  