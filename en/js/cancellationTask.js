function cancellationModel(elements,probability,size,numbers,order)
{

    var Distractors = elements*(100-probability)/100;
    var Targets = elements - Distractors;
    var Desorganizationyes = order;
    
    switch (numbers)
    {    
        case '0':
            var T_lettersyes = 1;
            var T_numbersyes = 0;
            var T_symbolsyes = 0;
            break;
        case '1':
            var T_lettersyes = 0;
            var T_numbersyes = 1;
            var T_symbolsyes = 0;
            break;
        default:
            var T_lettersyes = 0;
            var T_numbersyes = 0;
            var T_symbolsyes = 1;
            break;
    };
    
    // Ex. Funct.
    //var exfunctions = (3.459 + Distractors*0.014 + T_lettersyes*(-0.814) + T_numbersyes*(-0.845) + Targets*0.012 + Desorganizationyes*0.724).toFixed(1);
    var exfunctions = (3.579 + Distractors*0.009 -1.463*T_lettersyes -0.754*T_numbersyes +Targets*0.015 + Desorganizationyes*0.683 + Distractors*T_lettersyes*0.015).toFixed(1);

    // Attention 
    var attention = (4.314 + Distractors*0.014 + T_numbersyes*(-0.697) + Targets*0.021).toFixed(1);

    // Memory
    var memory = (3.125 + Distractors*0.009 + Targets*0.017 + T_numbersyes*(-0.813)).toFixed(1);
    
    // Language
    var language = (2.433 + Distractors*0.011 + T_symbolsyes*0.420 + T_numbersyes*(-0.467)).toFixed(1);
    
    // Difficulty
    var difficulty = (3.610 + Distractors*0.015 + Targets*0.012 + T_lettersyes*(-0.494) + T_numbersyes*(-1.054)).toFixed(1);
    
    return [attention, memory,exfunctions,language, difficulty];
};


