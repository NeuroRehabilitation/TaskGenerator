function soupModel(elements, clues) {
  // Ex. Funct.
  var exfunctions = (5.138 - clues * 0.913 + elements * 0.171).toFixed(1);

  // Attention
  var attention = (6.15 - clues * 0.7 + elements * 0.144).toFixed(1);

  // Memory
  var memory = (4 - clues * 1 + elements * 0.269).toFixed(1);

  // Language
  var language = (5.65).toFixed(1);

  // Difficulty
  var difficulty = (5.466 - clues * 1.154 + elements * 0.176).toFixed(1);

  return [attention, memory, exfunctions, language, difficulty];
}

function soupTask(n_words, cues, newpage) {
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

  //doc = createFrame(doc, page,soupModel(elements,probability,size,numbers,order));
  doc = createFrame(doc, page, soupModel(n_words, cues));

  var elements = n_words * n_words;
  if (elements < 100) elements = 100;

  // Task specific variables
  var distractor = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var target = [
    "BRAÇO",
    "COSTAS",
    "ORELHAS",
    "OLHOS",
    "CARA",
    "PES",
    "DEDOS",
    "PE",
    "CABELO",
    "MAOS",
    "CABEÇA",
    "JOELHOS",
    "PERNAS",
    "BOCA",
    "PESCOÇO",
    "NARIZ",
    "OMBROS",
    "PELE",
    "ESTOMAGO",
    "DENTES",
    "POLEGARES",
    "DEDOS",
    "LINGUA",
    "DENTE",
    "PERFURAR",
    "MARTELO",
    "FACA",
    "AVIAO",
    "ALICATE",
    "TESOURA",
    "PARAFUSO",
    "TORNO",
    "MAÇA",
    "BANANA",
    "CEREJA",
    "GRAPEFRUIT",
    "UVA",
    "LIMAO",
    "LIMA",
    "MELAO",
    "LARANJA",
    "PESSEGO",
    "PERA",
    "CAQUI",
    "ABACAXI",
    "AMEIXA",
    "MORANGO",
    "TANGERINA",
    "MELANCIA",
    "JACARE",
    "FORMIGA",
    "URSO",
    "ABELHA",
    "PASSAROS",
    "CAMELO",
    "GATO",
    "CHITA",
    "GALINHA",
    "CHIMPANZE",
    "VACA",
    "CROCODILO",
    "VEADO",
    "CAO",
    "GOLFINHO",
    "PATO",
    "AGUIA",
    "ELEFANTE",
    "PEIXE",
    "VOAR",
    "RAPOSA",
    "SAPO",
    "GIRAFA",
    "CABRA",
    "PEIXINHO",
    "HAMSTER",
    "HIPOPOTAMO",
    "CAVALO",
    "CANGURU",
    "GATINHA",
    "LEAO",
    "LAGOSTA",
    "MACACO",
    "POLVO",
    "CORUJA",
    "PANDA",
    "PORCO",
    "CACHORRINHO",
    "COELHO",
    "RATO",
    "ESCORPIAO",
    "SELO",
    "TUBARAO",
    "OVELHAS",
    "CARACOL",
    "SERPENTE",
    "ARANHA",
    "ESQUILO",
    "TIGRE",
    "TARTARUGA",
    "LOBO",
    "ZEBRA",
    "ASSAR",
    "FERVER",
    "ASSAR",
    "FRITAR",
    "GRILL",
    "MICROONDAS",
    "TIGELA",
    "TOALHAS",
    "ROUBAR",
    "ASSADO",
    "COLHER",
    "ESPATULA",
    "VAPOR",
    "FILTRO",
    "RELOGIO",
    "GARFO",
    "AVIAO",
    "BICICLETA",
    "BARCO",
    "AUTOCARRO",
    "CARRO",
    "HELICOPTERO",
    "CAVALO",
    "JET",
    "MOTO",
    "NAVIO",
    "METRO",
    "TAXI",
    "COMBOIO",
    "CAMIAO",
  ];

  //Frame content
  var gray = 230;
  doc.setFillColor(gray, gray, gray);
  doc.roundedRect(17, 73, 181, 198, 3, 3, "F");
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(20, 75, 175, 190, 3, 3, "F");

  var n_elements = Math.floor(Math.sqrt(elements));
  var list = [];
  var matrix = [];
  var matrix_words = [];

  var size = 13 + (500 - elements) / 20;
  var width = (170 - size / 2) / n_elements;
  var height = (180 - size / 2) / n_elements;

  // Create randomly filled soup
  for (x = 0; x < n_elements * n_elements; x++) {
    matrix.push(distractor[Math.floor(Math.random() * distractor.length)]);
    matrix_words.push("0");
  }

  // Insert words into soup
  for (count = 0; count < n_words; count++) {
    var fits = false;
    var index, position_x, position_y, orientation;

    while (fits == false) {
      index = Math.floor(Math.random() * target.length);
      word = target[index];
      position_x = Math.floor(Math.random() * n_elements);
      position_y = Math.floor(Math.random() * n_elements);
      orientation = Math.floor(Math.random() * 3);

      fits = check(
        position_x,
        position_y,
        word,
        matrix_words,
        n_elements,
        orientation,
      );
    }
    write(
      position_x,
      position_y,
      word,
      matrix,
      matrix_words,
      n_elements,
      orientation,
    );
    list.push(word);
    target.splice(index, 1);
  }

  // Print instructions
  var instructions;
  if (cues == "0")
    instructions =
      "Por favor, procure " + n_words + " palavras nesta sopa de letras.";
  else {
    instructions = "Por favor, descobrir as seguintes palavras (";

    for (i = 0; i < list.length; i++) {
      instructions += list[i];
      if (i != list.length - 1) instructions += ", ";
    }

    instructions += ") nesta sopa de letras.";
  }
  doc.setFontSize(15);
  text = doc.splitTextToSize("Instruções:\n\n\t" + instructions, 175);
  doc.text(20, 45, text);

  // Print soup of letters
  doc.setFontSize(size);

  for (x = 0; x < n_elements; x++) {
    for (y = 0; y < n_elements; y++) {
      doc.text(
        20 + width / 3 + 0.5 * size + x * width - size / 5,
        80 + height / 3 + 0.5 * size + y * height,
        matrix[n_elements * y + x],
      );
    }
  }

  //doc.save('Test.pdf');
  var string = doc.output("datauristring");
  $("iframe").attr("src", string);
}

