document.getElementById("footer").innerHTML = DOMPurify.sanitize(`<footer class="bg-light py-3 position-absolute bottom-0 w-100">
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <p>&copy; 2023</p>
    </div>
    <div class="col-md-6 text-end">
      <p>Mohammad Adel Murtada</p>
    </div>
  </div>
</div>
</footer>


`)
