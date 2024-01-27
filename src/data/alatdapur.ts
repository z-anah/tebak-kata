const t = [
  {
    label: "Pisau Dapur",
    def: "Alat tajam dengan gagang yang digunakan untuk memotong bahan makanan.",
  },
  {
    label: "Panci",
    def: "Wadah berbentuk bulat dengan pegangan dan penutup, digunakan untuk memasak atau merebus.",
  },
  {
    label: "Spatula",
    def: "Alat rata dengan pegangan panjang, berguna untuk membalik dan mengangkat makanan.",
  },
  {
    label: "Wajan",
    def: "Wadah datar dengan pegangan panjang, digunakan untuk menggoreng atau menumis.",
  },
  {
    label: "Sendok Sayur",
    def: "Sendok yang lebih besar dengan pegangan panjang, biasanya digunakan untuk menyajikan sayuran.",
  },
  {
    label: "Garpu Dapur",
    def: "Alat dengan gigi-gigi kecil yang digunakan untuk mengaduk atau mengangkat makanan.",
  },
  {
    label: "Parutan",
    def: "Alat untuk menghancurkan atau memarut bahan makanan seperti kelapa atau keju.",
  },
  {
    label: "Pengaduk",
    def: "Alat untuk mencampur adonan atau bahan makanan dalam jumlah besar.",
  },
  {
    label: "Rice Cooker",
    def: "Alat elektrik untuk memasak nasi dengan mudah.",
  },
  {
    label: "Blender",
    def: "Alat untuk menghaluskan atau mencampur bahan makanan menjadi tekstur lembut.",
  },
  {
    label: "Teko",
    def: "Wadah dengan pegangan dan tutup, digunakan untuk merebus air atau menyeduh teh.",
  },
  {
    label: "Teko Listrik",
    def: "Teko yang dapat memanaskan air secara elektrik.",
  },
  {
    label: "Saringan Teh",
    def: "Alat untuk menyaring daun teh atau bahan lainnya ketika menyeduh teh.",
  },
  { label: "Pengupas", def: "Alat untuk mengupas kulit buah atau sayuran." },
  {
    label: "Centong",
    def: "Alat untuk mengambil makanan dari wadah cair, seperti sup.",
  },
  { label: "Penggorengan", def: "Wadah khusus untuk menggoreng makanan." },
  { label: "Pengasah Pisau", def: "Alat untuk mengasah mata pisau." },
  { label: "Saringan Tepung", def: "Alat untuk menyaring tepung agar halus." },
  {
    label: "Sendok Nasi",
    def: "Sendok dengan sisi datar, digunakan untuk menyajikan nasi.",
  },
  {
    label: "Pisau Daging",
    def: "Pisau yang dirancang khusus untuk memotong daging.",
  },
  {
    label: "Saringan Minyak",
    def: "Alat untuk menyaring minyak setelah menggoreng.",
  },
  {
    label: "Pisau Serbaguna",
    def: "Pisau dengan mata tajam yang digunakan untuk berbagai macam pemotongan.",
  },
  {
    label: "Papan Potong",
    def: "Permukaan datar untuk memotong bahan makanan.",
  },
  {
    label: "Saringan Air",
    def: "Alat untuk menyaring kotoran atau partikel dari air.",
  },
  {
    label: "Sutil",
    def: "Alat untuk mengukur jumlah bahan makanan dalam takar tertentu.",
  },
  {
    label: "Pemotong Bawang",
    def: "Alat untuk memotong bawang menjadi potongan kecil.",
  },
  {
    label: "Gunting Dapur",
    def: "Gunting yang dirancang khusus untuk digunakan di dapur.",
  },
  {
    label: "Gilingan Daging",
    def: "Alat untuk menggiling daging menjadi tekstur yang diinginkan.",
  },
  {
    label: "Wadah Makanan",
    def: "Wadah untuk menyimpan makanan dalam jumlah besar.",
  },
  { label: "Loyang Kue", def: "Wadah datar untuk memanggang kue atau roti." },
  {
    label: "Penggiling Bumbu",
    def: "Alat untuk menggiling bumbu menjadi pasta atau bubuk.",
  },
  {
    label: "Alat Pencetak Kue",
    def: "Alat untuk mencetak adonan kue menjadi bentuk tertentu.",
  },
  {
    label: "Rak Piring",
    def: "Rak untuk menyimpan atau mengeringkan piring yang sudah dicuci.",
  },
  {
    label: "Saringan Kopi",
    def: "Alat untuk menyaring ampas kopi ketika menyeduh kopi.",
  },
  {
    label: "Spatula Kue",
    def: "Alat untuk mengoleskan adonan atau krim pada kue.",
  },
  {
    label: "Gelas Ukur",
    def: "Gelas dengan tanda ukuran, digunakan untuk mengukur cairan atau bahan kering.",
  },
  {
    label: "Tang Kue",
    def: "Alat untuk memutar kue yang sedang dipanggang di dalam oven.",
  },
  {
    label: "Pemanggang Roti",
    def: "Alat untuk memanggang roti atau sandwich.",
  },
  { label: "Pengaduk Telur", def: "Alat untuk mengocok telur dengan cepat." },
  {
    label: "Penyaring Minyak Goreng",
    def: "Alat untuk menyaring minyak setelah menggoreng.",
  },
  {
    label: "Rak Sendok",
    def: "Rak untuk menyimpan sendok, garpu, dan alat makan lainnya.",
  },
  {
    label: "Gelas Pencampur",
    def: "Gelas dengan pegangan, digunakan untuk mencampur adonan atau bahan makanan.",
  },
  {
    label: "Alat Pembuka Kaleng",
    def: "Alat untuk membuka tutup kaleng dengan mudah.",
  },
  {
    label: "Penggoreng Kue",
    def: "Alat untuk menggoreng kue dengan ukuran kecil.",
  },
  {
    label: "Peralatan Cuci Piring",
    def: "Sikat, spons, atau alat lainnya untuk mencuci peralatan makan.",
  },
  {
    label: "Pemotong Kue",
    def: "Alat untuk memotong kue menjadi potongan yang rapi.",
  },
  {
    label: "Saringan Mie",
    def: "Alat untuk menyaring air setelah merebus mie.",
  },
  {
    label: "Gelas Kaca",
    def: "Gelas transparan yang digunakan untuk minuman atau menyajikan hidangan tertentu.",
  },
  {
    label: "Saringan Salad",
    def: "Alat untuk menyaring air dari sayuran yang baru dicuci.",
  },
  {
    label: "Pemotong Pizza",
    def: "Pisau khusus untuk memotong pizza dengan mudah.",
  },
  {
    label: "Pisau Keramik",
    def: "Pisau dengan mata dari bahan keramik yang tajam dan ringan.",
  },
  { label: "Gelas Anggur", def: "Gelas khusus untuk minum anggur." },
  {
    label: "Pisau Serrated",
    def: "Pisau dengan mata bergelombang, cocok untuk memotong roti.",
  },
  {
    label: "Tatakan Panas",
    def: "Alat untuk meletakkan panci atau wajan panas tanpa merusak permukaan meja.",
  },
  {
    label: "Tatakan Pisau",
    def: "Tatakan khusus untuk menyimpan pisau dengan aman.",
  },
  {
    label: "Alat Pencuci Buah dan Sayur",
    def: "Alat untuk mencuci buah dan sayur dengan bersih.",
  },
  {
    label: "Pemisah Telur",
    def: "Alat untuk memisahkan kuning telur dari putih telur.",
  },
  {
    label: "Cetakan Es",
    def: "Wadah khusus untuk membuat es dalam bentuk tertentu.",
  },
  {
    label: "Pengocok Telur Manual",
    def: "Alat untuk mengocok telur secara manual.",
  },
  {
    label: "Pemeras Jeruk",
    def: "Alat untuk memeras air jeruk dari buah jeruk.",
  },
  {
    label: "Termometer Dapur",
    def: "Alat untuk mengukur suhu dalam proses memasak.",
  },
  { label: "Pengaduk Salad", def: "Alat untuk mencampur salad dengan rata." },
  {
    label: "Spatula Karet",
    def: "Alat untuk mengaduk dan mencampur adonan dengan lembut.",
  },
  {
    label: "Pemotong Buah",
    def: "Alat untuk memotong buah-buahan dengan mudah.",
  },
  {
    label: "Saringan Keju",
    def: "Alat untuk menyaring keju yang sudah diparut.",
  },
  {
    label: "Alat Pembersih Buah dan Sayur",
    def: "Alat untuk membersihkan buah dan sayur dari kotoran atau residu pestisida.",
  },
  {
    label: "Pengukur Pasta",
    def: "Alat untuk mengukur jumlah pasta yang akan dimasak.",
  },
  {
    label: "Tatakan Sendok",
    def: "Tatakan khusus untuk meletakkan sendok saat memasak.",
  },
  {
    label: "Saringan Tahu",
    def: "Alat untuk menyaring air setelah merebus tahu.",
  },
  { label: "Penggorengan Udang", def: "Wadah khusus untuk menggoreng udang." },
  {
    label: "Alat Pemotong Adonan",
    def: "Alat untuk memotong adonan kue atau roti menjadi bentuk tertentu.",
  },
  {
    label: "Pengaduk Teh",
    def: "Alat untuk mencampur teh atau minuman lainnya.",
  },
  {
    label: "Pemotong Telur Rebus",
    def: "Alat untuk memotong telur rebus menjadi potongan yang rapi.",
  },
  {
    label: "Pemotong Kentang Goreng",
    def: "Alat untuk memotong kentang menjadi bentuk kentang goreng.",
  },
  {
    label: "Penghias Kue",
    def: "Alat untuk menghias kue dengan krim atau saus.",
  },
  {
    label: "Pemotong Keju",
    def: "Alat untuk memotong keju menjadi potongan yang rapi.",
  },
  {
    label: "Saringan Bumbu",
    def: "Alat untuk menyaring ampas dari bumbu atau kuah.",
  },
  {
    label: "Alat Pengupas Udang",
    def: "Alat untuk mengupas kulit udang dengan mudah.",
  },
  {
    label: "Penggiling Bawang",
    def: "Alat untuk menggiling bawang menjadi pasta.",
  },
  {
    label: "Pemotong Kerupuk",
    def: "Alat untuk memotong kerupuk menjadi potongan kecil.",
  },
  {
    label: "Pisau Kue",
    def: "Pisau khusus untuk memotong kue dengan presisi.",
  },
  { label: "Pisau Fillet", def: "Pisau khusus untuk memotong fillet ikan." },
  {
    label: "Saringan Quinoa",
    def: "Alat untuk menyaring air setelah merebus quinoa.",
  },
  {
    label: "Gelas Mixer",
    def: "Gelas besar untuk mencampur bahan dalam jumlah besar.",
  },
  {
    label: "Saringan Rempah",
    def: "Alat untuk menyaring rempah-rempah dalam masakan.",
  },
  {
    label: "Tutup Panci",
    def: "Tutup untuk menutupi panci selama proses memasak.",
  },
  {
    label: "Peralatan Pengukus",
    def: "Alat untuk mengukus makanan, biasanya dari bambu.",
  },
  {
    label: "Pisau Gulung",
    def: "Pisau dengan mata berbentuk bulan sabit, digunakan untuk memotong adonan.",
  },
  {
    label: "Gelas Espresso",
    def: "Gelas kecil untuk menyajikan kopi espresso.",
  },
  {
    label: "Pisau Debu",
    def: "Pisau dengan mata yang sangat tajam untuk memotong daging dengan presisi.",
  },
  {
    label: "Pemotong Roti Elektrik",
    def: "Alat untuk memotong roti secara otomatis.",
  },
  {
    label: "Pengaduk Cokelat",
    def: "Alat untuk mencampur adonan cokelat atau saus.",
  },
  {
    label: "Saringan Telur",
    def: "Alat untuk menyaring kuning telur dari putih telur.",
  },
  {
    label: "Pemeras Bawang Putih",
    def: "Alat untuk memeras bawang putih menjadi pasta.",
  },
  { label: "Gelas Piala", def: "Gelas besar untuk minuman panas atau dingin." },
  {
    label: "Saringan Sayuran",
    def: "Alat untuk menyaring air setelah merebus sayuran.",
  },
  {
    label: "Alat Pembuat Es Krim",
    def: "Alat untuk membuat es krim di rumah.",
  },
  {
    label: "Pemotong Melon",
    def: "Alat untuk memotong buah melon menjadi bentuk tertentu.",
  },
  {
    label: "Pemanggang Sosis",
    def: "Alat untuk memanggang sosis dengan mudah.",
  },
  {
    label: "Pembuka Tutup Botol",
    def: "Alat untuk membuka tutup botol dengan mudah.",
  },
];
export default t;