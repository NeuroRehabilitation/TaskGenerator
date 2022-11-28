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

	var implicit = ['Sudar luego de ejercitarse.',
	'Desvestirse para entrar en la ducha.',
	'Ajustar el agua.',
	'Lavarse el pelo y luego el cuerpo.',
	'Luego de sacarse todo el jabón, secarse con una toalla.',
	'Vestirse.',
	'Poner una olla con agua en la cocina.',
	'Pelar papas, cebollas y zanahorias y ponerlos a cocinar en el agua.',
	'Cuando los brotes están cocidos, la sopa está lista.',
	'Aliñar con sal.',
	'Licuar la sopa con una licuadora.',
	'Servir con un chorrito de aceite de oliva.',
	'La alarma del reloj suena.',
	'Levantarse por la mañana.',
	'Salir de la casa.',
	'Ir a comprar leche.',
	'En el supermercado elegir la leche para llevarla a casa.',
	'Preparar pan tostado con leche para el desayuno.',
	'Afiebrarse.',
	'Tomar la temperature y ver que es de 38º.',
	'Ir al doctor.',
	'Receta un antibiótico.',
	'Ir a la farmacia.',
	'Seguir las instrucciones del Químico Farmacéutico.',
	'Ir a comprar pan.',
	'Ir a la panadería y ver que no queda dinero.',
	'Ir a la casa a buscar la billetera.',
	'Ir al cajero automático a sacar plata.',
	'Hacer un poco de café y de te.',
	'Preparar un picoteo para los amigos.',
	];
	
 	var explicit = ['Para hacer arroz',
	'Elegir la olla.',
	'Poner aceite de oliva en la olla.',
	'Poner cebolla en la olla.',
	'Encender el fuego.',
	'Poner agua en la olla.',
	'Poner arroz en la olla.',
	'Bañarse',
	'Desvestirse.',
	'Entrar en la ducha.',
	'Entibiar el agua.',
	'Mojar el cuerpo.',
	'Lavarse con jabón.',
	'Secarse con la toalla.',
	'Para sembrar papas',
	'Alisar el suelo.',
	'Fertilizar el terreno.',
	'Cavar el suelo.',
	'Lanzar las semillas.',
	'Tapar las semillas con tierra.',
	'Regar.',
	'Lavarse los dientes',
	'Tomar el cepillo de dientes.',
	'Poner pasta en el cepillo de dientes.',
	'Cepillarse los dientes.',
	'Enjuagar la boca con agua.',
	'Enjuagar la boca con enjuague bucal. ',
	'Lavar el cepillo de dientes.',
	'Vestirse',
	'Elegir la ropa.',
	'Ponerse la ropa interior.',
	'Ponerse los pantalones y el chaleco.',
	'Ponerse los calcetines.',
	'Ponerse los zapatos.',
	'Ponerse el abrigo.',
	];
	
    var instructions = "Por favor indique el orden en que los siguientes pasos deben \n ser realizados.";
    doc.setFontSize(15);
    doc.text(20, 45, "Instrucciones:\n\n\t" + instructions);

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
		doc.text(30, 105, "Accíon: " + explicit[index*7]);
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