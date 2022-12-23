db.tabelpegawai.insertMany([
  { id: 1, Nama: 'Adit', Jenis_Kelamin: 'L', Jabatan: 'Manager', Tanggal_Masuk:'2014-03-01T13:55:10.000Z' },
  { id: 2, Nama: 'Rahma', Jenis_Kelamin: 'P', Jabatan: 'Supervisor', Tanggal_Masuk:'2018-11-12T13:55:10.000Z' },
  { id: 3, Nama: 'Ipang', Jenis_Kelamin: 'L', Jabatan: 'Staff', Tanggal_Masuk:'2018-09-09T13:55:10.000Z' },
  { id: 4, Nama: 'Rangga', Jenis_Kelamin: 'L', Jabatan: 'Staff', Tanggal_Masuk:'2017-08-31T13:55:10.000Z' },
  { id: 5, Nama: 'Alvi', Jenis_Kelamin: 'P', Jabatan: 'Staff', Tanggal_Masuk:'2019-02-03T13:55:10.000Z' },
  { id: 6, Nama: 'Ryan', Jenis_Kelamin: 'L', Jabatan: 'Staff', Tanggal_Masuk:'2017-08-03T13:55:10.000Z' },
  { id: 7, Nama: 'Hikmah', Jenis_Kelamin: 'P', Jabatan: 'Staff', Tanggal_Masuk:'2020-05-22T13:55:10.000Z' }
]);
db.tabelpegawai.find({ Jenis_Kelamin: 'P', Tanggal_Masuk : {$lte : "2019-01-01T13:55:10.000Z"}});
