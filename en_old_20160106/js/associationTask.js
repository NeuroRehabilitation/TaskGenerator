function associationModel(size) {
  // Ex. Funct.
  var exfunctions = (2.729 + size * 0.238).toFixed(1);

  // Attention
  var attention = (1.512 + size * 0.487).toFixed(1);

  // Memory
  var memory = (1.378 + size * 0.4).toFixed(1);

  // Language
  var language = (3.28).toFixed(1);

  // Difficulty
  var difficulty = (1.435 + size * 0.45).toFixed(1);

  return [attention, memory, exfunctions, language, difficulty];
}

function associationTask(size, newpage) {
  if (newpage == 1) {
    doc.addPage();
    page++;
  } else {
    doc = new jsPDF();
    page = 1;
  }

  var size_old = size;

  /*var sizeLeft = 0;
	if (size > 6)
	{
		sizeLeft = size -5;
		size = 5;
	}*/

  doc = createFrame(doc, page, associationModel(size));

  var pairs = IPNP_images();

  var instructions = "Please find the correct pairwise associations.";
  doc.setFontSize(15);
  doc.text(20, 45, "Instructions:\n\n\t" + instructions);

  //Frame content
  var gray = 230;
  doc.setFillColor(gray, gray, gray);
  doc.roundedRect(17, 73, 181, 198, 3, 3, "F");
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(20, 75, 175, 190, 3, 3, "F");
  //doc.roundedRect(20,75,175,190,3,3);

  var dimension;
  var left = [];
  var right = [];
  var index;

  var step;
  if (size > 5) step = 5;
  else step = size;

  for (i = 0; i < size * 2; i = i + 2) {
    index = Math.floor((Math.random() * pairs.length) / 2);
    //doc.addImage(pairs[index*2], 'JPEG', 35, 80 + i*dimension/1.7, dimension, dimension);
    //doc.addImage(pairs[index*2+1], 'JPEG', 100+5*size, 80 + i*dimension/1.7, dimension, dimension);
    left.push(pairs[index * 2]);
    right.push(pairs[index * 2 + 1]);
    pairs.splice(index * 2, 2);
  }

  /*index = size-1;
    left = [];
	right = [];
    left.push(pairs[index*2]);
	right.push(pairs[index*2+1]);
    index = 0;
    size = 1;
    dimension = 70;*/

  while (size > 0) {
    var size_x = size;
    if (size > 5) {
      size_x = 5;
      size -= 5;
      dimension = 150 / 5;
    } else {
      size = 0;
      dimension = 150 / step;
      if (step == 1) dimension = 70;
    }

    for (i = 0; i < size_x; i = i + 1) {
      index = Math.floor(Math.random() * left.length);
      doc.addImage(
        left[index],
        "JPEG",
        35,
        80 + (i * 2 * dimension) / 1.7,
        dimension,
        dimension,
      );
      left.splice(index, 1);

      index = Math.floor(Math.random() * right.length);
      doc.addImage(
        right[index],
        "JPEG",
        100 + 7 * step,
        80 + (i * 2 * dimension) / 1.7,
        dimension,
        dimension,
      );
      right.splice(index, 1);
    }
    if (size > 0) {
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(20, 260, 175, 20, 3, 3, "F");
      doc.addPage();
      page++;
      doc = createFrame(doc, page, associationModel(size_old));
      //Frame content
      var gray = 230;
      doc.setFillColor(gray, gray, gray);
      doc.roundedRect(17, 73, 181, 198, 3, 3, "F");
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(20, 70, 175, 195, 3, 3, "F");
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

  /*if (sizeLeft > 0)
	{
		associationTask(sizeLeft,1);
	}*/

  //doc.save('Test.pdf');
}
