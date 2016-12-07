'use strict';
/*
vinnumat: Unnar Thor Bachmann.
*/
var templateAfangiNidurst = 
'<ul class="list-group"><li class="list-group-item"><strong><%=item.heiti%></strong></li>\
<li class="list-group-item">Vinnumat: <%=item.vinnumat%> klst. </li>\
<li class="list-group-item"> Einingafjöldi: <%=item.einingafjoldi%></li>\
<li class="list-group-item">Nemendafjöldi:<%=item.nemendafjoldi%> </li>\
<li class="list-group-item"> Sýnidæmi: <%=item.synidaemi%> </li>\
</ul>';

var templateLaunatexti = 'Áætluð mánaðarlaun miðað við fullt starf reiknast <%=item.laun%> krónur.\
<ul class="list-group"> Þau eru summa eftirfarandi þátta:\
<li class="list-group-item"> Orlofsuppbót: <%=item.orlof%>/12 = <%=item.orlofmanudi%> krónur.</li>\
<li class="list-group-item"> Desemberuppbót: <%=item.desember%>/12 = <%=item.desembermanudi%> krónur</li>\
<li class="list-group-item"> Dagvinna (launaflokkur= <%=item.launaflokkur%>, þrep=<%=item.threp%>): \
<%=item.dagvinna%> krónur</li>\
<li class="list-group-item"> Yfirvinna: Fjöldi yfirvinnutíma\
sinnum 1,0385% af dagvinnu (dreift á 6 mánuði)\
<br><%=item.yfirvinnutimar%>\
&middot 0,010385 &middot <%=item.launatafla%>\
/6 = <%=item.yfirvinna%> krónur</li>\
</ul>';
var desemberuppbot = {
    '2013': 52100,
    '2014': 52100,
    '2015': 78000,
    '2016': 82000
};
var orlofsuppbot = {
    '2013': 28700,
    '2014': 28700,
    '2015': 42000,
    '2016': 42000,
    '2017': 46500
};


var launatafla01032013 =
{
  "1": {"0":263714,"1":269561,"2":275408,"3":281255,"4":287101,"5":292948,"6":298793,"7":304640,"8":310486},
  "2": {"0":275408,"1":281546,"2":287685,"3":293824,"4":299962,"5":306101,"6":312241,"7":318380,"8":324518},
  "3": {"0":287685,"1":294131,"2":300578,"3":307023,"4":313468,"5":319914,"6":325246,"7":330578,"8":335910},
  "4": {"0":300578,"1":307345,"2":314113,"3":320880,"4":326536,"5":332190,"6":337843,"7":342384,"8":347481},
  "5": {"0":314113,"1":321220,"2":327213,"3":333204,"4":338084,"5":344074,"6":349510,"7":356617,"8":363724},
  "6": {"0":327213,"1":333560,"2":338794,"3":345141,"4":350932,"5":358393,"6":365855,"7":373318,"8":380779},
  "7": {"0":338794,"1":345515,"2":351678,"3":359513,"4":367348,"5":375184,"6":383018,"7":390853,"8":398689},
  "8": {"0":351678,"1":359905,"2":368132,"3":376358,"4":384584,"5":392810,"6":401037,"7":409263,"8":417491},
  "9": {"0":368132,"1":376770,"2":385407,"3":394045,"4":402683,"5":411321,"6":419958,"7":428597,"8":437235},
  "10":{"0":385407,"1":394477,"2":403547,"3":412617,"4":421686,"5":430756,"6":439826,"7":448896,"8":457965},
  "11": {"0":403547,"1":413070,"2":422595,"3":432118,"4":441641,"5":451164,"6":460687,"7":470210,"8":479734},
  "12": {"0":422595,"1":432594,"2":442594,"3":452592,"4":462592,"5":472592,"6":482592,"7":492590,"8":502590},
  "13": {"0":442594,"1":453094,"2":463594,"3":474092,"4":484591,"5":495091,"6":505590,"7":516090,"8":526589},
  "14": {"0":463594,"1":474618,"2":485643,"3":496666,"4":507691,"5":518715,"6":529740,"7":540764,"8":551788},
  "15": {"0":485643,"1":497218,"2":508793,"3":520370,"4":531944,"5":543520,"6":555095,"7":566672,"8":578249},
  "16": {"0":508793,"1":520948,"2":533101,"3":545256,"4":557411,"5":569565,"6":581720,"7":593875,"8":606029},
  "17": {"0":533101,"1":545864,"2":558626,"3":571389,"4":584150,"5":596913,"6":609675,"7":622436,"8":635199},
  "18": {"0":558626,"1":572026,"2":585426,"3":598827,"4":612228,"5":625628,"6":639027,"7":652427,"8":665828}
 }; 

var launatafla01092016 =
{
  "1": {"0": 368436, "1": 377647,"2": 386858, "3": 396069, "4": 405280, "5": 414491,  "6": 423702, "7": 432913, "8": 442124},
  "2": {"0": 386858, "1": 396530, "2": 406201, "3": 415873, "4": 425544, "5": 435215, "6": 444886, "7": 454560, "8": 464231},
  "3": {"0": 406201, "1": 416357, "2": 426511, "3": 436667, "4": 446822, "5": 456976, "6": 467132, "7": 477286, "8": 487442},
  "4": {"0": 426511, "1": 437174, "2": 447837, "3": 458500, "4": 469162, "5": 479825, "6": 490488, "7": 501151, "8": 511814},
  "5": {"0": 447837, "1": 459033, "2": 470228, "3": 481424, "4": 492622, "5": 503817, "6": 515013, "7": 526208, "8": 537404},
  "6": {"0": 470228, "1": 481985, "2": 493741, "3": 505497, "4": 517252, "5": 529007, "6": 540764, "7": 552518, "8": 564275},
  "7": {"0": 493741, "1": 506084, "2": 518428, "3": 530771, "4": 543114, "5": 555458, "6": 567802, "7": 580145, "8": 592489},
  "8": {"0": 518428, "1": 531388, "2": 544349, "3": 557309, "4": 570271, "5": 583231, "6": 596192, "7": 609152, "8": 622113},
  "9": {"0": 544349, "1": 557957, "2": 571566, "3": 585175, "4": 598784, "5": 612393, "6": 626000, "7": 639609, "8": 653219},
  "10":{"0": 571566, "1": 585856, "2": 600145, "3": 614433, "4": 628723, "5": 643012, "6": 657301, "7": 671590, "8": 685880},
  "11": {"0": 600145, "1": 615148, "2": 630151, "3": 645155, "4": 660159, "5": 675163, "6": 690166, "7": 705169, "8": 720174},
  "12": {"0": 630151, "1": 645906, "2": 661659, "3": 677413, "4": 693167, "5": 708920, "6": 724675, "7": 740428, "8": 756182},
  "13": {"0":661659, "1": 678200, "2": 694743, "3": 711284, "4": 727824, "5": 744367, "6": 760908, "7": 777451, "8": 793991},
  "14": {"0":694743,"1": 712111, "2": 729479, "3": 746848, "4": 764217, "5": 781585, "6": 798954, "7": 816322, "8": 833690},
  "15": {"0":729.479, "1": 747716, "2": 765954, "3": 784191, "4": 802427, "5": 820664, "6": 838902, "7": 857138, "8": 875375},
  "16": {"0":765954, "1": 785102, "2": 804251, "3": 823399, "4": 842549, "5": 861698, "6": 880846, "7": 899995, "8": 919144},
  "17": {"0":804251, "1": 824357, "2": 844464, "3": 864570, "4": 884677, "5": 904783, "6": 924888, "7": 944995, "8": 965101},
  "18": {"0":844464, "1": 865575, "2": 886687, "3": 907799, "4": 928910, "5": 950021, "6": 971133, "7": 992245, "8": 1013356}
};

