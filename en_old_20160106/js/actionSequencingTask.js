function actionSequencingTask(type,size,newpage)
{
    if (newpage==1)
    {
        doc.addPage();
        page++;
    }
    else
    {
        doc = new jsPDF();
        page = 1;
    }
    
   	if (size > 6)
		size = 6; 


	doc = createFrame(doc, page,actionSequencingModel(size,type));

	var implicit = ['Sweating after running.',
	'Undressing before getting in the tub.',
	'Adjust water temperature.',
	'Wash the hair and rub soap onto body.',
	'After removing all the soap, dry with a towel.',
	'Get dressed.',
	'Place a pan of water on the stove to heat.',
	'Peel potatoes, onions and carrots and cook them in water.',
	'When the cabagges are cooked, soup is ready.',
	'Season with salt.',
	'Grate the soup with a blender.',
	'Serve with a dash of olive oil.',
	'The alarm clock rings.',
	'Getting up in the morning.',
	'Leaving home.',
	'Go out to buy milk.',
	'In the supermarket choose the milk to take home.',
	'Prepare bread toasts with milk for breakfast.',
	'Get a fever.',
	'Take the temperature and see it is 38 degrees.',
	'Go to the doctor.',
	'An antibiotic is prescribed.',
	'Go to the pharmacy.',
	'Follow the pharmacist instructions.',
	'Go out to buy bread.',
	'Got to the bakery and realized that there was no money.',
	'Return home to get the wallet.',
	'Withdraw money from ATM.',
	'Make some coffee and tea.',
	'Serve a snack for friends.',
	];
	
 	var explicit = ['To do rice',
	'Pick up the pan.',
	'Put olive oil in the pan.',
	'Put onion in the pan.',
	'Light the fire.',
	'Put water in the pan.',
	'Put rice in the pan.',
	'To take a bath',
	'Get undressed.',
	'Get into the tub.',
	'Adjust water temperature.',
	'Wet the body.',
	'Washed with soap.',
	'Dry with a towel.',
	'To plant potatoes',
	'Smooth the soil.',
	'Fertilize the land.',
	'Dig the soil.',
	'Throw the seed.',
	'Cover the seed with land.',
	'Watering.',
	'To brush the teeth',
	'Hold the toothbrush.',
	'Put toothpaste on the brush.',
	'Brushing the teeth.',
	'Rinse mouth with water.',
	'Rinse mouth with elixir. ',
	'Wash the toothbrush.',
	'To get dressed',
	'Choose the clothes.',
	'Put on the underwear.',
	'Dress the pants and a sweater.',
	'Put on the socks.',
	'Put on the shoes.',
	'Put on the coat.',
	];
	
    var instructions = "Please indicate the order in which the following steps need \nto be executed.";
    doc.setFontSize(15);
    doc.text(20, 45, "Instructions:\n\n\t" + instructions);

    //Frame content
    var gray = 230;
    doc.setFillColor(gray,gray,gray);
    doc.roundedRect(17,73,181,198,3,3,'F');
    doc.setFillColor(255,255,255);
    doc.roundedRect(20,75,175,190,3,3,'F');
    //doc.roundedRect(20,75,175,190,3,3);

 	index = Math.floor(Math.random()*implicit.length/6);

	var sentences = [];
	var selected = [];
	
	if (type == 0)
	{
		for (i=index*6;i<index*6+6;i++) //There are 6 steps per action
		{
			selected.push(implicit[i]); 
		}
			
		for (i=0;i<size;) //There are 6 steps per action
		{
			if (Math.random()>0.5)
			{
				if (selected.length > 0)
				{
					var pointer = Math.floor(Math.random()*selected.length);
					sentences += '_______ ' + selected[pointer] +'\n\n';
					selected.splice(pointer, 1);
					i++;
				}
			}
		} 
	}
	else
	{
		doc.text(30, 105, "Action: " + explicit[index*7]);
		for (i=index*7+1;i<index*7+7;i++) //There are 6 steps per action
		{
			selected.push(explicit[i]); 
		}
			
		for (i=0;i<size;) //There are 6 steps per action
		{
			if (Math.random()>0.5)
			{
				if (selected.length > 0)
				{
					var pointer = Math.floor(Math.random()*selected.length);
					sentences += '_______ ' + selected[pointer] +'\n\n';
					selected.splice(pointer, 1);
					i++;
				}
			}
		} 
	}
	
	sentences = doc.splitTextToSize(sentences, 155);
	doc.text(30, 120, sentences);
    var string = doc.output('datauristring');
    $('iframe').attr('src', string);

    //doc.save('Test.pdf');
};



function actionSequencingModel(size, type)
{
	
    // Ex. Funct.
    var exfunctions = (2.838 + size*0.487).toFixed(1);

    // Attention 
    var attention = (2.9 + size*0.75 - type*1.1).toFixed(1);

    // Memory
    var memory = (1.507 + size*0.635).toFixed(1);
    
    // Language
    var language = (3.325 + size*0.525 - type*1.2).toFixed(1);

    // Difficulty
    var difficulty = (1.95 + size*0.862 - type*1.325).toFixed(1);
    
    return [attention, memory,exfunctions,language, difficulty];
};