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

	var implicit = ['Sudare dopo l’allenamento.',
	'Spogliarsi ed entrare in doccia.',
	'Aprire l’acqua.',
	'Lavare i capelli e insaponare il corpo.',
	'Dopo aver rimosso tutto il sapone, asciugarsi con un asciugamano.',
	'Vestirsi.',
	'Mettere una pentola con acqua sui fornelli.',
	'Pelare le patate, le cipolle e le carote e metterle a cuocere in acqua.',
	'Quando i germogli sono cotti, la zuppa è pronta.',
	'Insaporire con il sale.',
	'Passare la zuppa al frullatore.',
	'Servire con un filo di olio d’ oliva.',
	'La sveglia suona.',
	'Alzarsi la mattina.',
	'Uscire di casa.',
	'Andare a comprare il latte.',
	'Al supermercato scegliere il latte e portarlo a casa.',
	'Servire latte e fette biscottate per colazione.',
	'Prendere la febbre.',
	'Misurare la temperatura e accorgersi di avere 38 gradi.',
	'Andare dal dottore.',
	'Viene prescritto un antibiotico.',
	'Andare in farmacia.',
	'Seguire le indicazioni del farmacista.',
	'Andare a comprare il pane.',
	'Arrivare al panificio e notare che non si hanno i soldi.',
	'Tornare a casa a prendere il portafogli.',
	'Andare al bancomat per prelevare I soldi.',
	'Fare del tè e del caffè.',
	'Preparare degli spuntini per gli amici.',
	];
	
 	var explicit = ['Preparare il riso',
	'Prendere la padella.',
	'Mettere l’olio d’oliva nella padella.',
	'Mettere della cipolla nella padella.',
	'Accendere il fuoco.',
	'Mettere dell’acqua nella padella.',
	'Mettere il riso nella padella.',
	'Fare il bagno',
	'Spogliarsi.',
	'Entrare nella doccia.',
	'Aprire l’acqua.',
	'Bagnare il corpo.',
	'Lavarsi con il sapone.',
	'Asciugarsi con un asciugamano.',
	'Seminare le patate',
	'Spianare il terreno.',
	'Fertilizzare la terra.',
	'Scavare il terreno.',
	'Piantare il seme.',
	'Coprire il seme con della terra.',
	'Innaffiare.',
	'Lavarsi i denti',
	'Tenere lo spazzolino.',
	'Mettere il dentifricio sullo spazzolino.',
	'Lavarsi i denti.',
	'Risciacquare la bocca con l’acqua.',
	'Risciacquare la bocca con il colluttorio. ',
	'Lavare lo spazzolino.',
	'Vestirsi',
	'Scegliere i vestiti.',
	'Mettersi le mutande.',
	'Mettersi i pantaloni e una felpa.',
	'Mettersi i calzini.',
	'Mettersi le scarpe.',
	'Mettersi il cappotto.',
	];
	
    var instructions = "Indichi l’ordine nel quale i seguenti passaggi devono essere eseguiti.";
    doc.setFontSize(15);
    doc.text(20, 45, "Istruzioni:\n\n\t" + instructions);

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
		doc.text(30, 105, "Azione: " + explicit[index*7]);
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