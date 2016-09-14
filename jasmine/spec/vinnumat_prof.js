/* feedreader.js
* 
*/

$(function() {

  /*
  * Test 1: Testing if Enska, neðra þrep taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Enska, neðra þrep", function() {
      var ens103_5 = new Afangi(['enska 103', 3, 5,'Enska, neðra þrep']);
      var ens103_17 = new Afangi(['enska 103', 3, 17,'Enska, neðra þrep']);
      var ens103_25 = new Afangi(['enska 103', 3, 25,'Enska, neðra þrep']);
      var ens103_28 = new Afangi(['enska 103', 3, 28,'Enska, neðra þrep']);
      var ens103_30 = new Afangi(['enska 103', 3, 30,'Enska, neðra þrep']);
      var ens103_32 = new Afangi(['enska 103', 3, 32,'Enska, neðra þrep']);

      expect(ens103_17.vinnumat()).toBe(162.5);
      expect(ens103_25.vinnumat()).toBe(182.5);
      expect(ens103_28.vinnumat()).toBe(190);
      expect(ens103_30.vinnumat()).toBe(196);
      expect(ens103_32.vinnumat()).toBe(206);

    });

  });
  /*
  * Test 2: Testing if Danska, neðra þrep taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Danska, neðra þrep", function() {
      var dan103_5 = new Afangi(['danska 103', 3, 5,'Danska, neðra þrep']);
      var dan103_17 = new Afangi(['danska 103', 3, 17,'Danska, neðra þrep']);
      var dan103_25 = new Afangi(['danska 103', 3, 25,'Danska, neðra þrep']);
      var dan103_28 = new Afangi(['danska 103', 3, 28,'Danska, neðra þrep']);
      var dan103_30 = new Afangi(['danska 103', 3, 30,'Danska, neðra þrep']);
      var dan103_32 = new Afangi(['danska 103', 3, 32,'Danska, neðra þrep']);

      expect(dan103_17.vinnumat()).toBe(162.5);
      expect(dan103_25.vinnumat()).toBe(182.5);
      expect(dan103_28.vinnumat()).toBe(190);
      expect(dan103_30.vinnumat()).toBe(196);
      expect(dan103_32.vinnumat()).toBe(206);
    });

  });
  /*
  * Test 3: Testing if Enska, efra þrep taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Enska, efra þrep", function() {
      var ens303_5 = new Afangi(['enska 303', 3, 5,'Enska, efra þrep']);
      var ens303_17 = new Afangi(['enska 303', 3, 17,'Enska, efra þrep']);
      var ens303_25 = new Afangi(['enska 303', 3, 25,'Enska, efra þrep']);
      var ens303_28 = new Afangi(['enska 303', 3, 28,'Enska, efra þrep']);
      var ens303_30 = new Afangi(['enska 303', 3, 30,'Enska, efra þrep']);
      var ens303_32 = new Afangi(['enska 303', 3, 32,'Enska, efra þrep']);

      expect(Math.abs(ens303_17.vinnumat()-167.3)).toBeLessThan(0.1);
      expect(Math.abs(ens303_25.vinnumat()-188.7)).toBeLessThan(0.1);
      expect(Math.abs(ens303_28.vinnumat()-196.7)).toBeLessThan(0.1);
      expect(Math.abs(ens303_30.vinnumat()-203.1)).toBeLessThan(0.1);
      expect(Math.abs(ens303_32.vinnumat()-213.7)).toBeLessThan(0.1);
    });

  });
  /*
  * Test 4: Testing if Erlend mál, neðra þrep taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Erlend mál, neðra þrep", function() {
      var spa103_5 = new Afangi(['spænska 103', 3, 5,'Erlend mál, neðra þrep']);
      var spa103_17 = new Afangi(['spænska 103', 3, 17,'Erlend mál, neðra þrep']);
      var spa103_25 = new Afangi(['spænska 103', 3, 25,'Erlend mál, neðra þrep']);
      var spa103_28 = new Afangi(['spænska 103', 3, 28,'Erlend mál, neðra þrep']);
      var spa103_30 = new Afangi(['spænska 103', 3, 30,'Erlend mál, neðra þrep']);
      var spa103_32 = new Afangi(['spaenska 103', 3, 32,'Erlend mál, neðra þrep']);

      expect(Math.abs(spa103_17.vinnumat()-162.5)).toBe(0);
      expect(Math.abs(spa103_25.vinnumat()-182.5)).toBe(0);
      expect(Math.abs(spa103_28.vinnumat()-190)).toBe(0);
      expect(Math.abs(spa103_30.vinnumat()-196)).toBe(0);
      expect(Math.abs(spa103_32.vinnumat()-206)).toBe(0);
    });

  });
   /*
  * Test 5: Testing if Félagsgreinar, neðra þrep taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Erlend mál, neðra þrep", function() {
      var fel103_5 = new Afangi(['fél 103', 3, 5,'Félagsgreinar, neðra þrep']);
      var fel103_17 = new Afangi(['fél 103', 3, 17,'Félagsgreinar, neðra þrep']);
      var fel103_25 = new Afangi(['fél 103', 3, 25,'Félagsgreinar, neðra þrep']);
      var fel103_28 = new Afangi(['fél 103', 3, 28,'Félagsgreinar, neðra þrep']);
      var fel103_30 = new Afangi(['fél 103', 3, 30,'Félagsgreinar, neðra þrep']);
      var fel103_32 = new Afangi(['fél 103', 3, 32,'Félagsgreinar, neðra þrep']);

      expect(Math.abs(fel103_17.vinnumat()-162.5)).toBe(0);
      expect(Math.abs(fel103_25.vinnumat()-182.5)).toBe(0);
      expect(Math.abs(fel103_28.vinnumat()-190)).toBe(0);
      expect(Math.abs(fel103_30.vinnumat()-196)).toBe(0);
      expect(Math.abs(fel103_32.vinnumat()-206)).toBe(0);
    });

  });
  /*
  * Test 6: Testing if Félagsgreinar, efra þrep taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Enska, efra þrep", function() {
      var fel303_5 = new Afangi(['fél 303', 3, 5,'Félagsgreinar, efra þrep']);
      var fel303_17 = new Afangi(['fél 303', 3, 17,'Félagsgreinar, efra þrep']);
      var fel303_25 = new Afangi(['fél 303', 3, 25,'Félagsgreinar, efra þrep']);
      var fel303_28 = new Afangi(['fél 303', 3, 28,'Félagsgreinar, efra þrep']);
      var fel303_30 = new Afangi(['fél 303', 3, 30,'Félagsgreinar, efra þrep']);
      var fel303_32 = new Afangi(['fél 303', 3, 32,'Félagsgreinar, efra þrep']);

      expect(Math.abs(fel303_17.vinnumat()-167.3)).toBeLessThan(0.1);
      expect(Math.abs(fel303_25.vinnumat()-188.7)).toBeLessThan(0.1);
      expect(Math.abs(fel303_28.vinnumat()-196.7)).toBeLessThan(0.1);
      expect(Math.abs(fel303_30.vinnumat()-203.1)).toBeLessThan(0.1);
      expect(Math.abs(fel303_32.vinnumat()-213.7)).toBeLessThan(0.1);
    });

  });
  /*
  * Test 7: Testing if Almenn braut taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,10, 15, 18 og 20 nemendur)', function() {
    it("Almenn braut", function() {
      var stae193_5 = new Afangi(['stæ 193', 3, 5,'Almenn braut']);
      var stae193_10 = new Afangi(['stæ 193', 3, 10,'Almenn braut']);
      var stae193_15 = new Afangi(['stæ 193', 3, 15,'Almenn braut']);
      var stae193_18 = new Afangi(['stæ 193', 3, 18,'Almenn braut']);
      var stae193_20 = new Afangi(['stæ 193', 3, 20,'Almenn braut']);

      expect(Math.abs(stae193_5.vinnumat()-158.7)).toBeLessThan(0.1);
      expect(Math.abs(stae193_10.vinnumat()-158.7)).toBeLessThan(0.1);
      expect(Math.abs(stae193_15.vinnumat()-174.5)).toBeLessThan(0.1);
      expect(Math.abs(stae193_18.vinnumat()-184)).toBeLessThan(0.1);
      expect(Math.abs(stae193_20.vinnumat()-196.6)).toBeLessThan(0.1);
    });

  });
   
  /*
  * Test 8: Testing if Íslenska, hægferð taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,10, 15, 18, 30 og 32 nemendur)', function() {
    it("Íslenska, hægferð", function() {
      var isl102_5 = new Afangi(['ísl 102', 2, 5,'Íslenska, hægferð']);
      var isl102_17 = new Afangi(['ísl 102', 2, 17,'Íslenska, hægferð']);
      var isl102_25 = new Afangi(['ísl 102', 2, 25,'Íslenska, hægferð']);
      var isl102_28 = new Afangi(['ísl 102', 2, 28,'Íslenska, hægferð']);
      var isl102_30 = new Afangi(['ísl 102', 2, 30,'Íslenska, hægferð']);
      var isl102_32 = new Afangi(['ísl 102', 2, 32,'Íslenska, hægferð']);

      expect(Math.abs(isl102_5.vinnumat()-154.5)).toBe(0);
      expect(Math.abs(isl102_17.vinnumat()-154.5)).toBe(0);
      expect(Math.abs(isl102_25.vinnumat()-174.5)).toBe(0);
      expect(Math.abs(isl102_28.vinnumat()-182)).toBe(0);
      expect(Math.abs(isl102_30.vinnumat()-188)).toBe(0);
      expect(Math.abs(isl102_32.vinnumat()-198)).toBe(0);

    });
  });

  /*
  * Test 9: Testing if Stærðfræði, hægferð taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,10, 15, 18, 30 og 32 nemendur)', function() {
    it("Stærðfræði, hægferð", function() {
      var stae102_5 = new Afangi(['stæ 102', 2, 5,'Stærðfræði, hægferð']);
      var stae102_17 = new Afangi(['stæ 102', 2, 17,'Stærðfræði, hægferð']);
      var stae102_25 = new Afangi(['stæ 102', 2, 25,'Stærðfræði, hægferð']);
      var stae102_28 = new Afangi(['stæ 102', 2, 28,'Stærðfræði, hægferð']);
      var stae102_30 = new Afangi(['stæ 102', 2, 30,'Stærðfræði, hægferð']);
      var stae102_32 = new Afangi(['stæ 102', 2, 32,'Stærðfræði, hægferð']);

      expect(Math.abs(stae102_5.vinnumat()-154.5)).toBe(0);
      expect(Math.abs(stae102_17.vinnumat()-154.5)).toBe(0);
      expect(Math.abs(stae102_25.vinnumat()-174.5)).toBe(0);
      expect(Math.abs(stae102_28.vinnumat()-182)).toBe(0);
      expect(Math.abs(stae102_30.vinnumat()-188)).toBe(0);
      expect(Math.abs(stae102_32.vinnumat()-198)).toBe(0);
    });
  });
    /*
  * Test 10: Testing if DANS/ENS, hægferð taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,10, 15, 18, 30 og 32 nemendur)', function() {
    it("DANS/ENS, hægferð", function() {
      var dan102_5 = new Afangi(['dans 102', 2, 5,'Danska, hægferð']);
      var dan102_17 = new Afangi(['dans 102', 2, 17,'Danska, hægferð']);
      var dan102_25 = new Afangi(['dans 102', 2, 25,'Danska, hægferð']);
      var dan102_28 = new Afangi(['dans 102', 2, 28,'Danska, hægferð']);
      var dan102_30 = new Afangi(['dans 102', 2, 30,'Danska, hægferð']);
      var dan102_32 = new Afangi(['dans 102', 2, 32,'Danska, hægferð']);

      expect(Math.abs(dan102_5.vinnumat()-154.5)).toBe(0);
      expect(Math.abs(dan102_17.vinnumat()-154.5)).toBe(0);
      expect(Math.abs(dan102_25.vinnumat()-174.5)).toBe(0);
      expect(Math.abs(dan102_28.vinnumat()-182)).toBe(0);
      expect(Math.abs(dan102_30.vinnumat()-188)).toBe(0);
      expect(Math.abs(dan102_32.vinnumat()-198)).toBe(0);

      var ens102_5 = new Afangi(['ens 102', 2, 5,'Enska, hægferð']);
      var ens102_17 = new Afangi(['ens 102', 2, 17,'Enska, hægferð']);
      var ens102_25 = new Afangi(['ens 102', 2, 25,'Enska, hægferð']);
      var ens102_28 = new Afangi(['ens 102', 2, 28,'Enska, hægferð']);
      var ens102_30 = new Afangi(['ens 102', 2, 30,'Enska, hægferð']);
      var ens102_32 = new Afangi(['ens 102', 2, 32,'Enska, hægferð']);

      expect(Math.abs(ens102_5.vinnumat()-154.5)).toBe(0);
      expect(Math.abs(ens102_17.vinnumat()-154.5)).toBe(0);
      expect(Math.abs(ens102_25.vinnumat()-174.5)).toBe(0);
      expect(Math.abs(ens102_28.vinnumat()-182)).toBe(0);
      expect(Math.abs(ens102_30.vinnumat()-188)).toBe(0);
      expect(Math.abs(ens102_32.vinnumat()-198)).toBe(0);
    });
  });
  /*
  * Test 11: Testing if Íslenska, neðra þrep taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Íslenska, neðra þrep", function() {
      var isl103_5 = new Afangi(['Ísl 103', 3, 5,'Íslenska, neðra þrep']);
      var isl103_17 = new Afangi(['Ísl 103', 3, 17,'Íslenska, neðra þrep']);
      var isl103_25 = new Afangi(['Ísl 103', 3, 25,'Íslenska, neðra þrep']);
      var isl103_28 = new Afangi(['Ísl 103', 3, 28,'Íslenska, neðra þrep']);
      var isl103_30 = new Afangi(['Ísl 103', 3, 30,'Íslenska, neðra þrep']);
      var isl103_32 = new Afangi(['Ísl 103', 3, 32,'Íslenska, neðra þrep']);

      expect(Math.abs(isl103_5.vinnumat()-166.3)).toBeLessThan(0.1);
      expect(Math.abs(isl103_17.vinnumat()-166.3)).toBeLessThan(0.1);
      expect(Math.abs(isl103_25.vinnumat()-187.7)).toBeLessThan(0.1);
      expect(Math.abs(isl103_28.vinnumat()-195.7)).toBeLessThan(0.1);
      expect(Math.abs(isl103_30.vinnumat()-202.1)).toBeLessThan(0.1);
      expect(Math.abs(isl103_32.vinnumat()-212.7)).toBeLessThan(0.1);
    });

  });
  /*
  * Test 12: Testing if Íslenska, efra þrep taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Íslenska, efra þrep", function() {
      var isl303_5 = new Afangi(['Ísl 103', 3, 5,'Íslenska, efra þrep']);
      var isl303_17 = new Afangi(['Ísl 103', 3, 17,'Íslenska, efra þrep']);
      var isl303_25 = new Afangi(['Ísl 103', 3, 25,'Íslenska, efra þrep']);
      var isl303_28 = new Afangi(['Ísl 103', 3, 28,'Íslenska, efra þrep']);
      var isl303_30 = new Afangi(['Ísl 103', 3, 30,'Íslenska, efra þrep']);
      var isl303_32 = new Afangi(['Ísl 103', 3, 32,'Íslenska, efra þrep']);

      expect(Math.abs(isl303_5.vinnumat()-170.3)).toBeLessThan(0.1);
      expect(Math.abs(isl303_17.vinnumat()-170.3)).toBeLessThan(0.1);
      expect(Math.abs(isl303_25.vinnumat()-191.7)).toBeLessThan(0.1);
      expect(Math.abs(isl303_28.vinnumat()-199.7)).toBeLessThan(0.1);
      expect(Math.abs(isl303_30.vinnumat()-206.1)).toBeLessThan(0.1);
      expect(Math.abs(isl303_32.vinnumat()-216.7)).toBeLessThan(0.1);
    });

  });
  /*
  * Test 13: Testing if Íþróttir taxt is correct for
  * one unit and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Íþróttir", function() {
      var iþr101_5 = new Afangi(['Íþr 101', 1, 5,'Íþróttir']);
      var iþr101_17 = new Afangi(['Íþr 101', 1, 17,'Íþróttir']);
      var iþr101_25 = new Afangi(['Íþr 101', 1, 25,'Íþróttir']);
      var iþr101_28 = new Afangi(['Íþr 101', 1, 28,'Íþróttir']);
      var iþr101_30 = new Afangi(['Íþr 101', 1, 30,'Íþróttir']);
      var iþr101_32 = new Afangi(['Íþr 101', 1, 32,'Íþróttir']);

      expect(Math.abs(iþr101_5.vinnumat()-52.2)).toBeLessThan(0.1);
      expect(Math.abs(iþr101_17.vinnumat()-52.2)).toBeLessThan(0.1);
      expect(Math.abs(iþr101_25.vinnumat()-58.8)).toBeLessThan(0.1);
      expect(Math.abs(iþr101_28.vinnumat()-61.3)).toBeLessThan(0.1);
      expect(Math.abs(iþr101_30.vinnumat()-63.3)).toBeLessThan(0.1);
      expect(Math.abs(iþr101_32.vinnumat()-66.7)).toBeLessThan(0.1);
    });

  });
  /*
  * Test 14: Testing if Listgreinar, neðra þrep taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
  
   describe('Rétt vinnumat (5,10,15,18,20 nemendur)', function() {
    it("Listgreinar, neðra þrep", function() {
      var mynd103_5 = new Afangi(['Mynd 103', 3, 5,'Listgreinar, neðra þrep']);
      var mynd103_10 = new Afangi(['Mynd 103', 3, 10,'Listgreinar, neðra þrep']);
      var mynd103_15 = new Afangi(['Mynd 103', 3, 15,'Listgreinar, neðra þrep']);
      var mynd103_18 = new Afangi(['Mynd 103', 3, 18,'Listgreinar, neðra þrep']);
      var mynd103_20 = new Afangi(['Mynd 103', 3, 20,'Listgreinar, neðra þrep']);

      expect(Math.abs(mynd103_5.vinnumat()-162.0)).toBe(0);
      expect(Math.abs(mynd103_10.vinnumat()-162.0)).toBe(0);
      expect(Math.abs(mynd103_15.vinnumat()-174.5)).toBe(0);
      expect(Math.abs(mynd103_18.vinnumat()-182)).toBe(0);
      expect(Math.abs(mynd103_20.vinnumat()-192)).toBe(0);
    });
    
  });

  /*
  * Test 15: Testing if Íþróttafræði taxt is correct for
  * three units and 5, 17, 25,28, 30 and 32 students.
  */
   describe('Rétt vinnumat (5,17, 25, 28, 30 og 32 nemendur)', function() {
    it("Íþróttafræði", function() {
      var ithr103_5 = new Afangi(['Íþróttafræði 103', 3, 5,'Íþróttafræði']);
      var ithr103_17 = new Afangi(['Íþróttafræði 103', 3, 17,'Íþróttafræði']);
      var ithr103_25 = new Afangi(['Íþróttafræði 103', 3, 25,'Íþróttafræði']);
      var ithr103_28 = new Afangi(['Íþróttafræði 103', 3, 28,'Íþróttafræði']);
      var ithr103_30 = new Afangi(['Íþróttafræði 103', 3, 30,'Íþróttafræði']);
      var ithr103_32 = new Afangi(['Íþróttafræði 103', 3, 32,'Íþróttafræði']);

      expect(Math.abs(ithr103_5.vinnumat()-157.1)).toBeLessThan(0.1);
      expect(Math.abs(ithr103_17.vinnumat()-157.1)).toBeLessThan(0.1);
      expect(Math.abs(ithr103_25.vinnumat()-174.5)).toBeLessThan(0.1);
      expect(Math.abs(ithr103_28.vinnumat()-181)).toBeLessThan(0.1);
      expect(Math.abs(ithr103_30.vinnumat()-186.2)).toBeLessThan(0.1);
      expect(Math.abs(ithr103_32.vinnumat()-194.8)).toBeLessThan(0.1);
    });

  });
  /*
  * Test 16: Testing if Starfsbraut taxts are correct for
  * three units and 1,2,3,4,5,6,7,9,12 students.
  */
  describe('Rétt vinnumat (1,2,3,4,5,6,7,9,12 nemendur)', function() {
    it("Starfsbraut", function() {
      var str101_1 = new Afangi(['str 101', 1, 1,'Starfsbraut (1/3)']);
      var str101_2 = new Afangi(['str 101', 1, 2,'Starfsbraut (1/3)']);
      var str101_3 = new Afangi(['str 101', 1, 3,'Starfsbraut (1/3)']);
      var str101_4 = new Afangi(['str 101', 1, 4,'Starfsbraut (4/6)']);
      var str101_5 = new Afangi(['str 101', 1, 5,'Starfsbraut (4/6)']);
      var str101_6 = new Afangi(['str 101', 1, 6,'Starfsbraut (4/6)']);
      var str101_7 = new Afangi(['str 101', 1, 7,'Starfsbraut (7/12)']);
      var str101_9 = new Afangi(['str 101', 1, 9,'Starfsbraut (7/12)']);
      var str101_12 = new Afangi(['str 101', 1, 12,'Starfsbraut (7/12)']);

      expect(Math.abs(str101_1.vinnumat()-60.1)).toBeLessThan(0.1);
      expect(Math.abs(str101_2.vinnumat()-61.2)).toBeLessThan(0.1);
      expect(Math.abs(str101_3.vinnumat()-62.3)).toBeLessThan(0.1);
      expect(Math.abs(str101_4.vinnumat()-63)).toBeLessThan(0.1);
      expect(Math.abs(str101_5.vinnumat()-64)).toBeLessThan(0.1);
      expect(Math.abs(str101_6.vinnumat()-65)).toBeLessThan(0.1);
      expect(Math.abs(str101_7.vinnumat()-65.4)).toBeLessThan(0.1);
      expect(Math.abs(str101_9.vinnumat()-67.3)).toBeLessThan(0.1);
      expect(Math.abs(str101_12.vinnumat()-70)).toBeLessThan(0.1);
    });
  });
  /*
  * Test 17: Testing if Verklegt taxt is correct for
  * three units and 5, 8, 12, 14 and 16 students.
  */
   describe('Rétt vinnumat (5, 8, 12, 14 og 16 nemendur)', function() {
    it("Verklegt", function() {
      var verk103_5 = new Afangi(['Raf 103', 3, 5,'Verklegt']);
      var verk103_8 = new Afangi(['Raf 103', 3, 8,'Verklegt']);
      var verk103_12 = new Afangi(['Raf 103', 3, 12,'Verklegt']);
      var verk103_14 = new Afangi(['Raf 103', 3, 14,'Verklegt']);
      var verk103_16 = new Afangi(['Raf 103', 3, 16,'Verklegt']);

      expect(Math.abs(verk103_5.vinnumat()-165.5)).toBeLessThan(0.1);
      expect(Math.abs(verk103_8.vinnumat()-165.5)).toBeLessThan(0.1);
      expect(Math.abs(verk103_12.vinnumat()-174.5)).toBeLessThan(0.1);
      expect(Math.abs(verk103_14.vinnumat()-179)).toBeLessThan(0.1);
      expect(Math.abs(verk103_16.vinnumat()-188)).toBeLessThan(0.1);
    });
  });
  /*
  * Test 18: Testing if Stærðfræði, neðra þrep taxt is correct for
  * three units and 5, 17, 25, 28, 30, 32 students.
  */
   describe('Rétt vinnumat (5, 17, 25, 28, 30 og 32 nemendur)', function() {
    it("Stærðfræði, neðra þrep", function() {
      var stae103_5 = new Afangi(['Stæ 103', 3, 5,'Stærðfræði, neðra þrep']);
      var stae103_17 = new Afangi(['Stæ 103', 3, 17,'Stærðfræði, neðra þrep']);
      var stae103_25 = new Afangi(['Stæ 103', 3, 25,'Stærðfræði, neðra þrep']);
      var stae103_28 = new Afangi(['Stæ 103', 3, 28,'Stærðfræði, neðra þrep']);
      var stae103_30 = new Afangi(['Stæ 103', 3, 30,'Stærðfræði, neðra þrep']);
      var stae103_32 = new Afangi(['Stæ 103', 3, 32,'Stærðfræði, neðra þrep']);

      expect(Math.abs(stae103_5.vinnumat()-158.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_17.vinnumat()-158.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_25.vinnumat()-178.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_28.vinnumat()-186.0)).toBeLessThan(0.1);
      expect(Math.abs(stae103_30.vinnumat()-192.0)).toBeLessThan(0.1);
      expect(Math.abs(stae103_32.vinnumat()-202)).toBeLessThan(0.1);

    });
  });
  /*
  * Test 19: Testing if Fagbóklegt taxt is correct for
  * three units and 5, 10, 15, 18 and 20 students.
  */
   describe('Rétt vinnumat (5, 10, 15, 18 og 20 nemendur)', function() {
    it("Fagbóklegt", function() {
      var isl303_5 = new Afangi(['Ísl 103', 3, 5,'Fagbóklegt']);
      var isl303_10 = new Afangi(['Ísl 103', 3, 10,'Fagbóklegt']);
      var isl303_15 = new Afangi(['Ísl 103', 3, 15,'Fagbóklegt']);
      var isl303_18 = new Afangi(['Ísl 103', 3, 18,'Fagbóklegt']);
      var isl303_20 = new Afangi(['Ísl 103', 3, 20,'Fagbóklegt']);

      expect(Math.abs(isl303_5.vinnumat()-161.2)).toBeLessThan(0.1);
      expect(Math.abs(isl303_10.vinnumat()-161.2)).toBeLessThan(0.1);
      expect(Math.abs(isl303_15.vinnumat()-174.5)).toBeLessThan(0.1);
      expect(Math.abs(isl303_18.vinnumat()-182.5)).toBeLessThan(0.1);
      expect(Math.abs(isl303_20.vinnumat()-193.1)).toBeLessThan(0.1);
    });
  });
  /*
  * Test 20: Testing if Stærðfræði, neðra þrep taxt is correct for
  * three units and 5, 17, 25, 28, 30, 32 students.
  */
   describe('Rétt vinnumat (5, 17, 25, 28, 30 og 32 nemendur)', function() {
    it("Stærðfræði, efra þrep", function() {
      var stae103_5 = new Afangi(['Stæ 103', 3, 5,'Stærðfræði, efra þrep']);
      var stae103_17 = new Afangi(['Stæ 103', 3, 17,'Stærðfræði, efra þrep']);
      var stae103_25 = new Afangi(['Stæ 103', 3, 25,'Stærðfræði, efra þrep']);
      var stae103_28 = new Afangi(['Stæ 103', 3, 28,'Stærðfræði, efra þrep']);
      var stae103_30 = new Afangi(['Stæ 103', 3, 30,'Stærðfræði, efra þrep']);
      var stae103_32 = new Afangi(['Stæ 103', 3, 32,'Stærðfræði, efra þrep']);

      expect(Math.abs(stae103_5.vinnumat()-161.3)).toBeLessThan(0.1);
      expect(Math.abs(stae103_17.vinnumat()-161.3)).toBeLessThan(0.1);
      expect(Math.abs(stae103_25.vinnumat()-182.7)).toBeLessThan(0.1);
      expect(Math.abs(stae103_28.vinnumat()-190.7)).toBeLessThan(0.1);
      expect(Math.abs(stae103_30.vinnumat()-197.1)).toBeLessThan(0.1);
      expect(Math.abs(stae103_32.vinnumat()-207.7)).toBeLessThan(0.1);

    });
  });
  /*
  * Test 21: Testing if Jarðfræði taxt is correct for
  * three units and 5, 17, 25, 28, 30, 32 students.
  */
   describe('Rétt vinnumat (5, 17, 25, 28, 30 og 32 nemendur)', function() {
    it("Jarðfræði", function() {
      var stae103_5 = new Afangi(['Stæ 103', 3, 5,'Jarðfræði']);
      var stae103_17 = new Afangi(['Stæ 103', 3, 17,'Jarðfræði']);
      var stae103_25 = new Afangi(['Stæ 103', 3, 25,'Jarðfræði']);
      var stae103_28 = new Afangi(['Stæ 103', 3, 28,'Jarðfræði']);
      var stae103_30 = new Afangi(['Stæ 103', 3, 30,'Jarðfræði']);
      var stae103_32 = new Afangi(['Stæ 103', 3, 32,'Jarðfræði']);

      expect(Math.abs(stae103_5.vinnumat()-158.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_17.vinnumat()-158.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_25.vinnumat()-178.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_28.vinnumat()-186.0)).toBeLessThan(0.1);
      expect(Math.abs(stae103_30.vinnumat()-192.0)).toBeLessThan(0.1);
      expect(Math.abs(stae103_32.vinnumat()-202)).toBeLessThan(0.1);

    });
  });
  /*
  * Test 22: Testing if Jarðfræði taxt is correct for
  * three units and 5, 17, 25, 28, 30, 32 students.
  */
   describe('Rétt vinnumat (5, 17, 25, 28, 30 og 32 nemendur)', function() {
    it("Almennar raungreinar", function() {
      var stae103_5 = new Afangi(['Stæ 103', 3, 5,'Almennar raungreinar']);
      var stae103_17 = new Afangi(['Stæ 103', 3, 17,'Almennar raungreinar']);
      var stae103_25 = new Afangi(['Stæ 103', 3, 25,'Almennar raungreinar']);
      var stae103_28 = new Afangi(['Stæ 103', 3, 28,'Almennar raungreinar']);
      var stae103_30 = new Afangi(['Stæ 103', 3, 30,'Almennar raungreinar']);
      var stae103_32 = new Afangi(['Stæ 103', 3, 32,'Almennar raungreinar']);

      expect(Math.abs(stae103_5.vinnumat()-158.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_17.vinnumat()-158.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_25.vinnumat()-178.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_28.vinnumat()-186.0)).toBeLessThan(0.1);
      expect(Math.abs(stae103_30.vinnumat()-192.0)).toBeLessThan(0.1);
      expect(Math.abs(stae103_32.vinnumat()-202)).toBeLessThan(0.1);

    });
  });
  /*
  * Test 23: Testing if Raungreinar, neðra þrep taxt is correct for
  * three units and 5, 17, 25, 28, 30, 32 students.
  */
   describe('Rétt vinnumat (5, 15, 22, 26 og 28 nemendur)', function() {
    it("Raungreinar, neðra þrep", function() {
      var stae103_5 = new Afangi(['Stæ 103', 3, 5,'Raungreinar, neðra þrep']);
      var stae103_17 = new Afangi(['Stæ 103', 3, 15,'Raungreinar, neðra þrep']);
      var stae103_25 = new Afangi(['Stæ 103', 3, 22,'Raungreinar, neðra þrep']);
      var stae103_28 = new Afangi(['Stæ 103', 3, 26,'Raungreinar, neðra þrep']);
      var stae103_30 = new Afangi(['Stæ 103', 3, 28,'Raungreinar, neðra þrep']);

      expect(Math.abs(stae103_5.vinnumat()-161)).toBeLessThan(0.1);
      expect(Math.abs(stae103_17.vinnumat()-161)).toBeLessThan(0.1);
      expect(Math.abs(stae103_25.vinnumat()-178.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_28.vinnumat()-188.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_30.vinnumat()-198.5)).toBeLessThan(0.1);

    });
  });
  /*
  * Test 24: Testing if Raungreinar, efra þrep taxt is correct for
  * three units and 5, 17, 25, 28, 30, 32 students.
  */
   describe('Rétt vinnumat (5, 15, 22, 26 og 28 nemendur)', function() {
    it("Raungreinar, efra þrep", function() {
      var stae103_5 = new Afangi(['Stæ 103', 3, 5,'Raungreinar, efra þrep']);
      var stae103_17 = new Afangi(['Stæ 103', 3, 15,'Raungreinar, efra þrep']);
      var stae103_25 = new Afangi(['Stæ 103', 3, 22,'Raungreinar, efra þrep']);
      var stae103_28 = new Afangi(['Stæ 103', 3, 26,'Raungreinar, efra þrep']);
      var stae103_30 = new Afangi(['Stæ 103', 3, 28,'Raungreinar, efra þrep']);

      expect(Math.abs(stae103_5.vinnumat()-165.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_17.vinnumat()-165.5)).toBeLessThan(0.1);
      expect(Math.abs(stae103_25.vinnumat()-184.2)).toBeLessThan(0.1);
      expect(Math.abs(stae103_28.vinnumat()-194.8)).toBeLessThan(0.1);
      expect(Math.abs(stae103_30.vinnumat()-205.4)).toBeLessThan(0.1);

    });
  });
  /*
  * Test 25: Testing if Raungreinar, efra þrep taxt is correct for
  * three units and 5, 12, 18, 22 and 24 students.
  */
   describe('Rétt vinnumat (5, 12, 18, 22 og 24 nemendur)', function() {
    it("Raungreinar efra þrep", function() {
      var stae103_5 = new Afangi(['Stæ 103', 3, 5,'Tölvuáfangar']);
      var stae103_17 = new Afangi(['Stæ 103', 3, 12,'Tölvuáfangar']);
      var stae103_25 = new Afangi(['Stæ 103', 3, 18,'Tölvuáfangar']);
      var stae103_28 = new Afangi(['Stæ 103', 3, 22,'Tölvuáfangar']);
      var stae103_30 = new Afangi(['Stæ 103', 3, 24,'Tölvuáfangar']);

      expect(Math.abs(stae103_5.vinnumat()-160)).toBeLessThan(0.1);
      expect(Math.abs(stae103_17.vinnumat()-160)).toBeLessThan(0.1);
      expect(Math.abs(stae103_25.vinnumat()-176)).toBeLessThan(0.1);
      expect(Math.abs(stae103_28.vinnumat()-186.7)).toBeLessThan(0.1);
      expect(Math.abs(stae103_30.vinnumat()-197.3)).toBeLessThan(0.1);

    });
  });
  /*
  * Test 26: 
  */
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
  /*
  * Test 27: 
  */
   describe('Rétt vinnumat félagsfræðikennara', function() {
    it("Aðalbjörg", function() {
      document.getElementById('h-1').value = 'HBF 103';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '19';
      document.getElementById('s-1').value = 'Félagsgreinar, neðra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'SAS 103';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '15';
      document.getElementById('s-2').value = 'Félagsgreinar, neðra þrep';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'SAS 103';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '16';
      document.getElementById('s-3').value = 'Félagsgreinar, neðra þrep';
      document.getElementById('p-3').value = '100';
      document.getElementById('golf').value = '38-54 ára';
      document.getElementById('calculate').click();
      
      var afangar = [['HBF 103', 3, 19,'Félagsgreinar, neðra þrep'],
                    ['Sas 103', 3, 15,'Félagsgreinar, neðra þrep'],
                    ['Sas 103', 3, 16,'Félagsgreinar, neðra þrep']
      ];
      var hlutfoll = [100,100,100,100];
      var kennari = new Kennari('Aðalbjörg', afangar, hlutfoll);
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
      expect(Math.abs(vm[0]-167.5)).toBeLessThan(0.1);
      expect(Math.abs(vm[1]-154.375)).toBeLessThan(0.1);
      expect(Math.abs(vm[2]-154.375)).toBeLessThan(0.1);
    });
  });
  /*
  * Test 28: 
  */
   describe('Rétt vinnumat sögukennara', function() {
    it("Arngrímur (óskertur)", function() {
      document.getElementById('h-1').value = 'saga 203';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '30';
      document.getElementById('s-1').value = 'Félagsgreinar, efra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'Saga 193';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '15'
      document.getElementById('s-2').value = 'Almenn braut';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'saga 203';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '22';
      document.getElementById('s-3').value = 'Félagsgreinar, efra þrep';
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'saga 303';
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '20';
      document.getElementById('s-4').value = 'Félagsgreinar, efra þrep';
      document.getElementById('p-4').value = '50';
      document.getElementById('add').click();
      document.getElementById('h-5').value = 'saga 303';
      document.getElementById('e-5').value = '3';
      document.getElementById('f-5').value = '26';
      document.getElementById('s-5').value = 'Félagsgreinar, efra þrep';
      document.getElementById('p-5').value = '50';
      document.getElementById('golf').value = '38-54 ára';
      document.getElementById('calculate').click();

      var afangar = [['saga203', 3, 30,'Félagsgreinar, efra þrep'],
                    ['saga193', 3, 15,'Almenn braut'],
                    ['saga203', 3, 22,'Félagsgreinar, efra þrep'],
                    ['saga303', 3, 20,'Félagsgreinar, efra þrep'],
                    ['saga303', 3, 26,'Félagsgreinar, efra þrep']

      ];
      var hlutfoll = [100,100,100,50,50];
      var kennari = new Kennari('Arngrímur', afangar, hlutfoll);
      var vm = kennari.vinnumatAfanga();
      var skerding = kennari.ryrnunAfanga();
      expect(kennari.vinnuskylda(
        document.getElementById('onnurVinna').value,
        document.getElementById('golf').value)).toBe(
        parseInt(document.getElementById('vinnuskylda').value));
      expect(Math.abs(kennari.vinnuskylda(document.getElementById('onnurVinna').value,
        document.getElementById('golf').value)+
        parseFloat(document.getElementById('onnurVinna').value)+
        parseFloat(document.getElementById('A-hluti').value)
      -parseFloat(document.getElementById('dagsskoli').value))).toBeLessThan(1.01);
      expect(Math.abs(vm[0]-193.5)).toBeLessThan(0.3);
      expect(Math.abs(vm[1]-174.5)).toBeLessThan(0.3);
      expect(Math.abs(vm[2]-171.3)).toBeLessThan(0.3);
      expect(Math.abs(vm[3]-83.0675)).toBeLessThan(0.1);
      expect(Math.abs(vm[4]-91.0675)).toBeLessThan(0.1);
    });
  });
  /*
  * Test 29: 
  */
   describe('Rétt vinnumat stærð/raun kennara', function() {
    it("Unnar (óskertur)", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '15';
      document.getElementById('s-1').value = 'Raungreinar, efra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'b';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '15';
      document.getElementById('s-2').value = 'Stærðfræði, efra þrep';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'c';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '25';
      document.getElementById('s-3').value = 'Stærðfræði, efra þrep';
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'd';
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '11';
      document.getElementById('s-4').value = 'Stærðfræði, efra þrep';
      document.getElementById('p-4').value = '100';
      document.getElementById('golf').value = '30-37 ára';
      document.getElementById('calculate').click();
      var afangar = [['a', 3, 15,'Raungreinar, efra þrep'],
                    ['b', 3, 15,'Stærðfræði, efra þrep'],
                    ['c', 3, 25,'Stærðfræði, efra þrep'],
                    ['d', 3, 11,'Stærðfræði, efra þrep']
      ];
      var hlutfoll = [100,100,100,100];
      var kennari = new Kennari('Unnar',afangar, hlutfoll);
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
      expect(Math.abs(vm[0]-165.55)).toBeLessThan(0.1);
      expect(Math.abs(vm[1]-161.39)).toBeLessThan(0.1);
      expect(Math.abs(vm[2]-182.75)).toBeLessThan(0.1);
      expect(Math.abs(vm[3]-161.39)).toBeLessThan(0.1);
    });
  });
  /*
  * Test 30: 
  */
   describe('Rétt vinnumat listgreinakennara', function() {
    it("Gréta", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '15';
      document.getElementById('s-1').value = 'Listgreinar, efra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'b';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '19';
      document.getElementById('s-2').value = 'Listgreinar, efra þrep';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'c';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '12';
      document.getElementById('s-3').value = 'Listgreinar, efra þrep';
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'd';
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '24';
      document.getElementById('s-4').value = 'Félagsgreinar, efra þrep';
      document.getElementById('p-4').value = '100';
      document.getElementById('golf').value = '55-59 ára';
      document.getElementById('calculate').click();
      var afangar = [['a', 3, 19,'Listgreinar, efra þrep'],
                    ['b', 3, 19,'Listgreinar, neðra þrep'],
                    ['c', 3, 12,'Listgreinar, efra þrep'],
                    ['d', 3, 24,'Félagsgreinar, efra þrep'],
      ];
      var hlutfoll = [100,100,100,100];
      var kennari = new Kennari('Gréta',afangar,hlutfoll);
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
      expect(Math.abs(vm[0]-189.4)).toBeLessThan(0.5);
      expect(Math.abs(vm[1]-187)).toBeLessThan(0.5);
      expect(Math.abs(vm[2]-168.04)).toBeLessThan(0.5);
      expect(Math.abs(vm[3]-186.2)).toBeLessThan(0.5);
    });
  });
  /*
  * Test 31: 
  */
   describe('Rétt vinnumat fagbóklegs kennara', function() {
    it("Guðrún K.", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '3';
      document.getElementById('s-1').value = 'Fagbóklegt';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'b';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '3';
      document.getElementById('s-2').value = 'Fagbóklegt';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'c';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '15';
      document.getElementById('s-3').value = 'Fagbóklegt';
      document.getElementById('p-3').value = '100';
      document.getElementById('golf').value = '38-54 ára';
      document.getElementById('calculate').click();
      var afangar = [['a', 3, 3,'Fagbóklegt'],
                     ['b', 3, 3,'Fagbóklegt'],
                     ['c', 3, 15,'Fagbóklegt']
      ];
      var hlutfoll = [100,100,100];
      var kennari = new Kennari('Guðrún K.',afangar,hlutfoll);
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
      expect(Math.abs(vm[0]-161.2)).toBeLessThan(0.5);
      expect(Math.abs(vm[1]-161.2)).toBeLessThan(0.5);
      expect(Math.abs(vm[2]-174.55)).toBeLessThan(0.5);
    });
  });
  /*
  * Test 32: 
  */
   describe('Rétt vinnumat félagsgreina kennara', function() {
    it("Hannes Ísberg", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '22';
      document.getElementById('s-1').value = 'Félagsgreinar, neðra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'b';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '25';
      document.getElementById('s-2').value = 'Félagsgreinar, efra þrep';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'c';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '20';
      document.getElementById('s-3').value = 'Félagsgreinar, efra þrep';
      document.getElementById('p-3').value = '100';
      document.getElementById('golf').value = '60 ára+';
      document.getElementById('calculate').click();
      var afangar = [['a', 3, 22,'Félagsgreinar, neðra þrep'],
                     ['b', 3, 25,'Félagsgreinar, efra þrep'],
                     ['c', 3, 20,'Félagsgreinar, efra þrep']
      ];
      var hlutfoll = [100,100,100,100]
      var kennari = new Kennari('Hannes',afangar,hlutfoll)
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
      expect(Math.abs(vm[0]-175)).toBeLessThan(0.5);
      expect(Math.abs(vm[1]-188.9)).toBeLessThan(0.5);
      expect(Math.abs(vm[2]-175.4)).toBeLessThan(0.5);
    });
  });
  /*
  * Test 33: 
  */
   describe('Rétt vinnumat íslenskukennara', function() {
    it("Helgi Sæm.", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '21';
      document.getElementById('s-1').value = 'Erlend mál, neðra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'b';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '31';
      document.getElementById('s-2').value = 'Íslenska, efra þrep';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'c';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '21';
      document.getElementById('s-3').value = 'Íslenska, efra þrep';
      document.getElementById('p-3').value = '100';
      document.getElementById('golf').value = '60 ára+';
      document.getElementById('calculate').click();
      var afangar = [['a', 3, 21,'Erlend mál, neðra þrep'],
                    ['b', 3, 31,'Íslenska, efra þrep'],
                    ['c', 3, 21,'Íslenska, efra þrep']
      ];

      var hlutfoll = [100,100,100];
      var kennari = new Kennari('Helgi Sæm.',afangar,hlutfoll);
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
      expect(Math.abs(vm[0]-172.5)).toBeLessThan(0.5);
      expect(Math.abs(vm[1]-211.4)).toBeLessThan(0.5);
      expect(Math.abs(vm[2]-180.98)).toBeLessThan(0.5);
    });
  });
    /*
  * Test 34: 
  */
   describe('Rétt vinnumat stærðfræðikennara', function() {
    it("Jónína", function() {
      document.getElementById('h-1').value = 'saga 203';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '20';
      document.getElementById('s-1').value = 'Stærðfræði, efra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'Saga 193';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '26'
      document.getElementById('s-2').value = 'Almenn braut';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'saga 203';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '24';
      document.getElementById('s-3').value = 'Stærðfræði, efra þrep';
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'saga 303';
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '21';
      document.getElementById('s-4').value = 'Stærðfræði, efra þrep';
      document.getElementById('p-4').value = '100';
      document.getElementById('add').click();
      document.getElementById('h-5').value = 'saga 303';
      document.getElementById('e-5').value = '3';
      document.getElementById('f-5').value = '30';
      document.getElementById('s-5').value = 'Stærðfræði, neðra þrep';
      document.getElementById('p-5').value = '100';
      document.getElementById('golf').value = '38-54 ára';
      document.getElementById('calculate').click();
      var afangar = [['a', 3, 20,'Stærðfræði, efra þrep'],
                     ['b', 3, 26,'Almenn braut'],
                     ['c', 3, 24,'Stærðfræði, efra þrep'],
                     ['d', 3, 21,'Stærðfræði, efra þrep'],
                     ['e', 3, 30,'Stærðfræði, neðra þrep']
      ];
      var hlutfoll = [100,100,100,100,100];
      var kennari = new Kennari('Jónína',afangar,hlutfoll);
      expect(kennari.vinnuskylda(
        document.getElementById('onnurVinna').value,
        document.getElementById('golf').value)).toBe(
        parseInt(document.getElementById('vinnuskylda').value));
      expect(Math.abs(kennari.vinnuskylda(document.getElementById('onnurVinna').value,
        document.getElementById('golf').value)+
        parseFloat(document.getElementById('onnurVinna').value)+
        parseFloat(document.getElementById('A-hluti').value)
      -parseFloat(document.getElementById('dagsskoli').value))).toBeLessThan(1.01);
      expect(Math.abs(kennari.originalAfangar[0].vinnumat()-169.34)).toBeLessThan(0.5);
      expect(Math.abs(kennari.originalAfangar[2].vinnumat()-180.02)).toBeLessThan(0.5);
      expect(Math.abs(kennari.originalAfangar[3].vinnumat()-172.01)).toBeLessThan(0.5);
      expect(Math.abs(kennari.originalAfangar[4].vinnumat()-192)).toBeLessThan(0.5);
    });
  });
  /*
  * Test 35: 
  */
   describe('Frönskukennari rétt vinnumat', function() {
    it("Ingunn", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '20';
      document.getElementById('s-1').value = 'Erlend mál, neðra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'b';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '17'
      document.getElementById('s-2').value = 'Erlend mál, neðra þrep';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'c';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '14';
      document.getElementById('s-3').value = 'Erlend mál, neðra þrep';
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'd';
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '10';
      document.getElementById('s-4').value = 'Erlend mál, efra þrep';
      document.getElementById('p-4').value = '100';
      document.getElementById('add').click();
      document.getElementById('h-5').value = 'e';
      document.getElementById('e-5').value = '3';
      document.getElementById('f-5').value = '11';
      document.getElementById('s-5').value = 'Erlend mál, efra þrep';
      document.getElementById('p-5').value = '100';
      document.getElementById('golf').value = '38-54 ára';
      document.getElementById('calculate').click();
      var afangar = [['a', 3, 20,'Erlend mál, neðra þrep'],
                     ['b', 3, 17,'Erlend mál, neðra þrep'],
                     ['c', 3, 14,'Erlend mál, neðra þrep'],
                     ['d', 3, 10,'Erlend mál, efra þrep'],
                     ['e', 3, 11,'Erlend mál, efra þrep']
      ];
      var hlutfoll = [100,100,100,100,100];
      var kennari = new Kennari('Ingunn',afangar,hlutfoll);
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
      expect(Math.abs(vm[0]-170)).toBeLessThan(0.5);
      expect(Math.abs(vm[1]-162.5)).toBeLessThan(0.5);
      expect(Math.abs(vm[2]-162.5)).toBeLessThan(0.5);
      expect(Math.abs(vm[3]-167.3)).toBeLessThan(0.5);
      expect(Math.abs(vm[4]-167.3)).toBeLessThan(0.5);
    });
  });
  /*
  * Test 36: 
  */
   describe('Rétt vinnumat raungreinakennara', function() {
    it("Guðrún Ingibjörg", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '17';
      document.getElementById('s-1').value = 'Raungreinar, efra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'a';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '19'
      document.getElementById('s-2').value = 'Raungreinar, efra þrep';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'b';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '26';
      document.getElementById('s-3').value = 'Almennar raungreinar';
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'b';
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '31';
      document.getElementById('s-4').value = 'Almennar raungreinar';
      document.getElementById('p-4').value = '100';
      document.getElementById('h-5').value = '';
      document.getElementById('e-5').value = '3';
      document.getElementById('f-5').value = '';
      document.getElementById('s-5').value = '';
      document.getElementById('p-5').value = '100';
      document.getElementById('golf').value = '38-54 ára';
      document.getElementById('calculate').click();
      var afangar = [
        ['efn 103', 3, 17,'Raungreinar, efra þrep'],
        ['efn 203', 3, 19,'Raungreinar, efra þrep'],
        ['nær 103', 3, 26,'Almennar raungreinar'],
        ['nær 103', 3, 31,'Almennar raungreinar']
      ];
      var hlutfoll = [100,100,100,100];
      var kennari = new Kennari('Guðrún Ingibjörg',afangar,hlutfoll);
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
      expect(Math.abs(vm[0]-170.84)).toBeLessThan(0.5);
      expect(Math.abs(vm[1]-176.18)).toBeLessThan(0.5);
      expect(Math.abs(vm[2]-171.6)).toBeLessThan(0.5);
      expect(Math.abs(vm[3]-187.6)).toBeLessThan(0.5);
    });
  });
 /*
  * Test 37: 
  */
   describe('Rétt vinnumat enskukennara (þrískert)', function() {
    it("Herdís", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '21';
      document.getElementById('s-1').value = 'Erlend mál, efra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'a';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '22'
      document.getElementById('s-2').value = 'Erlend mál, efra þrep';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'b';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '17';
      document.getElementById('s-3').value = 'Erlend mál, neðra þrep';
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'a';
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '21';
      document.getElementById('s-4').value = 'Erlend mál, efra þrep';
      document.getElementById('p-4').value = '100';
      document.getElementById('h-5').value = '';
      document.getElementById('e-5').value = '3';
      document.getElementById('f-5').value = '';
      document.getElementById('s-5').value = '';
      document.getElementById('p-5').value = '100';
      document.getElementById('golf').value = '38-54 ára';
      document.getElementById('calculate').click();
      var afangar = [
        ['a', 3, 21,'Erlend mál, efra þrep'],
        ['a', 3, 22,'Erlend mál, efra þrep'],
        ['c', 3, 17,'Erlend mál, neðra þrep'],
        ['a', 3, 21,'Erlend mál, efra þrep']
      ];
      var hlutfoll = [100,100,100,100];
      var kennari = new Kennari('Herdís',afangar,hlutfoll)
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
      expect(Math.abs(vm[0]-167.0)).toBeLessThan(0.5);
      expect(Math.abs(vm[1]-169.7)).toBeLessThan(0.5);
      expect(Math.abs(vm[2]-162.5)).toBeLessThan(0.5);
      expect(Math.abs(vm[3]-167.0)).toBeLessThan(0.5);
    });
  });
  /*
  * Test 38: 
  */
   describe('Rétt vinnumat raungreinakennara', function() {
    it("Líney", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '19';
      document.getElementById('s-1').value = 'Raungreinar, neðra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'b';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '20'
      document.getElementById('s-2').value = 'Raungreinar, neðra þrep';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'c';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '19';
      document.getElementById('s-3').value = 'Almennar raungreinar';
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'c';
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '21';
      document.getElementById('s-4').value = 'Almennar raungreinar';
      document.getElementById('p-4').value = '100';
      document.getElementById('h-5').value = '';
      document.getElementById('e-5').value = '3';
      document.getElementById('f-5').value = '';
      document.getElementById('s-5').value = '';
      document.getElementById('p-5').value = '100';
      document.getElementById('golf').value = '38-54 ára';
      document.getElementById('calculate').click();
      var afangar = [
        ['a', 3, 19,'Raungreinar, neðra þrep'],
        ['b', 3, 20,'Raungreinar, neðra þrep'],
        ['c', 3, 19,'Almennar raungreinar'],
        ['c', 3, 21,'Almennar raungreinar']
      ];
      var hlutfoll = [100,100,100,100];
      var kennari = new Kennari('Líney',afangar,hlutfoll)
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
      expect(Math.abs(vm[0]-171)).toBeLessThan(0.5);
      expect(Math.abs(vm[1]-173.5)).toBeLessThan(0.5);
      expect(Math.abs(vm[2]-155.2)).toBeLessThan(0.5);
      expect(Math.abs(vm[3]-160.2)).toBeLessThan(0.5);
    });
  });
  /*
  * Test 39: 
  */
   describe('Rétt vinnumat íslenskukennara', function() {
    it("Vala", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '20';
      document.getElementById('s-1').value = 'Íslenska, efra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'b';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '25'
      document.getElementById('s-2').value = 'Íslenska, efra þrep';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'c';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '22';
      document.getElementById('s-3').value = 'Íslenska, neðra þrep';
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'a';
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '15';
      document.getElementById('s-4').value = 'Íslenska, efra þrep';
      document.getElementById('p-4').value = '100';
      document.getElementById('h-5').value = '';
      document.getElementById('e-5').value = '3';
      document.getElementById('f-5').value = '';
      document.getElementById('s-5').value = '';
      document.getElementById('p-5').value = '100';
      document.getElementById('golf').value = '38-54 ára';
      document.getElementById('calculate').click();
      var afangar = [
        ['a', 3, 20,'Íslenska, efra þrep'],
        ['b', 3, 25,'Íslenska, efra þrep'],
        ['c', 3, 22,'Íslenska, neðra þrep'],
        ['a', 3, 15,'Íslenska, efra þrep']
      ];
      var hlutfoll = [100,100,100,100];
      var kennari = new Kennari('Vala',afangar,hlutfoll);
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
      expect(Math.abs(vm[0]-169.715)).toBeLessThan(0.5);
      expect(Math.abs(vm[1]-191.66)).toBeLessThan(0.5);
      expect(Math.abs(vm[2]-179.65)).toBeLessThan(0.5);
      expect(Math.abs(vm[3]-161.715)).toBeLessThan(0.5);
    });
  });
  /*
  * Test 40: 
  */
   describe('Kennari í heilbrigðisskóli', function() {
    it("Inga", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '16';
      document.getElementById('s-1').value = 'Almennar raungreinar';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'b';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '17'
      document.getElementById('s-2').value = 'Fagbóklegt';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'c';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '12';
      document.getElementById('s-3').value = 'Verklegt';
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'a';
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '26';
      document.getElementById('s-4').value = 'Almennar raungreinar';
      document.getElementById('p-4').value = '100';
      document.getElementById('h-5').value = 'c';
      document.getElementById('e-5').value = '3';
      document.getElementById('f-5').value = '12';
      document.getElementById('s-5').value = 'Verklegt';
      document.getElementById('p-5').value = '100';
      document.getElementById('golf').value = '38-54 ára';
      document.getElementById('calculate').click();
      var afangar = [
        ['a', 3, 16,'Almennar raungreinar'],
        ['b', 3, 17,'Fagbóklegt'],
        ['c', 3, 12,'Verklegt'],
        ['a', 3, 26,'Almennar raungreinar'],
        ['c', 3, 12,'Verklegt']
      ];
      var hlutfoll = [100,100,100,100,100];
      var kennari = new Kennari('Inga',afangar,hlutfoll);
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
      expect(Math.abs(vm[0]-150.075)).toBeLessThan(0.5);
      expect(Math.abs(vm[1]-179.89)).toBeLessThan(0.5);
      expect(Math.abs(vm[2]-165.775)).toBeLessThan(0.5);
      expect(Math.abs(vm[3]-172.765)).toBeLessThan(0.5);
      expect(Math.abs(vm[4]-165.775)).toBeLessThan(0.5);

    });
  });
  /*
  * Test 41: 
  */
   describe('Spænskukennari rétt vinnumat', function() {
    it("Carmen", function() {
      document.getElementById('h-1').value = 'a';
      document.getElementById('e-1').value = '3';
      document.getElementById('f-1').value = '17';
      document.getElementById('s-1').value = 'Erlend mál, neðra þrep';
      document.getElementById('p-1').value = '100';
      document.getElementById('h-2').value = 'b';
      document.getElementById('e-2').value = '3';
      document.getElementById('f-2').value = '25'
      document.getElementById('s-2').value = 'Erlend mál, neðra þrep';
      document.getElementById('p-2').value = '100';
      document.getElementById('h-3').value = 'c';
      document.getElementById('e-3').value = '3';
      document.getElementById('f-3').value = '6';
      document.getElementById('s-3').value = 'Erlend mál, efra þrep';
      document.getElementById('p-3').value = '100';
      document.getElementById('h-4').value = 'a';
      document.getElementById('e-4').value = '3';
      document.getElementById('f-4').value = '19';
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
        ['a', 3, 17,'Erlend mál, neðra þrep'],
        ['b', 3, 25,'Erlend mál, neðra þrep'],
        ['c', 3, 6,'Erlend mál, efra þrep'],
        ['a', 3, 19,'Erlend mál, neðra þrep'],
      ];
      var hlutfoll = [100,100,100,100];
      var kennari = new Kennari('Carmen',afangar,hlutfoll);
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
      expect(Math.abs(vm[0]-154.25)).toBeLessThan(0.5);
      expect(Math.abs(vm[1]-182.5)).toBeLessThan(0.5);
      expect(Math.abs(vm[2]-167.3)).toBeLessThan(0.5);
      expect(Math.abs(vm[3]-159.25)).toBeLessThan(0.5);
    });
  });
  /*
  * Test 42: 
  */
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
  });

}());
