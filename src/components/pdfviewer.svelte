<script>
    export let href;
</script>

<object data={href} type="application/pdf" width="1000px" height="1000px">
    <embed src={href} />
        <!-- <p>This browser does not support PDFs. Please download the PDF to view it: <a href={href}>Download PDF</a>.</p>
    </embed> -->
</object>