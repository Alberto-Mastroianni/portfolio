<script>
    export let fileName = ""; // Nome del file da scaricare
    export let fileUrl = ""; // URL del file da scaricare
  
    export function downloadFile() {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      link.target = "_blank"; // Apre il link in una nuova scheda (opzionale)
      link.click();
    }
  </script>
  
  <!-- Aggiungi il pulsante di download per il file corrente -->
  <button class="bottoneDownload" on:click={downloadFile}>Scarica</button>