function cancellationTask(elements,probability,size,numbers,order, newpage) {
// You'll need to make your image into a Data URL
// Use http://dataurl.net/#dataurlmaker
//var page = 1;

//var doc = new jsPDF();

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

doc = createFrame(doc, page,cancellationModel(elements,probability,size,numbers,order));

// Task specific variables
if (numbers == 0)
{
var all = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var index = Math.floor(Math.random() * all.length);
var target = all[index];
var distractor = all;
distractor.splice(index, 1);
}
if (numbers == 1)
{
	var target = Math.floor(Math.random() * 10).toString();
	var distractor = [];

	for (i=0;i<10;i++)
	{
		if (i!= target)
			distractor.push(i.toString());  
	}
}

if (numbers == 2)
{
	var symbolImg = ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sLAgsAEQ8RcMUAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAACa0lEQVRo3u2ay27TQBSGv7FzcQKUFGhppRaBEBJdVK3EE3THnsfhGXgUngNWbBBLBBKrLmghtCIljYcFZ6RR66T2ZMb1uIxkOZYzl3/O7T/Ho4AcUMTdtAI08AZ4X7HzOTCRewfI5F532wdem4nfAW8jlcYJQOLQ8YHcewXvFNC3ngfAHrAtzwnwDFgv6DcEngObzvoFvCr539Cq42KrLwGdONhFUKN17ZjQknbjgKRAt8lAOiUNcCZX1BJRbVCt7jKexFNLy2zmVUCmDQAyW1YinQZpjrKuykBWGwQkl7XqqkDuAscNs+eZi/v92VDnpOZJJbbIXlq1sjZQlBRYi2z9CjizbWQCjIBvkQlhBfhuS+QkgJey/X4mLMEn3cmBsaz91AD5Ki980gotVyoJmWEJyrPxK+DQIOvVmML2PY89AD4kMskdz4N3F7hN30DWgWGyoCISKvcee57rANgw/MU3r9pakFH6tJE+sAHcNrt33zOQDHhUEHBDpMubRgO0QRQgIaojNbiFVdfaCjBJEVv1XRcbAA/tgPhEJDOKKLKnQk+2bSBD2cHfkVGUXKRyyRjPIiKL06vyERUotgSNU8mcP+0Cj4noS9Y8T/VRQKaEr8CXbSsS775UAWLIZL4oT665jY1htyFnP1wGiI4B4Y380HMdoPsSBpSvxWXAzjUA+SMOR/sCMgE+UX89WJd1/1XV5fi/sTcMiGrqpiUOOmtXXO6J3Sjrec3KDs34T/l3PCO9kPaOCmiIE1l1yQp/Wb+PLrw7KqA5AJ8LxpkCP3xVWAyQfeSUTc3tXFysOSrVc9jcF0bnW3Hw7C/tZ2dvhopvsAAAAABJRU5ErkJggg==',
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAFWklEQVRogc2aaWwVVRTHf9NSFMuSuJFWS6ESFzQoKI0JcQlRQUMiqKmymCJuMRqVuOInRRMTtygU0ShQFBKr0VgKKLW0RuISF0QFTUABcalEBbHFqN38cM5lpsO8mXvfm/fkn7y0M/cs/7vMveeeez3SQxUwCRgPnAacChwBeFreB/wDfKO/TUArsDMN516ySCxGAnOAWv3foBMhuxf4U98NBY5BKlkakN0BvAQsB3bnyMcZ5wJvAr1IS/8MLAKmARXEN5AHjACmA3VAu9roAd4AJuSNdQBlwEqkAr3AWuASoDgHm8XAZOAtpEK9wApgeE5MY3A1sF+dvQ6cmQcf44BG9bEPuDJN44OA5/CH0OQ0jWfAZcAv6rMOmTRywhCgTQ22kMfujkAZMqsZ34OzNTQE+EgNLQSK0mDniGLgWeXwAVlU5khggxp4JFVq2eFRhMs7OA6zelVclD6nrODhf6cv2CrVqkIT/89wyoQi4G2E28wk4XJkit2NrMKHG44HfkKm5n4TT3gFfg84D2gAdhWCWRYYBdQgs+mkKIFzkG7r1r+H868biQAOLsrBHmkEpgJLgFuBp4DFLk1VANwGzEN43YLEe/1W/yokaFuNTL07kKi1rKA041EGdADbgYFInNdN/6ibBUiXXazPV+nz0kKxtMAyhJPpgUv1+cGg0HYkjgpGsW1IL1XnnWIyqhEuzYF3A4A9yL4HkGHVBzwfUj4d6EJCg1w3YLnAUw5dyimIFxHulQDX60NNhBGzms7IG81kzFQOSyLKZmjZHJAwuQ84IULwOGTx+YH+29NCoRT4EfgNODqifATC/RmQ4HBfjLF5RHxUBcJD6vvODOUeMpM1g2QxPosxNgDYAvxFaKrLM0aqz6+UQyZsBr4FyXS0JBg1U90rufOzRoP6vChBrhUZevyLrJBJWKuGz8+FnSUuUF9rLGQbgb/BviKjVWETuWVNklAMfK6+RlvIH6zI7yQPLYMnkZa6IQuCtrhRfTxhKd8G/AoSV8V97EEMRRJqe4BhjgRtMExttyM5AxtsRiIT1iMpTtvV+2akxR5z42iFx9X2TZbyRcjMtg5kX94HnOig/CmSkD7ZiWY8TlGbn2C/xa5EuD8NMBf3MGQisrFZ7aCThCa1OdFBZzbCvRb8WoWDxiS8pnpTHPWiMEVtveqot5TQaPqaQ8P4JFQAB1S3xJFAECVq44DatIUJ478MvpyP1GyqI4mHVe92R70g7lAbCxz1Lle9e4MvR+FvdV1wFPA9EuYc66iL6uxVG4Mcdc1WtzJcYGKb8Y4Gr1W9bBIVJq8721Fvguqtiio06SCbcCUID9iItM5YB72xqrMR9x3oOkLpoDBWIJWZ5mj4bGRobnDQaVUd1xFQg0UOOJeUqWmE6RayV6hsvaOPjCnTKGSbxB6ONMJ3SG4sE0zebL8NmQCcktgGJodU5+AI4AHVuz9Gxkz18x3sBo8VnBbuEvxTVpeDnoHANmQfXR5RXq5l21TWFuagZw3x295IlAIf4n70Zsb/8oiyeuy/I5BIY7HqvI+sW1lhMH7PuByGNnNolrIamTLXW9oIHoY2kUI6qgR/4WoHrrHQCWcpPaR3u4AxCboeMAv/eHohWQynOAQvDLSQfGHAVH4WfridtPqPA94lTxcGgjBXOHpIvsJhpuNdSCz1B7IOhBG+wtFDnq9wBHEGsh/pwb8R8TJwHXASfshxN/4p0136zkOyI3ORRgleqmkgeejlBRXAfcBW+h+NdQAfIx99B3Jo1IxsYztDsluAe7DfakcizeOCKuBC4CykV8YgYbq5rdCJZAS3Iqv/F0gqZ2cazv8DOF+al2ECmq0AAAAASUVORK5CYII=',
				'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAEKgD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCAAyADIDACIAAREBAhEB/8QAGwABAQEAAwEBAAAAAAAAAAAAAAUCBAYHAwH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAAABEQIRAAAB9TirZK/agjUOTFLQJVWXUAGNjoX0gYPQrPGnFpjYlPoc7YAdCiX+unrGwA//xAAgEAACAgICAgMAAAAAAAAAAAACBAEDAAUUIBA0EhMk/9oACAEAAAEFApmIiLbm8hCnOAtkgyti94MV5fHLa6Nxxrc1vrdDGDCvbcevWel1PX2MHX+d7psDn66xisGKQYqhk1sAhMcsdH5KrzWXneAK86siYvABrHx//8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAhEBPwEH/8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAREBPwEH/8QAMxAAAQICAw4FBQAAAAAAAAAAAQIDABESQVEEEBMgIiMxMmFxgZGxwSEzUnLRFCRTYuH/2gAIAQAABj8CJJkBH22aY/KoeKvaO5jOlx02uLJ/kZLdDahRT0ibSzdDfoXrcD8xTbOwg6QbDewB8hqRc/Y1J78sX6tGroeFqbeHS8XK3VqWefxLFKVCaSJGEsqkS2KBO6G0+maORljF5KTRcNMcYW2fLfy0e6sd+eKGGjnnskbBWYShIklIkIKFztBGkG0RRu7VqfAyTvs6QFIIUk1i9g7mGHesToG81Qp15VO6F6VVAWDZiUmEhtRrQJQEvkupsX4xRQkJSKgL/wD/xAAmEAEAAQMBBwUBAAAAAAAAAAABEQAhQTEQIFFhcaHBgZGx8PHh/9oACAEAAAE/ISbAlXQKv6G0k89MfhmkH0YI8CnMLiDuqzJauBO7091SVJKBAtQw7JK9A+PfoZf1ux1qw3pdfk5bDPkRKPg9N2ScQORpQIRGWyuqTOqeG8u4qxi6npNZcEO/H4btuSVz7Yd4M1DSAuAVbDKIQLRMJVrrLexPP6cVogQSR2TcCsv4f5cmgBEgiMA8Dvq7hQWSyL7U5sOpHvRXRRCDb//aAAwDAAABEQIRAAAQcMI8c88wQ8gc8oc8/8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAhEBPxAH/8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAREBPxAH/8QAIhABAAEDAwUBAQAAAAAAAAAAAREAITFBUWEQIHGBoZHR/9oACAEAAAE/EFRUfgF1VwVw2JN4Iekk5GQgTqYK/sHgCgX0mLewa/iWuBi4L7aIELRtBG4uR6WVCh7XC3JA6yMI7YF4pWwKG/M6wXiAySUbJcCcnyR4B2iowSgQj6aca8LJBrypThFnLsu+9xZUCWKR+NZeTFsR4kA79shwnJI7uw9t3UGUIeAQH4UJYmD4ki6gR4qMjaBLAl71u0EwBjEnk3Es9FqWQefe8HF3pQc2CgJVTIXlKkwHRJIcVCJw5u6wVoF8Re/qRQD2gzxgsdf/2Q==',
				'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAqRXhpZgAASUkqAAgAAAABADEBAgAHAAAAGgAAAAAAAABHb29nbGUAAP/bAIQAAwICCQwCAwMOAwQDAw8FEAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhANEwwOFRUMDxcYDQ8NChQPFAEDBAQCAgIJAgIJCAICAggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI/8AAEQgAMgAyAwERAAIRAQMRAf/EABoAAQEBAQEBAQAAAAAAAAAAAAAHCAYFCQT/xAA0EAABAgUCAwQJBAMAAAAAAAACAwQBBQYSEwAHCBQiETJCYhUXISUxVoKV0iMkM4MWQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+qegaDjN2NyG8v25qSs1jsliDOLpQA76pQ7iQ+YztAfMWgnHChvk9f03PJY+kjel9yWzqCU6kzeBCCKS4Z2igXEXSaRW96PUkf8ArQXrQNA0DQNBmTdf3pxIUxtjAYq0oxsq2qrfaKrrtj6MZH9Qm4II+whSHQeZvfKYSfdbb3dlGXMpZQwNoUfVyDb9uk1lpqJDL1wSEIBBJuqUYEXxECgIhZHpDV2gaBoGg4zdjchvL9uakrNY7JYgzi6UAO+qUO4kPmM7QHzFoJxwt7ePGtGhNnDRudWPlVKjqp4api5QfK4uXaAlZ/Ekhcl3wsJIbUz5gogFCqbb9FWklaCjIZcFCKSg5U4aIFy8G6VgJJIIICnbZjydUDDHiStTOCnaATnhGrBb/E51tm5cRc1lLHkJG8XPvPGdt7B5/ahb9QHoL9oGgaDMm6/vTiQpjbGAxVpRjZVtVW+0VXXbH0YyP6hNwQR9hCkOgvsvl+H0TKUpUxY04DOLYAbRwcrjxC3RSQELMVmXxJ2WAIpnBTtAEvl+H0TKUpUxY04DOLYAbRwcrjxC3RSQELMVmXxJ2WAIpnBTtAM373ymEn3W293ZRlzKWUMDaFH1cg2/bpNZaaiQy9cEhCAQSbqlGBF8RAoCIWR6Q1doGg4zdjchvL9uakrNY7JYgzi6UAO+qUO4kPmM7QHzFoJxwt7ePGtGhNnDRudWPlVKjqp4api5QfK4uXaAlZ/Ekhcl3wsJIbUz5gogFcl8vw+iZSlKmLGnAZxbADaODlceIW6KSAhZisy+JOywBFM4KdoAl8vw+iZSlKmLGnAZxbADaODlceIW6KSAhZisy+JOywBFM4KdoB4tTbfoq0krQUZDLgoRSUHKnDRAuXg3SsBJJBBAU7bMeTqgYY8SVqZwU7QCc8I1YLf4nOts3LiLmspY8hI3i5954ztvYPP7ULfqA9BftBjviO3Wlq/EbRm2DmsZDTNLNbavqGM7maDMXroS93sv1SG7q/XMfhaKX/dBUpdxPU2jGVSlLc3bNnTYM4txTbVSxR5SCeIW6KSARsxWZPEnZYAimcFegEu4nqbRjKpSlubtmzpsGcW4ptqpYo8pBPELdFJAI2YrMniTssARTOCvQCXcT1NoxlUpS3N2zZ02DOLcU21UsUeUgniFuikgEbMVmTxJ2WAIpnBXoBLuJ6m0YyqUpbm7Zs6bBnFuKbaqWKPKQTxC3RSQCNmKzJ4k7LAEUzgr0BAtyd8pFL98dstwGVd0E6p3l4UZU8okU/amacuIx5BZJqlGMLGqt1xB7RSK0U4px6A3foOdmtAMlX6jpSm5RMXVvZFZ2xSVOP1EMY6D83qmlnyZT/2tD8NA9U0s+TKf+1ofhoHqmlnyZT/2tD8NA9U0s+TKf+1ofhoHqnlvybT/ANrQ/HQdXoP/2Q==',
				'data:image/png;base64,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',
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAAWhJREFUaEPtWCEOwkAQrEQikZVIfkAlEonsU+qQSCSSZyCRSCRPQCJhJ+klpLmQ3rW7mYa9ZEWTa2ZndvfuMkXhyxWYpAIzyXrexmKKDGpJ+iHx7sRTvvcSIEi9oP4pQqBL6Cp7lsxMzj1IBFKoGGVldgkkApkjY1ViM9Ftqdh3yUQGs9En6dieLRORagCRhokIVM2tyIGJCC67XCI4JKgWLrscMisqFpIMej2VyIWNBPLB5XZLIPOSvVRH77eoeHbce5BBG1Idu7HOQGV+vbfwzqKtRIwQkt1IzNvA6UQ32Iwz6jm5Aq6AK+AKuAKugCswVQWCh7sWAhYe7uiecS2JW3q4o+Ph6W3p4arhWXu4KnjWHq4anrWHq4KHXk21dML+HDNBDa8aQKTJuFvU8KBqbkVyPFw1PGsPVxXP2sNVw0Ovp7bXEA9XDc/aw1XFs/ZwVfGsPVx1vFJmxtLDtcbLuP78lz9S4ANL1wGQl5gSyQAAAABJRU5ErkJggg==',
				'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAICAgICAQICAgIDAgIDAwYEAwMDAwcFBQQGCAcJCAgHCAgJCg0LCQoMCggICw8LDA0ODg8OCQsQERAOEQ0ODg7/wAALCAAyADIBASIA/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAgGBwIEBQMJ/8QAMRAAAQQBAwEFBgYDAAAAAAAAAQIDBAUGAAcREggTITFBFBUiMkJRFyMzNGFxFmJy/9oACAEBAAA/APv5pWKzEsb7Qm813nuW1Dd5t5Rl2kwuO/1JamLS4PbrDwUOpJdbDDRP0srUPBznUre7LvZ/kAh/a2ne5BBKw4SQfT59Cuy7sCpltv8ADKrS2g8oSlbyQn+gF64eQdmXbutxuRdbV4vBwfcmuHteP28JbjZTKb+JDbvxELZc47txJB5QtXrwRb22ucMbibMUuUtwnKma+hTVnVvn86tmNKLciM5/s24laf54BHgRqdapXeC+sZTVJtTi8tyJl2ad6wqYx89VWtge2zefpUlC0tt/d15v7Hi08foanFsGqMboYTdbS1cNuJBitD4Wmm0hKUj+gB4+Z119GjS5TiNpe2WxaqfcZwLc2S3DltBA7muv0N9LLxIHwiWygNHnw71hr1c0xul+2MSnNoFlvzYdSrLNGUCmjukE1dO0pXs0bgfKtZKnnR59450n9MaYHRo0aiGe4XU7hbSXWIXPW3EnsgIkMq6XYryFBbL7Z+lxtxKFpPoUjSRSu2Rl+J2cjFsiwmgtsgpnVV9nOYzSEw3JkMnu3XEtrUFISpaVKCVDkA8HxGr9xqQvajtdz9vZITHwPO3H7nEXCeERLMfmWFePQBwcymx9zIA+UaY/Ro0aqTd/MbjHcIrsfw16MNyMqmCrxhElvvG2nSkqelOIBBLUdoLdV9+lKfNQ1CoXZL2Eap4jVnt9XX9khlKZdnYN95JmugALedV9S1nlSj6knVh7t7eo3I2dkVEWX7qyaBJbtMZtgnldbZMHrjvj7gK+FSfqQtafI69Npc+O5GyFZkMqD7nyBpxyBkNSV9Sq2xjrLUmOf+XEnpPqgpV5EasnRrB11piM4884llltJU44tQSlKQOSST5AD10uG08WRuTvZeb/ANkeqhlQfc+3cVYPLNWHOp6cRzwFTHUpWnw5DLTPj8RGmS0aXq5xHcDBu0dfZ3tbQ1eT0+VxWv8AJsfsLk1vdz2AENz2XAy6CpbPDTiCBz3TSufA87zeab/KcWlzYujbAHKFfiKkgn7fsvDWkvOu0YG1FGwFCtQUAB+JSB1D7/stR3LYG++7WKsYDeYJT7bYdbvIbyq1jZmqdNMAEKeix0Nxm+FvAd0VlYCULURyeNM7ChRK2miV0CM3DgxWUsxo7KAlDTaAEpQkDwAAAAH8a2dB8jrFP6Y/rWWjRo0a/9k=',
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAACxElEQVR4Ae3UMWiU5x/A8c8dMSSWXIYkCC5KEKHgoKiDiwG5WOl1VBSaQjBgBxfr5NJBFBWcXGyKqJSWDrpJ+wf1HIII/YOogykVB4VsNQhNCYfmcr8+g8PLcfTuPe+2fr7c87787uDleV44uRVTffdZqu9up/ps3LvUuL76Roi05lKUz/HM2id7hT9TYW//djKHn1LM9eshw47heopjhvXFjPB/SGuY6c9O5nAdpNWcPpjUsKoESlY1TOq5c8IPAOkunOv1cRXN4gaAG5hV1FOHhJeyXgqHeruT47gp6yaO66Ex79RtlrVZ3TtjOlCQxbCSUSWlzLXkU1N+9YUsflGx4A9/WZHKXtVkDCg6Z8qIkpQBrXGjxaRiKtVK3YqUvy34toBh3/sKsCp9YaW5NPufuiwGfG5EqTlp5hPAj75WAzitLty2US9sdFuoO63JQW+Fp7b4WFs8Fd46qIVtFoU3pnyMKW+ERdu0ZsQdYc1J3TppTbhjxL8oOC+EawblNeiaEM4raOuIVeGRTfLY5JGw6ogO7fRaWLJHp/ZYEl7bKYcJC0LNjE7MqAkLJuS0wVUhXNDOBSFctUFXLgt3tXNXuNz9X/0oqtqpYrT7h5TxQDsPUNalSWFZQTsFy8KkrpwQbunELeFEd8c1japmm1LNqpju5iFFB1q8kVm/p2ZbvJUDinLbLbyStdU98aF7tsp6JezOv5MyqgCKTnlu2rIvU8umPXdKEUAVZbndF44CdvhNCD8bB+PpLkSa7gAcFe7LaUhNwwQGnfVeWFKRVbEkvHfWICY01AzJpSw8wz6LQsN3SpqV0rQhLNqHZ0JZLpeEeVesCy/sR2v7vRDWXTEvXJLLY2FN+rhoqM3BXvzwy/BYDmPWhfDELp3Y5YkQ1o3p2GGh5owBnRpwRk04rGPzHtour+0emtexioJuFFT852P9AxiOAEu2auf+AAAAAElFTkSuQmCC',
				];
	
	var index = Math.floor(Math.random() * symbolImg.length);
	var targetImg = symbolImg[index];
	var distractorImg = symbolImg;
	distractorImg.splice(index, 1);
}

