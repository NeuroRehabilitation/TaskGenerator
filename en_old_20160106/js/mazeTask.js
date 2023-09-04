function maze(x, y) {
  var n = x * y - 1;
  if (n < 0) {
    alert("illegal maze dimensions");
    return;
  }
  var horiz = [];
  for (var j = 0; j < x + 1; j++) (horiz[j] = []), (verti = []);
  for (var j = 0; j < x + 1; j++)
    (verti[j] = []),
      (here = [Math.floor(Math.random() * x), Math.floor(Math.random() * y)]),
      (path = [here]),
      (unvisited = []);
  for (var j = 0; j < x + 2; j++) {
    unvisited[j] = [];
    for (var k = 0; k < y + 1; k++)
      unvisited[j].push(
        j > 0 && j < x + 1 && k > 0 && (j != here[0] + 1 || k != here[1] + 1),
      );
  }
  while (0 < n) {
    var potential = [
      [here[0] + 1, here[1]],
      [here[0], here[1] + 1],
      [here[0] - 1, here[1]],
      [here[0], here[1] - 1],
    ];
    var neighbors = [];
    for (var j = 0; j < 4; j++)
      if (unvisited[potential[j][0] + 1][potential[j][1] + 1])
        neighbors.push(potential[j]);
    if (neighbors.length) {
      n = n - 1;
      next = neighbors[Math.floor(Math.random() * neighbors.length)];
      unvisited[next[0] + 1][next[1] + 1] = false;
      if (next[0] == here[0])
        horiz[next[0]][(next[1] + here[1] - 1) / 2] = true;
      else verti[(next[0] + here[0] - 1) / 2][next[1]] = true;
      path.push((here = next));
    } else here = path.pop();
  }
  return { x: x, y: y, horiz: horiz, verti: verti };
}

function display(m) {
  var text = [];
  for (var j = 0; j < m.x * 2 + 1; j++) {
    var line = [];
    if (0 == j % 2)
      for (var k = 0; k < m.y * 4 + 1; k++)
        if (0 == k % 4) line[k] = "+";
        else if (j > 0 && m.verti[j / 2 - 1][Math.floor(k / 4)]) line[k] = " ";
        else line[k] = "-";
    else
      for (var k = 0; k < m.y * 4 + 1; k++)
        if (0 == k % 4)
          if (k > 0 && m.horiz[(j - 1) / 2][k / 4 - 1]) line[k] = " ";
          else line[k] = "|";
        else line[k] = " ";
    if (0 == j) line[1] = line[2] = line[3] = " ";
    if (m.x * 2 - 1 == j) line[4 * m.y] = " ";
    text.push(line.join("") + ".");
  }
  return text.join("");
}
function mazeModel(elements_param) {
  elements = elements_param / 2;

  // Ex. Funct.
  //var exfunctions = (3.459 + Distractors*0.014 + T_lettersyes*(-0.814) + T_numbersyes*(-0.845) + Targets*0.012 + Desorganizationyes*0.724).toFixed(1);
  var exfunctions = (2.39 + elements * 1.375).toFixed(1);

  // Attention
  var attention = (2.876 + elements * 1.2).toFixed(1);

  // Memory
  var memory = (1.867 + elements * 1).toFixed(1);

  // Language
  var language = (2.233 + elements * 0.525).toFixed(1);

  // Difficulty
  var difficulty = (1.733 + elements * 1.45).toFixed(1);

  return [attention, memory, exfunctions, language, difficulty];
}

function mazeTask(elements, newpage) {
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

  doc = createFrame(doc, page, mazeModel(elements));

  // Task specific variables

  var instructions =
    "Draw the path from the entrance to the exit of the following labyrinth.";

  doc.setFontSize(15);
  doc.text(20, 45, "Instructions:\n\n\t" + instructions);

  //Frame content
  var gray = 230;
  doc.setFillColor(gray, gray, gray);
  doc.roundedRect(17, 73, 181, 198, 3, 3, "F");
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(20, 75, 175, 190, 3, 3, "F");

  // Drawing labyrinth
  doc.setLineWidth(1);
  labirynth = display(maze(2 * elements - 2, 2 * elements));
  i = 0;
  j = 0;
  k = 0;
  width = 15 / elements;
  height = (12 * 3) / elements;
  position_x = 46;
  position_y = 120;

  doc.text(position_x - 7, position_y - 20, "Start here!");
  doc.text(position_x + 3, position_y - 10, "x");

  while (i < labirynth.length) {
    if (labirynth[i] == "-")
      doc.line(
        position_x + k * width,
        position_y + j * height,
        position_x + k * width + width,
        position_y + j * height,
      );
    if (labirynth[i] == "+") {
      if (i > 1)
        if ((labirynth[i - 1] != " ") & (labirynth[i - 1] != "."))
          doc.line(
            position_x + k * width,
            position_y + j * height,
            position_x + k * width + width / 2,
            position_y + j * height,
          );

      if ((labirynth[i + 1] != " ") & (labirynth[i + 1] != "."))
        doc.line(
          position_x + k * width + width / 2,
          position_y + j * height,
          position_x + k * width + width,
          position_y + j * height,
        );
    }

    if (labirynth[i] == "|") {
      doc.line(
        position_x + k * width + width / 2,
        position_y + (j - 1) * height,
        position_x + k * width + width / 2,
        position_y + j * height + height,
      );
    }

    i++;
    k++;
    if (labirynth[i] == ".") {
      j++;
      k = -1;
    }
  }
  doc.setLineWidth(0);

  //doc.save('Test.pdf');
  var string = doc.output("datauristring");
  $("iframe").attr("src", string);
}
