const methodMurid = {
  belajar: function (iq) {
    this.iq += iq * 2;
    console.log(`halo ${this.nama}, selamat belajar`);
  },

  main: function (iq) {
    this.iq -= iq ;
    console.log(`halo ${this.nama}, selamat bermain`);
  },

};

function Murid(nama, iq) {
  let murid = Object.create(methodMurid);
  murid.nama = nama;
  murid.iq = iq;

  return murid;
}

let dhiyaul = Murid('dhiyaul',128);