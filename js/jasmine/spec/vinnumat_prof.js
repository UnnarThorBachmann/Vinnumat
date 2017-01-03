

$(function() {
  
   describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Tungumál nýja", function() {
      var erl_mal_5 = new Afangi(['a', 3, 5,'Tungumál',6,40]);
     

      expect(erl_mal_5.vinnumat()).toBe(167.3);
     

 

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
