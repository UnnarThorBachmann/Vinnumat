

$(function() {
  
  describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Tungumál nýja", function() {
      var erl_mal_5 = new Afangi(['a', 3, 5,'Tungumál',6,40]);
      erl_mal_5.reikna_vinnumat();
      var erl_mal_17 = new Afangi(['a', 3, 17,'Tungumál',6,40]);
      erl_mal_17.reikna_vinnumat();
      var erl_mal_25 = new Afangi(['a', 3, 25,'Tungumál',6,40]);
      erl_mal_25.reikna_vinnumat();
      var erl_mal_28 = new Afangi(['a', 3, 28,'Tungumál',6,40]);
      erl_mal_28.reikna_vinnumat();
      var erl_mal_30 = new Afangi(['a', 3, 30,'Tungumál',6,40]);
      erl_mal_30.reikna_vinnumat();
      var erl_mal_32 = new Afangi(['a', 3, 32,'Tungumál',6,40]);
      erl_mal_32.reikna_vinnumat();
      expect(Math.abs(erl_mal_5.vinnumat()-167.3)).toBeLessThan(0.5);
      expect(Math.abs(erl_mal_17.vinnumat()-167.3)).toBeLessThan(0.5);
      expect(Math.abs(erl_mal_28.vinnumat()-196.7)).toBeLessThan(0.5);
      expect(Math.abs(erl_mal_30.vinnumat()-203.1)).toBeLessThan(0.5);
      expect(Math.abs(erl_mal_32.vinnumat()-213.7)).toBeLessThan(0.5);
    });
  });
  describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Félagsgreinar", function() {
      var fel_5 = new Afangi(['a', 3, 5,'Félagsgreinar',6,40]);
      fel_5.reikna_vinnumat();
      var fel_17 = new Afangi(['a', 3, 17,'Félagsgreinar',6,40]);
      fel_17.reikna_vinnumat();
      var fel_25 = new Afangi(['a', 3, 25,'Félagsgreinar',6,40]);
      fel_25.reikna_vinnumat();
      var fel_28 = new Afangi(['a', 3, 28,'Félagsgreinar',6,40]);
      fel_28.reikna_vinnumat();
      var fel_30 = new Afangi(['a', 3, 30,'Félagsgreinar',6,40]);
      fel_30.reikna_vinnumat();
      var fel_32 = new Afangi(['a', 3, 32,'Félagsgreinar',6,40]);
      fel_32.reikna_vinnumat();
      expect(Math.abs(fel_5.vinnumat()-167.3)).toBeLessThan(0.5);
      expect(Math.abs(fel_17.vinnumat()-167.3)).toBeLessThan(0.5);
      expect(Math.abs(fel_28.vinnumat()-196.7)).toBeLessThan(0.5);
      expect(Math.abs(fel_30.vinnumat()-203.1)).toBeLessThan(0.5);
      expect(Math.abs(fel_32.vinnumat()-213.7)).toBeLessThan(0.5);
    });
  });
  describe('Rétt vinnumat (5,10,15,18 og 22)', function() {
    it("Almenn braut", function() {
      var almenn_5 = new Afangi(['a', 3, 5,'Almenn braut',6,40]);
      almenn_5.reikna_vinnumat();
      var almenn_10 = new Afangi(['a', 3, 10,'Almenn braut',6,40]);
      almenn_10.reikna_vinnumat();
      var almenn_15 = new Afangi(['a', 3, 15,'Almenn braut',6,40]);
      almenn_15.reikna_vinnumat();
      var almenn_18 = new Afangi(['a', 3, 18,'Almenn braut',6,40]);
      almenn_18.reikna_vinnumat();
      var almenn_22 = new Afangi(['a', 3, 22,'Almenn braut',6,40]);
      almenn_22.reikna_vinnumat();
     
      expect(Math.abs(almenn_5.vinnumat()-158.8)).toBeLessThan(0.5);
      expect(Math.abs(almenn_10.vinnumat()-158.8)).toBeLessThan(0.5);
      expect(Math.abs(almenn_15.vinnumat()-175.5)).toBeLessThan(0.5);
      expect(Math.abs(almenn_18.vinnumat()-185.5)).toBeLessThan(0.5);
      expect(Math.abs(almenn_22.vinnumat()-212.3)).toBeLessThan(0.5);
    });
  });
  describe('Rétt vinnumat (5,17,25,28,30 og 32)', function() {
    it("Hægferð", function() {
      var haegf_5 = new Afangi(['a', 3, 5,'Hægferð',6,40]);
      haegf_5.reikna_vinnumat();
      var haegf_17 = new Afangi(['a', 3, 17,'Hægferð',6,40]);
      haegf_17.reikna_vinnumat();
      var haegf_25 = new Afangi(['a', 3, 25,'Hægferð',6,40]);
      haegf_25.reikna_vinnumat();
      var haegf_28 = new Afangi(['a', 3, 28,'Hægferð',6,40]);
      haegf_28.reikna_vinnumat();
      var haegf_30 = new Afangi(['a', 3, 30,'Hægferð',6,40]);
      haegf_30.reikna_vinnumat();
      var haegf_32 = new Afangi(['a', 3, 32,'Hægferð',6,40]);
      haegf_32.reikna_vinnumat();
     
      expect(Math.abs(haegf_5.vinnumat()-158.8)).toBeLessThan(0.5);
      expect(Math.abs(haegf_17.vinnumat()-158.8)).toBeLessThan(0.5);
      expect(Math.abs(haegf_25.vinnumat()-180.2)).toBeLessThan(0.5);
      expect(Math.abs(haegf_28.vinnumat()-188.1)).toBeLessThan(0.5);
      expect(Math.abs(haegf_30.vinnumat()-194.5)).toBeLessThan(0.5);
      expect(Math.abs(haegf_32.vinnumat()-205.1)).toBeLessThan(0.5);

    });
  });
  describe('Rétt vinnumat (5,17,25,28,30 og 32)', function() {
    it("Íslenska", function() {
      var isl_5 = new Afangi(['a', 3, 5,'Íslenska',6,40]);
      isl_5.reikna_vinnumat();
      var isl_17 = new Afangi(['a', 3, 17,'Íslenska',6,40]);
      isl_17.reikna_vinnumat();
      var isl_25 = new Afangi(['a', 3, 25,'Íslenska',6,40]);
      isl_25.reikna_vinnumat();
      var isl_28 = new Afangi(['a', 3, 28,'Íslenska',6,40]);
      isl_28.reikna_vinnumat();
      var isl_30 = new Afangi(['a', 3, 30,'Íslenska',6,40]);
      isl_30.reikna_vinnumat();
      var isl_32 = new Afangi(['a', 3, 32,'Íslenska',6,40]);
      isl_32.reikna_vinnumat();
     
      expect(Math.abs(isl_5.vinnumat()-170.3)).toBeLessThan(0.5);
      expect(Math.abs(isl_17.vinnumat()-170.3)).toBeLessThan(0.5);
      expect(Math.abs(isl_25.vinnumat()-191.7)).toBeLessThan(0.5);
      expect(Math.abs(isl_28.vinnumat()-199.7)).toBeLessThan(0.5);
      expect(Math.abs(isl_30.vinnumat()-206.1)).toBeLessThan(0.5);
      expect(Math.abs(isl_32.vinnumat()-216.7)).toBeLessThan(0.5);

    });
  });
  describe('Rétt vinnumat (5,17,25,28,30 og 32)', function() {
    it("Íþróttafræði", function() {
      var ithr_5 = new Afangi(['a', 3, 5,'Íþróttafræði',6,40]);
      ithr_5.reikna_vinnumat();
      var ithr_17 = new Afangi(['a', 3, 17,'Íþróttafræði',6,40]);
      ithr_17.reikna_vinnumat();
      var ithr_25 = new Afangi(['a', 3, 25,'Íþróttafræði',6,40]);
      ithr_25.reikna_vinnumat();
      var ithr_28 = new Afangi(['a', 3, 28,'Íþróttafræði',6,40]);
      ithr_28.reikna_vinnumat();
      var ithr_30 = new Afangi(['a', 3, 30,'Íþróttafræði',6,40]);
      ithr_30.reikna_vinnumat();
      var ithr_32 = new Afangi(['a', 3, 32,'Íþróttafræði',6,40]);
      ithr_32.reikna_vinnumat();
     
      expect(Math.abs(ithr_5.vinnumat()-157.7)).toBeLessThan(0.5);
      expect(Math.abs(ithr_17.vinnumat()-157.7)).toBeLessThan(0.5);
      expect(Math.abs(ithr_25.vinnumat()-176.3)).toBeLessThan(0.5);
      expect(Math.abs(ithr_28.vinnumat()-183.3)).toBeLessThan(0.5);
      expect(Math.abs(ithr_30.vinnumat()-188.9)).toBeLessThan(0.5);
      expect(Math.abs(ithr_32.vinnumat()-198.3)).toBeLessThan(0.5);

    });
  });
  describe('Rétt vinnumat (5,17,25,28,30 og 32)', function() {
    it("Íþróttir", function() {
      var i_5 = new Afangi(['a', 1, 5,'Íþróttir',2,40]);
      i_5.reikna_vinnumat();
      var i_17 = new Afangi(['a', 1, 17,'Íþróttir',2,40]);
      i_17.reikna_vinnumat();
      var i_25 = new Afangi(['a', 1, 25,'Íþróttir',2,40]);
      i_25.reikna_vinnumat();
      var i_28 = new Afangi(['a', 1, 28,'Íþróttir',2,40]);
      i_28.reikna_vinnumat();
      var i_30 = new Afangi(['a', 1, 30,'Íþróttir',2,40]);
      i_30.reikna_vinnumat();
      var i_32 = new Afangi(['a', 1, 32,'Íþróttir',2,40]);
      i_32.reikna_vinnumat();
     
      expect(Math.abs(i_5.vinnumat()-53.7)).toBeLessThan(0.5);
      expect(Math.abs(i_17.vinnumat()-53.7)).toBeLessThan(0.5);
      expect(Math.abs(i_25.vinnumat()-60.8)).toBeLessThan(0.5);
      expect(Math.abs(i_28.vinnumat()-63.4)).toBeLessThan(0.5);
      expect(Math.abs(i_30.vinnumat()-65.6)).toBeLessThan(0.5);
      expect(Math.abs(i_32.vinnumat()-69.4)).toBeLessThan(0.5);

    });
  });
   describe('Rétt vinnumat (5,10,15,18 og 20)', function() {
    it("Listgreinar", function() {
      var list_5 = new Afangi(['a', 3, 5,'Listgreinar',6,40]);
      list_5.reikna_vinnumat();
      var list_10 = new Afangi(['a', 3, 10,'Listgreinar',6,40]);
      list_10.reikna_vinnumat();
      var list_15 = new Afangi(['a', 3, 15,'Listgreinar',6,40]);
      list_15.reikna_vinnumat();
      var list_18 = new Afangi(['a', 3, 18,'Listgreinar',6,40]);
      list_18.reikna_vinnumat();
      var list_20 = new Afangi(['a', 3, 20,'Listgreinar',6,40]);
      list_20.reikna_vinnumat();
      
      expect(Math.abs(list_5.vinnumat()-162.7)).toBeLessThan(0.5);
      expect(Math.abs(list_10.vinnumat()-162.7)).toBeLessThan(0.5);
      expect(Math.abs(list_15.vinnumat()-176.0)).toBeLessThan(0.5);
      expect(Math.abs(list_18.vinnumat()-184.0)).toBeLessThan(0.5);
      expect(Math.abs(list_20.vinnumat()-194.6)).toBeLessThan(0.5);

    });
  });
  describe('Rétt vinnumat (5,8,12, 14 og 16)', function() {
    it("Verklegt", function() {
      var verk_5 = new Afangi(['a', 3, 5,'Verklegt',6,40]);
      verk_5.reikna_vinnumat();
      var verk_8 = new Afangi(['a', 3, 8,'Verklegt',6,40]);
      verk_8.reikna_vinnumat();
      var verk_12 = new Afangi(['a', 3, 12,'Verklegt',6,40]);
      verk_12.reikna_vinnumat();
      var verk_14 = new Afangi(['a', 3, 14,'Verklegt',6,40]);
      verk_14.reikna_vinnumat();
      var verk_16 = new Afangi(['a', 3, 16,'Verklegt',6,40]);
      verk_16.reikna_vinnumat();
      
      expect(Math.abs(verk_5.vinnumat()-168)).toBeLessThan(0.5);
      expect(Math.abs(verk_8.vinnumat()-168)).toBeLessThan(0.5);
      expect(Math.abs(verk_12.vinnumat()-178.0)).toBeLessThan(0.5);
      expect(Math.abs(verk_14.vinnumat()-183)).toBeLessThan(0.5);
      expect(Math.abs(verk_16.vinnumat()-193)).toBeLessThan(0.5);

    });
  });
  describe('Rétt vinnumat (5,10,15, 18 og 20)', function() {
    it("Fagbóklegt", function() {
      var fagb_5 = new Afangi(['a', 3, 5,'Fagbóklegt',6,40]);
      fagb_5.reikna_vinnumat();
      var fagb_10 = new Afangi(['a', 3, 10,'Fagbóklegt',6,40]);
      fagb_10.reikna_vinnumat();
      var fagb_15 = new Afangi(['a', 3, 15,'Fagbóklegt',6,40]);
      fagb_15.reikna_vinnumat();
      var fagb_18 = new Afangi(['a', 3, 18,'Fagbóklegt',6,40]);
      fagb_18.reikna_vinnumat();
      var fagb_20 = new Afangi(['a', 3, 20,'Fagbóklegt',6,40]);
      fagb_20.reikna_vinnumat();
      
      expect(Math.abs(fagb_5.vinnumat()-161.2)).toBeLessThan(0.5);
      expect(Math.abs(fagb_10.vinnumat()-161.2)).toBeLessThan(0.5);
      expect(Math.abs(fagb_15.vinnumat()-174.5)).toBeLessThan(0.5);
      expect(Math.abs(fagb_18.vinnumat()-182.5)).toBeLessThan(0.5);
      expect(Math.abs(fagb_20.vinnumat()-193.1)).toBeLessThan(0.5);

    });
  });
  describe('Rétt vinnumat (5,17,25,28,30 og 32)', function() {
    it("Stærðfræði", function() {
      var stae_5 = new Afangi(['a', 3, 5,'Stærðfræði',6,40]);
      stae_5.reikna_vinnumat();
      var stae_17 = new Afangi(['a', 3, 17,'Stærðfræði',6,40]);
      stae_17.reikna_vinnumat();
      var stae_25 = new Afangi(['a', 3, 25,'Stærðfræði',6,40]);
      stae_25.reikna_vinnumat();
      var stae_28 = new Afangi(['a', 3, 28,'Stærðfræði',6,40]);
      stae_28.reikna_vinnumat();
      var stae_30 = new Afangi(['a', 3, 30,'Stærðfræði',6,40]);
      stae_30.reikna_vinnumat();
      var stae_32 = new Afangi(['a', 3, 32,'Stærðfræði',6,40]);
      stae_32.reikna_vinnumat();
     
      expect(Math.abs(stae_5.vinnumat()-166.3)).toBeLessThan(0.5);
      expect(Math.abs(stae_17.vinnumat()-166.3)).toBeLessThan(0.5);
      expect(Math.abs(stae_25.vinnumat()-187.7)).toBeLessThan(0.5);
      expect(Math.abs(stae_28.vinnumat()-195.7)).toBeLessThan(0.5);
      expect(Math.abs(stae_30.vinnumat()-202.1)).toBeLessThan(0.5);
      expect(Math.abs(stae_32.vinnumat()-212.7)).toBeLessThan(0.5);

    });
  });
  describe('Rétt vinnumat (5,17,25,28,30 og 32)', function() {
    it("Raungreinar", function() {
      var raun_5 = new Afangi(['a', 3, 5,'Raungreinar',6,40]);
      raun_5.reikna_vinnumat();
      var raun_15 = new Afangi(['a', 3, 15,'Raungreinar',6,40]);
      raun_15.reikna_vinnumat();
      var raun_22 = new Afangi(['a', 3, 22,'Raungreinar',6,40]);
      raun_22.reikna_vinnumat();
      var raun_26 = new Afangi(['a', 3, 26,'Raungreinar',6,40]);
      raun_26.reikna_vinnumat();
      var raun_28 = new Afangi(['a', 3, 28,'Raungreinar',6,40]);
      raun_28.reikna_vinnumat();
      
     
      expect(Math.abs(raun_5.vinnumat()-165.5)).toBeLessThan(0.5);
      expect(Math.abs(raun_15.vinnumat()-165.5)).toBeLessThan(0.5);
      expect(Math.abs(raun_22.vinnumat()-184.2)).toBeLessThan(0.5);
      expect(Math.abs(raun_26.vinnumat()-194.8)).toBeLessThan(0.5);
      expect(Math.abs(raun_28.vinnumat()-205.4)).toBeLessThan(0.5);

    });
  });
  describe('Rétt vinnumat (5,17,25,28,30 og 32)', function() {
    it("Tölvuáfangar", function() {
      var tolv_5 = new Afangi(['a', 3, 5,'Tölvuáfangar',6,40]);
      tolv_5.reikna_vinnumat();
      var tolv_12 = new Afangi(['a', 3, 12,'Tölvuáfangar',6,40]);
      tolv_12.reikna_vinnumat();
      var tolv_18 = new Afangi(['a', 3, 18,'Tölvuáfangar',6,40]);
      tolv_18.reikna_vinnumat();
      var tolv_22 = new Afangi(['a', 3, 22,'Tölvuáfangar',6,40]);
      tolv_22.reikna_vinnumat();
      var tolv_24 = new Afangi(['a', 3, 24,'Tölvuáfangar',6,40]);
      tolv_24.reikna_vinnumat();
      
     
      expect(Math.abs(tolv_5.vinnumat()-162.0)).toBeLessThan(0.5);
      expect(Math.abs(tolv_12.vinnumat()-162.0)).toBeLessThan(0.5);
      expect(Math.abs(tolv_18.vinnumat()-178.0)).toBeLessThan(0.5);
      expect(Math.abs(tolv_22.vinnumat()-188.7)).toBeLessThan(0.5);
      expect(Math.abs(tolv_24.vinnumat()-199.3)).toBeLessThan(0.5);
    });
  });
  /*
   describe('Rétt vinnumat íslenskukennara', function() {
    it("Ársæll", function() {
      document.getElementById('h-1').value = 'Ísl 103';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '23'
      document.getElementById('s-1').value = 'Íslenska, neðra þrep'
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'Ísl 193';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '17';
      document.getElementById('s-2').value = 'Almenn braut'
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'Ísl 203';   
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '28';
      document.getElementById('s-3').value = 'Íslenska, efra þrep'
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'Ísl 403';   
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '19';
      document.getElementById('s-4').value = 'Íslenska, efra þrep'
      document.getElementById('p-4').value = '100';
      document.getElementById('golf').value = '60 ára+';
      document.getElementById('calculate').click();
      var afangar = [['Ísl 103', 3, 23,'Íslenska, neðra þrep'],
                    ['Ísl 193', 3, 17,'Almenn braut'],
                    ['Ísl 203', 3, 28,'Íslenska, efra þrep'],
                    ['Ísl 403', 3, 19,'Íslenska, efra þrep']
      ];
      var hlutfoll = [100,100,100,100];
      var kennari = new Kennari('Ársæll', afangar, hlutfoll);
      var vm = kennari.vinnumatAfanga();
      expect(kennari.vinnuskylda(
        document.getElementById('onnurVinna').value,
        document.getElementById('golf').value)).toBe(
        parseInt(document.getElementById('vinnuskylda').value));
      expect(kennari.vinnuskylda(document.getElementById('onnurVinna').value,
        document.getElementById('golf').value)+
        parseFloat(document.getElementById('onnurVinna').value)+
        parseFloat(document.getElementById('A-hluti').value)
      ).toBe(parseFloat(document.getElementById('dagsskoli').value));
      expect(Math.abs(vm[0]-182.32)).toBeLessThan(0.1);
      expect(Math.abs(vm[2]-199.67)).toBeLessThan(0.1);
      expect(Math.abs(vm[3]-175.64)).toBeLessThan(0.1);
    });
  });
 
   describe('Þýskukennari rétt vinnumat', function() {
    it("Steinunn", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '18';
      document.getElementById('s-1').value = 'Erlend mál, neðra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'b';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '31'
      document.getElementById('s-2').value = 'Erlend mál, neðra þrep';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'c';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '5';
      document.getElementById('s-3').value = 'Erlend mál, efra þrep';
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'a';
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '17';
      document.getElementById('s-4').value = 'Erlend mál, neðra þrep';
      document.getElementById('p-4').value = '100';
      document.getElementById('h-5').value = '';
      document.getElementById('e-5').value = '3';
      document.getElementById('f-5').value = '';
      document.getElementById('s-5').value = '';
      document.getElementById('p-5').value = '100';
      document.getElementById('golf').value = '38-54 ára';
      document.getElementById('calculate').click();
      var afangar = [
        ['a', 3, 18,'Erlend mál, neðra þrep'],
        ['b', 3, 31,'Erlend mál, neðra þrep'],
        ['c', 3, 5,'Erlend mál, efra þrep'],
        ['a', 3, 17,'Erlend mál, neðra þrep'],
      ];
      var hlutfoll = [100,100,100,100];
      var kennari = new Kennari('Steinunn',afangar,hlutfoll);
      var vm = kennari.vinnumatAfanga();
      expect(kennari.vinnuskylda(
        document.getElementById('onnurVinna').value,
        document.getElementById('golf').value)).toBe(
        parseInt(document.getElementById('vinnuskylda').value));
      expect(Math.abs(kennari.vinnuskylda(document.getElementById('onnurVinna').value,
        document.getElementById('golf').value)+
        parseFloat(document.getElementById('onnurVinna').value)+
        parseFloat(document.getElementById('A-hluti').value)
      -parseFloat(document.getElementById('dagsskoli').value))).toBeLessThan(1.01);
      expect(Math.abs(vm[0]-156.8)).toBeLessThan(0.5);
      expect(Math.abs(vm[1]-201)).toBeLessThan(0.5);
      expect(Math.abs(vm[2]-167.3)).toBeLessThan(0.5);
      expect(Math.abs(vm[3]-154.3)).toBeLessThan(0.5);
    });
  });*/

}());
