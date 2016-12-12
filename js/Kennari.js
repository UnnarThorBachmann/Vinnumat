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
      var param = new Array(this.afangar[i].heiti,this.afangar[i].einingar,neFjAv,this.afangar[i].synid.heiti,this.afangar[i].hperweek,this.afangar[i].lengdKest);
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