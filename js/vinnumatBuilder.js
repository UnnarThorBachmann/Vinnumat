"use strict";
/*
vinnumat: Unnar Thor Bachmann.
*/

var afangar = {
    'synidaemi': [
      'Almenn braut',
      'Fagbóklegt',
      'Félagsgreinar',
      'Hægferð',
      'Íslenska',
      'Íþróttafræði',
      'Íþróttir',
      'Listgreinar',
      'Raungreinar',
      'Starfsbraut (1/3)',
      'Starfsbraut (4/6)',
      'Starfsbraut (7/12)',
      'Stærðfræði',
      'Sýnidæmið mitt',
      'Tungumál',
      'Tölvuáfangar',
      'Verklegt'
    ],
    'fjoldi': 1
};// End of JSON object.


var model = {
    kennari: null,
    kennarar: [],
    init: function (_afangar,hlutfoll,c) {
    var _afangar2 = []; 

    _afangar.forEach(function(afangi){
        _afangar2.push(afangi);
      },_afangar2);

    var kennararNofn = [
      'Almenn braut',
      'Fagbóklegt',
      'Félagsgreinar',
      'Hægferð',
      'Íslenska',
      'Íþróttafræði',
      'Listgreinar',
      'Raungreinar',
      'Stærðfræði',
      'Tungumál',
      'Tölvuáfangar',
      'Verklegt'
    ];
    this.kennari = new Kennari("Þú",_afangar,hlutfoll,c);

    this.kennarar = [];
      
      for (var i = 0; i < kennararNofn.length; i++) {
        var nafn = kennararNofn[i];

        for (var j= 0; j < _afangar.length; j++) {
          _afangar2[j] = [_afangar[j][0],_afangar[j][1],_afangar[j][2],nafn,_afangar[j][4],_afangar[j][5]];
        }
        
        this.kennarar.push(new Kennari(nafn,_afangar2,hlutfoll,c));
      }
    }
};

var octopus = {
    skerding: 0,
    summa: 0,
    summaGamla: 0,
    einingar: 0,
    hlutfall: parseFloat(0),
    adrir: [],
    litir: {},
    init: function () {
      history.replaceState(null,null,'index.html');
      if (localStorage.pagecount) {
       localStorage.pagecount=Number(localStorage.pagecount) +1;
     }
     else {
       localStorage.pagecount=1;
     }
     view.init();
    },
    vinnuskylda: function (klstChluti,vinnuskyldaTexti) {
        return model.kennari.vinnuskylda(klstChluti,vinnuskyldaTexti);
    },
    parseOutput: function(i,digits) {
      var output = (parseFloat(Math.round(i*digits))/digits).toString();
      output = output.replace('.',',');
      return output;
    },
    parseNumberField: function(n) {
      n = n.replace(',','.');
      return (isNaN(n) || n.length === 0 || !n)? 0:parseFloat(n);
    },
    createKennari: function(afangar,hlutfoll,c) {

        model.init(afangar,hlutfoll,c);
    },
    kennari: function() {
    	return model.kennari;
    },
    kennarar: function() {
        return this.adrir;
    },
    vinnumat: function () {
      var v  = model.kennari.vinnumatAfanga();
      this.skerding = model.kennari.ryrnunAfanga();
      this.summa = model.kennari.heildarvinnumat();
      this.einingar = model.kennari.totalEiningar();
      this.adrir = [];
      model.kennarar.forEach(function(kennari){
        this.adrir.push(kennari);
      },this);
     
      
      this.adrir.push(model.kennari);
      this.litir = this.lita();
      return v;
    },
    ryrnun: function() {
     return this.skerding;
    },
    orlof: function(artal) {
        return orlofsuppbot[artal];
    },
    desember: function(artal) {
        return desemberuppbot[artal];
    },
    dagvinna: function(launaflokkur,threp) {
       var dagvinn = launatafla01092016[launaflokkur][threp];
       return parseFloat(dagvinn);
    },
    yfirvinna: function(launaflokkur,threp,yfirvinnutimar) {
      if (yfirvinnutimar <= 0) {
        return parseFloat(0);
      }
      else {
        var y2016 = 0.010385*2*yfirvinnutimar*launatafla01092016[launaflokkur][threp];
        return y2016/parseFloat(12);
      }
      
    },
    launKennari: function(launaflokkur,threp,yfirvinnaNyja) {
     var laun2016 = this.yfirvinna(launaflokkur,threp,yfirvinnaNyja);
     laun2016 += this.dagvinna(launaflokkur,threp);
     laun2016 += this.desember('2016')/12;
     laun2016 += this.orlof('2016')/12;
     return laun2016/1000;
    },
    teiknaSynidaemi: function(nafn1, e1, ts1, ms1, nafn2, e2 ,ts2, ms2, fjoldatolur) {
      var gildi1 = [];
      var gildi2 = [];
      

      //sd1, e1, t1, m1, sd2, e2, m2, t2,nemfj
      fjoldatolur.forEach(function(tala){
        var af1 = new Afangi(
                  new Array('a',e1,tala,nafn1,ts1,ms1));
        af1.reikna_vinnumat();
        gildi1.push(af1.vinnumat().toFixed(1));
        var af2 = new Afangi(
                  new Array('b',e2,tala,nafn2,ts2,ms2));
        af2.reikna_vinnumat();
        gildi2.push(af2.vinnumat().toFixed(1));
      });
      
      return {
        'fyrra': gildi1,
        'seinna': gildi2
      }
    },
    lita: function() {
      var d = {};
      model.kennarar.forEach(function(kennari){
        if (kennari.alag()) {
        d[kennari.heiti] = "red";
       }
       else{
        d[kennari.heiti] = "#d3ac2b";
       }
      },d);
      
      return d
    }

};

