<Page name="home">
  <!-- Top Navbar -->
  <Navbar large sliding={false}>
    <NavLeft>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft>
    <NavTitle sliding>Portfolio Ed. Civica</NavTitle>
    <NavTitleLarge>Portfolio Ed. Civica</NavTitleLarge>
  </Navbar>

  <BlockTitle>Materie Scolastiche</BlockTitle>
  <List strong inset dividersIos>
    <ListItem link="/articolo/" title="Italiano & Storia"/>
    <ListItem link="/articolo2/" title="Inglese"/>
    <ListItem link="/articolo3/" title="Informatica"/>
    <ListItem link="/articolo4/" title="Capolavoro"/>
    <hr>
    <br>
   
      <p>&nbsp; Contatti:</p>
      <p>&nbsp; alberto.mastroianni@istitutoagnelli.it</p>
      <p>&nbsp; Numero: +39-3713595253</p>
      <p>&nbsp; Per ogni informazione o chiarimenti, resto disponibile.</p><br>
    
    <!-- <ListItem link="#" title="Altro"/> -->

  </List>

</Page>
<script>
  
  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Button
    
  } from 'framework7-svelte';

  import {  Tabs, Tab,  Card, CardHeader, CardContent, CardFooter } from 'framework7-svelte';
</script>