//var elements = 1000;
//var size = 15;
//var probability = 1;

if (numbers == 2)
{
	var instructions = "Please cross out all the elements '      ' in the box below.";
	doc.addImage(targetImg, 'JPEG', 113, 52, 6, 6);
}
else
	var instructions = "Please cross out all the elements ' " + target + " ' in the box below.";

doc.setFontSize(15);
doc.text(20, 45, "Instructions:\n\n\t" + instructions);

doc.setFontSize(size);
var width = (170-size/2)/Math.floor(Math.sqrt(elements));
var height = (180-size/2)/Math.floor(Math.sqrt(elements));

//Frame content
var gray = 230;
doc.setFillColor(gray,gray,gray);
doc.roundedRect(17,73,181,198,3,3,'F');
doc.setFillColor(255,255,255);
doc.roundedRect(20,75,175,190,3,3,'F');
//doc.roundedRect(20,75,175,190,3,3);

var countTargets = 0;

while (countTargets == 0)
{
	var vectorTargets = [];
	for (x=0;x<Math.floor(Math.sqrt(elements));x++)
	{
		for (y=0;y<Math.floor(Math.sqrt(elements));y++)
		{
			if (Math.floor((Math.random() * 100) ) < probability)
			{
				vectorTargets[x+Math.floor(Math.sqrt(elements))*y]= 1;
				countTargets++;
			}
		}
	}
}
		
