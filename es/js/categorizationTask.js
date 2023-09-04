function categorizationModel(categories, elements) {
  // Ex. Funct.
  var exfunctions = (1.136 + categories * 0.989).toFixed(1);

  // Attention
  var attention = (
    -3.26 +
    categories * 3.75 +
    categories * elements * -0.41
  ).toFixed(1);

  // Memory
  var memory = (0.6 + categories * 0.9).toFixed(1);

  // Language
  var language = (1.914 + categories * 0.586).toFixed(1);

  // Difficulty
  var difficulty = (0.234 + categories * 1.165).toFixed(1);

  return [attention, memory, exfunctions, language, difficulty];
}

function categorizationTask(categories, elements, newpage) {
  size = categories * elements;

  if (newpage == 1) {
    doc.addPage();
    page++;
  } else {
    doc = new jsPDF();
    page = 1;
  }

  doc = createFrame(doc, page, categorizationModel(categories, elements));

  var list = [];
  for (i = 0; i < category_size(); i++) {
    list.push(i);
  }

  var pairs = [];

  for (j = 0; j < categories; j++) {
    var tmp = [];

    while (tmp.length < elements) {
      index = Math.floor(Math.random() * list.length);
      tmp = category_images(list[index]); //IPNP_images();
      list.splice(index, 1);
    }

    while (tmp.length > elements) {
      tmp.splice(Math.floor(Math.random() * tmp.length), 1);
    }

    for (i = 0; i < tmp.length; i++) {
      pairs.push(tmp[i]);
    }
  }

  var instructions = "Por favor agrupe las siguientes imagenes por categorias.";
  doc.setFontSize(15);
  doc.text(20, 45, "Instrucciones:\n\n\t" + instructions);

  //Frame content
  var gray = 230;
  doc.setFillColor(gray, gray, gray);
  doc.roundedRect(17, 73, 181, 198, 3, 3, "F");
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(20, 75, 175, 190, 3, 3, "F");
  //doc.roundedRect(20,75,175,190,3,3);

  var dimension = 150 / Math.max(elements, categories);
  var left = [];
  var right = [];
  var index;

  if (size == 1) dimension = 70;

  for (i = 0; i < Math.max(elements, categories); i = i + 1) {
    for (j = 0; j < Math.min(elements, categories); j = j + 1) {
      index = Math.floor(Math.random() * pairs.length);
      doc.addImage(
        pairs[index],
        "JPEG",
        25 +
          ((170 - dimension * Math.min(elements, categories)) /
            Math.min(elements, categories) +
            dimension) *
            j,
        80 + (i * 2 * dimension) / 1.7,
        dimension,
        dimension,
      );

      doc.roundedRect(
        25 +
          ((170 - dimension * Math.min(elements, categories)) /
            Math.min(elements, categories) +
            dimension) *
            j,
        80 + (i * 2 * dimension) / 1.7,
        dimension,
        1.1 * dimension,
        2,
        2,
      );

      doc.line(
        25 +
          ((170 - dimension * Math.min(elements, categories)) /
            Math.min(elements, categories) +
            dimension) *
            j +
          0.2 * dimension,
        80 + (i * 2 * dimension) / 1.7 + 1.05 * dimension,
        25 +
          ((170 - dimension * Math.min(elements, categories)) /
            Math.min(elements, categories) +
            dimension) *
            j +
          dimension * 0.8,
        80 + (i * 2 * dimension) / 1.7 + 1.05 * dimension,
      );

      pairs.splice(index, 1);
    }
  }

  doc.setFontSize(8);
  doc.text(
    20,
    275,
    "* Images from the IPNP picture naming database (http://crl.ucsd.edu/experiments/ipnp/method/getpics/getpics.html)",
  );

  var string = doc.output("datauristring");
  $("iframe").attr("src", string);

  //doc.save('Test.pdf');
}