var launatafla01062015 = {
  "1": {"0":348997,"1":357722,"2":366447,"3":375172,"4":383897,"5":392622,"6":401347,"7":410072,"8":418797},
  "2": {"0":366447,"1":375609,"2":384770,"3":393931,"4":403092,"5":412253,"6":421414,"7":430576,"8":439737},
  "3": {"0":384770,"1":394389,"2":404008,"3":413627,"4":423247,"5":432866,"6":442485,"7":452104,"8":461724},
  "4": {"0":404008,"1":414108,"2":424209,"3":434309,"4":444409,"5":454509,"6":464609,"7":474710,"8":484810},
  "5": {"0":424209,"1":434814,"2":445419,"3":456024,"4":466630,"5":477235,"6":487840,"7":498445,"8":509050},
  "6": {"0":445419,"1":456555,"2":467690,"3":478826,"4":489961,"5":501096,"6":512232,"7":523367,"8":534503},
  "7": {"0":467690,"1":479382,"2":491075,"3":502767,"4":514459,"5":526151,"6":537844,"7":549536,"8":561228},
  "8": {"0":491075,"1":503351,"2":515628,"3":527905,"4":540182,"5":552459,"6":564736,"7":577013,"8":589289},
  "9": {"0":515628,"1":528519,"2":541410,"3":554300,"4":567191,"5":580082,"6":592972,"7":605863,"8":618754},
  "10": {"0":541410,"1":554945,"2":568480,"3":582015,"4":595551,"5":609086,"6":622621,"7":636156,"8":649692},
  "11": {"0":568480,"1":582692,"2":596904,"3":611116,"4":625328,"5":639540,"6":653752,"7":667964,"8":682176},
  "12": {"0":596904,"1":611827,"2":626749,"3":641672,"4":656595,"5":671517,"6":686440,"7":701362,"8":716285},
  "13": {"0":626749,"1":642418,"2":658087,"3":673756,"4":689424,"5":705093,"6":720762,"7":736431,"8":752099},
  "14": {"0":658087,"1":674539,"2":690991,"3":707443,"4":723896,"5":740348,"6":756800,"7":773252,"8":789704},
  "15": {"0":690991,"1":708266,"2":725541,"3":742816,"4":760090,"5":777365,"6":794640,"7":811915,"8":829189},
  "16": {"0":725541,"1":743679,"2":761818,"3":779956,"4":798095,"5":816233,"6":834372,"7":852510,"8":870649},
  "17": {"0":761818,"1":780863,"2":799909,"3":818954,"4":838000,"5":857045,"6":876090,"7":895136,"8":914181},
  "18": {"0":799909,"1":819906,"2":839904,"3":859902,"4":879900,"5":899897,"6":919895,"7":939893,"8":959890}
};

var launatafla01042015 = {
    '1': {
        '0': 336116,
        '1': 344183,
        '2': 352249,
        '3': 360316,
        '4': 368383,
        '5': 376450,
        '6': 384517,
        '7': 392583,
        '8': 400650
    },
    '2': {
        '0': 351021,
        '1': 359446,
        '2': 367870,
        '3': 376295,
        '4': 384719,
        '5': 393144,
        '6': 401568,
        '7': 409993,
        '8': 418417
    },
    '3': {
        '0': 366669,
        '1': 375469,
        '2': 384269,
        '3': 393069,
        '4': 401869,
        '5': 410669,
        '6': 419469,
        '7': 428269,
        '8': 437069
    }, 
    '4': {
        '0': 383102,
        '1': 392296,
        '2': 401491,
        '3': 410685,
        '4': 419880,
        '5': 429074,
        '6': 438269,
        '7': 447463,
        '8': 456657
    },
    '5': {
        '0': 400353,
        '1': 409961,
        '2': 419570,
        '3': 429178,
        '4': 438787,
        '5': 448395,
        '6': 458004,
        '7': 467612,
        '8': 477221
    },
    '6': {
        '0': 417050,
        '1': 427059,
        '2': 437068,
        '3': 447077,
        '4': 457086,
        '5': 467096,
        '6': 477105,
        '7': 487114,
        '8': 497123
    },
    '7': {
        '0': 432981,
        '1': 443372,
        '2': 453764,
        '3': 464156,
        '4': 474547,
        '5': 484939,
        '6': 495330,
        '7': 505722,
        '8': 516113
    },
    '8': {
        '0': 449521,
        '1': 460309,
        '2': 471098,
        '3': 481886,
        '4': 492675,
        '5': 503463,
        '6': 514252,
        '7': 525040,
        '8': 535829
    },
    '9': {
        '0': 470553,
        '1': 481846,
        '2': 493140,
        '3': 504433,
        '4': 515726,
        '5': 527019,
        '6': 538313,
        '7': 549606,
        '8': 560899
    },
    '10': {
        '0': 492636,
        '1': 504460,
        '2': 516283,
        '3': 528106,
        '4': 539930,
        '5': 551753,
        '6': 563576,
        '7': 575399,
        '8': 587223
    },
    '11': {
        '0': 515823,
        '1': 528203,
        '2': 540582,
        '3': 552962,
        '4': 565342,
        '5': 577722,
        '6': 590101,
        '7': 602481,
        '8': 614861
    },
    '12': {
        '0': 540169,
        '1': 553134,
        '2': 566098,
        '3': 579062,
        '4': 592026,
        '5': 604990,
        '6': 617954,
        '7': 630918,
        '8': 643882
    },
    '13': {
        '0': 565732,
        '1': 579310,
        '2': 592888,
        '3': 606465,
        '4': 620043,
        '5': 633620,
        '6': 647198,
        '7': 660775,
        '8': 674353

    },
    '14': {
        '0': 592576,
        '1': 606797,
        '2': 621019,
        '3': 635241,
        '4': 649463,
        '5': 663685,
        '6': 677906,
        '7': 692128,
        '8': 760350
    },
    '15': {
        '0': 620758,
        '1': 635657,
        '2': 650555,
        '3': 665453,
        '4': 680351,
        '5': 659249,
        '6': 710148,
        '7': 725046,
        '8': 739944
    },
    '16': {
        '0': 650349,
        '1': 665957,
        '2': 681566,
        '3': 697174,
        '4': 712782,
        '5': 728391,
        '6': 743999,
        '7': 759608,
        '8': 775216
    },
    '17': {
        '0': 681420,
        '1': 697774,
        '2': 714128,
        '3': 730482,
        '4': 746836,
        '5': 763191,
        '6': 779545,
        '7': 795899,
        '8': 812253
    },
    '18': {
        '0': 714048,
        '1': 731185,
        '2': 748322,
        '3': 765459,
        '4': 782596,
        '5': 799733,
        '6': 816871,
        '7': 834008,
        '8': 851145
    }
};

