var addRow = function (afangiRow) {
    
    afangiRow.setAttribute('class', "row blue");

    var form = document.createElement('form');
    var divHeiti = document.createElement('div');
    divHeiti.setAttribute('class','form-group col-md-2');
    var labelHeiti = document.createElement('label');
    labelHeiti.setAttribute('class','medium');
    labelHeiti.setAttribute('for','h-' + afangar.fjoldi);
    labelHeiti.innerHTML = 'Heiti';
    divHeiti.appendChild(labelHeiti);
    var inputHeiti = document.createElement('input');
    inputHeiti.setAttribute('type','text');
    inputHeiti.setAttribute('class','form-control');
    inputHeiti.setAttribute('id','h-'+ afangar.fjoldi);
    inputHeiti.setAttribute('value','STÆ 193');
    divHeiti.appendChild(inputHeiti);
    form.appendChild(divHeiti);

    var divEiningar = document.createElement('div');
    divEiningar.setAttribute('class','form-group col-md-1');
    var labelEiningar = document.createElement('label');
    labelEiningar.setAttribute('for','e-' + afangar.fjoldi);
    labelEiningar.setAttribute('class','medium');
    labelEiningar.innerHTML = 'Einingar';
    divEiningar.appendChild(labelEiningar);
    var inputEiningar = document.createElement('input');
    inputEiningar.setAttribute('type','text');
    inputEiningar.setAttribute('class','form-control');
    inputEiningar.setAttribute('id','e-'+ afangar.fjoldi);
    inputEiningar.setAttribute('value','3');
    divEiningar.appendChild(inputEiningar);
    form.appendChild(divEiningar);

    var divSynidaemi = document.createElement('div');
    divSynidaemi.setAttribute('class','form-group col-md-2');
    var labelSynidaemi = document.createElement('label');
    labelSynidaemi.setAttribute('for','s-' + afangar.fjoldi);
    labelSynidaemi.setAttribute('class','medium');
    labelSynidaemi.innerHTML = 'Sýnidæmi';
    divSynidaemi.appendChild(labelSynidaemi);
    var selectSynidaemi = document.createElement('select');
    selectSynidaemi.setAttribute('class','form-control');
    selectSynidaemi.setAttribute('id','s-'+ afangar.fjoldi);

    afangar.synidaemi.forEach(function(j){
      var option = document.createElement('option');
      option.text = j;
      selectSynidaemi.appendChild(option);
    });
   
    divSynidaemi.appendChild(selectSynidaemi);
    form.appendChild(divSynidaemi);

    var divTimar = document.createElement('div');
    divTimar.setAttribute('class','form-group col-md-1');
    var labelTimar = document.createElement('label');
    labelTimar.setAttribute('for','t-' + afangar.fjoldi);
    labelTimar.setAttribute('class','medium');
    labelTimar.innerHTML = 'kest/vika';
    divTimar.appendChild(labelTimar);

    var inputTimar = document.createElement('input');
    inputTimar.setAttribute('type','text');
    inputTimar.setAttribute('class','form-control');
    inputTimar.setAttribute('id','t-'+ afangar.fjoldi);
    inputTimar.setAttribute('data-toggle','tooltip');
    inputTimar.setAttribute('data-placement','bottom');
    inputTimar.setAttribute('value','6');
    divTimar.appendChild(inputTimar);
    form.appendChild(divTimar);

    var divMin = document.createElement('div');
    divMin.setAttribute('class','form-group col-md-2');
    var labelMin = document.createElement('label');
    labelMin.setAttribute('for','m-' + afangar.fjoldi);
    labelMin.setAttribute('class','medium');
    labelMin.innerHTML = 'Lengd kest';
    divMin.appendChild(labelMin);

    var inputMin = document.createElement('input');
    inputMin.setAttribute('type','text');
    inputMin.setAttribute('class','form-control col-md-2');
    inputMin.setAttribute('id','m-'+ afangar.fjoldi);
    inputMin.setAttribute('data-toggle','tooltip');
    inputMin.setAttribute('data-placement','bottom');
    inputMin.setAttribute('value','40');
    divMin.appendChild(inputMin);
    form.appendChild(divMin);

    var divProsenta = document.createElement('div');
    divProsenta.setAttribute('class','form-group col-md-1');
    var labelProsenta = document.createElement('label');
    labelProsenta.setAttribute('for','p-' + afangar.fjoldi);
    labelProsenta.setAttribute('class','medium');
    labelProsenta.innerHTML = 'Hlutf.';
    divProsenta.appendChild(labelProsenta);

    var inputProsenta = document.createElement('input');
    inputProsenta.setAttribute('type','text');
    inputProsenta.setAttribute('class','form-control');
    inputProsenta.setAttribute('id','p-'+ afangar.fjoldi);
    inputProsenta.setAttribute('data-toggle','tooltip');
    inputProsenta.setAttribute('data-placement','bottom');
    inputProsenta.setAttribute('value','100');
    divProsenta.appendChild(inputProsenta);
    form.appendChild(divProsenta);
 
 	

    var divNemendafjoldi = document.createElement('div');
    divNemendafjoldi.setAttribute('class','form-group col-md-2');
    divNemendafjoldi.setAttribute('id','f-'+ afangar.fjoldi+'s');

    var labelNemendafjoldi = document.createElement('label');
    labelNemendafjoldi.setAttribute('for','f-' + afangar.fjoldi + '-1');
    labelNemendafjoldi.setAttribute('class','medium');
    labelNemendafjoldi.innerHTML = 'Hópastærð(ir)';
    divNemendafjoldi.appendChild(labelNemendafjoldi);
    var divBuffer = document.createElement('div');
    divBuffer.setAttribute('class','buffer');
    var inputNemendafjoldi = document.createElement('input');
    inputNemendafjoldi.setAttribute('type','text');
    inputNemendafjoldi.setAttribute('class','form-control f-'+ afangar.fjoldi +'s einingarinput4');
    inputNemendafjoldi.setAttribute('value','15');
    inputNemendafjoldi.setAttribute('id','f-' + afangar.fjoldi + '-1');
    divBuffer.appendChild(inputNemendafjoldi);
    divNemendafjoldi.appendChild(divBuffer);
    form.appendChild(divNemendafjoldi);
           
    var divTakkaGroup = document.createElement('div');
    divTakkaGroup.setAttribute('class','btn-group');
    var takki = document.createElement('button');
    takki.setAttribute('type','button');
    takki.setAttribute('class','btn btn-primary addgroup');
    takki.innerHTML = '+';
    var nth = afangar.fjoldi;


    var takki2 = document.createElement('button');
    takki2.setAttribute('type','button');
    takki2.setAttribute('class','btn btn-primary delgroup');
    takki2.innerHTML = '-';
    takki2.addEventListener('click',function(nth) {
		return function() {
            var parent = document.getElementById('f-' + nth + 's');
			var items = parent.children;
			var l = items.length;
			if (l  <=  2) {
			}
			else {
				parent.removeChild(parent.lastChild);
			}
		};
	}(nth));
    divTakkaGroup.appendChild(takki2);
        takki.addEventListener('click',function(nth) {
		return function() {
			var items = document.getElementsByClassName('f-'+ nth +'s');
			var index = document.getElementsByClassName('f-' + nth + 's').length;
            var input = document.createElement('input');
            input.setAttribute('type','text');
            input.setAttribute('class','form-control f-'+ nth.toString()+ 's einingarinput3');
            input.setAttribute('id', 'f-' + nth + '-' + index);
            input.setAttribute('value','15');
            document.getElementById('f-' + nth +'s').appendChild(input);
		};
	}(nth));
    divTakkaGroup.appendChild(takki);
    form.appendChild(divTakkaGroup);   
    afangiRow.appendChild(form);
    //document.getElementById('tafla').appendChild(afangiRow);
    var listi = document.getElementById('tafla');
    listi.insertBefore(afangiRow, document.getElementById('aftastur'));
};