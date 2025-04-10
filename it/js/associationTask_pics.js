function associationTask_pics(size, newpage) {
  if (newpage == 1) {
    doc.addPage();
    page++;
  } else {
    doc = new jsPDF();
    page = 1;
  }

  var size_old = size;

  doc = createFrame(doc, page, associationModel(size));

  var pairs = pictures();

  var instructions = "Associ correttamente le coppie.";
  doc.setFontSize(15);
  doc.text(20, 45, "Istruzioni:\n\n\t" + instructions);

  //Frame content
  var gray = 230;
  doc.setFillColor(gray, gray, gray);
  doc.roundedRect(17, 73, 181, 198, 3, 3, "F");
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(20, 75, 175, 190, 3, 3, "F");
  //doc.roundedRect(20,75,175,190,3,3);

  var dimension = 150 / size;
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
    doc.setFillColor(0, 0, 0);

    if (dimension > 150 / 3) dimension = 150 / 3;

    for (i = 0; i < size_x; i = i + 1) {
      index = Math.floor(Math.random() * left.length);
      doc.addImage(
        left[index],
        "JPEG",
        25,
        80 + (i * 2 * dimension) / 1.7,
        dimension,
        dimension,
      );
      doc.roundedRect(
        25,
        80 + (i * 2 * dimension) / 1.7,
        dimension,
        dimension,
        3,
        3,
      );
      doc.roundedRect(
        25 + dimension - 3,
        80 + (i * 2 * dimension) / 1.7 + dimension / 2 - 3,
        6,
        6,
        3,
        3,
        "F",
      );
      left.splice(index, 1);

      index = Math.floor(Math.random() * right.length);
      doc.addImage(
        right[index],
        "JPEG",
        188 - dimension,
        80 + (i * 2 * dimension) / 1.7,
        dimension,
        dimension,
      );
      doc.roundedRect(
        188 - dimension,
        80 + (i * 2 * dimension) / 1.7,
        dimension,
        dimension,
        3,
        3,
      );
      doc.roundedRect(
        188 - dimension - 3,
        80 + (i * 2 * dimension) / 1.7 + dimension / 2 - 3,
        6,
        6,
        3,
        3,
        "F",
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

  var string = doc.output("datauristring");
  $("iframe").attr("src", string);

  //doc.save('Test.pdf');
}
