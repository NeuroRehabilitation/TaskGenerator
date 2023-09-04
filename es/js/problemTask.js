function problemTask(size, tens, explicit, newpage) {
  if (newpage == 1) {
    doc.addPage();
    page++;
  } else {
    doc = new jsPDF();
    page = 1;
  }

  //var size = 5;
  //var tens = 1;
  //var explicit = 0;

  doc = createFrame(doc, page, problemModel(size, tens, explicit));

  var instructions = "Resuelva los siguientes problemas de cálculo.";
  doc.setFontSize(15);
  doc.text(20, 45, "Instrucciones:\n\n\t" + instructions);

  //Frame content
  var gray = 230;
  doc.setFillColor(gray, gray, gray);
  doc.roundedRect(17, 73, 181, 198, 3, 3, "F");
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(20, 75, 175, 190, 3, 3, "F");
  //doc.roundedRect(20,75,175,190,3,3);

  var operations = [
    " + ",
    " + ",
    " + ",
    " + ",
    " + ",
    " + ",
    " - ",
    " * ",
    " * ",
    " * ",
  ];
  var add = [" bought ", " found ", " got ", " acquired "];
  var subtract = [" gave away ", " lost ", " misplaced "];
  var objects = [
    "apples",
    "potatoes",
    "cards",
    "cookies",
    "newspapers",
    "pencils",
    "tickets",
    "CDs",
  ];
  var sentence = [];

  var sequence;
  var index = 0;
  var number1, number2, number3, number4;
  var object;
  var names;

  // Task generation here, 3 sums text
  if (size < 2) size = 2; // No operations allowed with less than 2!!

  if (explicit == 1) {
    doc.setFontSize(13);
    for (i = 0; i < Math.floor(13 - size * 0.7); i++) {
      names = [
        "John",
        "Maria",
        "Sheila",
        "Anna",
        "Robert",
        "Monica",
        "Fred",
        "Martin",
        "Eve",
        "Adam",
        "Kate",
        "Jim",
        "Dan",
        "Joe",
      ];
      var name = names[Math.floor(Math.random() * names.length)];
      object = objects[Math.floor(Math.random() * objects.length)];

      if (tens == 1) number1 = (Math.floor(Math.random() * 99) + 1).toFixed(0);
      else number1 = (Math.floor(Math.random() * 9) + 1).toFixed(0);

      if (tens == 1) number2 = (Math.floor(Math.random() * 99) + 1).toFixed(0);
      else number2 = (Math.floor(Math.random() * 9) + 1).toFixed(0);

      if (tens == 1) number3 = (Math.floor(Math.random() * 99) + 1).toFixed(0);
      else number3 = (Math.floor(Math.random() * 9) + 1).toFixed(0);

      if (tens == 1) number4 = (Math.floor(Math.random() * 99) + 1).toFixed(0);
      else number4 = (Math.floor(Math.random() * 9) + 1).toFixed(0);

      if (tens == 1) number5 = (Math.floor(Math.random() * 99) + 1).toFixed(0);
      else number5 = (Math.floor(Math.random() * 9) + 1).toFixed(0);

      if (size == 3) {
        if (Math.random() > 0.5)
          sentence +=
            name +
            subtract[Math.floor(Math.random() * subtract.length)] +
            number1 +
            " " +
            object +
            " and gave another " +
            number2 +
            " to a friend, and at the end " +
            name +
            " still had " +
            number3 +
            " " +
            object +
            ". How many " +
            object +
            " " +
            name +
            " had at the beginning?\n\n";
        else
          sentence +=
            name +
            add[Math.floor(Math.random() * add.length)] +
            number1 +
            " " +
            object +
            " but" +
            subtract[Math.floor(Math.random() * subtract.length)] +
            number2 +
            ". Then " +
            name +
            " still" +
            add[Math.floor(Math.random() * add.length)] +
            number3 +
            " more " +
            object +
            ". How many " +
            object +
            " does " +
            name +
            " have?\n\n";
      }

      if (size == 2) {
        if (Math.random() > 0.66)
          sentence +=
            name +
            add[Math.floor(Math.random() * add.length)] +
            number1 +
            " " +
            object +
            " and a friend" +
            add[Math.floor(Math.random() * add.length)] +
            "another " +
            number2 +
            ". How many " +
            object +
            " do they have together?\n\n";
        else if (number1 > number2)
          sentence +=
            name +
            add[Math.floor(Math.random() * add.length)] +
            number1 +
            " " +
            object +
            " but somebody stole " +
            number2 +
            " from " +
            name +
            ". How many " +
            object +
            " does " +
            name +
            " have?\n\n";
        else {
          number1 = (Math.floor(Math.random() * 9) + 1).toFixed(0);
          sentence +=
            name +
            " has " +
            number1 +
            " friends, and each one" +
            add[Math.floor(Math.random() * add.length)] +
            number2 +
            " " +
            object +
            ". How many " +
            object +
            " do they have?\n\n";
        }
      }
      if (size == 4) {
        if (Math.random() > 0.66) {
          number1 = (Math.floor(Math.random() * 9) + 1).toFixed(0);
          number3 = (Math.floor(Math.random() * 9) + 1).toFixed(0);
          sentence +=
            "In a school there are " +
            number1 +
            " classes with " +
            number2 +
            " students and " +
            number3 +
            " classes with " +
            number4 +
            " students. How many students are in the school?\n\n";
        } else if (number1 > number2) {
          number3 = (Math.floor(Math.random() * 9) + 1).toFixed(0);
          number4 = (Math.floor(Math.random() * 9) + 1).toFixed(0);
          sentence +=
            name +
            " invited " +
            number1 +
            " friends to a party. " +
            number2 +
            " of those friends" +
            add[Math.floor(Math.random() * add.length)] +
            number3 +
            " " +
            object +
            " and the remaining " +
            number4 +
            " each. How many " +
            object +
            " " +
            name +
            "'s friends have altogether?\n\n";
        } else {
          number1 = (Math.floor(Math.random() * 9) + 1).toFixed(0);
          number3 = (Math.floor(Math.random() * 9) + 1).toFixed(0);
          sentence +=
            name +
            " has " +
            number1 +
            " boxes with " +
            number2 +
            " " +
            object +
            " and " +
            number3 +
            " with " +
            number4 +
            " " +
            object +
            ". How many " +
            object +
            " " +
            name +
            " has?\n\n";
        }
      }
      if (size > 4) {
        for (j = 0; j < size; j++) {
          index = Math.floor(Math.random() * names.length);
          name = names[index];

          if (tens == 1)
            number1 = (Math.floor(Math.random() * 99) + 1).toFixed(0);
          else number1 = (Math.floor(Math.random() * 9) + 1).toFixed(0);

          if (Math.random() > 0.5)
            sentence += name + " has " + number1 + " " + object + ". ";
          else
            sentence +=
              name +
              subtract[Math.floor(Math.random() * subtract.length)] +
              number1 +
              " " +
              object +
              ". ";

          names.splice(index, 1);
        }
        sentence +=
          "How many " + object + " did they have at the beginning?\n\n";
      }
    }

    lines = doc.splitTextToSize(sentence, 165);

    doc.text(25, 85, lines);
  } else {
    for (j = 0; j < 9; j++) {
      sequence = [];
      for (i = 0; i < size; i++) {
        var number;

        if (operations[index] != " * ") {
          if (tens == 1)
            number = (Math.floor(Math.random() * 99) + 1).toFixed(0);
          else number = (Math.floor(Math.random() * 9) + 1).toFixed(0);
        } else number = (Math.floor(Math.random() * 9) + 1).toFixed(0);

        sequence.push(number);

        if (i < size - 1) {
          if (operations[index] == " * ")
            index = Math.floor(Math.random() * (operations.length - 3)).toFixed(
              0,
            );
          else index = Math.floor(Math.random() * operations.length).toFixed(0);
          sequence.push(operations[index]);
        }
      }
      if (math.eval(sequence.join("")) < 0) j--;
      else doc.text(35, 85 + 20 * j, sequence.join("") + " = ____ ");
    }
  }

  var string = doc.output("datauristring");
  $("iframe").attr("src", string);

  //doc.save('Test.pdf');
}

function problemModel(size, tens, explicit) {
  // Ex. Funct.
  var exfunctions = (7.23).toFixed(1);

  // Attention
  var attention = (6.97).toFixed(1);

  // Memory
  var memory = (6.1).toFixed(1);

  // Language
  var language = (4.65 + explicit * 1.1).toFixed(1);

  // Difficulty
  var difficulty = (4.87 + size * 0.542 + tens * 0.365).toFixed(1);

  return [attention, memory, exfunctions, language, difficulty];
}
