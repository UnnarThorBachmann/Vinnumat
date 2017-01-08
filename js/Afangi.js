var Afangi = function(param) {
  this.heiti = param[0];
  this.einingar = param[1];
  this.vm = -1;
  this.hperweek = param[4];
  this.lengdKest = param[5];
  this.synid = synidaemi[param[3]];
  this.skerding = 0;
  this.thaettir = {};
  
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
};
Afangi.prototype.hamark = function() {
    return this.synid.hamark_n;
};
Afangi.prototype.vinnumat = function () {
  return this.vm;
};
Afangi.prototype.reikna_vinnumat = function() {
  if (this.heiti ==='' || this.einingar === '' || this.fjoldi === '') {
    return 0;
  }
  var ein =parseFloat(this.einingar);
  if (ein == 2 && (this.synid.heiti === 'Hægferð') ||ein == 2 && (this.synid.heiti === 'Hægferð') || ein == 2 && (this.synid.heiti === 'Íslenska, hægferð (gamalt)') || ein == 2 && (this.synid.heiti === 'Enska, hægferð (gamalt)')|| ein == 2 && (this.synid.heiti === 'Danska, hægferð (gamalt)')) {
    ein +=1;
  }
  this.thaettir['Kennsluáætlun'] = parseFloat(this.synid.timar_namsAetlun*ein/3);
  this.thaettir['Verkefnis og prófagerð'] = parseFloat(this.synid.verkefnisgerd*ein/3);
  this.thaettir['Önnur vinna óháð nemendafjölda'] = parseFloat(this.synid.onnur_vinna*ein/3);
  this.thaettir['Staðin kennsla'] = parseFloat(this.lengdKest*this.hperweek*15/60);
  this.thaettir['Undirbúningur kennslu'] = parseFloat(this.synid.undirb_kennslu*this.hperweek*15/60);
  var fast = (this.synid.timar_namsAetlun + this.synid.verkefnisgerd + this.synid.onnur_vinna)*ein/3;
  var kennslustundir = (this.lengdKest + this.synid.undirb_kennslu)/60*this.hperweek*15;
  var per_nemandi = (this.synid.vinna_per_nemanda)*ein/(3*60);
  var nemendur = 0; 
  var total;
 
  if (this.fjoldi <= this.synid.hamark_n) {
    nemendur = Math.max(this.fjoldi,this.synid.lagmark)*per_nemandi;
  }
  else if (this.synid.hamark_n < this.fjoldi && this.fjoldi <= this.synid.hamark_e) {
    nemendur = this.synid.hamark_n*per_nemandi;
    nemendur = nemendur + (this.fjoldi-this.synid.hamark_n)*this.synid.kostn_per_nem_yn*ein/3;
  }
  else {
    nemendur = this.synid.hamark_n*per_nemandi;
    nemendur = nemendur + (this.synid.hamark_e-this.synid.hamark_n)*this.synid.kostn_per_nem_yn*ein/3+ (this.fjoldi-this.synid.hamark_e)*this.synid.kostn_per_nem_ye*ein/3;
  }
  total = fast + kennslustundir + nemendur
  this.thaettir['Vinna vegna nemenda'] = nemendur;

  this.vm = total;
};
Afangi.prototype.skerda = function (p) {
  this.vm = this.vm*(1-p);
  this.skerding = p;
  this.thaettir['Kennsluáætlun'] = parseFloat(this.thaettir['Kennsluáætlun'])*parseFloat(1-p);
  this.thaettir['Verkefnis og prófagerð'] =  parseFloat(this.thaettir['Verkefnis og prófagerð'])*parseFloat(1-p);
  this.thaettir['Önnur vinna óháð nemendafjölda'] =   parseFloat(this.thaettir['Önnur vinna óháð nemendafjölda'])*parseFloat(1-p);
  this.thaettir['Staðin kennsla'] = parseFloat(this.thaettir['Staðin kennsla'])*parseFloat(1-p);
  this.thaettir['Undirbúningur kennslu'] = parseFloat(this.thaettir['Undirbúningur kennslu'])*parseFloat(1-p);
  this.thaettir['Vinna vegna nemenda'] = parseFloat(this.thaettir['Vinna vegna nemenda'])*parseFloat(1-p);
};
Afangi.prototype.setVinnumat = function (vinnumat) {
  this.vm = vinnumat;
};

Afangi.prototype.toString = function() {
  return "Heiti: "+ b + this.heiti + " Einingar: " + this.einingar + " Fjöldi: " + this.fjoldi + " vm: " + this.vm;
};