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
