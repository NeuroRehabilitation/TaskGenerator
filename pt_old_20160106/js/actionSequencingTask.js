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

	var implicit = ['Ficar transpirado depois de uma corrida.',
	'Despir-se para entrar na banheira.',
	'Temperar a água.',
	'Lavar o cabelo e ensaboar o corpo.',
	'Depois de tirar todo o sabão, secar-se com uma toalha.',
	'Vestir-se.',
	'Colocar uma panela com água ao lume.',
	'Descascar batatas, cebolas e cenouras e pô-las a cozer na água.',
	'Quando as couves estiverem cozidas, a sopa está pronta.',
	'Temperar com sal.',
	'Passar a sopa com a varinha mágica.',
	'Servir com um fio de azeite.',
	'Toca o despertador.',
	'Levantar-se de manhã.',
	'Sair de casa.',
	'Ir comprar leite.',
	'No supermercado escolher o leite para levar para casa.',
	'Preparar torradas com leite para o pequeno-almoço.',
	'Ficar com febre.',
	'Tirar a temperatura e ver que tem 38 graus.',
	'Ir ao médico.',
	'É receitado um antibiótico.',
	'Ir à farmácia.',
	'Seguir as indicações do farmacêutico.',
	'Ir comprar pão.',
	'Chegar à padaria e viu que não tinha dinheiro.',
	'Voltar a casa para buscar a carteira.',
	'Ir ao multibanco levantar dinheiro.',
	'Preparar café e chá.',
	'Fazer um lanche para os amigos.',
	];
	
 	var explicit = ['Para fazer arroz',
	'Pegar na panela.',
	'Pôr azeite na panela.',
	'Pôr cebola na panela.',
	'Acender o lume.',
	'Pôr água na panela.',
	'Pôr o arroz na panela.',
	'Para tomar banho',
	'Despir-se.',
	'Entrar na banheira.',
	'Temperar a água.',
	'Molhar o corpo.',
	'Lavar-se com sabonete.',
	'Secar-se com uma toalha.',
	'Para semear batatas',
	'Alisar a terra.',
	'Adubar a terra.',
	'Cavar a terra.',
	'Atirar a semente.',
	'Tapar a semente com a terra.',
	'Regar.',
	'Para lavar os dentes',
	'Pegar na escova de dentes.',
	'Por pasta de dentes na escova.',
	'Escovar os dentes.',
	'Lavar a boca com água.',
	'Lavar a boca com elixir.',
	'Lavar a escova de dentes.',
	'Para se vestir',
	'Escolher a roupa.',
	'Vestir a roupa interior.',
	'Vestir as calças e a camisola.',
	'Calçar as meias.',
	'PCalçar os sapatos.',
	'Vestir o casaco.',
	];
	
	var instructions = "Por favor, indique a ordem pela qual os passos que se seguem\n devem ser executados.";
    doc.setFontSize(15);
    doc.text(20, 45, "Instruções:\n\n\t" + instructions);

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