var view = {
  vinnuskylda: function(c,vinnuskyldaTexti) {
    return octopus.vinnuskylda(c,vinnuskyldaTexti);
  },
  init: function () {
    var self = this;

    var button4 = document.getElementById('skra');
    button4.addEventListener('click',function(e) {
    	e.preventDefault();
        var validSynidaemi = document.getElementById('valid').value;
        var namsaetlun = document.getElementById('mitt_namsaetlun').value;
        var undirbuningur = document.getElementById('mitt_undirbuningur').value;
        var profagerd_kennslutima = document.getElementById('mitt_profagerd_kennslutima').value;
        var profagerd = document.getElementById('mitt_profagerd').value;
        var onnur_vinna = document.getElementById('mitt_onnur_vinna').value;
        var tryggingarakvaedi = document.getElementById('mitt_tryggingarakvaedi').value;
        var vinna_per_nemanda = document.getElementById('mitt_vinna_per_nemanda').value;
        var lagmark = document.getElementById('mitt_lagmark').value;
        var hamark_1 = document.getElementById('mitt_hamark_1').value;
        var kostn_per_nem_yn = document.getElementById('mitt_kostn_per_nem_yn').value;
        var hamark_2 = document.getElementById('mitt_hamark_2').value;
        var kostn_per_nem_ye = document.getElementById('mitt_kostn_per_nem_ye').value;
        	
        if (isNaN(namsaetlun) || namsaetlun ==='' 
        		|| isNaN(undirbuningur) || undirbuningur ==='' 
        		|| isNaN(profagerd_kennslutima) || profagerd_kennslutima===''
        		|| isNaN(profagerd) ||profagerd ===''
        		|| isNaN(onnur_vinna) || onnur_vinna ===''
        		|| isNaN(tryggingarakvaedi) || tryggingarakvaedi ===''
        		|| isNaN(vinna_per_nemanda) || vinna_per_nemanda ==='' 
        		|| isNaN(lagmark) || lagmark ===''
        		|| isNaN(hamark_1) || hamark_1 ===''
        		|| isNaN(kostn_per_nem_yn) || kostn_per_nem_yn ===''
        		|| isNaN(hamark_2) || hamark_2 ===''
        		|| isNaN(kostn_per_nem_ye)|| kostn_per_nem_ye ==='' ){

        		if (!document.getElementById('success')) { 
        
 		            var success = document.createElement('div');
        		    success.setAttribute('class','alert alert-danger');
            		success.setAttribute('id','success');
           			success.innerHTML = '<strong>Verður að slá tölur í alla reiti</strong>';
            		document.getElementById('last').appendChild(success);
        		}
        		else {
        			var success = document.getElementById('success');
        			success.setAttribute('class','alert alert-danger');
            		success.setAttribute('id','success');
           			success.innerHTML = '<strong>Verður að slá tölur í alla reiti</strong>';

        		}
        		$("#success").show().delay(5000).fadeOut();
        		return
    		}	

        	synidaemi[validSynidaemi].hamark_e = 0;
        	synidaemi[validSynidaemi].hamark_n = 0;
        	synidaemi[validSynidaemi].lagmark = 0;
        	synidaemi[validSynidaemi].kostn_per_nem_ye = 0;
        	synidaemi[validSynidaemi].kostn_per_nem_yn = 0;
        	synidaemi[validSynidaemi].lokaprof = 0;
        	synidaemi[validSynidaemi].onnur_vinna = 0;
        	synidaemi[validSynidaemi].timar_namsAetlun = 0;
        	synidaemi[validSynidaemi].verkefnisgerd = 0;
        	synidaemi[validSynidaemi].undirb_kennslu = 0;
        	synidaemi[validSynidaemi].fragangur_namsmats = 0;
        	synidaemi[validSynidaemi].onnur_vinna_per_nemanda = 0;
        	synidaemi[validSynidaemi].vinna_per_nemanda = 0;

        	synidaemi[validSynidaemi].hamark_e = parseFloat(hamark_2);
        	synidaemi[validSynidaemi].hamark_n = parseFloat(hamark_1);
        	synidaemi[validSynidaemi].lagmark = parseFloat(lagmark);

        	synidaemi[validSynidaemi].kostn_per_nem_ye = parseFloat(kostn_per_nem_ye);
        	synidaemi[validSynidaemi].kostn_per_nem_yn = parseFloat(kostn_per_nem_yn);

        	synidaemi[validSynidaemi].lokaprof = parseFloat(profagerd);
        	synidaemi[validSynidaemi].onnur_vinna = parseFloat(onnur_vinna) + parseFloat(tryggingarakvaedi);
        	synidaemi[validSynidaemi].timar_namsAetlun = parseFloat(namsaetlun);
        	synidaemi[validSynidaemi].verkefnisgerd = parseFloat(profagerd_kennslutima);
        	synidaemi[validSynidaemi].undirb_kennslu = parseFloat(undirbuningur);
        	synidaemi[validSynidaemi].vinna_per_nemanda = parseFloat(vinna_per_nemanda);
            if (!document.getElementById('success')) {
	        
	        
    	    var success = document.createElement('div');
       		success.setAttribute('class','alert alert-success');
            success.setAttribute('id','success');
            success.innerHTML = 'Sýnidæmið '+ validSynidaemi +' hefur verið uppfært.';
            document.getElementById('last').appendChild(success);
            
        
        	}
        	else {
        		var success = document.getElementById('success');
        		success.setAttribute('class','alert alert-success');
            	success.setAttribute('id','success');
            	document.getElementById('success').innerHTML = 'Sýnidæmið '+ validSynidaemi +' hefur verið uppfært.';
        	}
			$("#success").show().delay(5000).fadeOut();        	
    });
	var button6 = document.getElementById('na');
    button6.addEventListener('click',function(e) {
        e.preventDefault();
        var validSynidaemi = document.getElementById('valid').value;

        document.getElementById('mitt_namsaetlun').value = synidaemi[validSynidaemi].timar_namsAetlun;
        document.getElementById('mitt_undirbuningur').value = synidaemi[validSynidaemi].undirb_kennslu;
        document.getElementById('mitt_profagerd_kennslutima').value = synidaemi[validSynidaemi].verkefnisgerd;
        document.getElementById('mitt_profagerd').value = synidaemi[validSynidaemi].lokaprof;
        document.getElementById('mitt_onnur_vinna').value = synidaemi[validSynidaemi].onnur_vinna;
        document.getElementById('mitt_tryggingarakvaedi').value = 0;
        document.getElementById('mitt_vinna_per_nemanda').value = (synidaemi[validSynidaemi].vinna_per_nemanda + synidaemi[validSynidaemi].onnur_vinna_per_nemanda + synidaemi[validSynidaemi].fragangur_namsmats).toString();
        document.getElementById('mitt_lagmark').value = synidaemi[validSynidaemi].lagmark;
        document.getElementById('mitt_hamark_1').value = synidaemi[validSynidaemi].hamark_n;
        document.getElementById('mitt_kostn_per_nem_yn').value = synidaemi[validSynidaemi].kostn_per_nem_yn;
        document.getElementById('mitt_hamark_2').value = synidaemi[validSynidaemi].hamark_e;
        document.getElementById('mitt_kostn_per_nem_ye').value = synidaemi[validSynidaemi].kostn_per_nem_ye;
        if (!document.getElementById('success')) {
	           
    	    var success = document.createElement('div');
       		success.setAttribute('class','alert alert-success');
            success.setAttribute('id','success');
            success.innerHTML = 'Sýnidæmið '+ validSynidaemi +' hefur verið sótt.';
            document.getElementById('last').appendChild(success);
            
        
        	}
        	else {
        		var success = document.getElementById('success');
        		success.setAttribute('class','alert alert-success');
            	success.setAttribute('id','success');
            	document.getElementById('success').innerHTML = 'Sýnidæmið '+ validSynidaemi +' hefur verið sótt.';
        	}
			$("#success").show().delay(5000).fadeOut();        	
               
    });
    
    var fyrirsagnir = document.getElementsByClassName('fyrirsagnir');
    for (var i = 0; i < fyrirsagnir.length; i++) {
      var item = fyrirsagnir[i];
      	item.addEventListener('click',function(fyrirsogn){
      	return function() {
      		if (fyrirsogn.id  && fyrirsogn.id == 'mittSynidaemi') {
      			$('.container').addClass('hidden'); 
            	$('#mitt').removeClass('hidden');
      		}
      		else if (fyrirsogn.id  && fyrirsogn.id == 'yta2') {
      			$('.container').addClass('hidden'); 
            	$('#samanburdur2').removeClass('hidden');
      		}
          else if (fyrirsogn.id  && fyrirsogn.id == 'yta3') {
            $('.container').addClass('hidden'); 
              $('#samanburdur3').removeClass('hidden');
          }
      		else {
      			$('.container').removeClass('hidden'); 
            	$('#mitt').addClass('hidden');
            	$('#samanburdur2').addClass('hidden');
              $('#samanburdur3').addClass('hidden')
      		}
      	}
      	
      }(item));
    };
	var addgroup = document.getElementsByClassName('addgroup');
	for (var i = 0; i < addgroup.length; i++) {
		var item = addgroup[i];
		item.addEventListener('click',function(i) {
			return function() {
			    var items = document.getElementsByClassName('f-'+ (i+1).toString() +'s')
			    var index = items.length + 1;	
            	
            	var input = document.createElement('input');
            	input.setAttribute('type','text');
            	input.setAttribute('class','form-control f-'+ (i+1).toString()+ 's einingarinput3');
            	input.setAttribute('id', 'f-' + (i+1).toString() +  '-' + index);
            	input.setAttribute('value','15');
            	document.getElementById('f-' + (i+1).toString()+'s').appendChild(input);
			}
		}(i));
	}
	var delgroup = document.getElementsByClassName('delgroup');
	for (var i = 0; i < delgroup.length; i++) {
		var item = delgroup[i];
		item.addEventListener('click',function(i) {
			return function() {
				var items = document.getElementById('f-' + (i+1).toString() + 's').children;
				var l = items.length;
				if (l  ==  2) {

				}
				else {
					var input = items[l-1];
					input.parentNode.removeChild(input);
				}
			}
		}(i));
	}
    if (screen.width <= 765 && $("#myNavbar").hasClass('in')) {
          $('#skuffa').click();
    }
   
    

    var button1 = document.getElementById('add');
     button1.addEventListener('click',function() {
      afangar.fjoldi += 1;
      var afangiCol = document.createElement('div');
      addRow(afangiCol);
      
    });
    var button5 = document.getElementById('delete');
    button5.addEventListener('click',function () {
    	var items = document.getElementById('tafla').children;
    	var l = items.length;
    	if (l == 4) {

    	}
    	else {
    		afangar.fjoldi -= 1;
    		var af = items[l-2];
    		af.parentNode.removeChild(af);
    	}
    });
    
    
    $('.nava').click(function() {
      ('.nava').parent().removeClass('active');
    });
    
    $(".hopanafn").on("click", function(){
      var idMark = this.href.split('#')[1];
      document.getElementById(idMark).classList.toggle('feluleikur');
      var idMark2 = 'orvar' + idMark.slice(-1);
      var delement = document.getElementById(idMark2);
      if (delement.classList.contains('glyphicon-chevron-up')) {
       delement.classList.remove('glyphicon-chevron-up');
       delement.classList.add('glyphicon-chevron-down');
      }
      else {
       delement.classList.remove('glyphicon-chevron-down');
       delement.classList.add('glyphicon-chevron-up');
      }
    });
    var button2 = document.getElementById('calculate');
    button2.addEventListener('click',function() {
      var nidurstAfanga = document.getElementById('tafla2');
      $(nidurstAfanga.children).not(':first').remove();
      
      self.calc();
      button2.innerHTML = "Endurreikna";
      
    });
    var button3 = document.getElementById('berasaman');
    button3.addEventListener('click',function(e) {

    e.preventDefault();
    var e1 = octopus.parseNumberField(document.getElementById('es1').value);
    var e2 = octopus.parseNumberField(document.getElementById('es2').value);
    var t1 = octopus.parseNumberField(document.getElementById('ts1').value);
    var t2 = octopus.parseNumberField(document.getElementById('ts2').value);
    var m1 = octopus.parseNumberField(document.getElementById('ms1').value);
    var m2 = octopus.parseNumberField(document.getElementById('ms2').value);
	var sd1 = document.getElementById('fyrra').value;
    var sd2 = document.getElementById('seinna').value;
    
    

    if (screen.width > 500) {

      var nemfj = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
    }
    else {
      var nemfj = [5,8,10,13, 15,17,20,23,25,26,28,29,30,31,32];
    }
    
    var nidurst = octopus.teiknaSynidaemi(sd1, e1, t1, m1, sd2, e2, t2, m2,nemfj);
    var lineChartData = {
        labels :nemfj, 
        datasets : [
            {
                label: document.getElementById('fyrra').value,
                fillColor : "rgba(211,172,43,0.2)",
                strokeColor : "rgba(211,172,43,1)",
                pointColor : "rgba(211,172,43,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(211,172,43,1)",
                data : nidurst.fyrra
            },
            {
                label: document.getElementById('seinna').value,
                fillColor : "rgba(51,61,81,0.2)",
                strokeColor : "rgba(51,61,81,1)",
                pointColor : "rgba(51,61,81,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(51,61,81,1)",
                data : nidurst.seinna
            }
        ]
    }
    if (typeof window.myLine  != "undefined") {
       window.myLine.destroy();
     }
     
      var ctx = document.getElementById("canvas2").getContext("2d");
        window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
      });
    document.getElementById('yta2').click();
    });

    document.body.addEventListener('keypress', function(e) {
      if (e.charCode === 13) {
        self.calc();
      }    
    });
  },// end of init.
  calc: function () {
    var af = [];
    var hlutfoll = []
    for (var i=1; i <= afangar.fjoldi; i++) {
        var heiti = document.getElementById('h-'+i).value;
        if (heiti != '') {
           var fjoldar = document.getElementsByClassName('f-' + i + 's');
           for (var j = 0; j < fjoldar.length; j++) {
           	if (!isNaN(fjoldar[j].value)) {
           		var einingar = octopus.parseNumberField(document.getElementById('e-'+i).value);
           		var fjoldi = octopus.parseNumberField(fjoldar[j].value);
           		var synid = document.getElementById('s-'+i).value;
           		var hlutf =  octopus.parseNumberField(document.getElementById('p-'+i).value);
           		var kennslust = octopus.parseNumberField(document.getElementById('t-' + i).value);
           		var timalengd = octopus.parseNumberField(document.getElementById('m-' + i).value);
           		var param = [heiti,einingar,fjoldi,synid,kennslust,timalengd];
           		af.push(param);
           		hlutfoll.push(hlutf);
           	}
       	   }
        }
    }
    var onnur = octopus.parseNumberField(document.getElementById('onnurVinna').value);
    octopus.createKennari(af,hlutfoll,onnur);
    var kennari = octopus.kennari();
     $('.hidden').removeClass('hidden');
     $('#mitt').addClass('hidden');
     $('#samanburdur2').addClass('hidden');
     $('.visiblenon').removeClass('visiblenon');
     _.templateSettings.variable = "item";
     var vinnumat = octopus.vinnumat();
     var summa = parseFloat(0);
     for (var j = 0; j < kennari.originalAfangar.length; j++) {
     	var item2 = kennari.originalAfangar[j];
        summa += parseFloat(kennari.originalAfangarVinnumat[j]);
         
        var t2 = document.getElementById('tafla2');
        var divRow = document.createElement('div');
        divRow.setAttribute('class','row blue');
        //var divCaption = document.createElement('div');
        //divCaption.setAttribute('class','caption');
        divRow.setAttribute('id','v-' + (j+1).toString());
        
        var template = _.template(
            templateAfangiNidurst
        );
        divRow.innerHTML = template({
            heiti: item2.heiti,
            vinnumat: octopus.parseOutput(kennari.originalAfangarVinnumat[j],100),
            einingafjoldi: item2.einingar,
            nemendafjoldi: item2.fjoldi,
            timafjoldi: item2.hperweek,
            synidaemi: item2.synid.heiti
        });
        t2.appendChild(divRow);   
     }
     var onnur = octopus.parseNumberField(document.getElementById('onnurVinna').value);
     summa += parseFloat(onnur.toString().replace(',','.'));
     var golf = 0;
     var vinnuskyldaTexti = document.getElementById('golf').value
     var vinnuskylda = view.vinnuskylda(onnur,vinnuskyldaTexti);
     

     document.getElementById('vinnuskylda').value = octopus.parseOutput(vinnuskylda,10);
     document.getElementById('dagskoli').value = octopus.parseOutput(summa,10);
     document.getElementById('A-hluti').value = octopus.parseOutput(summa - vinnuskylda,10);
     document.getElementById('skerding').value = octopus.parseOutput(octopus.skerding,10);
    var launaflokkur = document.getElementById("launaflokkur").value;
    var threp = document.getElementById("threp").value;
 
    var yfirvinnaNyja = summa-vinnuskylda;
    var ls = octopus.launKennari(launaflokkur,threp,yfirvinnaNyja);
    document.getElementById("manadarlaun").value = ls.toFixed(3);
    _.templateSettings.variable = "item";
    var yfirvinnaBirta;
    if (yfirvinnaNyja < 0) {
        yfirvinnaBirta = 0;
    }
    else {
        yfirvinnaBirta = yfirvinnaNyja;
    }
    var template = _.template(
      templateLaunatexti
    );
    
    document.getElementById("manadarlaunTexti").innerHTML = 
    template({
              laun: ls.toFixed(3),
              orlof: (octopus.orlof('2016')/1000).toFixed(3),
              orlofmanudi: (octopus.orlof('2016')/12000).toFixed(3),
              desember: (octopus.desember('2016')/1000).toFixed(3),
              desembermanudi: (octopus.desember('2016')/12000).toFixed(3),
              launaflokkur: launaflokkur,
              threp: threp,
              dagvinna: octopus.dagvinna(launaflokkur,threp)/1000,
              yfirvinnutimar: octopus.parseOutput(yfirvinnaBirta,10),
              launatafla: launatafla01092016[launaflokkur][threp]/1000,
              yfirvinna: octopus.parseOutput(yfirvinnaBirta*0.010385*launatafla01092016[launaflokkur][threp]/6,10)
    		  
    }); 
     
    var comp = function (a,b) {
      if ((a.heildarvinnumat()) === (b.heildarvinnumat())) {
        return 0;
      }
      else if ((a.heildarvinnumat()) < (b.heildarvinnumat())) {
        return -1;
      }
      else {
        return 1;
      }
     };
     var kennararSorted = octopus.kennarar().sort(comp);
      
     var ken = kennararSorted; 
     
     var ls = [];
     var vs = [];
     for (var i = 0; i < ken.length; i++) {
        ls.push(ken[i].getName());
        vs.push(ken[i].heildarvinnumat().toFixed(1));
     }
     
    var barChartData = {
    labels : ls,
    datasets : [
      {
        fillColor : "#d3ac2b",
        strokeColor : "rgba(0,0,0,0)",
        highlightFill: "rgba(0,0,0,0)",
        highlightStroke: "rgba(0,0,0,1)",
        data : vs
      }
    ]
    };
     if (typeof window.adrir != "undefined") {
       window.adrir.destroy();
     }
     if (screen.width <= 500) {
     var opt = {
        responsive:true,
        showScale:false
      };
     }
     else
     {
        var opt = {
        responsive:true
      };
     }
     var ctx = document.getElementById("canvas1").getContext("2d");
     window.adrir = new Chart(ctx).Bar(barChartData, opt);
     var colors = octopus.litir;
      for (var i = 0; i < window.adrir.datasets[0].bars.length; i++) {
         var kennaranafn = window.adrir.datasets[0].bars[i].label;
         if (kennaranafn === 'Þú') {
           window.adrir.datasets[0].bars[i].fillColor = "#333d51";
         }
         else {
            window.adrir.datasets[0].bars[i].fillColor = colors[kennaranafn];
         }

      }
      window.adrir.update();

      var values = [];
      var a_names = Object.getOwnPropertyNames(kennari.a);
      for (var key in kennari.a){
        values.push(kennari.a[key]);
      }
      var b_names = Object.getOwnPropertyNames(kennari.b);
      for (var key in kennari.b){
        values.push(kennari.b[key]);
      }
      var names = a_names.concat(b_names);
      names.push("C-hluti");
      values.push(kennari.c);
      var barChartData3 = {
        labels : names,
        datasets : [{
          fillColor : "#d3ac2b",
          strokeColor : "rgba(0,0,0,0)",
          highlightFill: "rgba(0,0,0,0)",
          highlightStroke: "rgba(0,0,0,1)",
          data : values}]
      };

      if (typeof window.vinnusulur != "undefined") {
       window.vinnusulur.destroy();
     }
     var ctx3 = document.getElementById("canvas3").getContext("2d");
     window.vinnusulur = new Chart(ctx3).Bar(barChartData3, opt);
     for (var i = 0; i < window.vinnusulur.datasets[0].bars.length; i++) {
         var vinnuthattur = window.vinnusulur.datasets[0].bars[i].label;
         if (a_names.indexOf(vinnuthattur) >= 0) {
           window.vinnusulur.datasets[0].bars[i].fillColor = "#f2583e";
         }
         else if (b_names.indexOf(vinnuthattur) >= 0){
            window.vinnusulur.datasets[0].bars[i].fillColor = "#77bed2";
         }
         else {
          window.vinnusulur.datasets[0].bars[i].fillColor = "#747e80";
         }

      }
      
      window.vinnusulur.update();
    document.getElementById('yta').click();
   
  }
  
};
octopus.init();

