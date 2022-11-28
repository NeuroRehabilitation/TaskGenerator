function imagePairsModel(size)
{
	
    // Ex. Funct.
    var exfunctions = (3.491 + size*0.412).toFixed(1);

    // Attention 
    var attention = (3.811 + size*0.587).toFixed(1);

    // Memory
    var memory = (3.792 + size*0.637).toFixed(1);
    
    // Language
    var language = (2.716 + size*0.388).toFixed(1);

    // Difficulty
    var difficulty = (2.54 + size*0.762).toFixed(1);
    
    return [attention, memory,exfunctions,language, difficulty];
};

function imagePairsTask(size,clipart,newpage)
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

	var dimension = 200/size;

	doc = createFrame(doc, page,imagePairsModel(size));
	
	if (clipart==0)
		var pairs = IPNP_images();
	else
		var pairs = pictures();
        
    var instructions = "Por favor memorice los siguientes pares de palabras, luego recuerdelas \n sin usar esta página.";
    doc.setFontSize(15);
    doc.text(20, 45, "Instrucciones:\n\n\t" + instructions);

    //Frame content
	var gray = 230;
	if (size <= 2)
		dimension = 80;
		
	for (i=0;i<size;i++)
	{
		doc.setFillColor(gray,gray,gray);
		doc.roundedRect(17,73+dimension*i,175,dimension-2,3,3,'F');
		doc.setFillColor(255,255,255);
		doc.roundedRect(20,75+dimension*i,169,dimension-7,3,3,'F');

		index = Math.floor(Math.random()*pairs.length);
		doc.addImage(pairs[index], 'JPEG', 28, 77+dimension*i, dimension-10, dimension-10);
		pairs.splice(index, 1);
		index = Math.floor(Math.random()*pairs.length);
		doc.addImage(pairs[index], 'JPEG', 190-dimension, 77+dimension*i, dimension-10, dimension-10);
		pairs.splice(index, 1);
		}

	//Footer
	if (clipart==0)
	{
		doc.setFontSize(8);
		doc.text(20, 275, "* Images from the IPNP picture naming database (http://crl.ucsd.edu/experiments/ipnp/method/getpics/getpics.html)");
	}
	
    var string = doc.output('datauristring');
    $('iframe').attr('src', string);
}