var launatafla01032014 = {
  '1': {
    '0': 291646,
    '1': 298645,
    '2': 305645,
    '3': 312644,
    '4': 319644,
    '5': 326643,
    '6': 333643,
    '7': 340642,
    '8': 347642
  },
  '2': {
    '0': 304579,
    '1': 311889,
    '2': 319199,
    '3': 326509,
    '4': 333819,
    '5': 341129,
    '6': 348438,
    '7': 355748,
    '8': 363058
  },
  '3': {
    '0': 318156,
    '1': 325792,
    '2': 333428,
    '3': 341063,
    '4': 348699,
    '5': 356335,
    '6': 363971,
    '7': 371606,
    '8': 379242
  },
  '4': {
    '0': 332415,
    '1': 340393,
    '2': 348371,
    '3': 356349,
    '4': 364327,
    '5': 372305,
    '6': 380283,
    '7': 388261,
    '8': 396239
  },
  '5': {
    '0': 347384,
    '1': 355721,
    '2': 364058,
    '3': 372395,
    '4': 380733,
    '5': 389070,
    '6': 397407,
    '7': 405744,
    '8': 414082
  },
  '6': {
    '0': 361871,
    '1': 370556,
    '2': 379241,
    '3': 387926,
    '4': 396611,
    '5': 405296,
    '6': 413981,
    '7': 422666,
    '8': 431351
  },
  '7': {
    '0': 375695,
    '1': 384712,
    '2': 393728,
    '3': 402745,
    '4': 411762,
    '5': 420778,
    '6': 429795,
    '7': 438812,
    '8': 447828
  },
  '8': {
    '0': 390046,
    '1': 399408,
    '2': 408769,
    '3': 418130,
    '4': 427491,
    '5': 436852,
    '6': 446213,
    '7': 455574,
    '8': 464935
  },
  '9': {
    '0': 408296,
    '1': 418095,
    '2': 427894,
    '3': 437693,
    '4': 447492,
    '5': 457292,
    '6': 467091,
    '7': 476890,
    '8': 486689
  },
  '10': {
    '0': 427458,
    '1': 437717,
    '2': 447976,
    '3': 458235,
    '4': 468494,
    '5': 478753,
    '6': 489012,
    '7': 499271,
    '8': 509530
  },
  '11': {
    '0': 447576,
    '1': 458318,
    '2': 469060,
    '3': 479802,
    '4': 490544,
    '5': 501286,
    '6': 512027,
    '7': 522769,
    '8': 533511
  },
  '12': {
    '0': 468702,
    '1': 479951,
    '2': 491199,
    '3': 502448,
    '4': 513697,
    '5': 524946,
    '6': 536195,
    '7': 547444,
    '8': 558693
  },
  '13': {
    '0': 490883,
    '1': 502664,
    '2': 514445,
    '3': 526226,
    '4': 538007,
    '5': 549789,
    '6': 561570,
    '7': 573351,
    '8': 585132
  },
  '14': {
    '0': 514174,
    '1': 526514,
    '2': 538855,
    '3': 551195,
    '4': 563535,
    '5': 575875,
    '6': 588215,
    '7': 600556,
    '8': 612896
  },
  '15':{
    '0': 538628,
    '1': 551555,
    '2': 564482,
    '3': 577410,
    '4': 590337,
    '5': 603264,
    '6': 616191,
    '7': 629118,
    '8': 642045
  },
  '16': {
    '0': 564304,
    '1': 577847,
    '2': 591390,
    '3': 604934,
    '4': 618477,
    '5': 632020,
    '6': 645564,
    '7': 659107,
    '8': 672650
  },
  '17': {
    '0': 591264,
    '1': 605454,
    '2': 619645,
    '3': 633835,
    '4': 648026,
    '5': 662216,
    '6': 676406,
    '7': 690597,
    '8': 704787
  },
  '18': {
    '0': 619575,
    '1': 634445,
    '2': 649315,
    '3': 664184,
    '4': 679054,
    '5': 693924,
    '6': 708794,
    '7': 723664,
    '8': 738533
  }
};

var launatafla01082014 = {
  "1": {"0":306228,"1":313018,"2":319808,"3":326597,"4":333386,"5":340176,"6":346963,"7":353752,"8":360542},
  "2": {"0":319808,"1":326935,"2":334064,"3":341193,"4":348321,"5":355449,"6":362580,"7":369708,"8":376835},
  "3": {"0":334064,"1":341549,"2":349036,"3":356520,"4":364004,"5":371489,"6":377681,"7":383873,"8":390065},
  "4": {"0":349036,"1":356894,"2":364753,"3":372610,"4":379179,"5":385745,"6":392308,"7":397581,"8":403501},
  "5": {"0":364753,"1":373005,"2":379965,"3":386922,"4":392589,"5":399545,"6":405857,"7":414110,"8":422361},
  "6": {"0":379965,"1":387335,"2":393413,"3":400783,"4":407507,"5":416172,"6":424837,"7":433503,"8":442167},
  "7": {"0":393413,"1":401218,"2":408373,"3":417472,"4":426570,"5":435669,"6":444766,"7":453865,"8":462965},
  "8": {"0":408373,"1":417927,"2":427480,"3":437033,"4":446585,"5":456137,"6":465691,"7":475243,"8":484798},
  "9": {"0":427480,"1":437511,"2":447542,"3":457571,"4":467602,"5":477632,"6":487662,"7":497694,"8":507724},
  "10": {"0":447542,"1":458073,"2":468606,"3":479138,"4":489668,"5":500201,"6":510734,"7":521266,"8":531796},
  "11": {"0":468606,"1":479664,"2":490724,"3":501782,"4":512840,"5":523899,"6":534956,"7":546016,"8":557075},
  "12": {"0":490724,"1":502335,"2":513947,"3":525557,"4":537170,"5":548781,"6":560393,"7":572003,"8":583615},
  "13": {"0":513947,"1":526139,"2":538333,"3":550523,"4":562715,"5":574908,"6":587099,"7":599292,"8":611483},
  "14": {"0":538333,"1":551135,"2":563936,"3":576737,"4":589539,"5":602340,"6":615143,"7":627943,"8":640745},
  "15": {"0":563936,"1":577377,"2":590818,"3":604262,"4":617702,"5":631143,"6":644585,"7":658029,"8":671472},
  "16": {"0":590818,"1":604933,"2":619045,"3":633159,"4":647275,"5":661389,"6":675502,"7":689617,"8":703731},
  "17": {"0":619045,"1":633866,"2":648686,"3":663506,"4":678325,"5":693145,"6":707965,"7":722782,"8":737604},
  "18": {"0":648686,"1":664246,"2":679806,"3":695368,"4":710929,"5":726489,"6":742049,"7":757609,"8":773171}
};

var launatafla01012015 = {
    '1': {
        '0': 312353,
        '1': 319849,
        '2': 327345,
        '3': 334842,
        '4': 342338,
        '5': 349835,
        '6': 357331,
        '7': 364828,
        '8': 372324
    },
    '2': {
        '0': 326204,
        '1': 334033,
        '2': 341862,
        '3': 349691,
        '4': 357520,
        '5': 365349,
        '6': 373178,
        '7': 381006,
        '8': 388835
    },
    '3': {
        '0': 340745,
        '1': 348923,
        '2': 357101,
        '3': 365279,
        '4': 373457,
        '5': 381635,
        '6': 389813,
        '7': 397990,
        '8': 406168
    },
    '4': {
        '0': 356017,
        '1': 364561,
        '2': 373106,
        '3': 381650,
        '4': 390194,
        '5': 398739,
        '6': 407283,
        '7': 415828,
        '8': 424372
    },
    '5': {
        '0': 372048,
        '1': 380977,
        '2': 389906,
        '3': 398836,
        '4': 407765,
        '5': 416694,
        '6': 425623,
        '7': 434552,
        '8': 443481
    },
    '6': {
        '0': 387564,
        '1': 396866,
        '2': 406167,
        '3': 415469,
        '4': 424770,
        '5': 434072,
        '6': 443374,
        '7': 452675,
        '8': 461977
    },
    '7': {
        '0': 402369,
        '1': 412026,
        '2': 421683,
        '3': 431340,
        '4': 440997,
        '5': 450654,
        '6': 460310,
        '7': 469967,
        '8': 479624
    },
    '8': {
        '0': 417740,
        '1': 427766,
        '2': 437791,
        '3': 447817,
        '4': 457843,
        '5': 467869,
        '6': 477894,
        '7': 487920,
        '8': 497946
    },
    '9': {
        '0': 437285,
        '1': 447780,
        '2': 458275,
        '3': 468770,
        '4': 479264,
        '5': 489759,
        '6': 500254,
        '7': 510749,
        '8': 521244
    },
    '10': {
        '0': 457807,
        '1': 468795,
        '2': 479782,
        '3': 490769,
        '4': 501757,
        '5': 512744,
        '6': 523731,
        '7': 534719,
        '8': 545706
    },
    '11': {
        '0': 479354,
        '1': 490859,
        '2': 502363,
        '3': 513868,
        '4': 525372,
        '5': 536877,
        '6': 548381,
        '7': 559886,
        '8': 571390
    },
    '12': {
        '0': 501980,
        '1': 514027,
        '2': 526075,
        '3': 538122,
        '4': 550170,
        '5': 562217,
        '6': 574265,
        '7': 586312,
        '8': 598360
    },
    '13': {
        '0': 525735,
        '1': 538353,
        '2': 550971,
        '3': 563588,
        '4': 576206,
        '5': 588824,
        '6': 601441,
        '7': 614059,
        '8': 626676
    },
    '14': {
        '0': 550681,
        '1': 563897,
        '2': 577113,
        '3': 590330,
        '4': 603546,
        '5': 616762,
        '6': 629979,
        '7': 643195,
        '8': 656411
    },
    '15': {
        '0': 576871,
        '1': 590716,
        '2': 604561,
        '3': 618406,
        '4': 632250,
        '5': 646095,
        '6': 659940,
        '7': 673785,
        '8': 687630
    },
    '16': {
        '0': 604369,
        '1': 618874,
        '2': 633379,
        '3': 647884,
        '4': 662389,
        '5': 676894,
        '6': 691399,
        '7': 760904,
        '8': 720408
    },
    '17': {
        '0': 633244,
        '1': 648442,
        '2': 663640,
        '3': 678837,
        '4': 694035,
        '5': 709233,
        '6': 724431,
        '7': 739629,
        '8': 754827
    },
    '18': {
        '0': 663565,
        '1': 679490,
        '2': 695416,
        '3': 711341,
        '4': 727267,
        '5': 743193,
        '6': 759118,
        '7': 775044,
        '8': 790969
    }
};
var afangar = {
    'synidaemi': [
      'Almenn braut',
      'Almennar raungreinar',
      'Danska, efra þrep',
      'Danska, hægferð',
      'Danska, neðra þrep',
      'Enska, efra þrep',
      'Enska, hægferð',
      'Enska, neðra þrep',
      'Erlend mál, efra þrep',
      'Erlend mál, neðra þrep',
      'Fagbóklegt',
      'Félagsgreinar, efra þrep',
      'Félagsgreinar, neðra þrep',
      'Íslenska, efra þrep',
      'Íslenska, hægferð',
      'Íslenska, neðra þrep',
      'Íþróttafræði',
      'Íþróttir',
      'Jarðfræði',
      'Listgreinar, efra þrep',
      'Listgreinar, neðra þrep',
      'Raungreinar, efra þrep',
      'Raungreinar, neðra þrep',
      'Sjúkraliðabraut',
      'Starfsbraut (1/3)',
      'Starfsbraut (4/6)',
      'Starfsbraut (7/12)',
      'Stærðfræði, efra þrep',
      'Stærðfræði, hægferð',
      'Stærðfræði, neðra þrep',
      'Sýnidæmið mitt',
      'Tölvuáfangar',
      'Verklegt'
    ],
    'fjoldi': 4
};// End of JSON object.

