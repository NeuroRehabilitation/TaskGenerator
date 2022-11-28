// JavaScript Document
var appURLcurrent = "./en/index.html";
var appURL_other_1 = "./pt/index.html";
var appURL_other_2 = "./it/index.html";
var appURL_other_3 = "./es/index.html";
var manualURL = "./PARP-AVC Manual Técnico.pdf";

function displayEnglish() {
  document.getElementById("title").innerHTML = "TASK GENERATOR";
  document.getElementById("subtitle").innerHTML =
    "Personalizing Cognitive Training";
  document.getElementById("description").innerHTML =
    "The NeuroRehabLab Task Generator is a software that has been developed with the collaboration of over 20 health professionals that uses computational models of cognitive function to deliver a highly personalized training to each individual. The tasks created with the NeuroRehabLab Task Generator are generated procedurally, that is, they are always different every time they are created.";
  document.getElementById("execute").value = "Task Generator";
  document.getElementById("other_1").innerHTML =
    "Click here for the portuguese version";
  document.getElementById("other_2").innerHTML =
    "Click here for the italian version";
  document.getElementById("other_3").innerHTML =
    "Click here for the spanish version";
  document.getElementById("manual").innerHTML =
    "Technical Manual (portuguese only)";
  document.getElementById("thanks").innerHTML =
    "Special thanks to Simone Timi and Francesco Semprebon for the italian translation, and to Nicole Grasset for the spanish translation.";
  document.getElementById("ref").innerHTML =
    "If you use this software please cite this reference: Faria, A.L., & Bermúdez i Badia, S. (2015). Development and evaluation of a web-based cognitive task generator for personalized cognitive training: a proof of concept study with stroke patients. In REHAB 2015: 3rd Workshop on ICTs for improving Patients Research Techniques Proceedings. Lisbon, Portugal. ACM.";
  appURLcurrent = "./en/index.html";
  appURL_other_1 = "./pt/index.html";
  appURL_other_2 = "./it/index.html";
  appURL_other_3 = "./es/index.html";
}

function displayPortuguese() {
  document.getElementById("title").innerHTML = "PARP - AVC";
  document.getElementById("subtitle").innerHTML =
    "Programa Adaptável para a Reabilitação Personalizada do Acidente Vascular Cerebral";
  document.getElementById("description").innerHTML =
    "O Programa Adaptável para a Reabilitação Personalizada do Acidente Vascular Cerebral é um software que foi desenvolvido com a colaboração de mais de 20 profissionais de saúde e, que utiliza modelos computacionais das funções cognitivas, de modo a oferecer um treino altamente personalizado a cada paciente. As tarefas criadas são geradas processualmente, ou seja, são sempre diferentes.";
  document.getElementById("execute").value = "PARP - AVC";
  document.getElementById("other_1").innerHTML =
    "Clique aqui para a versão em inglês";
  document.getElementById("other_2").innerHTML =
    "Clique aqui para a versão em italiano";
  document.getElementById("other_3").innerHTML =
    "Clique aqui para a versão espanhola";
  document.getElementById("manual").innerHTML = "Manual Técnico";
  document.getElementById("thanks").innerHTML =
    "Especiais agradecimentos a Simone Timi e Francesco Semprebon pela tradução para italiano, e a Nicole Grasset pela tradução para espanhol.";
  document.getElementById("ref").innerHTML =
    "Se utilizar este software por favor cite esta referência: Faria, A.L., & Bermúdez i Badia, S. (2015). Development and evaluation of a web-based cognitive task generator for personalized cognitive training: a proof of concept study with stroke patients. In REHAB 2015: 3rd Workshop on ICTs for improving Patients Research Techniques Proceedings. Lisbon, Portugal. ACM.";
  appURLcurrent = "./pt/index.html";
  appURL_other_1 = "./en/index.html";
  appURL_other_2 = "./it/index.html";
  appURL_other_3 = "./es/index.html";
}

function displayItalian() {
  document.getElementById("title").innerHTML = "TASK GENERATOR";
  document.getElementById("subtitle").innerHTML =
    "Training Cognitivo Personalizzato";
  document.getElementById("description").innerHTML =
    "'NeuroRehabLab Task Generator' è un software sviluppato con la collaborazione di oltre 20 professionisti della salute che utilizza modelli computazionali del funzionamento cognitivo per offrire un training altamente personalizzato per ogni individuo. Le attività create con 'NeuroRehabLab Task Generator' sono generate proceduralmente, cioè sono sempre diverse ogni volta che vengono create.";
  document.getElementById("execute").value = "Task Generator";
  document.getElementById("other_1").innerHTML =
    "Clicca qui per la versione inglese";
  document.getElementById("other_2").innerHTML =
    "Clicca qui per la versione portoghese";
  document.getElementById("other_3").innerHTML =
    "Clicca qui per la versione spagnolo";
  document.getElementById("manual").innerHTML =
    "Manuale Tecnico (solo portoghese)";
  document.getElementById("thanks").innerHTML =
    "Un ringraziamento speciale a Simone Timi e Francesco Semprebon per la traduzione in italiano, e a Nicole Grasset per la traduzione spagnola.";
  document.getElementById("ref").innerHTML =
    "Se utilizza questo software la prego di citare questo riferimento: Faria, A.L., & Bermúdez i Badia, S. (2015). Development and evaluation of a web-based cognitive task generator for personalized cognitive training: a proof of concept study with stroke patients. In REHAB 2015: 3rd Workshop on ICTs for improving Patients Research Techniques Proceedings. Lisbon, Portugal. ACM.";
  appURLcurrent = "./it/index.html";
  appURL_other_1 = "./en/index.html";
  appURL_other_2 = "./pt/index.html";
  appURL_other_3 = "./es/index.html";
}

function displaySpanish() {
  document.getElementById("title").innerHTML = "Generador de Tareas";
  document.getElementById("subtitle").innerHTML =
    "Personalizando el Entrenamiento Cognitivo";
  document.getElementById("description").innerHTML =
    "'NeuroRehabLab Task Generator' es un software que se ha desarrollado con la colaboración de más de 20 profesionales de la salud que utiliza modelos computacionales de función cognitiva para brindar una capacitación altamente personalizada a cada individuo. Las tareas creadas con el Generador de tareas NeuroRehabLab se generan en forma de procesos, es decir, siempre son diferentes cada vez que se crean.";
  document.getElementById("execute").value = "Task Generator";
  document.getElementById("other_1").innerHTML =
    "Clique aquí para ver la versión en ingles";
  document.getElementById("other_2").innerHTML =
    "Clique aquí para ver la versión portuguesa";
  document.getElementById("other_3").innerHTML =
    "Clique aquí para ver la versión italiana";
  document.getElementById("manual").innerHTML =
    "Manual técnico (solo en portugués)";
  document.getElementById("thanks").innerHTML =
    "Un agradecimiento especial a Simone Timi y Francesco Semprebon por la traducción al italiano, y a Nicole Grasset por la traducción al español.";
  document.getElementById("ref").innerHTML =
    "Si utiliza este software, cite esta referencia: Faria, A.L. y Bermúdez i Badia, S. (2015). Development and evaluation of a web-based cognitive task generator for personalized cognitive training: a proof of concept study with stroke patients. In REHAB 2015: 3rd Workshop on ICTs for improving Patients Research Techniques Proceedings. Lisbon, Portugal. ACM.";
  appURLcurrent = "./es/index.html";
  appURL_other_1 = "./en/index.html";
  appURL_other_2 = "./pt/index.html";
  appURL_other_3 = "./it/index.html";
}

function goToApp() {
  javascript: location.href = appURLcurrent;
}
