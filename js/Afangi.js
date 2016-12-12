var Afangi = function(param) {
  this.heiti = param[0];
  this.einingar = param[1];
  this.vm = -1;
  this.hperweek = param[4];
  this.lengdKest = param[5];
  this.synid = synidaemi[param[3]];
  
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
  var kennslustundir = (this.lengdKest + this.synid.undirb_kennslu)/60*this.hperweek*15;
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
    total = fast + kennslustundir + nemendur + (this.fjoldi-this.synid.hamark_n)*this.synid.kostn_per_nem_yn*ein/3;
  }
  else {
    nemendur = this.synid.hamark_n*per_nemandi;
    total = fast + kennslustundir + nemendur+ (this.synid.hamark_e-this.synid.hamark_n)*this.synid.kostn_per_nem_yn*ein/3+ (this.fjoldi-this.synid.hamark_e)*this.synid.kostn_per_nem_ye*ein/3;
  }
  return total;
};
Afangi.prototype.setVinnumat = function (vinnumat) {
  this.vm = vinnumat;
};

Afangi.prototype.toString = function() {
  return "Heiti: "+ b + this.heiti + " Einingar: " + this.einingar + " Fjöldi: " + this.fjoldi + " vm: " + this.vm;
};