function check(position_x, position_y, word, matrix, n_elements, orientation) {
  switch (orientation) {
    case 0:
      if (word.length < n_elements - position_x) {
        for (x = position_x; x < position_x + word.length; x++) {
          y = position_y; //for (y=0;y<n_elements;y++)
          {
            if (matrix[n_elements * y + x] != "0") return false;
          }
        }
      } else return false;
      break;

    case 1:
      if (word.length < n_elements - position_y) {
        if (word.length < n_elements - position_x) {
          y = position_y;
          for (x = position_x; x < position_x + word.length; x++) {
            if (matrix[n_elements * y + x] != "0") return false;
            y++;
          }
        } else return false;
      } else return false;
      break;

    case 2:
      if (word.length < n_elements - position_y) {
        for (y = position_y; y < position_y + word.length; y++) {
          x = position_x; //for (y=0;y<n_elements;y++)
          {
            if (matrix[n_elements * y + x] != "0") return false;
          }
        }
      } else return false;
      break;

    default:
      return true;
      break;
  }
  return true;
}

function write(
  position_x,
  position_y,
  word,
  matrix,
  matrix_words,
  n_elements,
  orientation,
) {
  switch (orientation) {
    case 0:
      if (word.length < n_elements - position_x) {
        for (x = position_x; x < position_x + word.length; x++) {
          y = position_y; //for (y=0;y<n_elements;y++)
          {
            matrix[n_elements * y + x] = word.charAt(x - position_x);
            matrix_words[n_elements * y + x] = word.charAt(x - position_x);
          }
        }
      }

      break;

    case 1:
      if (word.length < n_elements - position_y) {
        if (word.length < n_elements - position_x) {
          y = position_y;
          for (x = position_x; x < position_x + word.length; x++) {
            matrix[n_elements * y + x] = word.charAt(x - position_x);
            matrix_words[n_elements * y + x] = word.charAt(x - position_x);
            y++;
          }
        }
      }
      break;

    case 2:
      if (word.length < n_elements - position_y) {
        for (y = position_y; y < position_y + word.length; y++) {
          x = position_x; //for (y=0;y<n_elements;y++)
          {
            matrix[n_elements * y + x] = word.charAt(y - position_y);
            matrix_words[n_elements * y + x] = word.charAt(y - position_y);
          }
        }
      }

      break;

    default:
      break;
  }
}