for (x=0;x<Math.floor(Math.sqrt(elements));x++)
{
    for (y=0;y<Math.floor(Math.sqrt(elements));y++)
    {
	var offset = Math.floor(Math.random()*width/2)*order;

        //if (Math.floor((Math.random() * 100) ) < probability)
		if (vectorTargets[x+Math.floor(Math.sqrt(elements))*y] == 1)
		{
			if (numbers == 2)
				doc.addImage(targetImg, 'JPEG', 20 + width/3*(1-order) +0.5*size+x*width+offset, 75+ height/3*(1-order) +0.5*size+y*height+offset, size/3, size/3);
			else
				doc.text(20 + width/3*(1-order) + 0.5*size+x*width+offset,80+ height/3*(1-order) + 0.5*size+y*height+offset, target);
		}
        else
        {
			if (numbers == 2)
			{
				i=Math.floor(Math.random() * distractorImg.length);
				doc.addImage(distractorImg[i], 'JPEG', 20 + width/3*(1-order) +0.5*size+x*width+offset, 75 + height/3*(1-order) +0.5*size+y*height+offset, size/3, size/3);
			}
			else
			{
				i=Math.floor(Math.random() * distractor.length);
				doc.text(20 + width/3*(1-order) + 0.5*size+x*width+offset,80+ height/3*(1-order) + 0.5*size+y*height+offset, distractor[i]);
			}
        }
    }
}

//doc.save('Test.pdf');
var string = doc.output('datauristring');
$('iframe').attr('src', string);
};