var synidaemi = {
  'stae_n': {
    'heiti': 'Stærðfræði, neðra þrep',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 0,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'stae_e': {
    'heiti': 'Stærðfræði, efra þrep',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 0,
    'vinna_per_nemanda': 120,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3.2,
    'kostn_per_nem_ye': 5.3
  },
  'jardfraedi': {
    'heiti': 'Jarðfræði',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 0,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'ens_n': {
    'heiti': 'Enska, neðra þrep',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 4,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'ens_e': {
    'heiti': 'Enska, efra þrep',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 10,
    'lokaprof': 12,
    'onnur_vinna': 4,
    'vinna_per_nemanda': 120,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3.2,
    'kostn_per_nem_ye': 5.3
  },
  'dans_n': {
    'heiti': 'Danska, neðra þrep',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 4,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'dans_e': {
    'heiti': 'Danska, efra þrep',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 10,
    'lokaprof': 12,
    'onnur_vinna': 4,
    'vinna_per_nemanda': 120,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3.2,
    'kostn_per_nem_ye': 5.3
  },
  'emal_n': {
    'heiti': 'Erlend mál, neðra þrep',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 4,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'emal_e': {
    'heiti': 'Erlend mál, efra þrep',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 10,
    'lokaprof': 12,
    'onnur_vinna': 4,
    'vinna_per_nemanda': 120,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3.2,
    'kostn_per_nem_ye': 5.3
  },
  'fel_n': {
    'heiti': 'Félagsgreinar, neðra þrep',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 4,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'fel_e': {
    'heiti': 'Félagsgreinar, efra þrep',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 10,
    'lokaprof': 12,
    'onnur_vinna': 4,
    'vinna_per_nemanda': 120,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3.2,
    'kostn_per_nem_ye': 5.3
  },
  'almenn': {
    'heiti': 'Almenn braut',
    'lagmark': 10,
    'hamark_n': 18,
    'hamark_e': 18,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 15,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 18.5,
    'vinna_per_nemanda': 90,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 60,
    'kostn_per_nem_yn': 6.3,
    'kostn_per_nem_ye': 6.3
  },
  'isl_h': {
    'heiti': 'Íslenska, hægferð',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 15,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 3.5,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'stae_h': {
    'heiti': 'Stærðfræði, hægferð',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 15,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 3.5,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'dans_h': {
    'heiti': 'Danska, hægferð',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 15,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 3.5,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'ens_h': {
    'heiti': 'Enska, hægferð',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 15,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 3.5,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'isl_n': {
    'heiti': 'Íslenska, neðra þrep',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 5,
    'vinna_per_nemanda': 120,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3.2,
    'kostn_per_nem_ye': 5.3
  },
  'isl_e': {
    'heiti': 'Íslenska, efra þrep',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 10,
    'lokaprof': 12,
    'onnur_vinna': 7,
    'vinna_per_nemanda': 120,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3.2,
    'kostn_per_nem_ye': 5.3
  },
  'list_n': {
    'heiti': 'Listgreinar, neðra þrep',
    'lagmark': 10,
    'hamark_n': 18,
    'hamark_e': 18,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 20,
    'lokaprof': 0,
    'onnur_vinna': 21,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 5,
    'kostn_per_nem_ye': 5
  },
  'list_e': {
    'heiti': 'Listgreinar, efra þrep',
    'lagmark': 10,
    'hamark_n': 18,
    'hamark_e': 18,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 22,
    'lokaprof': 0,
    'onnur_vinna': 18,
    'vinna_per_nemanda': 120,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 5,
    'kostn_per_nem_ye': 5
  },
  'raun_e': {
    'heiti': 'Raungreinar, efra þrep',
    'lagmark': 15,
    'hamark_n': 26,
    'hamark_e': 26,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 10,
    'lokaprof': 12,
    'onnur_vinna': 7.5,
    'vinna_per_nemanda': 120,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 5.3,
    'kostn_per_nem_ye': 5.3
  },
  'raun_n': {
    'heiti': 'Raungreinar, neðra þrep',
    'lagmark': 15,
    'hamark_n': 26,
    'hamark_e': 26,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 7.5,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 5,
    'kostn_per_nem_ye': 5
  },
  'almennar': {
    'heiti': 'Almennar raungreinar',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 0,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'sjukralida': {
    'heiti': 'Sjúkraliðabraut',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 4,
    'vinna_per_nemanda': 110,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'verklegt': {
    'heiti': 'Verklegt',
    'lagmark': 8,
    'hamark_n': 14,
    'hamark_e': 14,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 31.5,
    'vinna_per_nemanda': 95,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 4.5,
    'kostn_per_nem_ye': 4.5
  },
  'fagboklegt': {
    'heiti': 'Fagbóklegt',
    'lagmark': 10,
    'hamark_n': 18,
    'hamark_e': 18,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 10,
    'lokaprof': 12,
    'onnur_vinna': 16.5,
    'vinna_per_nemanda': 120,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 5.3,
    'kostn_per_nem_ye': 5.3
  },
  'tolvuafangar': {
    'heiti': 'Tölvugreinar',
    'lagmark': 12,
    'hamark_n': 22,
    'hamark_e': 22,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 10,
    'lokaprof': 10,
    'onnur_vinna': 12,
    'vinna_per_nemanda': 120,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 5.3,
    'kostn_per_nem_ye': 5.3
  },
  'ithrottafr': {
    'heiti': 'Íþróttafræði',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 4.3,
    'vinna_per_nemanda': 90,
    'fragangur_namsmats': 40,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 2.6,
    'kostn_per_nem_ye': 4.3
  },
  'ithrottir': {
    'heiti': 'Íþróttir',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 12,
    'lokaprof': 0,
    'onnur_vinna': 6,
    'vinna_per_nemanda': 90,
    'fragangur_namsmats': 60,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5.1
  },
    'starfsbraut13': {
    'heiti': 'Starfsbraut (1/3)',
    'lagmark': 1,
    'hamark_n': 3,
    'hamark_e': 3,
    'timar_namsAetlun': 12,
    'undirb_kennslu': 20,
    'verkefnisgerd': 21,
    'lokaprof': 0,
    'onnur_vinna': 54,
    'vinna_per_nemanda': 0,
    'fragangur_namsmats': 75,
    'onnur_vinna_per_nemanda': 120,
    'kostn_per_nem_yn': 0,
    'kostn_per_nem_ye': 0
  },
    'starfsbraut46': {
    'heiti': 'Starfsbraut (4/6)',
    'lagmark': 4,
    'hamark_n': 6,
    'hamark_e': 6,
    'timar_namsAetlun': 12,
    'undirb_kennslu': 20,
    'verkefnisgerd': 21,
    'lokaprof': 0,
    'onnur_vinna': 54,
    'vinna_per_nemanda': 0,
    'fragangur_namsmats': 75,
    'onnur_vinna_per_nemanda': 105,
    'kostn_per_nem_yn': 0,
    'kostn_per_nem_ye': 0
  },
    'starfsbraut712': {
    'heiti': 'Starfsbraut (7/12)',
    'lagmark': 7,
    'hamark_n': 12,
    'hamark_e': 12,
    'timar_namsAetlun': 12,
    'undirb_kennslu': 20,
    'verkefnisgerd': 21,
    'lokaprof': 0,
    'onnur_vinna': 54,
    'vinna_per_nemanda': 0,
    'fragangur_namsmats': 75,
    'onnur_vinna_per_nemanda': 90,
    'kostn_per_nem_yn': 0,
    'kostn_per_nem_ye': 0
  },
  'fjarnam': {
    'heiti': 'Fjarnám',
    'lagmark': 0,
    'hamark_n': 0,
    'hamark_e': 0,
    'timar_namsAetlun': 0,
    'undirb_kennslu': 0,
    'verkefnisgerd': 0,
    'lokaprof': 0,
    'onnur_vinna': 0,
    'vinna_per_nemanda': 0,
    'fragangur_namsmats': 0,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 0,
    'kostn_per_nem_ye': 0
  },
  'mitt': {
    'heiti': 'Sýnidæmið mitt',
    'lagmark': 17,
    'hamark_n': 28,
    'hamark_e': 30,
    'timar_namsAetlun': 6,
    'undirb_kennslu': 20,
    'verkefnisgerd': 8,
    'lokaprof': 12,
    'onnur_vinna': 4,
    'vinna_per_nemanda': 0,
    'fragangur_namsmats': 0,
    'onnur_vinna_per_nemanda': 150,
    'kostn_per_nem_yn': 3,
    'kostn_per_nem_ye': 5
  },
  'def': {
    'heiti:':"Default",
    'lagmark': 0,
    'hamark_n': 0,
    'hamark_e': 0,
    'timar_namsAetlun': 0,
    'undirb_kennslu': 0,
    'verkefnisgerd': 0,
    'lokaprof': 0,
    'onnur_vinna': 0,
    'vinna_per_nemanda': 0,
    'fragangur_namsmats': 0,
    'onnur_vinna_per_nemanda': 0,
    'kostn_per_nem_yn': 0,
    'kostn_per_nem_ye': 0
  }
};
var addRow = function (afangiCol) {
    
    afangiCol.setAttribute('class', "thumbnail");

    var caption = document.createElement('div');
    caption.setAttribute('class','caption');
    
    var uppl = document.createElement('a');
    uppl.setAttribute('class','hopanafn large');
    uppl.setAttribute('id','hopanafn'+afangar.fjoldi)
    uppl.setAttribute('href','#hopur' + afangar.fjoldi);
    uppl.innerHTML = 'Hópur ' + afangar.fjoldi + ' &nbsp;<span id="orvar'+ afangar.fjoldi +'" class="small glyphicon glyphicon-chevron-down"></span>';

    caption.appendChild(uppl);

    var collapseDiv = document.createElement('div');
    collapseDiv.setAttribute('id','hopur' + afangar.fjoldi);
    var form = document.createElement('form');
    var divHeiti = document.createElement('div');
    divHeiti.setAttribute('class','form-group');
    var labelHeiti = document.createElement('label');
    labelHeiti.setAttribute('for','h-' + afangar.fjoldi);
    labelHeiti.innerHTML = 'Heiti áfanga';
    divHeiti.appendChild(labelHeiti);
    var inputHeiti = document.createElement('input');
    inputHeiti.setAttribute('type','text');
    inputHeiti.setAttribute('class','form-control');
    inputHeiti.setAttribute('id','h-'+ afangar.fjoldi);
    inputHeiti.setAttribute('placeholder','STÆ 193');
    divHeiti.appendChild(inputHeiti);
    form.appendChild(divHeiti);

    var divEiningar = document.createElement('div');
    divEiningar.setAttribute('class','form-group');
    var labelEiningar = document.createElement('label');
    labelEiningar.setAttribute('for','e-' + afangar.fjoldi);
    labelEiningar.innerHTML = 'Einingafjöldi';
    divEiningar.appendChild(labelEiningar);
    var inputEiningar = document.createElement('input');
    inputEiningar.setAttribute('type','text');
    inputEiningar.setAttribute('class','form-control');
    inputEiningar.setAttribute('id','e-'+ afangar.fjoldi);
    inputEiningar.setAttribute('value','3');
    divEiningar.appendChild(inputEiningar);
    form.appendChild(divEiningar);

    var divNemendafjoldi = document.createElement('div');
    divNemendafjoldi.setAttribute('class','form-group');
    var labelNemendafjoldi = document.createElement('label');
    labelNemendafjoldi.setAttribute('for','f-' + afangar.fjoldi);
    labelNemendafjoldi.innerHTML = 'Nemendafjöldi';
    divNemendafjoldi.appendChild(labelNemendafjoldi);
    var inputNemendafjoldi = document.createElement('input');
    inputNemendafjoldi.setAttribute('type','text');
    inputNemendafjoldi.setAttribute('class','form-control');
    inputNemendafjoldi.setAttribute('id','f-'+ afangar.fjoldi);
    inputNemendafjoldi.setAttribute('placeholder','15');
    divNemendafjoldi.appendChild(inputNemendafjoldi);
    form.appendChild(divNemendafjoldi);

    var divSynidaemi = document.createElement('div');
    divSynidaemi.setAttribute('class','form-group');
    var labelSynidaemi = document.createElement('label');
    labelSynidaemi.setAttribute('for','s-' + afangar.fjoldi);
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

    var divProsenta = document.createElement('div');
    divProsenta.setAttribute('class','form-group');
    var labelProsenta = document.createElement('label');
    labelProsenta.setAttribute('for','p-' + afangar.fjoldi);
    labelProsenta.innerHTML = 'Hlutfall (%)';
    divProsenta.appendChild(labelProsenta);

    var inputProsenta = document.createElement('input');
    inputProsenta.setAttribute('type','text');
    inputProsenta.setAttribute('class','form-control');
    inputProsenta.setAttribute('id','p-'+ afangar.fjoldi);
    inputProsenta.setAttribute('data-toggle','tooltip');
    inputProsenta.setAttribute('data-placement','bottom');
    inputProsenta.setAttribute('title','Prósentuhlutfall af kennslu');
    inputProsenta.setAttribute('placeholder','100%');
    inputProsenta.setAttribute('value','100');
    divProsenta.appendChild(inputProsenta);
    form.appendChild(divProsenta);
 
    collapseDiv.appendChild(form);
    caption.appendChild(collapseDiv);
    
    afangiCol.appendChild(caption);

    document.getElementById('tafla').appendChild(afangiCol);
    var thumb = document.createElement('div');
    thumb.setAttribute('class','thumbnail');
    var cap = document.createElement('div');
    cap.setAttribute('class','caption');
    cap.setAttribute('id','v-' + afangar.fjoldi);
    thumb.appendChild(cap);

    document.getElementById('tafla2').appendChild(thumb);
    uppl.onclick = function() {
        var delement = document.getElementById('orvar' + afangar.fjoldi);
        document.getElementById("hopur" + afangar.fjoldi).classList.toggle('feluleikur');
        if (delement.classList.contains('glyphicon-chevron-up')) {
          delement.classList.remove('glyphicon-chevron-up');
          delement.classList.add('glyphicon-chevron-down');
        }
        else {
          delement.classList.remove('glyphicon-chevron-down');
          delement.classList.add('glyphicon-chevron-up');
        } 
      };
    
};
var Afangi = function(param) {
  this.heiti = param[0];
  this.einingar = param[1];
  this.vm = -1;
  switch(param[3]) {
    case 'Stærðfræði, neðra þrep':
      this.synid = synidaemi.stae_n;
      break;
    case 'Jarðfræði':
      this.synid = synidaemi.jardfraedi;
      break;
    case 'Stærðfræði, efra þrep':
      this.synid = synidaemi.stae_e;
      break;
    case 'Enska, neðra þrep':
      this.synid = synidaemi.ens_n;
      break;
    case 'Enska, efra þrep':
      this.synid = synidaemi.ens_e;
      break;
    case 'Danska, neðra þrep':
      this.synid = synidaemi.dans_n;
      break;
    case 'Danska, efra þrep':
      this.synid = synidaemi.dans_e;
      break;
    case 'Erlend mál, efra þrep':
      this.synid = synidaemi.emal_e;
      break;
    case 'Erlend mál, neðra þrep':
      this.synid = synidaemi.emal_n;
      break;
    case 'Félagsgreinar, efra þrep':
      this.synid = synidaemi.fel_e;
      break;
    case 'Félagsgreinar, neðra þrep':
      this.synid = synidaemi.fel_n;
      break;
    case 'Almenn braut':
      this.synid = synidaemi.almenn;
      break;
    case 'Íslenska, hægferð':
      this.synid = synidaemi.isl_h;
      break;
    case 'Stærðfræði, hægferð':
      this.synid = synidaemi.stae_h;
      break;
    case 'Enska, hægferð':
      this.synid = synidaemi.ens_h;
      break;
    case 'Danska, hægferð':
      this.synid = synidaemi.dans_h;
      break;
    case 'Íslenska, efra þrep':
      this.synid = synidaemi.isl_e;
      break;
    case 'Íslenska, neðra þrep':
      this.synid = synidaemi.isl_n;
      break;
    case 'Listgreinar, efra þrep':
      this.synid = synidaemi.list_e;
      break;
    case 'Listgreinar, neðra þrep':
      this.synid = synidaemi.list_n;
      break;
    case 'Sýnidæmið mitt':
      this.synid = synidaemi.mitt;
      break;
    case 'Raungreinar, efra þrep':
      this.synid = synidaemi.raun_e;
      break;
    case 'Raungreinar, neðra þrep':
      this.synid = synidaemi.raun_n;
      break;
    case 'Verklegt':
      this.synid = synidaemi.verklegt;
      break;
    case 'Fagbóklegt':
      this.synid = synidaemi.fagboklegt;
      break;
    case 'Tölvuáfangar':
      this.synid = synidaemi.tolvuafangar;
      break;
    case 'Almennar raungreinar':
      this.synid = synidaemi.almennar;
      break;
    case 'Íþróttafræði':
      this.synid = synidaemi.ithrottafr;
      break;
    case 'Íþróttir':
      this.synid = synidaemi.ithrottir;
      break;
    case 'Sjúkraliðabraut':
      this.synid = synidaemi.sjukralida;
      break;
    case 'Fjarnám':
      this.synid = synidaemi.fjarnam;
      break;
    case 'Starfsbraut (1/3)':
      this.synid = synidaemi.starfsbraut13;
      break;
    case 'Starfsbraut (4/6)':
      this.synid = synidaemi.starfsbraut46;
      break;
    case 'Starfsbraut (7/12)':
      this.synid = synidaemi.starfsbraut712;
      break;
    default:
      this.synid = synidaemi.def;
      break;
  }
  this.actualFjoldi = param[2];
  this.fjoldi = Math.max(param[2],this.synid.lagmark);
  if (this.synid.heiti === 'Starfsbraut (1/3)' || this.synid.heiti === 'Starfsbraut (4/6)' || this.synid.heiti === 'Starfsbraut (7/12)') {
     if (this.fjoldi > this.synid.hamark_e) {
        this.fjoldi = this.synid.hamark_e;
     }
  }
};
Afangi.prototype.Fjoldi = function() {
    return this.actualFjoldi;
}
Afangi.prototype.hamark = function() {
    return this.synid.hamark_n;
}
Afangi.prototype.vinnumat = function() {
  if (this.vm != -1) {
    return this.vm;
  } 
  if (this.synid === 'def' || this.heiti ==='' || this.einingar === '' || this.fjoldi === '') {
    return 0;
  }
  var ein =parseFloat(this.einingar);
  if (ein == 2 && (this.synid.heiti === 'Stærðfræði, hægferð' ||this.synid.heiti === 'Íslenska, hægferð' || this.synid.heiti === 'Enska, hægferð' || this.synid.heiti === 'Danska, hægferð')) {
    ein +=1;
  }
  var fast = (this.synid.timar_namsAetlun + this.synid.verkefnisgerd + this.synid.lokaprof + this.synid.onnur_vinna)*ein/3;
  var kennslustundir = (40 + this.synid.undirb_kennslu)/60*2*15*ein;
  var per_nemandi = (this.synid.vinna_per_nemanda + this.synid.fragangur_namsmats + this.synid.onnur_vinna_per_nemanda)/60;
  per_nemandi = per_nemandi*ein/3;
  var nemendur = 0; 
  var total;
  if (this.fjoldi <= this.synid.hamark_n) {
    nemendur = Math.max(this.fjoldi,this.synid.lagmark)*per_nemandi;
    total = fast + kennslustundir + nemendur;
  }
  else if (this.synid.hamark_n < this.fjoldi && this.fjoldi <= this.synid.hamark_e) {
    nemendur = this.synid.hamark_n*per_nemandi;
    total = fast + kennslustundir + nemendur 
            + (this.fjoldi-this.synid.hamark_n)*this.synid.kostn_per_nem_yn*ein/3;
  }
  else {
    nemendur = this.synid.hamark_n*per_nemandi;
    total = fast + kennslustundir + nemendur
           + (this.synid.hamark_e-this.synid.hamark_n)*this.synid.kostn_per_nem_yn*ein/3
           + (this.fjoldi-this.synid.hamark_e)*this.synid.kostn_per_nem_ye*ein/3;
  }
  return total;
};
Afangi.prototype.setVinnumat = function (vinnumat) {
  this.vm = vinnumat;
};

Afangi.prototype.toString = function() {
  return "Heiti: " + this.heiti + " Einingar: " + this.einingar + " Fjöldi: " + this.fjoldi + " vm: " + this.vm;
};

var Kennari = function (nafn,afangar,hlutfoll) {
  this.heiti = nafn;
  this.afangar = [];
  this.originalAfangar = [];

  afangar.forEach(function(afangi){
    this.originalAfangar.push(new Afangi(afangi));
  },this);
  afangar.forEach(function(afangi){
    this.afangar.push(new Afangi(afangi));
  },this);
  this.hlutfoll = hlutfoll;
  this.originalAfangarVinnumat = [];
  this.ryrnun = [];
  this.fjoldi = this.originalAfangar.length;
  this.ryra();
};
Kennari.prototype.totalEiningar = function () {
  var et = 0;
  for (var i= 0; i < this.fjoldi; i++) {
    if (this.originalAfangar[i].einingar != "" && this.originalAfangar[i].heiti != "" && this.originalAfangar[i].fjoldi != "") {
      et += parseFloat(this.originalAfangar[i].einingar);
    }
  }
  return et;
};

Kennari.prototype.compare = function (a,b) {
  if (a.heiti == b.heiti) {
    return 0;
  }
  else if (a.heiti < b.heiti) {
    return -1;
  }
  else {
    return 1;
  }
};
Kennari.prototype.vinnuskylda = function(klstChluti,vinnuskyldaTexti) {
   var vinnuskylda = 0;
   if (vinnuskyldaTexti === '30 ára-' ) {
      vinnuskylda = 720;
   }
   else if (vinnuskyldaTexti === '30-37 ára') {
     vinnuskylda = 708;
   }
   else if (vinnuskyldaTexti === '38-54 ára') {
    vinnuskylda = 696;
   }
   else if (vinnuskyldaTexti === '55-59 ára') {
    vinnuskylda = 667;
   }
   else if (vinnuskyldaTexti === '60 ára+ (17 tímar)') {
    vinnuskylda = 493;
   }
   else {
    vinnuskylda = 551;
   }
  if (vinnuskylda > 667) {
    return parseFloat(vinnuskylda);
  }
  else {
    var h = parseFloat(klstChluti)/parseFloat(696);
    if (h >= 1) {
        return parseFloat(696);
    }
    else if (vinnuskylda === 667) {
        return h*parseFloat(696) + (1-h)*parseFloat(667); 
    }
    else {
       return h*parseFloat(696) + (1-h)*parseFloat(vinnuskylda);  
    }
  }
};
Kennari.prototype.sort = function() {
  this.afangar.sort(this.compare);
};
Kennari.prototype.heildarvinnumat = function() {
  var s = 0;
  for (var i=0; i < this.fjoldi; i++) {
    var raunvinnumat = this.originalAfangar[i].vinnumat()*parseFloat(this.hlutfoll[i])/parseFloat(100);
    s += raunvinnumat;
  }
  return s;
};
Kennari.prototype.vinnumatAfanga = function() {
  this.originalAfangarVinnumat = [];
  for (var i=0; i < this.fjoldi; i++) {
    var raunvinnumat = this.originalAfangar[i].vinnumat();
    raunvinnumat *=parseFloat(this.hlutfoll[i])/parseFloat(100);
    this.originalAfangarVinnumat.push(raunvinnumat);
  }
  return this.originalAfangarVinnumat;
};
Kennari.prototype.toString = function() {
  this.sort();
  var s = this.heiti + '\n'; 
  this.originalAfangar.forEach(function(afangi){
    s += afangi.toString();
    s += "\n";
  });

  return s;
};
Kennari.prototype.ryra = function() {
  this.sort();
  for (var i = 0; i < this.fjoldi; i++) {
    this.ryrnun.push(parseFloat(0));
  }
  var i = 0;
  while (i < this.afangar.length) {
    var j = i;
    while (j < this.afangar.length && this.afangar[i].heiti == this.afangar[j].heiti) {
      j += 1;
    }
    if (i == j) {
      i += 1;
      continue;
    }
    else {
      var nfj = 0;
      for (var s = i; s < j; s++) {
        nfj += parseInt(this.afangar[s].fjoldi);
      } // end of for.
      var neFjAv = nfj/(j-i);
      var param = new Array(this.afangar[i].heiti,this.afangar[i].einingar,neFjAv,this.afangar[i].synid.heiti);
      var shadow = new Afangi(param);
      for (var k = 0; k < this.originalAfangar.length; k++) {
        if ((j-i) == 2 && this.originalAfangar[k].heiti == this.afangar[i].heiti) {
          this.originalAfangar[k].setVinnumat(parseFloat(this.originalAfangar[k].vinnumat())-0.05*parseFloat(shadow.vinnumat()));
          this.ryrnun[k]=0.05*parseFloat(shadow.vinnumat());
        }
        else if ((j-i) == 3 && this.originalAfangar[k].heiti == this.afangar[i].heiti) {
          this.originalAfangar[k].setVinnumat(parseFloat(this.originalAfangar[k].vinnumat())-0.0633*parseFloat(shadow.vinnumat()));
          this.ryrnun[k] = 0.0633*parseFloat(shadow.vinnumat());
        }
        else if ((j-i) > 3 && this.originalAfangar[k].heiti == this.afangar[i].heiti){
          this.originalAfangar[k].setVinnumat(parseFloat(this.originalAfangar[k].vinnumat())-0.075*parseFloat(shadow.vinnumat()));
          this.ryrnun[k] = 0.075*parseFloat(shadow.vinnumat());
        }
      }// end of for
      i = j;
    }// end of else
  }// end of while
};
Kennari.prototype.getName = function () {
    return this.heiti;
};

Kennari.prototype.actualFjoldi = function () {
    var s = parseInt(0);
    this.originalAfangar.forEach(function(afangi){
        s += parseInt(afangi.Fjoldi());
    });
    /*for (var i = 0; i < this.originalAfangar.length; i++) {
      s += parseInt(this.originalAfangar[i].Fjoldi());
    }*/
    return s;
};
Kennari.prototype.alag = function() {
    var n = parseInt(0);
    this.originalAfangar.forEach(function(afangi){
        n += parseInt(afangi.hamark());
    });
    /*for (var i = 0; i < this.originalAfangar.length; i++) {
      n += parseInt(this.originalAfangar[i].hamark());
    }*/
    if (n < this.actualFjoldi()) {
        return true;
    }
    else {
        return false;
    }
};
Kennari.prototype.ryrnunAfanga = function () {
  var s = 0;
  for (var i = 0; i < this.ryrnun.length; i++) {
    s += this.ryrnun[i]*parseFloat(this.hlutfoll[i])/parseFloat(100);
  }
  return s;
};
var model = {
    kennari: null,
    kennarar: [],
    init: function (_afangar,hlutfoll) {
    var _afangar2 = []; 

    _afangar.forEach(function(afangi){
        _afangar2.push(afangi);
      },_afangar2);

    var kennararNofn = ['Félagsgreinar, efra þrep',
                         'Félagsgreinar, neðra þrep',
                         'Íslenska, efra þrep',
                         'Íslenska, neðra þrep',
                         'Stærðfræði, efra þrep',
                         'Stærðfræði, neðra þrep',
                         'Danska, neðra þrep',
                         'Danska, efra þrep',
                         'Listgreinar, efra þrep',
                         'Listgreinar, neðra þrep',
                         'Enska, efra þrep',
                         'Enska, neðra þrep',
                         'Erlend mál, efra þrep',
                         'Erlend mál, neðra þrep',
                         'Sýnidæmið mitt',
                         'Tölvuáfangar',
                         'Verklegt',
                         'Fagbóklegt',
                         'Jarðfræði',
                         'Íþróttafræði',
                         'Almennar raungreinar',
                         'Almenn braut',
                         'Raungreinar, efra þrep',
                         'Raungreinar, neðra þrep',
    ];
    this.kennari = new Kennari("Þú",_afangar,hlutfoll);

    this.kennarar = [];
      
      for (var i = 0; i < kennararNofn.length; i++) {
        var nafn = kennararNofn[i];

        for (var j= 0; j < _afangar.length; j++) {
          _afangar2[j] = [_afangar[j][0],_afangar[j][1],_afangar[j][2],nafn];
        }
        
        this.kennarar.push(new Kennari(nafn,_afangar2,hlutfoll));
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
    createKennari: function(afangar,hlutfoll) {
        model.init(afangar,hlutfoll);
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
    teiknaSynidaemi: function(nafn1,e1,nafn2,e2,fjoldatolur) {
      var gildi1 = [];
      var gildi2 = [];
      fjoldatolur.forEach(function(tala){
        var af1 = new Afangi(
                  new Array('a',e1,tala,nafn1));
        gildi1.push(af1.vinnumat().toFixed(1));
        var af2 = new Afangi(
                  new Array('b',e2,tala,nafn2));
        gildi2.push(af2.vinnumat().toFixed(1));
      });
      /*
      for (var i = 0; i < fjoldatolur.length; i++) {
        var af1 = new Afangi(new Array('a',e1,fjoldatolur[i],nafn1));
        gildi1.push(af1.vinnumat().toFixed(1));
        var af2 = new Afangi(new Array('b',e2,fjoldatolur[i],nafn2));
        gildi2.push(af2.vinnumat().toFixed(1));
      }*/
      return {
        'fyrra': gildi1,
        'seinna': gildi2
      }
    },
    lita: function() {
      var d = {}
      model.kennarar.forEach(function(kennari){
        if (kennari.alag()) {
        d[kennari.heiti] = "red";
       }
       else{
        d[kennari.heiti] = "#d3ac2b";
       }
      },d);
      /*
      for (var i = 0; i < model.kennarar.length; i++) {
       if (model.kennarar[i].alag()) {
        d[model.kennarar[i].heiti] = "red";
       }
       else{
        d[model.kennarar[i].heiti] = "#d3ac2b";
       }
      }*/
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
        var mitt_namsaetlun = octopus.parseNumberField(document.getElementById('mitt_namsaetlun').value);
        var mitt_undirbuningur = octopus.parseNumberField(document.getElementById('mitt_undirbuningur').value);
        var mitt_profagerd_kennslutima = octopus.parseNumberField(document.getElementById('mitt_profagerd_kennslutima').value);
        var mitt_profagerd = octopus.parseNumberField(document.getElementById('mitt_profagerd').value);
        var mitt_onnur_vinna = octopus.parseNumberField(document.getElementById('mitt_onnur_vinna').value);
        var mitt_tryggingarakvaedi = octopus.parseNumberField(document.getElementById('mitt_tryggingarakvaedi').value);
        var mitt_vinna_per_nemanda = octopus.parseNumberField(document.getElementById('mitt_vinna_per_nemanda').value);
        var mitt_lagmark = octopus.parseNumberField(document.getElementById('mitt_lagmark').value);
        var mitt_hamark_1 = octopus.parseNumberField(document.getElementById('mitt_hamark_1').value);
        var mitt_kostn_per_nem_yn = octopus.parseNumberField(document.getElementById('mitt_kostn_per_nem_yn').value);
        var mitt_hamark_2 = octopus.parseNumberField(document.getElementById('mitt_hamark_2').value);
        var mitt_kostn_per_nem_ye = octopus.parseNumberField(document.getElementById('mitt_kostn_per_nem_ye').value);
        
        synidaemi.mitt.hamark_e = 0;
        synidaemi.mitt.hamark_n = 0;
        synidaemi.mitt.lagmark = 0;
        synidaemi.mitt.kostn_per_nem_ye = 0;
        synidaemi.mitt.kostn_per_nem_yn = 0;
        synidaemi.mitt.lokaprof = 0;
        synidaemi.mitt.onnur_vinna = 0;
        synidaemi.mitt.timar_namsAetlun = 0;
        synidaemi.mitt.verkefnisgerd = 0;
        synidaemi.mitt_undirbuningur = 0;
        synidaemi.mitt.fragangur_namsmats = 0;
        synidaemi.mitt.onnur_vinna_per_nemanda = 0;
        synidaemi.mitt.vinna_per_nemanda = 0;

        synidaemi.mitt.hamark_e = mitt_hamark_2;
        synidaemi.mitt.hamark_n = mitt_hamark_1;
        synidaemi.mitt.lagmark = mitt_lagmark

        synidaemi.mitt.kostn_per_nem_ye = mitt_kostn_per_nem_ye;
        synidaemi.mitt.kostn_per_nem_yn = mitt_kostn_per_nem_yn;

        synidaemi.mitt.lokaprof = mitt_profagerd;
        synidaemi.mitt.onnur_vinna = mitt_onnur_vinna + mitt_tryggingarakvaedi;
        synidaemi.mitt.timar_namsAetlun = mitt_namsaetlun;
        synidaemi.mitt.verkefnisgerd = mitt_profagerd_kennslutima;
        synidaemi.mitt.undirb_kennslu = mitt_undirbuningur;
        synidaemi.mitt.vinna_per_nemanda = mitt_vinna_per_nemanda;

        //<div class="alert alert-success">
       // <strong>Success!</strong> Indicates a successful or positive action.
       // </div>
        if (!document.getElementById('success')) { 
            var success = document.createElement('div');
            success.setAttribute('class','alert alert-success');
            success.setAttribute('id','success');
            success.innerHTML = 'Sýnidæmið mitt hefur verið uppfært.';
            document.getElementById('last').appendChild(success);
        }
        
        $("#success").show().delay(5000).fadeOut();

        


    },synidaemi);
    /*
    var mittSynidaemi = document.getElementById('mittSynidaemi');
    mittSynidaemi.addEventListener('click',function() {
    	$('.main').addClass('hidden');
    	$('.flex-container').addClass('hidden');
    	$('#mitt').removeClass('hidden');
    });*/
    var fyrirsagnir = document.getElementsByClassName('fyrirsagnir');
    for (var i = 0; i < fyrirsagnir.length; i++) {
      var f = fyrirsagnir[i];
      	f.addEventListener('click',function(fyrirsogn){
      	return function() {
      		if (fyrirsogn.id  && fyrirsogn.id == 'mittSynidaemi') {
      			$('.main').addClass('hidden');
      			$('.flex-container').addClass('hidden'); 
            	$('#mitt').removeClass('hidden');
      		}
      		else {
      			$('.main').removeClass('hidden');
      			$('.flex-container').removeClass('hidden'); 
            	$('#mitt').addClass('hidden');
      		}
      	}
      	
      }(f));
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
      self.calc();
      button2.innerHTML = "Endurreikna";
      
     
    });
    var button3 = document.getElementById('berasaman');
    button3.addEventListener('click',function(e) {

    e.preventDefault();
    var e1 = octopus.parseNumberField(document.getElementById('es1').value);
    var e2 = octopus.parseNumberField(document.getElementById('es2').value);
    if (screen.width > 500) {
      var nemfj = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
    }
    else {
      var nemfj = [5,8,10,13, 15,17,20,23,25,26,28,29,30,31,32];
    }

    var nidurst = octopus.teiknaSynidaemi(document.getElementById('fyrra').value, e1, 
                                document.getElementById('seinna').value, e2,
    nemfj);
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
           var einingar = octopus.parseNumberField(document.getElementById('e-'+i).value);
           var fjoldi = octopus.parseNumberField(document.getElementById('f-'+i).value);
           var synid = document.getElementById('s-'+i).value;
           var hlutf =  octopus.parseNumberField(document.getElementById('p-'+i).value);
           var param = [heiti,einingar,fjoldi,synid];
           af.push(param);
           hlutfoll.push(hlutf);
        }
    }
    octopus.createKennari(af,hlutfoll);
     $('.hidden').removeClass('hidden');
     $('#mitt').addClass('hidden');
     $('.visiblenon').removeClass('visiblenon');
     _.templateSettings.variable = "item";
     var vinnumat = octopus.vinnumat();
     var summa = parseFloat(0);
     for (var j = 1; j <= afangar.fjoldi; j++) {
        var heiti = document.getElementById('h-'+ j).value;
        if (heiti != '') {
            summa += parseFloat(vinnumat[j-1]);
            var template = _.template(
              templateAfangiNidurst
            );
            document.getElementById('v-'+j).innerHTML = template({
              heiti: heiti,
              vinnumat: octopus.parseOutput(vinnumat[j-1],100),
              einingafjoldi: document.getElementById('e-'+ j).value,
              nemendafjoldi: document.getElementById('f-'+ j).value,
              synidaemi: document.getElementById('s-'+ j).value
            }); 
        }
        else {
          document.getElementById('v-'+j).innerHTML = "Ekkert vinnumat fyrir hóp " + j + '.';
        }
     }
     var onnur = document.getElementById('onnurVinna').value;
     summa += parseFloat(onnur.toString().replace(',','.'));
     var golf = 0;
     var vinnuskyldaTexti = document.getElementById('golf').value
     var vinnuskylda = view.vinnuskylda(onnur,vinnuskyldaTexti);
     document.getElementById('vinnuskylda').value = octopus.parseOutput(vinnuskylda,10);
     document.getElementById('dagsskoli').value = octopus.parseOutput(summa,10);
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
      
     var ken; 
     if (screen.width > 500) {
       ken = kennararSorted;
     }
     else {
        ken = [];
        var sia = ['Almenn braut','Danska, efra þrep','Enska, efra þrep','Erlend mál, efra þrep',
                   'Fagbóklegt','Félagsgreinar, efra þrep','Íslenska, efra þrep','Jarðfræði',
                   'Listgreinar, efra þrep','Raungreinar, efra þrep','Sjúkraliðabraut',
                   'Stærðfræði, efra þrep','Tölvuáfangar','Verklegt','Þú'];
        kennararSorted.forEach(function(kennari){
          var j = sia.indexOf(kennari.heiti);
            if (j > 0) {
                ken.push(kennari);
            }
        },ken);
        
     }
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
    document.getElementById('yta').click();
   
  }
  
};
octopus.init();

