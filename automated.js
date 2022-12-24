const template = `<div class="col-lg-3 col-sm-6">
  <div class="item">
    <img src="assets/images/abutilon.jpg" alt="">
      <h4>$nameFlower</h4>
  </div>
</div>`;
let final = "";
const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
	if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
		const txt = xmlhttp.responseText;
		const list = txt.split(/\r?\n/);
    list.forEach((item) => {
      final += template.replace("$nameFlower",item);
    });
    console.log(final);
	}
};
xmlhttp.open("GET", "list.txt", true);
xmlhttp.send();
