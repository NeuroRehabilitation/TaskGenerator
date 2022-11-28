function sequencingModel(size, step, order, where, missing) {
  switch (order) {
    case "0":
      var AscendentYes = 1;
      break;
    case "1":
      var AscendentYes = 0;
      break;
    default:
      var AscendentYes = 0.5;
      break;
  }

  var position = 0;

  if (where == 1) position = (size - missing) / 2;

  // Ex. Funct.
  var exfunctions = (6.682 + missing * -0.014 + position * -0.002).toFixed(1);

  // Attention
  var attention = (6.923 + missing * -0.02 + position * -0.003).toFixed(1);

  // Memory
  var memory = (5.364 + missing * -0.027 + position * -0.003).toFixed(1);

  // Language
  var language = (4.722 + missing * -0.02 + position * -0.003).toFixed(1);

  // Difficulty
  var difficulty = (1.29 + step * 1.232 + AscendentYes * -0.841).toFixed(1);

  return [attention, memory, exfunctions, language, difficulty];
}

function sequencingTask(size, step, order, where, missing, newpage) {
  // You'll need to make your image into a Data URL
  // Use http://dataurl.net/#dataurlmaker
  //var page = 1;

  //var doc = new jsPDF();

  if (newpage == 1) {
    doc.addPage();
    page++;
  } else {
    doc = new jsPDF();
    page = 1;
  }

  doc = createFrame(
    doc,
    page,
    sequencingModel(size, step, order, where, missing)
  );

  var instructions = "Riempa i numeri mancanti nelle seguenti sequenze.";
  doc.setFontSize(15);
  doc.text(20, 45, "Istruzioni:\n\n\t" + instructions);

  //Frame content
  var gray = 230;
  doc.setFillColor(gray, gray, gray);
  doc.roundedRect(17, 73, 181, 198, 3, 3, "F");
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(20, 75, 175, 190, 3, 3, "F");
  //doc.roundedRect(20,75,175,190,3,3);

  if (order == 1) step = -step;

  // Sequence print here
  for (j = 0; j < 9; j++) {
    if (order == 2) if (Math.random() > 0.5) step = -step;

    var sequence = [];
    var first = Math.floor(Math.random() * 10);
    if (step < 0) first += size * Math.abs(step);

    for (i = 0; i < size; i++) sequence.push((first + step * i).toString());

    var position = 0;

    if (where == 1) position = Math.floor(Math.random() * (size - missing + 1));

    for (i = 0; i < missing; i++) sequence[position + i] = "__";

    for (i = 0; i < sequence.length; i++) {
      if (i == sequence.length - 1)
        doc.text(35 + 12 * i, 85 + 10 * 2 * j, sequence[i]);
      else doc.text(35 + 12 * i, 85 + 10 * 2 * j, sequence[i] + " ,");
    }
  }

  var string = doc.output("datauristring");
  $("iframe").attr("src", string);

  //doc.save('Test.pdf');
}
